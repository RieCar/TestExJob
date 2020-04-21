using System.Threading.Tasks;
using Application.User;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class UserController : BaseController
    {
      public async Task<ActionResult<ApplicationUser>> Login(Login.Query query){
          return await Mediator.Send(query);
      }  
    }
}