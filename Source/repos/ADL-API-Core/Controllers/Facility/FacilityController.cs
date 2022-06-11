using ADLAPICore.Library.Base;
using ADLAPICore.Library.Facility;
using ADLAPICore.Library.utilities;
using ADLAPICore.Models.Facility;
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
        
        [HttpGet("List")]
        public ActionResult List([FromQuery] FacilityListGetInput input)
        {
            try
            {

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
        
        [HttpGet("OwnerList")]
        public ActionResult OwnerList([FromQuery] FacilityOwnerListGetInput input)
        {
            try
            {

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

        [HttpPost("Address")]
        public ActionResult InsertFacilityAddress([FromBody] FacilityAddressInsertInput input)
        {
            try
            {

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
    }
 

}
