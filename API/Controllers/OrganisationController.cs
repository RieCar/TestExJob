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
        [Authorize]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Organisation>>> List(){
            var result = await Mediator.Send(new List.Query());
           
            return result.ToList();
        }
        [Authorize]
         [HttpGet("{id}")]
        public async Task<ActionResult<Organisation>> Details(string id){
            var result = await Mediator.Send(new Details.Query{Organisation = id});
           
            return result;
        }
    }
}