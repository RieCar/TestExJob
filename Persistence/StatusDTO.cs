using System;
using System.Collections.Generic;
using Contentful.Core.Models;

namespace Persistence
{
    public class StatusDTO
    {
         public SystemProperties Sys { get; set; }
         public string Titel { get; set; }
         public List<String> WorkStatus { get; set; }
    }
}