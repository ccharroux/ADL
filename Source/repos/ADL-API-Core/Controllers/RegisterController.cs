using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using ADLAPICore.Library.Common;
using ADLAPICore.Library.Member;
using ADLAPICore.Library.Register;
using ADLAPICore.Library.User;
using System;
using System.Net.Mime;
using ADLAPICore.Models.General;

namespace ADLAPICore.Controllers
{
    [Route("[controller]")]
    [ApiController]
 

    public class RegisterController : ControllerBase
    {
        // POST: api/Register
        [HttpPost]
        public ActionResult Post([FromBody] UserClass u)
        {
            try
            {
                MemberClass r = new MemberClass();
                MemberUpdateInput m = new MemberUpdateInput();
                m.EmailAddress = u.EmailAddress;
                m.LastName = u.LastName;
                m.FirstName = u.FirstName;
                m.MemberId = "0";

                var result = r.UpdateMember(m);

                m.MemberId = result.memberId;
                var resultPassword = r.UpdateMemberPassword(m.MemberId, u.Password);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception )
            {
                var result = new ResponseModel {   };
                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }
        }

    }
}
