using MediatR;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using Contentful.Core;
using Persistence;
using Contentful.Core.Search;
using System.Linq;
using System.Collections.Generic;
using System;

namespace Application.Contacts
{
    public class GetAllForOrg
    {
        public class Query : IRequest<List<Domain.Contact>>
        {
            public string Organisation { get; set; }
        }

        public class Handler : IRequestHandler<Query, List<Domain.Contact>>
        {
            private readonly IContentfulClient _client;

            public Handler(IContentfulClient client)
            {
                _client = client;
            }
            public async Task<List<Domain.Contact>> Handle(Query request,
             CancellationToken cancellationToken)
            {
                var queryBuilder = QueryBuilder<ContactDTO>.New
                .ContentTypeIs("contact").FieldEquals(f => f.Organisation.Sys.Id, request.Organisation);
                var entries = (await _client.GetEntries(queryBuilder)).ToList();
                if (entries != null)
                {
                    var currentList = new List<Domain.Contact>();
                    foreach (var contact in entries)
                    {
                        Console.WriteLine(contact.FirstName);
                        var cont = new Domain.Contact();
                        cont.Id = contact.Sys.Id;
                        cont.FullName = contact.FirstName + " " + contact.LastName;
                        cont.Email = contact.Email;
                        cont.Titel = contact.Titel;
                        if (!String.IsNullOrEmpty(contact.PhoneNumber))
                        {
                            cont.PhoneNumber = contact.PhoneNumber.ToString();
                        }

                        cont.OrganisationName = contact.Organisation.CompanyName;
                        cont.OrganisationId = contact.Organisation.Sys.Id;
                        currentList.Add(cont);
                    }
                    return currentList;
                }

                return new List<Domain.Contact>();
            }


        }
    }

}