using System;
using System.Collections.Generic;

namespace Domain
{
    public class Organisation
    {
        public string CustomerId { get; set; }
       
        public string CompanyName { get; set; }
        public string ImageUrl { get; set; }   

        public string CustomerDescription { get; set; }  
         
        public List<Project> Projects { get; set; }

        public List<Order> Orders { get; set; }
    }
}
