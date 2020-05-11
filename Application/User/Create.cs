using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces;
using Contentful.Core;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.User
{
    public class Create
    {
        public class Command : IRequest<User>
        {
            public string DisplayName { get; set; }
            public string Password { get; set; }

            public string Organisation { get; set; }

            public string Email { get; set; }
            public string UserName { get; set; }
        }

        public class Handler : IRequestHandler<Command, User>
        {
            private readonly UserContext _context;
            private readonly IJwtGenerator _jwtGenerator;
            private readonly UserManager<ApplicationUser> _userManager;
            private readonly IContentfulClient _client;

            public Handler(UserContext context, UserManager<ApplicationUser> userManager, IJwtGenerator jwtGenerator, IContentfulClient client)
            {
                _client = client;
                _userManager = userManager;
                _jwtGenerator = jwtGenerator;
                _context = context;
            }

            public async Task<User> Handle(Command request, CancellationToken cancellationToken)
            {
                if (await _context.Users.Where(u => u.Email == request.Email).AnyAsync())
                {
                    throw new Exception("the email already exists");
                }

                if (await _context.Users.Where(u => u.UserName == request.UserName).AnyAsync())
                {
                    throw new Exception("the username already exists");
                }

                var user = new ApplicationUser()
                {
                    DisplayName = request.DisplayName,
                    UserName = request.UserName,
                    Email = request.Email,
                    OrganisationID = request.Organisation
                };

                var result = await _userManager.CreateAsync(user, request.Password);

                if (result.Succeeded)
                {
                    return new User
                    {
                        DisplayName = user.DisplayName,
                        UserName = user.UserName,
                        Token = _jwtGenerator.CreateToken(user),
                        Organisation = user.OrganisationID

                    };
                }

                throw new Exception("Problem creating user");
            }
        }
    }
}