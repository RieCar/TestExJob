using System.Linq;
using System.Security.Claims;
using Application.Interfaces;
using Microsoft.AspNetCore.Http;

namespace Infrastructure.Security
{
    public class AccessUser : IAccessUser
    {
        private readonly IHttpContextAccessor _acessor;
        public AccessUser(IHttpContextAccessor acessor)
        {
            _acessor = acessor;
        }

        public string GetLoggedInUser()
        {
            var username = _acessor.HttpContext.User?.Claims?.FirstOrDefault(u=>u.Type == ClaimTypes.NameIdentifier)?.Value; 
            
            return username; 
        }
    }
}