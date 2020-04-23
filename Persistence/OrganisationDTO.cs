using System.Collections.Generic;
using Contentful.Core.Models;
using Domain;

namespace Persistence
{
    public class OrganisationDTO
    {
        public int CustomerId { get; set; }
       
        public string CompanyName { get; set; }
        public Asset CustomerIcon { get; set; }   

        public string CustomerDescription { get; set; }  
         
        public List<ProjectDTO> ProjectsId { get; set; }

        // public List<Order> Orders { get; set; }
    }
}