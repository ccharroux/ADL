using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using ADLAPICore.Library.Common;
using ADLAPICore.Library.Messages;
using System;
using System.Net.Mime;


namespace ADLAPICore.Controllers
{

    [ApiController]
    [Route("[controller]")]
 

    public class MessagesController : ControllerBase
    {
        private readonly ILogger<MessagesController> _logger;
        private readonly IMessagesClass _messagesClass;

        public MessagesController(ILogger<MessagesController> logger,
                                IMessagesClass messagesClass)
        {
            _logger = logger;
            _messagesClass = messagesClass;
        }


        [HttpGet("{memberId}")]
        public ActionResult Get(string memberId)
        {

            try
            {
                var result = _messagesClass.MessageList(memberId);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception )
            {
                var result = new MessagesResult {  };
                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }
}

        [HttpGet("{memberId}/{fromMemberId}")]
        public ActionResult Get(string memberId, string fromMemberId)
        {
            try 
            { 
                var result = _messagesClass.MessageDetail(memberId, fromMemberId);
                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception )
            {
                var result = new MessagesResult {  };
                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

        }


    }
}
