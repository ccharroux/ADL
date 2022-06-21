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

        [HttpPut()]
        public ActionResult Put([FromBody] UserMemberUpdateInput input)
        {
            try
            {

                //----------------------------------
                // Clean inputs using reflection
                //----------------------------------
                var cleanInput = (UserMemberUpdateInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.UpdateUserMember(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {

                UserMemberUpdateResult r = new UserMemberUpdateResult();
                r.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(r), MediaTypeNames.Application.Json);
            }
        }

        [HttpPost()]
        public ActionResult Post([FromBody] UserMemberInsertInput input)
        {
            try
            {

                //----------------------------------
                // Clean inputs using reflection
                //----------------------------------
                var cleanInput = (UserMemberInsertInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.InsertUserMember(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {

                UserMemberInsertResult r = new UserMemberInsertResult();
                r.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(r), MediaTypeNames.Application.Json);
            }
        }
        
        [HttpPost("Address")]
        public ActionResult InsertUserAddress([FromBody] UserAddressInsertInput input)
        {
            try
            {

                //----------------------------------
                // Clean inputs using reflection
                //----------------------------------
                var cleanInput = (UserAddressInsertInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.InsertUserAddress(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {

                UserAddressInsertResult r = new UserAddressInsertResult();
                r.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(r), MediaTypeNames.Application.Json);
            }
        }

        [HttpGet("Address")]
        public ActionResult GetAddress([FromQuery] UserMemberAddressGetInput input)
        {
            try
            {

                //----------------------------------
                // Clean inputs using reflection
                //----------------------------------
                var cleanInput = (UserMemberAddressGetInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.GetUserMemberAddress(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {

                UserMemberAddressResult r = new UserMemberAddressResult();
                r.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(r), MediaTypeNames.Application.Json);
            }
        }

        [HttpPost("Access")]
        public ActionResult AccessInsert([FromQuery] UserMemberAccessInsertInput input)
        {
            try
            {

                //----------------------------------
                // Clean inputs using reflection
                //----------------------------------
                var cleanInput = (UserMemberAccessInsertInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.InsertUserMemberAccess(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {

                UserMemberAccessInsertResult r = new UserMemberAccessInsertResult();
                r.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(r), MediaTypeNames.Application.Json);
            }
        }

        [HttpPut("Access")]
        public ActionResult AccessUpdate([FromQuery] UserMemberAccessUpdateInput input)
        {
            try
            {

                //----------------------------------
                // Clean inputs using reflection
                //----------------------------------
                var cleanInput = (UserMemberAccessUpdateInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.UpdateUserMemberAccess(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {

                UserMemberAccessUpdateResult r = new UserMemberAccessUpdateResult();
                r.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(r), MediaTypeNames.Application.Json);
            }
        }
    }
}
