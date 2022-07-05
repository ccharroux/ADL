using ADLAPICore.Library.Base;
using ADLAPICore.Library.Address;
using ADLAPICore.Library.utilities;
using ADLAPICore.Models.Address;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Net.Mime;
using ADLAPICore.Models.General;

namespace ADLAPICore.Controllers.Address
{

    [ApiController]
    [Route("[controller]")]
 
    public class AddressController : ControllerBase
    {
        private readonly ILogger<AddressController> _logger;
        private readonly IAddressClass _controllerClass;

        public AddressController(ILogger<AddressController> logger,
                                    IAddressClass controllerClass)
        {
            _logger = logger;
            _controllerClass = controllerClass;
        }

        [HttpGet()]
        public ActionResult Get([FromQuery] AddressGetInput input)
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
                var cleanInput = (AddressGetInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.GetAddress(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {

                AddressDetailRow r = new AddressDetailRow();
                r.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(r), MediaTypeNames.Application.Json);
            }
        }

        [HttpPut()]
        public ActionResult Put([FromBody] AddressUpdateInput input)
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
                var cleanInput = (AddressUpdateInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.UpdateAddress(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {

                AddressUpdateResult r = new AddressUpdateResult();
                r.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(r), MediaTypeNames.Application.Json);
            }
        }

        [HttpPost()]
        public ActionResult Post([FromBody] AddressInsertInput input)
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
                var cleanInput = (AddressInsertInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.InsertAddress(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {

                AddressInsertResult r = new AddressInsertResult();
                r.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(r), MediaTypeNames.Application.Json);
            }
        }
    }
}
