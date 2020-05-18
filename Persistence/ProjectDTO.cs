using Contentful.Core.Models;

namespace Persistence
{
    public class ProjectDTO
    {
        public string ProjectId { get; set; }
        public string ProjectTitel { get; set; }
         public SystemProperties Sys { get; set; }
        public string Description { get; set; }
        public StatusDTO Status { get; set; }         
    }
}