using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Net.Mime;
using ADLAPICore.Models.State;
using ADLAPICore.Library.Base;
using ADLAPICore.Library.State;
using ADLAPICore.Models.General;
using System.Collections.Generic;
using ADLAPICore.Library.utilities;
using ADLAPICore.Library.Patient;
using ADLAPICore.Models.Patient;

namespace ADLAPICore.Controllers.Patient
{

    [ApiController]
    [Route("[controller]")]
 
    public class PatientController : ControllerBase
    {
        private readonly ILogger<PatientController> _logger;
        private readonly IPatientClass _controllerClass;

        public PatientController(ILogger<PatientController> logger,
                                    IPatientClass controllerClass)
        {
            _logger = logger;
            _controllerClass = controllerClass;
        }

        [HttpGet("ADLListByDay")]
        public ActionResult ADLListByDay([FromQuery] PatientADLListByDayGetInput input)
        {
            try
            {

                //----------------------------------
                // Clean inputs using reflection
                //----------------------------------
                var cleanInput = (PatientADLListByDayGetInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.GetPatientADLListByDay(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {

                PatientADLByDayResult r = new PatientADLByDayResult();
                r.response = General.buildError(ex.Message);
      
                return Content(JsonConvert.SerializeObject(r), MediaTypeNames.Application.Json);
            }
        }

        [HttpGet("ADLList")]
        public ActionResult ADLList([FromQuery] PatientADLListGetInput input)
        {
            try
            {

                //----------------------------------
                // Clean inputs using reflection
                //----------------------------------
                var cleanInput = (PatientADLListGetInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.GetPatientADLList(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {

                PatientADLResult r = new PatientADLResult();
                r.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(r), MediaTypeNames.Application.Json);
            }
        }

        [HttpGet("ADLListSummary")]
        public ActionResult ADLListSummary([FromQuery] PatientADLListGetInput input)
        {
            try
            {

                //----------------------------------
                // Clean inputs using reflection
                //----------------------------------
                var cleanInput = (PatientADLListGetInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.GetPatientADLSummaryList(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {

                PatientADLSummaryResult r = new PatientADLSummaryResult();
                r.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(r), MediaTypeNames.Application.Json);
            }
        }

        [HttpGet("ADLLogSummaryListByDate")]
        public ActionResult ADLLogSummaryListByDate([FromQuery] PatientADLLogSummaryListByDateGetInput input)
        {
            try
            {

                //----------------------------------
                // Clean inputs using reflection
                //----------------------------------
                var cleanInput = (PatientADLLogSummaryListByDateGetInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.GetPatientADLLogSummaryListByDate(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {

                PatientADLLogSummaryByDateResult r = new PatientADLLogSummaryByDateResult();
                r.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(r), MediaTypeNames.Application.Json);
            }
        }

        [HttpDelete("ADL")]
        public ActionResult DeleteADL([FromBody] PatientADLDeleteInput input)
        {
            try
            {

                //----------------------------------
                // Clean inputs using reflection
                //----------------------------------
                var cleanInput = (PatientADLDeleteInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.DeletePatientADL(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {

                PatientADLDeleteResult r = new PatientADLDeleteResult();
                r.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(r), MediaTypeNames.Application.Json);
            }
        }

        [HttpPut("ADL")]
        public ActionResult UpdateADL([FromBody] PatientADLUpdateInput input)
        {
            try
            {

                //var input = rows;


                //----------------------------------
                // Clean inputs using reflection
                //----------------------------------
                var cleanInput = (PatientADLUpdateInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.UpdatePatientADL(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {

                PatientADLUpdateResult r = new PatientADLUpdateResult();
                r.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(r), MediaTypeNames.Application.Json);
            }
        }

        [HttpGet("ADLItem")]
        public ActionResult ADLItem([FromQuery] PatientADLItemGetInput input)
        {
            try
            {

                //----------------------------------
                // Clean inputs using reflection
                //----------------------------------
                var cleanInput = (PatientADLItemGetInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.GetPatientADLItem(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {

                PatientADLItemResult r = new PatientADLItemResult();
                r.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(r), MediaTypeNames.Application.Json);
            }
        }

        [HttpPost("ADLLog")]
        public ActionResult ADLLog([FromBody] PatientADLLogInsertInput input)
        {
            try
            {

                //var input = rows;


                //----------------------------------
                // Clean inputs using reflection
                //----------------------------------
                var cleanInput = (PatientADLLogInsertInput)genericLogic.cleanAllTextFromObject(input);

                var result = _controllerClass.InsertPatientADLLog(cleanInput);

                return Content(JsonConvert.SerializeObject(result), MediaTypeNames.Application.Json);
            }

            catch (Exception ex)
            {

                PatientADLLogInsertResult r = new PatientADLLogInsertResult();
                r.response = General.buildError(ex.Message);

                return Content(JsonConvert.SerializeObject(r), MediaTypeNames.Application.Json);
            }
        }


    }
}
