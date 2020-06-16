using System;
using System.Reflection.Metadata;
using System.Text.Json;


namespace Domain
{
    public class Order
    {
        public string Id { get; set; }
        public string Titel { get; set; }
        public string Description { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
        public string Status { get; set; }
        public Contact Contact { get; set; }
        public decimal Estimatedcost { get; set; }
        public Employee ContactAtCamelonta { get; set; }
        public int TotalOrderDays { get; set; }
    }
}