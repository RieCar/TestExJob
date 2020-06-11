// using System;
using System;
using Contentful.Core.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Persistence
{
    public class OrderDTO
    {
        public SystemProperties Sys { get; set; }
        public string Titel { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Status { get; set; }
        public ContactDTO ContactAtOrganisation { get; set; }
        public decimal EstimatedCost { get; set; }
        public EmployeeDTO ContactAtCamelonta { get; set; }

    }
}