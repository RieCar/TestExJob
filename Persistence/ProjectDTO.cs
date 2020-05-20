using Contentful.Core.Models;

namespace Persistence
{
    public class ProjectDTO
    {
        public SystemProperties Sys { get; set; }
        public string ProjectTitel { get; set; }
        public string Description { get; set; }
       
    }
}