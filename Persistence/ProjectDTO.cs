using Contentful.Core.Models;

namespace Persistence
{
    public class ProjectDTO
    {
         public string ProjectId { get; set; }
        public string ProjectTitel { get; set; }

        public Document ProjectDescription { get; set; }

        // public string ProjectStatusId { get; set; } 
    }
}