using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Net.Mime;
using ADLAPICore.Models.ADL;
using ADLAPICore.Library.Base;
using ADLAPICore.Library.ADL;
using ADLAPICore.Models.General;
using System.Collections.Generic;
using ADLAPICore.Library.utilities;

namespace ADLAPICore.Controllers.ADL
{

    [ApiController]
    [Route("[controller]")]
 
    public class ADLController : ControllerBase
    {
        private readonly ILogger<ADLController> _logger;
        private readonly IADLClass _controllerClass;

        public ADLController(ILogger<ADLController> logger,
                                    IADLClass controllerClass)
        {
            _logger = logger;
            _controllerClass = controllerClass;
        }

        [HttpGet("List")]
        public ActionResult List([FromQuery] ADLListGetInput input)
        {
            try
            {

                //----------------------------------
                // Clean inputs using reflection
                //----------------------------------
                var cleanInput = (ADLListGetInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.GetADLList(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {
                ADLResultList r = new ADLResultList();
                r.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(r), MediaTypeNames.Application.Json);
            }
        }

        [HttpGet()]
        public ActionResult Get([FromQuery] ADLGetInput input)
        {
            try
            {

                //----------------------------------
                // Clean inputs using reflection
                //----------------------------------
                var cleanInput = (ADLGetInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.GetADL(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {
                ADLResult r = new ADLResult();
                r.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(r), MediaTypeNames.Application.Json);
            }
        }
    }
}
