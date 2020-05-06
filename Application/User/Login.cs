using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces;
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

            public Handler(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, IJwtGenerator jwtgenerator)
            {
                _jwtgenerator = jwtgenerator;
                _userManager = userManager;
                _signInManager = signInManager;
            }
            public async Task<User> Handle(Query request, CancellationToken cancellationToken)
            {
                var user = await _userManager.FindByEmailAsync(request.Email);
                if (user == null)
                {
                    Console.WriteLine("Unauthorized");
                    throw new System.NotImplementedException();
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