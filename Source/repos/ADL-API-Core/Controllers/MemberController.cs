using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using ADLAPICore.Library.Common;
using ADLAPICore.Library.Member;
using System;
using System.Net.Mime;


namespace ADLAPICore.Controllers
{

    [ApiController]
    [Route("[controller]")]
  

    public class MemberController : ControllerBase
    {
        private readonly ILogger<MemberController> _logger;
        private readonly IMemberClass _memberClass;

        public MemberController(ILogger<MemberController> logger,
                                IMemberClass memberClass)
        {
            _logger = logger;
            _memberClass = memberClass;
        }
        /*
        [HttpGet("List/{inMemberId}")]
        public ActionResult Get(string inMemberId)
        {
 
            try
            { 
                var result = _memberClass.getMemberList<string>(inMemberId);
                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {
                var result = new GeneralResult { Success = false, Message = ex.Message };
                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

        }
        
        [HttpPost("SendPassword")]
        public ActionResult Post([FromBody] MemberSendPasswordInput input)
        {
            try
            {
                var result = _memberClass.SendPassword(input.emailAddress);
                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {
                var result = new GeneralResult { Success = false, Message = ex.Message };
                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

        }

        [HttpPost("UpdatePassword")]
        public ActionResult Post([FromBody] MemberUpdatePasswordInput input)
        {
     
            try
            { 
                var result = _memberClass.UpdateMemberPassword(input.memberId, input.password);
                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {
                var result = new GeneralResult { Success = false, Message = ex.Message };
                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

        }
        [HttpPost("Update")]
        public ActionResult Post([FromBody] MemberUpdateInput input)
        {

            try
            {
                var result = _memberClass.UpdateMember(input);
                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {
                var result = new GeneralResult { Success = false, Message = ex.Message };
                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

        }
        */
    }
}
