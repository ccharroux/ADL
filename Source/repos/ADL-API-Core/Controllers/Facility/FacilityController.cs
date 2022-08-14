using ADLAPICore.Library.Base;
using ADLAPICore.Library.Facility;
using ADLAPICore.Library.utilities;
using ADLAPICore.Models.Facility;
using ADLAPICore.Models.General;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Net.Mime;

namespace ADLAPICore.Controllers.Facility
{

    [ApiController]
    [Route("[controller]")]
 
    public class FacilityController : ControllerBase
    {
        private readonly ILogger<FacilityController> _logger;
        private readonly IFacilityClass _controllerClass;

        public FacilityController(ILogger<FacilityController> logger,
                                    IFacilityClass facilityClass)
        {
            _logger = logger;
            _controllerClass = facilityClass;
        }

        [HttpGet()]
        public ActionResult Get([FromQuery] FacilityGetInput input)
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
                var cleanInput = (FacilityGetInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.GetFacility(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {
                FacilityResult fr = new FacilityResult();
                fr.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(fr), MediaTypeNames.Application.Json);
            }
        }
        
        [HttpGet("ADLList")]
        public ActionResult ADLList([FromQuery] FacilityADLListGetInput input)
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
                var cleanInput = (FacilityADLListGetInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.GetFacilityADLList(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {
                FacilityADLResult fr = new FacilityADLResult();
                fr.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(fr), MediaTypeNames.Application.Json);
            }
        }

        [HttpGet("FormList")]
        public ActionResult FormList([FromQuery] FacilityFormListGetInput input)
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
                var cleanInput = (FacilityFormListGetInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.GetFacilityFormList(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {
                FacilityFormResult fr = new FacilityFormResult();
                fr.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(fr), MediaTypeNames.Application.Json);
            }
        }

        [HttpGet("List")]
        public ActionResult List([FromQuery] FacilityListGetInput input)
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
                var cleanInput = (FacilityListGetInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.GetFacilityList(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {
                FacilityListResult fr = new FacilityListResult();
                fr.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(fr), MediaTypeNames.Application.Json);
            }
        }

        [HttpGet("EntireList")]
        public ActionResult EntireList([FromQuery] FacilityEntireListGetInput input)
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
                var cleanInput = (FacilityEntireListGetInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.GetFacilityEntireList(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {
                FacilityEntireListResult fr = new FacilityEntireListResult();
                fr.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(fr), MediaTypeNames.Application.Json);
            }
        }

        [HttpGet("OwnerList")]
        public ActionResult OwnerList([FromQuery] FacilityOwnerListGetInput input)
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
                var cleanInput = (FacilityOwnerListGetInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.GetFacilityOwnerList(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {
                FacilityResult fr = new FacilityResult();
                fr.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(fr), MediaTypeNames.Application.Json);
            }
        }

        [HttpPost("ADLInsert")]
        public ActionResult ADLInsert([FromBody] FacilityADLInsertInput input)
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
                var cleanInput = (FacilityADLInsertInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.InsertFacilityADL(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {
                FacilityPostResult fr = new FacilityPostResult();
                fr.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(fr), MediaTypeNames.Application.Json);
            }
        }

        [HttpPut("ADLDelete")]
        public ActionResult ADLDelete([FromBody] FacilityADLDeleteInput input)
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
                var cleanInput = (FacilityADLDeleteInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.DeleteFacilityADL(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {
                FacilityPutResult fr = new FacilityPutResult();
                fr.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(fr), MediaTypeNames.Application.Json);
            }
        }

        [HttpPost("FormInsert")]
        public ActionResult FormInsert([FromBody] FacilityFormInsertInput input)
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
                var cleanInput = (FacilityFormInsertInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.InsertFacilityForm(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {
                FacilityPostResult fr = new FacilityPostResult();
                fr.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(fr), MediaTypeNames.Application.Json);
            }
        }

        [HttpPut("FormDelete")]
        public ActionResult FormDelete([FromBody] FacilityFormDeleteInput input)
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
                var cleanInput = (FacilityFormDeleteInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.DeleteFacilityForm(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {
                FacilityPutResult fr = new FacilityPutResult();
                fr.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(fr), MediaTypeNames.Application.Json);
            }
        }
        
        [HttpPost("Address")]
        public ActionResult InsertFacilityAddress([FromBody] FacilityAddressInsertInput input)
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
                var cleanInput = (FacilityAddressInsertInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.InsertFacilityAddress(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {

                FacilityPostResult r = new FacilityPostResult();
                r.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(r), MediaTypeNames.Application.Json);
            }
        }

        [HttpGet("Address")]
        public ActionResult GetAddress([FromQuery] FacilityAddressGetInput input)
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
                var cleanInput = (FacilityAddressGetInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.GetFacilityAddress(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {
                FacilityAddressResult fr = new FacilityAddressResult();
                fr.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(fr), MediaTypeNames.Application.Json);
            }
        }

        [HttpPost()]
        public ActionResult Post([FromBody] FacilityInsertInput input)
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
                var cleanInput = (FacilityInsertInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.InsertFacility(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {
                FacilityPostResult fr = new FacilityPostResult();
                fr.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(fr), MediaTypeNames.Application.Json);
            }
        }

        [HttpPut()]
        public ActionResult Put([FromBody] FacilityUpdateInput input)
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
                var cleanInput = (FacilityUpdateInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.UpdateFacility(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {
                FacilityPutResult fr = new FacilityPutResult();
                fr.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(fr), MediaTypeNames.Application.Json);
            }
        }

        [HttpGet("Dashboard")]
        public ActionResult Dashboard([FromQuery] FacilityDashboardDataByDayGetInput input)
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
                var cleanInput = (FacilityDashboardDataByDayGetInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.GetFacilityDashboardDataByDay(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {
                FacilityDashboardDataByDayResult fr = new FacilityDashboardDataByDayResult();
                fr.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(fr), MediaTypeNames.Application.Json);
            }
        }

        [HttpGet("ADLLogByDay")]
        public ActionResult ADLLogByDay([FromQuery] FacilityADLLogByDayGetInput input)
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
                var cleanInput = (FacilityADLLogByDayGetInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.GetFacilityADLLogByDay(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {
                FacilityADLLogByDayResult fr = new FacilityADLLogByDayResult();
                fr.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(fr), MediaTypeNames.Application.Json);
            }
        }

        [HttpGet("ADLReport")]
        public ActionResult ADLReport([FromQuery] FacilityADLReportGetInput input)
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
                var cleanInput = (FacilityADLReportGetInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.GetFacilityADLReport(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {

                FacilityADLReportResult r = new FacilityADLReportResult();
                r.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(r), MediaTypeNames.Application.Json);
            }
        }
    }



}
