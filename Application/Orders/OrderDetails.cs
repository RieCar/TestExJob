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

namespace Application.Orders
{
    public class OrderDetails
    {
        public class Query : IRequest<Order>
        {
            public string OrderId { get; set; }
        }

        public class Handler : IRequestHandler<Query, Order>
        {
            private readonly IContentfulClient _client;

            public Handler(IContentfulClient client)
            {
                _client = client;
            }
            public async Task<Order> Handle(Query request,
             CancellationToken cancellationToken)
            {
                var queryBuilder = QueryBuilder<OrderDTO>.New
                .ContentTypeIs("order").FieldEquals(f => f.Sys.Id, request.OrderId).Include(2);
                var entry = (await _client.GetEntries(queryBuilder)).FirstOrDefault();

                if (entry == null)
                {
                    throw new RestExceptions(HttpStatusCode.NotFound, new { error = "Something went wrong. We couldn't find what you looking for " });
                }
                var currentOrder = new Order();
                currentOrder.Id = entry.Sys.Id;
                currentOrder.Titel = entry.Titel;
                currentOrder.Description = entry.Description;
                currentOrder.StartDate = entry.StartDate.Date.ToString("yyyy MM dd");
                currentOrder.EndDate = entry.EndDate.Date.ToString("yyyy MM dd");
                currentOrder.Status = entry.Status;
                currentOrder.Estimatedcost = entry.EstimatedCost;

                var contact = new Domain.Contact()
                {
                    FullName = entry.ContactAtOrganisation.FirstName + " " + entry.ContactAtOrganisation.LastName,
                    Email = entry.ContactAtOrganisation.Email,
                    PhoneNumber = entry.ContactAtOrganisation.PhoneNumber,
                    Titel = entry.ContactAtOrganisation.Titel,
                    Id = entry.ContactAtOrganisation.Sys.Id,
                };
                currentOrder.Contact = contact;

                var currentEmployee = new Employee()
                {
                    Fullname = entry.ContactAtCamelonta.FullName,
                    Titel = entry.ContactAtCamelonta.Titel,
                    Email = entry.ContactAtCamelonta.Email,
                    Phonenumber = entry.ContactAtCamelonta.Phone
                };
                currentOrder.ContactAtCamelonta = currentEmployee;

                currentOrder.TotalOrderDays = getDifferens(entry.StartDate, entry.EndDate);
                return currentOrder;
            }

        }

        private static int getDifferens(DateTime start, DateTime end)
        {
            var span = (end - start).Days;

            return span;
        }
    }
}