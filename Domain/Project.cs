using System.Reflection.Metadata;

namespace Domain
{
    public class Project
    {
        public string ProjectId { get; set; }
        public string ProjectTitel { get; set; }

        public Document ProjectDescription { get; set; }

        // public string ProjectStatusId { get; set; }
    }
}