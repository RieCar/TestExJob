// using System;
using Contentful.Core.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Persistence
{
    public class OrderDTO
    {
        public OrderDTO()
        {
            string[] Description = new string[100]; 
        }
        public SystemProperties Sys { get; set; }
        public string Title { get; set; }

        public string Description { get; set; }


        //public DateTime OrderDate { get; set; }
        //public StatusDTO Status { get; set; }

    }
}