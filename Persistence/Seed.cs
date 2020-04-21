using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(UserContext context,
          UserManager<ApplicationUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var users = new List<ApplicationUser>
                {
                    new ApplicationUser
                    {
                        Id = "a",
                        DisplayName = "Bob",
                        UserName = "bob",
                        Email = "bob@test.com"
                    },
                    new ApplicationUser
                    {
                        Id = "b",
                        DisplayName = "Jane",
                        UserName = "jane",
                        Email = "jane@test.com"
                    },
                    new ApplicationUser
                    {
                        Id = "c",
                        DisplayName = "Tom",
                        UserName = "tom",
                        Email = "tom@test.com"
                    },
                };

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd?");
                }
            }
        }
    }
}