using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using ADLAPICore.Library.Common;
using ADLAPICore.Library.Sports;
using System;
using System.Net.Mime;


namespace ADLAPICore.Controllers
{

    [ApiController]
    [Route("[controller]")]
 

    public class SportsController : ControllerBase
    {
        private readonly ILogger<SportsController> _logger;
        private readonly ISportsClass _sportsClass;

        public SportsController(ILogger<SportsController> logger,
                                ISportsClass sportsClass)
        {
            _logger = logger;
            _sportsClass = sportsClass;
        }

        [HttpGet]
        public ActionResult Get()
        {
            try
            { 
                var result = _sportsClass.Sports();
                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception )
            {
                var result = new SportsResult();
                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

        }

    }
}
