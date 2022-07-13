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
using ADLAPICore.Library.Password;
using ADLAPICore.Models.Password;

namespace ADLAPICore.Controllers.Password
{

    [ApiController]
    [Route("[controller]")]
 
    public class PasswordController : ControllerBase
    {
        private readonly ILogger<PasswordController> _logger;
        private readonly IPasswordClass _controllerClass;

        public PasswordController(ILogger<PasswordController> logger,
                                    IPasswordClass controllerClass)
        {
            _logger = logger;
            _controllerClass = controllerClass;
        }

        [HttpGet()]
        public ActionResult Get([FromQuery] PasswordResetTokenGetInput input)
        {
            try
            {
                //------------------------------------
                // exception will be thrown
                //------------------------------------
                //var resultToken = Token.checkToken(input.inApiToken);
                //if (resultToken.response.status == ResponseModel.responseFAIL)
                //{
                //    throw new Exception(resultToken.response.errorMessage[0]);
                //}
                //----------------------------------
                // Clean inputs using reflection
                //----------------------------------
                var cleanInput = (PasswordResetTokenGetInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.GetPasswordResetToken(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {

                PasswordResetTokenGetResult r = new PasswordResetTokenGetResult();
                r.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(r), MediaTypeNames.Application.Json);
            }
        }

        [HttpPut()]
        public ActionResult Put([FromBody] PasswordUpdateInput input)
        {
            try
            {
                //------------------------------------
                // exception will be thrown
                //------------------------------------
                //var resultToken = Token.checkToken(input.inApiToken);
                //if (resultToken.response.status == ResponseModel.responseFAIL)
                //{
                //    throw new Exception(resultToken.response.errorMessage[0]);
                //}
                //----------------------------------
                // Clean inputs using reflection
                //----------------------------------
                var cleanInput = (PasswordUpdateInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.UpdatePassword(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {

                PasswordUpdateResult r = new PasswordUpdateResult();
                r.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(r), MediaTypeNames.Application.Json);
            }
        }

        [HttpPost()]
        public ActionResult Post([FromBody] PasswordRequestInsertInput input)
        {
            try
            {
                //------------------------------------
                // exception will be thrown
                //------------------------------------
                //var resultToken = Token.checkToken(input.inApiToken);
                //if (resultToken.response.status == ResponseModel.responseFAIL)
                //{
                //    throw new Exception(resultToken.response.errorMessage[0]);
                //}
                //----------------------------------
                // Clean inputs using reflection
                //----------------------------------
                var cleanInput = (PasswordRequestInsertInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.InsertPasswordRequest(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {

                PasswordRequestInsertResult r = new PasswordRequestInsertResult();
                r.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(r), MediaTypeNames.Application.Json);
            }
        }
    }
}
