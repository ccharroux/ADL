using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using ADLAPICore.Library.Accomplishments;
using ADLAPICore.Library.Common;
using System;
using System.Net.Mime;


namespace ADLAPICore.Controllers
{

    [ApiController]
 

    [Route("[controller]")]
    public class AccomplishmentsController : ControllerBase
    {
        private readonly ILogger<AccomplishmentsController> _logger;
        private readonly IAccomplishmentsClass _accomplishmentClass;

        public AccomplishmentsController(ILogger<AccomplishmentsController> logger,
                                         IAccomplishmentsClass accomplishments)
        {
            _logger = logger;
            _accomplishmentClass = accomplishments;
        }

        [HttpGet("{memberId}/{sportId}")]
        public ActionResult Get(string memberId, string sportId)
        {
            try
            {
                var result = _accomplishmentClass.Accomplishments(memberId, sportId);
                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception )
            {
                //var result = new GeneralResult {Success = false, Message = ex.Message};
                var result = new AccomplishmentsResult();
                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

        }

    }
}
