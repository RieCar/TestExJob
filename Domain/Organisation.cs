using System;
using System.Collections.Generic;

namespace Domain
{
    public class Organisation
    {
        public Organisation()
        {
            Projects = new List<Project>();
            Orders = new List<Order>(); 
        }
        public string CustomerId { get; set; }

        public string CompanyName { get; set; }
        public string ImageUrl { get; set; }

        public string UpdatedAt { get; set; }
  
        public dynamic Description { get; set; }
        public List<Project> Projects { get; set; }

        public List<Order> Orders { get; set; }

        public Contract Contract { get; set; }
        public string Message { get; set; }
    }
}
