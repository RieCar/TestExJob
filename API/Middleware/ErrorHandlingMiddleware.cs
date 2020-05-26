using System;
using System.Net;
using System.Text.Json;
using System.Threading.Tasks;
using Application.Errors;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;

namespace API.Middleware
{
    public class ErrorHandlingMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<ErrorHandlingMiddleware> _logger;

        public ErrorHandlingMiddleware(RequestDelegate next, ILogger<ErrorHandlingMiddleware> logger)
        {
            _next = next;
            _logger = logger;
        }

        public async Task Invoke (HttpContext context){

            try{
                await _next(context);
            }
            catch(Exception ex) {

                await HandleExceptionAsync(context, ex, _logger);

            }
        }

        private async Task HandleExceptionAsync(HttpContext context, Exception ex, ILogger<ErrorHandlingMiddleware> logger)
        {
            object Errors = null; 

            switch(ex){
                case RestExceptions re:
                logger.LogError(ex, "ERROR REST");
                Errors = re.Errors;
                context.Response.StatusCode = (int)re.Code;
                break; 
                case Exception e:
                logger.LogError(ex, "SERVER ERROR");
                Errors = string.IsNullOrWhiteSpace(e.Message) ? "Error" : e.Message;
                context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                break; 
                
            }

            context.Response.ContentType = "application/json";
            if(Errors != null){
                var result = JsonSerializer.Serialize(new {
                    Errors
                });

                await context.Response.WriteAsync(result);
            }
        }
    }
}