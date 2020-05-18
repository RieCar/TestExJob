using System.Threading.Tasks;
using Application.helpclasses;
using Application.User;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{

    public class UserController : BaseController
    {
        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<ActionResult<User>> Login(Login.Query query)
        {

            return await Mediator.Send(query);
        }

        //endpoint for contentful webhook to create applicationuser from content.
        [AllowAnonymous]
        [HttpPost("create")]
        public async Task<ActionResult<User>> Create(Create.Command command)
        {

            return await Mediator.Send(command);
        }

        [HttpGet]
        public async Task<ActionResult<User>> CurrentUser()
        {

            return await Mediator.Send(new CurrentUser.Query());
        }
    }


}