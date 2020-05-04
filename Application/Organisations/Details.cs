using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Contentful.Core;
using Contentful.Core.Search;
using MediatR;
using Persistence;

namespace Application.Organisations
{
    public class Details
    {
        
        public class Query : IRequest<OrganisationDTO>
        {
             public string CompanyName { get; set; }          
        }

        public class Handler : IRequestHandler<Query, OrganisationDTO>
        {
            private readonly IContentfulClient _client;

            public Handler(IContentfulClient client)
            {
                _client = client;
            }

            public async Task<OrganisationDTO> Handle(Query request, 
            CancellationToken cancellationToken)
            {
                var builder = new QueryBuilder<OrganisationDTO>().FieldEquals(f => f.CompanyName, request.CompanyName).Include(2);
                var entry = (await _client.GetEntries(builder)).FirstOrDefault();
                return entry; 
            }
        }
    }
}