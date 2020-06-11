using System;
using System.Threading.Tasks;
using Application.Orders;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class OrderController:BaseController
    {
        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> OrderDetails(string id)
        {
            Console.WriteLine("Hit to orderAPI");
            var result = await Mediator.Send(new OrderDetails.Query{OrderId = id});
            return result; 
        }
    }
}