using System;
using System.Linq;
using System.Threading.Tasks;
using Application.Interfaces;
using Contentful.Core;
using Contentful.Core.Search;
using Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.helpclasses
{
    public class CmsChecker
    {
        public IContentfulClient _client { get; set; }

        public UserContext _context { get; set; }
        public UserManager<ApplicationUser> _userManager { get; set; }

        public IJwtGenerator _jwtGenerator { get; set; }

        public async Task<Contact> CheckCMS(string email, string password)
        {
            var queryBuilder = QueryBuilder<Contact>.New.ContentTypeIs("contact");
            var entries = await _client.GetEntries(queryBuilder);
      
            var isNewUser = entries.Where(x=> x.Email.Equals(email)).FirstOrDefault(); 
            if (isNewUser != null)
            {
                var users = CheckIdentity(isNewUser);
            }

            return isNewUser; 
       // throw new Exception("Problem finding user");
        }

        public async Task<User.User> CheckIdentity(Contact isNewUser)
        {
            if (!await _context.Users.Where(u => u.Email == isNewUser.Email).AnyAsync())
            {
                var user = new ApplicationUser()
                {
                    DisplayName = isNewUser.FirstName + isNewUser.LastName,
                    UserName = isNewUser.FirstName,
                    Email = isNewUser.Email,
                    OrganisationID = isNewUser.Organisation

                };

                var result = await _userManager.CreateAsync(user, isNewUser.Password);

                if (result.Succeeded)
                {
                    return new User.User
                    {
                        DisplayName = user.DisplayName,
                        UserName = user.UserName,
                        Token = _jwtGenerator.CreateToken(user),
                        Organisation = user.OrganisationID

                    };
                }
            }
              throw new Exception("Problem creating user");
        }
    }
}