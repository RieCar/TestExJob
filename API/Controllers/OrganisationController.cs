using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Organisations;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Persistence;

namespace API.Controllers
{
    public class OrganisationController : BaseController
    {
        [HttpGet]
        [Authorize]
        public async Task<ActionResult<IEnumerable<Organisation>>> List(){
            var result = await Mediator.Send(new List.Query());
           
            return result.ToList();
        }

         [HttpGet("name")]
        public async Task<ActionResult<OrganisationDTO>> Details(string name){
            var result = await Mediator.Send(new Details.Query{CompanyName = name});
           
            return result;
        }
    }
}