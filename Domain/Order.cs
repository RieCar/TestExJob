using System;
using System.Text.Json;


namespace Domain
{
    public class Order
    {
        public string Id { get; set; }
        public string Titel { get; set; }
        public string Description { get; set; }

        //public DateTime orderDate { get; set; }
        //public StatusDTO Status { get; set; }
    }
}