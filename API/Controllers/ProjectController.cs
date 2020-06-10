using System;
using System.Threading.Tasks;
using Application.Projects;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ProjectController : BaseController
    {

        [HttpGet("{id}")]
        public async Task<ActionResult<Project>> ProjectDetails(string id)
        {
            var result = await Mediator.Send(new ProjectDetails.Query { Id = id });
            Console.WriteLine("project id" + id);
            return result;
        }
    }
}