using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Identity;

namespace Application.User
{
    public class Login
    {
        public class Query : IRequest<ApplicationUser>{
            
            public string Email { get; set; }
            public string Password { get; set; }
        }


        public class Handler : IRequestHandler<Query, ApplicationUser>
        {
            private readonly UserManager<ApplicationUser> _userManager;
            private readonly SignInManager<ApplicationUser> _signInManager;

            public Handler(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
            {
                _userManager = userManager;
                _signInManager = signInManager;
            }
            public async Task<ApplicationUser> Handle(Query request, CancellationToken cancellationToken)
            {
                var user = await _userManager.FindByEmailAsync(request.Email); 
                if(user == null){
                    Console.WriteLine("Unauthorized");
                    throw new System.NotImplementedException();
                    }
                var result = await _signInManager.CheckPasswordSignInAsync(user, request.Password, false ); 

                if(result.Succeeded){
                    //Todo return token

                    return user; 
                }
                 throw new System.NotImplementedException();
            }
        }
    }
}