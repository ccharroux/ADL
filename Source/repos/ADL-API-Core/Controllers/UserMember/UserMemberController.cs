using ADLAPICore.Library.Base;
using ADLAPICore.Library.UserMember;
using ADLAPICore.Library.utilities;
using ADLAPICore.Models.UserMember;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Net.Mime;

namespace ADLAPICore.Controllers.UserMember
{

    [ApiController]
    [Route("[controller]")]
 
    public class UserMemberController : ControllerBase
    {
        private readonly ILogger<UserMemberController> _logger;
        private readonly IUserMemberClass _controllerClass;

        public UserMemberController(ILogger<UserMemberController> logger,
                                    IUserMemberClass controllerClass)
        {
            _logger = logger;
            _controllerClass = controllerClass;
        }

        [HttpGet("AccessList")]
        public ActionResult AccessList([FromQuery] UserMemberAccessListGetInput input)
        {
            try
            {

                //----------------------------------
                // Clean inputs using reflection
                //----------------------------------
                var cleanInput = (UserMemberAccessListGetInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.GetUserMemberAccessList(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {

                UserMemberResult r = new UserMemberResult();
                r.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(r), MediaTypeNames.Application.Json);
            }
        }

        [HttpGet("List")]
        public ActionResult List([FromQuery] UserMemberListGetInput input)
        {
            try
            {

                //----------------------------------
                // Clean inputs using reflection
                //----------------------------------
                var cleanInput = (UserMemberListGetInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.GetUserMemberList(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {

                UserMemberResult r = new UserMemberResult();
                r.response = General.buildError(ex.Message);
      
                return Content(JsonConvert.SerializeObject(r), MediaTypeNames.Application.Json);
            }
        }

        [HttpGet("ListByFacility")]
        public ActionResult ListByFacility([FromQuery] UserMemberListByFacilityGetInput input)
        {
            try
            {

                //----------------------------------
                // Clean inputs using reflection
                //----------------------------------
                var cleanInput = (UserMemberListByFacilityGetInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.GetUserMemberListByFacility(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {

                UserMemberResult r = new UserMemberResult();
                r.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(r), MediaTypeNames.Application.Json);
            }
        }

        [HttpGet()]
        public ActionResult Get([FromQuery] UserMemberGetInput input)
        {
            try
            {

                //----------------------------------
                // Clean inputs using reflection
                //----------------------------------
                var cleanInput = (UserMemberGetInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.GetUserMember(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {

                UserMemberDetailRow r = new UserMemberDetailRow();
                r.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(r), MediaTypeNames.Application.Json);
            }
        }

    }
}
