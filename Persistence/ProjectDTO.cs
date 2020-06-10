using System;
using Contentful.Core.Models;

namespace Persistence
{
    public class ProjectDTO
    {
        public SystemProperties Sys { get; set; }
        public string ProjectTitel { get; set; }
        public string Description { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public string Status { get; set; }

        public ContactDTO OrganisationContactReference { get; set; }
       
    }
}