using System;
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
    public class Details
    {

        public class Query : IRequest<Organisation>
        {
            public string Organisation { get; set; }
        }

        public class Handler : IRequestHandler<Query, Organisation>
        {
            private readonly IContentfulClient _client;

            public Handler(IContentfulClient client)
            {
                _client = client;
            }

            public async Task<Organisation> Handle(Query request,
            CancellationToken cancellationToken)
            {
                var queryBuilder = QueryBuilder<OrganisationDTO>.New
                .ContentTypeIs("customerId").FieldEquals(f => f.Sys.Id, request.Organisation);
                var entry = (await _client.GetEntries(queryBuilder)).FirstOrDefault();
                // var builder = new QueryBuilder<OrganisationDTO>().FieldEquals(f => f.CompanyName, request.CompanyName).Include(2);
                // var entry = (await _client.GetEntries(builder)).FirstOrDefault();
                var currentCompany = new Organisation();

                currentCompany.CustomerId = entry.Sys.Id;
                currentCompany.CompanyName = entry.CompanyName;
                currentCompany.ImageUrl = await getImg(entry.CustomerIcon.SystemProperties.Id);
                currentCompany.CustomerDescription = entry.CustomerDescription;

                return currentCompany;
            }

            private async Task<string> getImg(string id)
            {
                var model = await _client.GetAsset(id);

                return model.File.Url;
            }
        }
    }
}