using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Contacts;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
  
    public class ContactController :BaseController
    {
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Contact>>> GetAllForOrg(string id){
            var result = await Mediator.Send(new GetAllForOrg.Query{Organisation = id});
            Console.WriteLine("contacts id"+  id);
            return result; 
        }
    }
}