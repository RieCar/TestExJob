using System;
using System.Reflection.Metadata;

namespace Domain
{
    public class Project
    {
        public string Id { get; set; }
        public string Titel { get; set; }
        public string Description { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public string CurrentStatus { get; set; }

        public int TotalProjectDays { get; set; }
        public Contact Contact { get; set; }
    }
}