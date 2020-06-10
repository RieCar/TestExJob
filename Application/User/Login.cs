using System;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Errors;
using Application.helpclasses;
using Application.Interfaces;
using Contentful.Core;
using Contentful.Core.Search;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.User
{
    public class Login
    {
        public class Query : IRequest<User>
        {
 
            public string Email { get; set; }
 
            public string Password { get; set; }
        }


        public class Handler : IRequestHandler<Query, User>
        {
            private readonly UserManager<ApplicationUser> _userManager;
            private readonly SignInManager<ApplicationUser> _signInManager;
            private readonly IJwtGenerator _jwtgenerator;
            private readonly IContentfulClient _client;
            private readonly UserContext _context;

            public Handler(UserContext context, UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, IJwtGenerator jwtgenerator, IContentfulClient client)
            {
                _context = context;
                _client = client;
                _jwtgenerator = jwtgenerator;
                _userManager = userManager;
                _signInManager = signInManager;
            }
            public async Task<User> Handle(Query request, CancellationToken cancellationToken)
            {
                var user = await _userManager.FindByEmailAsync(request.Email);
  
                if (user == null)
                {
                    var newUser = await CheckCMS(request);
                    if (newUser == null) 
                    {
                        throw new RestExceptions(HttpStatusCode.NotFound, new {error = "Do you have an account? Check your credentials or contact Camelonta "});         
                    }
                 
                     user = await CreateUser(newUser);
                }
                var result = await _signInManager.CheckPasswordSignInAsync(user, request.Password, false);
                if (result.Succeeded)
                {
                    return new User
                    {
                        DisplayName = user.DisplayName,
                        Token = _jwtgenerator.CreateToken(user),
                        Organisation = user.OrganisationID,
                        UserName = user.UserName
                    };
                }
                throw new RestExceptions(HttpStatusCode.Unauthorized, new {user="wrong credentials, try again"});
                // return new User
                // {
                //     Error = "Inloggningen misslyckades, kontrollera uppgifter"
                // };

            }

            private async Task<User> CheckCMS(Query User)
            {
                var queryBuilder = new QueryBuilder<ContactDTO>().ContentTypeIs("contact").FieldEquals(f => f.Email, User.Email)
                .Include(2);
                var entry = (await _client.GetEntries(queryBuilder)).FirstOrDefault();

                if (entry == null)
                {
                    return null; 
                   // return new User() {
                        //Error ="Finns ingen användare med de uppgifterna"
                   //  };
                }
               User createUser = new User()
                    {
                        DisplayName = entry.FirstName,
                        UserName = entry.Email,
                        Organisation = entry.Organisation.Sys.Id,
                        Email = entry.Email,
                        Password = entry.Password
                    };
                return createUser;
            }

            private async Task<ApplicationUser> CreateUser(User createUser)
            {
                if (await _context.Users.Where(u => u.Email == createUser.Email).AnyAsync())
                {
                    throw new Exception("the email already exists");
                }

                if (await _context.Users.Where(u => u.UserName == createUser.UserName).AnyAsync())
                {
                    throw new Exception("the username already exists");
                }

                var user = new ApplicationUser()
                {
                    DisplayName = createUser.DisplayName,
                    UserName = createUser.UserName,
                    Email = createUser.Email,
                    OrganisationID = createUser.Organisation
                };
                
                var result = await _userManager.CreateAsync(user, createUser.Password);

                if (result.Succeeded)
                {
                    return user; 
                }

                throw new Exception("Problem creating user");
            }
        }
    }
}