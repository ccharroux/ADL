using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using ADLAPICore.Library.Common;
using ADLAPICore.Library.Game;
using System;
using System.Net.Mime;


namespace ADLAPICore.Controllers
{

    [ApiController]
 

    [Route("[controller]")]
    public class GameListController : ControllerBase
    {
        private readonly ILogger<GameListController> _logger;
        private readonly IGameClass _gameClass;

        public GameListController(ILogger<GameListController> logger,
                                IGameClass gameClass)
        {
            _logger = logger;
            _gameClass = gameClass;
        }

        [HttpGet("{memberId}/{sportId}/{gamedate}")]
        public ActionResult Get(string memberId, string sportId, string gameDate)
        {
            try
            {
                var result = _gameClass.List(memberId, sportId, gameDate);
                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception )
            {
                var result = new GameListResult();
                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }
        }

    }
}
