using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Contentful.Core;
using Contentful.Core.Search;
using Domain;
using MediatR;
using Persistence;

namespace Application.Organisations
{
    public class List
    {
        public class Query : IRequest<IEnumerable<Organisation>> { }


        public class Handler : IRequestHandler<Query, IEnumerable<Organisation>>{
            private readonly IContentfulClient _client;

            public Handler(IContentfulClient client)
            {
                _client = client;
            }

            public async Task<IEnumerable<Organisation>> Handle(Query request,
            CancellationToken cancellationToken)
            {
                 var qb = QueryBuilder<OrganisationDTO>.New.ContentTypeIs("customerId")
                .Include(4);
                var model = await _client.GetEntries(qb);
                var currentList = new List<Organisation>(); 
                //mapping
                foreach(var Organisation in model){
                    var org = new Organisation(); 
                    org.CompanyName = Organisation.CompanyName;
                    org.CustomerDescription = Organisation.CustomerDescription;
                    org.ImageUrl = Organisation.CustomerIcon.File.Url;
                    System.Console.WriteLine(org.ImageUrl);
                    org.CustomerId = Organisation.Sys.Id; 
                    currentList.Add(org);
                }
                return currentList; //model.ToList(); //throw new System.NotImplementedException();
            }
        }
    }
}