using Contentful.Core.Models;

namespace Persistence
{
    public class ContactDTO
    {
         public SystemProperties Sys { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Titel { get; set; }
        public bool IsApplicationUser { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public OrganisationDTO Organisation { get; set; }
        public string Password { get; set; }
    }
}