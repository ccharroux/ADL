using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Net.Mime;
using ADLAPICore.Models.State;
using ADLAPICore.Library.Base;
using ADLAPICore.Library.State;
using ADLAPICore.Models.General;
using System.Collections.Generic;
using ADLAPICore.Library.utilities;

namespace ADLAPICore.Controllers.State
{

    [ApiController]
    [Route("[controller]")]
 
    public class StateController : ControllerBase
    {
        private readonly ILogger<StateController> _logger;
        private readonly IStateClass _controllerClass;

        public StateController(ILogger<StateController> logger,
                                    IStateClass controllerClass)
        {
            _logger = logger;
            _controllerClass = controllerClass;
        }

        [HttpGet("List")]
        public ActionResult List([FromQuery] StateListGetInput input)
        {
            try
            {
                //------------------------------------
                // exception will be thrown
                //------------------------------------
                var resultToken = Token.checkToken(input.inApiToken);
                if (resultToken.response.status == ResponseModel.responseFAIL)
                {
                    throw new Exception(resultToken.response.errorMessage[0]);
                }

                //----------------------------------
                // Clean inputs using reflection
                //----------------------------------
                var cleanInput = (StateListGetInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.GetStateList(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {

                StateResult r = new StateResult();
                r.response = General.buildError(ex.Message);
      
                return Content(JsonConvert.SerializeObject(r), MediaTypeNames.Application.Json);
            }
        }

    }
}
