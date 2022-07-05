using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Net.Mime;
using ADLAPICore.Models.Country;
using ADLAPICore.Library.Base;
using ADLAPICore.Library.Country;
using ADLAPICore.Models.General;
using System.Collections.Generic;
using ADLAPICore.Library.utilities;

namespace ADLAPICore.Controllers.Country
{

    [ApiController]
    [Route("[controller]")]
 
    public class CountryController : ControllerBase
    {
        private readonly ILogger<CountryController> _logger;
        private readonly ICountryClass _controllerClass;

        public CountryController(ILogger<CountryController> logger,
                                    ICountryClass controllerClass)
        {
            _logger = logger;
            _controllerClass = controllerClass;
        }

        [HttpGet("List")]
        public ActionResult List([FromQuery] CountryListGetInput input)
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
                var cleanInput = (CountryListGetInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.GetCountryList(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {
                CountryResult r = new CountryResult();
                r.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(r), MediaTypeNames.Application.Json);
            }
        }

    }
}
