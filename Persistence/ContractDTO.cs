using Contentful.Core.Models;

namespace Persistence
{
    public class ContractDTO
    {
        public SystemProperties Sys { get; set; }
        public string Titel { get; set; }
        public string Description { get; set; }
        public Asset ContractFile { get; set; }
    }
}