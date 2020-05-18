using System.Collections.Generic;
using Contentful.Core.Models;
using Domain;

namespace Persistence
{
    public class OrganisationDTO
    {
        public SystemProperties Sys { get; set; }
        public int CustomerId { get; set; }
       
        public string CompanyName { get; set; }
        public Asset CustomerIcon { get; set; }   

        public string CustomerDescription { get; set; }  
         
        public List<ProjectDTO> Projects { get; set; }

         public List<OrderDTO> Orders { get; set; }

         public List<ContractDTO> Contracts { get; set; }
    }
}