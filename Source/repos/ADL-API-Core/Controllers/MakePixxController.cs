using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.VisualStudio.Web.CodeGeneration.Contracts.Messaging;
using Newtonsoft.Json;
using ADLAPICore.Library.Common;
using ADLAPICore.Library.Game;
using ADLAPICore.Library.MakePixx;
using System;
using System.Net.Mime;


namespace ADLAPICore.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class MakePixxController : ControllerBase
    {
         /*
        public MakePixxController()
        {
            // no action
        }

        [HttpPost]
        public ActionResult Post(MakePixxInput input)
        {

            try
            {

                // create instance of Make Pixx Clss
                MakePixxClass s = new MakePixxClass();

                // update it
                var result = s.MakePixx(input);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }
            catch (Exception ex)
            {
                var result = new GeneralResult{ Success = false, Message = ex.Message };
                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }
        }
         */
    }
}
