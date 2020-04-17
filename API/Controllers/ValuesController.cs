using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Contentful.Core;
using Contentful.Core.Search;
using Domain;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly IContentfulClient _client;

        public ValuesController(IContentfulClient client)
        {
            _client = client;
        }

        // GET api/values
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Organisation>>> Get()
        {
            var qb = QueryBuilder<Organisation>.New.ContentTypeIs("customerId").Include(4);
            var model = await _client.GetEntries(qb);
            Console.WriteLine("Entryname" + model.Total);
            return Ok (model);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {

            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }

}