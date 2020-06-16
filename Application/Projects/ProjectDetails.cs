using System;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Errors;
using Contentful.Core;
using Contentful.Core.Search;
using Domain;
using MediatR;
using Persistence;

namespace Application.Projects
{
    public class ProjectDetails
    {
        public class Query : IRequest<Project>
        {
            public string Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Project>
        {
            private readonly IContentfulClient _client;

            public Handler(IContentfulClient client)
            {
                _client = client;
            }
            public async Task<Project> Handle(Query request,
             CancellationToken cancellationToken)
            {
                var queryBuilder = QueryBuilder<ProjectDTO>.New
                .ContentTypeIs("project").FieldEquals(f => f.Sys.Id, request.Id).Include(3);
                var entry = (await _client.GetEntries(queryBuilder)).FirstOrDefault();
               
                if (entry == null)
                {
                    throw new RestExceptions(HttpStatusCode.NotFound, new { project = "No project found" });
                }
                var currentProject = new Project();
                currentProject.Id = entry.Sys.Id;
                currentProject.Titel = entry.ProjectTitel;
                currentProject.Description = entry.Description;
                if (entry.StartDate != DateTime.MinValue)
                {
                    currentProject.StartDate = entry.StartDate.ToString("yyyy MM dd");
                }
                else{
                    currentProject.StartDate = "";
                }
                if (entry.EndDate != DateTime.MinValue)
                {
                    currentProject.EndDate = entry.EndDate.ToString("yyyy MM dd");
                }
                else{
                    currentProject.EndDate ="";
                }
                if (!String.IsNullOrEmpty(entry.Status))
                {
                    currentProject.CurrentStatus = entry.Status;
                }

                if (entry.OrganisationContactReference != null)
                {
                    var contact = new Domain.Contact()
                    {
                        FullName = entry.OrganisationContactReference.FirstName + " " + entry.OrganisationContactReference.LastName,
                        Email = entry.OrganisationContactReference.Email,
                        PhoneNumber = entry.OrganisationContactReference.PhoneNumber,
                        Titel = entry.OrganisationContactReference.Titel,
                        Id = entry.OrganisationContactReference.Sys.Id,
                    };
                    currentProject.Contact = contact;
                }
                if (entry.ProjectLeader != null)
                {
                    var employee = new Employee()
                    {
                        Fullname = entry.ProjectLeader.FullName,
                        Titel = entry.ProjectLeader.Titel,
                        Email = entry.ProjectLeader.Email,
                        Phonenumber = entry.ProjectLeader.Phone

                    };
                    currentProject.ProjectLeader = employee;
                }
                if (currentProject.StartDate != "" && currentProject.EndDate != "")
                {
                    currentProject.TotalProjectDays = getDifferens(entry.StartDate, entry.EndDate);
                }

                return currentProject;
            }


        }

        private static int getDifferens(DateTime start, DateTime end)
        {
            var span = (end - start).Days;

            return span;
        }
    }
}
