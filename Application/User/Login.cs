using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.helpclasses;
using Application.Interfaces;
using Contentful.Core;
using Contentful.Core.Search;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Identity;

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

            public Handler(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, IJwtGenerator jwtgenerator, IContentfulClient client)
            {
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
                    var queryBuilder = QueryBuilder<Contact>.New.ContentTypeIs("contact");
                    var entries = await _client.GetEntries(queryBuilder);

                    var isNewUser = entries.Where(x => x.Email.Equals(request.Email)).FirstOrDefault();
                    if (isNewUser != null)
                    {
                       var checkers = new CmsChecker();
                       var createUser = await checkers.CheckIdentity(isNewUser);
                    }
                    var checkagain = await _userManager.FindByEmailAsync(request.Email);
                    var checkin = await _signInManager.CheckPasswordSignInAsync(checkagain, request.Password,false);
                    //throw new System.NotImplementedException();
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
                throw new System.NotImplementedException();
            }


        }
    }
}