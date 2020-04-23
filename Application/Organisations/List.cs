using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Contentful.Core;
using Contentful.Core.Search;
using MediatR;
using Persistence;

namespace Application.Organisations
{
    public class List
    {
        public class Query : IRequest<IEnumerable<OrganisationDTO>> { }


        public class Handler : IRequestHandler<Query, IEnumerable<OrganisationDTO>>{
            private readonly IContentfulClient _client;

            public Handler(IContentfulClient client)
            {
                _client = client;
            }

            public async Task<IEnumerable<OrganisationDTO>> Handle(Query request,
            CancellationToken cancellationToken)
            {
                 var qb = QueryBuilder<OrganisationDTO>.New.ContentTypeIs("customerId")
                .Include(4);
                var model = await _client.GetEntries(qb);
               
                return model.ToList(); //throw new System.NotImplementedException();
            }
        }
    }
}