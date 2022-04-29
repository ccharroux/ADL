using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using ADLAPICore.Library.Common;
using ADLAPICore.Library.Stats;
using System;
using System.Net.Mime;


namespace ADLAPICore.Controllers
{

    [ApiController]
    [Route("[controller]/{sportId}")]

    public class StatsController : ControllerBase
    {
        private readonly ILogger<StatsController> _logger;
        private readonly IStatsClass _statsClass;

        public StatsController(ILogger<StatsController> logger,
                            IStatsClass statsClass)
        {
            _logger = logger;
            _statsClass = statsClass;
        }

        [HttpGet]
        public ActionResult Get(string sportId)
        {
            try
            { 
                var result = _statsClass.Stats(sportId);
                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception)
            {
                var result = new StatsResult();
                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }
        }

    }
}
