using System;
using Contentful.Core.Models;

namespace Persistence
{
    public class OrderDTO
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime OrderDate { get; set; }
        public StatusDTO Status { get; set; }

    }
}