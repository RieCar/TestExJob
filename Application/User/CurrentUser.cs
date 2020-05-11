using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Identity;

namespace Application.User
{
    public class CurrentUser
    {
        public class Query : IRequest<User> { }

        public class Handler : IRequestHandler<Query, User>
        {
            private readonly UserManager<ApplicationUser> _usermanager;
            private readonly IJwtGenerator _jwtGenerator;
            private readonly IAccessUser _accessuser;
            public Handler(UserManager<ApplicationUser> usermanager, IJwtGenerator jwtGenerator, IAccessUser accessuser)
            {
                _accessuser = accessuser;
                _jwtGenerator = jwtGenerator;
                _usermanager = usermanager;
            }

            public async Task<User> Handle(Query request, CancellationToken cancellationToken)
            {
                var user = await _usermanager.FindByNameAsync(_accessuser.GetLoggedInUser());
                return new User{
                    UserName = user.UserName,
                    DisplayName = user.DisplayName,
                    Token = _jwtGenerator.CreateToken(user),
                    Organisation = user.OrganisationID
                };
            }
        }
    }
}