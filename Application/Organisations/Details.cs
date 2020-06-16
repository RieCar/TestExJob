using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using Application.Errors;
using Contentful.Core;
using Contentful.Core.Models;
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
                Console.WriteLine(entry.CompanyName);
                if (entry == null)
                {
                    throw new RestExceptions(HttpStatusCode.NotFound, new { organisation = "Not found" });
                }
                var currentCompany = new Organisation();

                currentCompany.CustomerId = entry.Sys.Id;
                currentCompany.CompanyName = entry.CompanyName;
                Console.WriteLine(entry.CustomerIcon);
                if (entry.CustomerIcon != null)
                {
                    currentCompany.ImageUrl = await getImg(entry.CustomerIcon.SystemProperties.Id);
                }

                currentCompany.UpdatedAt = entry.Sys.UpdatedAt.ToString();
                if (!String.IsNullOrEmpty(entry.Description))
                {
                    currentCompany.Description = entry.Description;
                }

                if (!String.IsNullOrEmpty(entry.Message))
                {
                    currentCompany.Message = entry.Message;
                }

                if (entry.ProjectsId != null)
                {
                    foreach (var proj in entry.ProjectsId)
                    {
                        var project = new Project()
                        {
                            Id = proj.Sys.Id,
                            Titel = proj.ProjectTitel,
                        };
                        currentCompany.Projects.Add(project);
                    };
                }
                if (entry.Orders != null)
                {
                    foreach (var ord in entry.Orders)
                    {
                        var order = new Order()
                        {
                            Id = ord.Sys.Id,
                            Titel = ord.Titel,
                        };

                        currentCompany.Orders.Add(order);
                    };
                }
                if (entry.Contract != null)
                {
                    var contract = new Contract()
                    {
                        Id = entry.Contract.Sys.Id,
                        Titel = entry.Contract.Titel,
                        FileUrl = entry.Contract.ContractFile.File.Url
                    };
                    if (!String.IsNullOrEmpty(entry.Contract.Description))
                    {
                        contract.Description = entry.Contract.Description;
                    }
                  
                    currentCompany.Contract = contract;
                }

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