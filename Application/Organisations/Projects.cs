using System;
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
    public class Projects
    {
        public class Query : IRequest<List<Project>> { }


        public class Handler : IRequestHandler<Query, List<Project>>{
            private readonly IContentfulClient _client;

            public Handler(IContentfulClient client)
            {
                _client = client;
            }

            public async Task<List<Project>> Handle(Query request,
            CancellationToken cancellationToken)
            {
                 var qb = QueryBuilder<ProjectDTO>.New.ContentTypeIs("customerId").Include(2);
                
                var model = await _client.GetEntries(qb);
                var currentList = new List<Project>(); 
                //mapping
                foreach(var Project in model){
                    var org = new Project(); 
                    org.Titel = Project.ProjectTitel;
                    org.Description = Project.Description;
                    org.Id = Project.Sys.Id; 
                    currentList.Add(org);
                    // "https:" + Organisation.CustomerIcon.File.Url;
                }
                return currentList; //model.ToList(); //throw new System.NotImplementedException();
            }

            private async Task<string> getImg(string id)
            {
             var model = await _client.GetAsset(id);

             return model.File.Url;
            }
        }
    }
}