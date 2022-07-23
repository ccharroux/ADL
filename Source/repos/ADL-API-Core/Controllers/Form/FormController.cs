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

namespace ADLAPICore.Controllers.ADL
{

    [ApiController]
    [Route("[controller]")]
 
    public class FormController : ControllerBase
    {
        private readonly ILogger<FormController> _logger;
        private readonly IADLClass _controllerClass;

        public FormController(ILogger<FormController> logger,
                                    IADLClass controllerClass)
        {
            _logger = logger;
            _controllerClass = controllerClass;
        }

        [HttpGet("List")]
        public ActionResult List([FromQuery] ADLListGetInput input)
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
                var cleanInput = (ADLListGetInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.GetADLList(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {
                ADLResultList r = new ADLResultList();
                r.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(r), MediaTypeNames.Application.Json);
            }
        }

        [HttpGet()]
        public ActionResult Get([FromQuery] ADLGetInput input)
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
                var cleanInput = (ADLGetInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.GetADL(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {
                ADLResult r = new ADLResult();
                r.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(r), MediaTypeNames.Application.Json);
            }
        }

        [HttpPost()]
        public ActionResult Post([FromBody] ADLInsertInput input)
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
                var cleanInput = (ADLInsertInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.InsertADL(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {
                ADLPostResult fr = new ADLPostResult();
                fr.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(fr), MediaTypeNames.Application.Json);
            }
        }

        [HttpDelete()]
        public ActionResult Delete([FromBody] ADLDeleteInput input)
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
                var cleanInput = (ADLDeleteInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.DeleteADL(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {
                ADLPutResult fr = new ADLPutResult();
                fr.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(fr), MediaTypeNames.Application.Json);
            }
        }

        [HttpPut()]
        public ActionResult Put([FromBody] ADLUpdateInput input)
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
                var cleanInput = (ADLUpdateInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.UpdateADL(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {
                ADLPutResult fr = new ADLPutResult();
                fr.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(fr), MediaTypeNames.Application.Json);
            }
        }

    }
}
