using System;
using System.Collections.Generic;

namespace Domain
{
    public class Organisation
    {
        public int CustomerId { get; set; }
       
        public string CompanyName { get; set; }
        public string Logo { get; set; }   

        public string CustomerDescription { get; set; }  
         
        public List<Project> ProjectsId { get; set; }

        public List<Order> Orders { get; set; }
    }
}
