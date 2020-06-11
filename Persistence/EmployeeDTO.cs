using Contentful.Core.Models;

namespace Persistence
{
    public class EmployeeDTO
    {
        public SystemProperties Sys { get; set; }
        public string FullName { get; set; }
        public string Titel { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
    }
}