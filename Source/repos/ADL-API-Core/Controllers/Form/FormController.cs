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
using ADLAPICore.Library.Form;
using ADLAPICore.Models.Form;

namespace ADLAPICore.Controllers.ADL
{

    [ApiController]
    [Route("[controller]")]
 
    public class FormController : ControllerBase
    {
        private readonly ILogger<FormController> _logger;
        private readonly IFormClass _controllerClass;

        public FormController(ILogger<FormController> logger,
                                    IFormClass controllerClass)
        {
            _logger = logger;
            _controllerClass = controllerClass;
        }

        [HttpGet("List")]
        public ActionResult List([FromQuery] FormListGetInput input)
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
                var cleanInput = (FormListGetInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.GetFormList(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {
                FormResultList r = new FormResultList();
                r.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(r), MediaTypeNames.Application.Json);
            }
        }

        [HttpGet()]
        public ActionResult Get([FromQuery] FormGetInput input)
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
                var cleanInput = (FormGetInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.GetForm(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {
                FormResult r = new FormResult();
                r.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(r), MediaTypeNames.Application.Json);
            }
        }

        [HttpPost()]
        public ActionResult Post([FromBody] FormInsertInput input)
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
                var cleanInput = (FormInsertInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.InsertForm(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {
                FormPostResult fr = new FormPostResult();
                fr.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(fr), MediaTypeNames.Application.Json);
            }
        }

        [HttpDelete()]
        public ActionResult Delete([FromBody] FormDeleteInput input)
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
                var cleanInput = (FormDeleteInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.DeleteForm(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {
                FormPutResult fr = new FormPutResult();
                fr.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(fr), MediaTypeNames.Application.Json);
            }
        }

        [HttpPut()]
        public ActionResult Put([FromBody] FormUpdateInput input)
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
                var cleanInput = (FormUpdateInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.UpdateForm(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {
                FormPutResult fr = new FormPutResult();
                fr.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(fr), MediaTypeNames.Application.Json);
            }
        }

    }
}
