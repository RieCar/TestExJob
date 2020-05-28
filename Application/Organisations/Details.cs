using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading;
using System.Threading.Tasks;
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
                Console.WriteLine("description:" + entry.Orders[0].Description);
                // for (var i = 0; i < entry.Orders.Count(); i++)
                // {
                //     foreach (IContent node in entry.Orders[i].Description.Content)
                //     {
                //         switch (node)
                //         {
                //             case Paragraph p:
                //                 var value = p.Content;
                              
                //                 foreach (var text in value)
                //                 {
                //                     Console.WriteLine(text);
                //                 }

                //                 break;
                //             case Heading1 h:
                //                 value = h.Content;
                //                 foreach (var text in value)
                //                 {
                //                     Console.WriteLine(text);
                //                 }
                //                 break;

                //         }
                //     }
                // }
                //Console.WriteLine("entryproject1" + "" + entry.ProjectsId.Count() + entry.ProjectsId[0].Sys.Id + "" + entry.ProjectsId[0].ProjectTitel);

                var currentCompany = new Organisation();

                currentCompany.CustomerId = entry.Sys.Id;
                currentCompany.CompanyName = entry.CompanyName;
                currentCompany.ImageUrl = await getImg(entry.CustomerIcon.SystemProperties.Id);
                currentCompany.UpdatedAt = entry.Sys.UpdatedAt.ToString();
                currentCompany.CustomerDescription = entry.CustomerDescription;
                foreach (var proj in entry.ProjectsId)
                {
                    var project = new Project()
                    {
                        Id = proj.Sys.Id,
                        Titel = proj.ProjectTitel,
                        Description = proj.Description
                    };
                    Console.WriteLine(project.Titel);
                    currentCompany.Projects.Add(project);
                };
                foreach (var ord in entry.Orders)
                {
                    var order = new Order()
                    {
                        Id = ord.Sys.Id,
                        Titel = ord.Title,
                        Description = ord.Description,
                        //Description = JsonSerializer.Deserialize<string[]>(ord.Description)
                        //Description = ord.Description.ToString(),
                        //Description = JsonSerializer.Serialize(ord.Description),
                        //Description = JsonSerializer.Deserialize<String>(ord.Description)


                    };
                    Console.WriteLine(order.Titel);
                    //Console.WriteLine(order.Description);

                    //Console.WriteLine("ord.des:"+ ord.Description);
                    currentCompany.Orders.Add(order);
                };
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