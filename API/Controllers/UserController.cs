using System.Threading.Tasks;
using Application.User;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{ 
  [AllowAnonymous]
    public class UserController : BaseController
    {
     
      [HttpPost("login")]
      public async Task<ActionResult<User>> Login(Login.Query query)
      {
          return await Mediator.Send(query);
      }  

      //endpoint for contentful webhook to create applicationuser from content. 
      [HttpPost("create")]
      public async Task<ActionResult<User>> Create(Create.Command command){

        return await Mediator.Send(command); 
      }
    }
}