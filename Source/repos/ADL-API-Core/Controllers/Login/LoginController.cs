using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using ADLAPICore.Library.Common;
using ADLAPICore.Library.Login;
using System;
using System.Net.Mime;
using ADLAPICore.Models.Login;
using ADLAPICore.Library.Base;
using ADLAPICore.Library.utilities;

namespace ADLAPICore.Controllers.Login
{

    [ApiController]
    [Route("[controller]")]
    public class LoginController : ControllerBase
    {

        private readonly ILoginClass _controllerClass;

        public LoginController(ILoginClass loginClass)
        {
            _controllerClass = loginClass;
        }

        [HttpGet]
        public ActionResult Get([FromQuery] LoginInput input)
        {
            try
            {
                //----------------------------------
                // Clean inputs using reflection
                //----------------------------------
                var cleanInput = (LoginInput)genericLogic.cleanAllTextFromObject(input);

                //----------------------------------------------
                // Verify Token
                //----------------------------------------------
                //var tStatus = AccessClass.checkToken(cleanInput.inApiToken);
                //if (tStatus.isValid == false)
                //{
                //    throw new ApplicationException(tStatus.message);
                //}

                var result = _controllerClass.LoginUser(cleanInput);
                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {
                var result = new LoginResult
                {
                    response = General.buildError(ex.Message)
                };
                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }
        }
 

    }
}
