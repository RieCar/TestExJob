using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Organisations;
using Microsoft.AspNetCore.Mvc;
using Persistence;

namespace API.Controllers
{
    public class OrganisationController : BaseController
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<OrganisationDTO>>> List(){
            var result = await Mediator.Send(new List.Query());
           
            return result.ToList();
        }
    }
}