﻿using System;
using System.Collections.Generic;
using System.Data;
using ADLAPICore.Library.utilities;
using ADLAPICore.Models.General;
using ADLAPICore.Models.Patient;
using System.Linq.Dynamic.Core;

namespace ADLAPICore.Library.Patient
{
    public class PatientADLItemRow
    {
        public Int32 PatientId { get; set; }
        public Int32 SystemADLId { get; set; }
        public Int32 DayOfWeek { get; set; }
        public string TimeOfDay { get; set; }
        public string StartDate { get; set; }
    }
    public class PatientADLItemResult
    {
        public ResponseModel response = new ResponseModel();
        public List<PatientADLItemRow> rows = new List<PatientADLItemRow>();
        private PatientADLRow resultRow = new PatientADLRow();

        public PatientADLItemResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }

    public class PatientADLByDayRow
    {
        public Int32 PatientId { get; set; }
        public Int32 SystemADLId { get; set; }
        public string SystemADL { get; set; }
        public string TimeOfDay { get; set; }
        public Int32 ADLPatientLogId { get; set; }
        public string TransactionDate { get; set; }
        public string UserName { get; set; }
        public Int32 ADLPatientId { get; set; }
    }

    public class PatientADLRow
    {
        public Int32 PatientId { get; set; }
        public Int32 SystemADLId { get; set; }
        public string SystemADL { get; set; }
        public string TimeOfDay { get; set; }
    }
    public class PatientFormRow
    {
        public Int32 PatientId { get; set; }
        public Int32 SystemFormId { get; set; }
        public string SystemForm { get; set; }
        public Int32 FormPatientLogId { get; set; }
        public string TransactionDate { get; set; }
        public string UserName { get; set; }
        public Int32 FormFacilityId { get; set; }
    }
    public class PatientFormResult
    {
        public ResponseModel response = new ResponseModel();
        public List<PatientFormRow> rows = new List<PatientFormRow>();
        private PatientFormRow resultRow = new PatientFormRow();

        public PatientFormResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }
    public class PatientADLByDayResult
    {
        public ResponseModel response = new ResponseModel();
        public List<PatientADLByDayRow> rows = new List<PatientADLByDayRow>();
        private PatientADLByDayRow resultRow = new PatientADLByDayRow();

        public PatientADLByDayResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }
    public class PatientADLResult
    {
        public ResponseModel response = new ResponseModel();
        public List<PatientADLRow> rows = new List<PatientADLRow>();
        private PatientADLRow resultRow = new PatientADLRow();

        public PatientADLResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }

    public class PatientADLSummaryRow
    {
        public Int32 PatientId { get; set; }
        public Int32 SystemADLId { get; set; }
        public string SystemADL { get; set; }
        public string ScheduledDays { get; set; }
        public string TimeOfDay { get; set; }
    }
    public class PatientADLSummaryResult
    {
        public ResponseModel response = new ResponseModel();
        public List<PatientADLSummaryRow> rows = new List<PatientADLSummaryRow>();
        private PatientADLRow resultRow = new PatientADLRow();

        public PatientADLSummaryResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }

    public class PatientADLLogSummaryByDateRow
    {
        public string Patient{ get; set; }
        public Int32 PatientId { get; set; }
        public Int32 TotalADLs { get; set; }
        public Int32 IncompleteADLs { get; set; }
        public Int32 LateADLs { get; set; }
        public Decimal PctComplete  { get; set; }
    }
    public class PatientADLLogSummaryByDateResult
    {
        public ResponseModel response = new ResponseModel();
        public List<PatientADLLogSummaryByDateRow> rows = new List<PatientADLLogSummaryByDateRow>();
        private PatientADLRow resultRow = new PatientADLRow();

        public PatientADLLogSummaryByDateResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }
    public class PatientADLDeleteResult
    {
        public ResponseModel response = new ResponseModel();
        public int ReturnCode { get; set; }

        public PatientADLDeleteResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }

    public class PatientADLUpdateResult
    {
        public ResponseModel response = new ResponseModel();
        public int ReturnCode { get; set; }

        public PatientADLUpdateResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }
    public class PatientADLLogInsertResult
    {
        public ResponseModel response = new ResponseModel();
        public int ReturnCode { get; set; }

        public PatientADLLogInsertResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }
    public class PatientFormLogInsertResult
    {
        public ResponseModel response = new ResponseModel();
        public int ReturnCode { get; set; }

        public PatientFormLogInsertResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }
    public class PatientFormStatusResult
    {
        public ResponseModel response = new ResponseModel();
        public int TotalForms;
        public int TotalSigned;
        private PatientFormRow resultRow = new PatientFormRow();

        public PatientFormStatusResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }

    public class PatientADLReportResult
    {
        public ResponseModel response = new ResponseModel();
        public List<Object> rows = new List<Object>();
        //private PatientFormRow resultRow = new PatientFormRow();

        public PatientADLReportResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }
    public interface IPatientClass
    {
        public PatientADLByDayResult GetPatientADLListByDay(PatientADLListByDayGetInput input);
        public PatientADLResult GetPatientADLList(PatientADLListGetInput input);
        public PatientADLSummaryResult GetPatientADLSummaryList(PatientADLListGetInput input);
        public PatientADLLogSummaryByDateResult GetPatientADLLogSummaryListByDate(PatientADLLogSummaryListByDateGetInput input);
        public PatientADLDeleteResult DeletePatientADL(PatientADLDeleteInput input);
        public PatientADLUpdateResult UpdatePatientADL(PatientADLUpdateInput input);
        public PatientADLItemResult GetPatientADLItem(PatientADLItemGetInput input);
        public PatientADLLogInsertResult InsertPatientADLLog(PatientADLLogInsertInput input);
        public PatientFormResult GetPatientFormList(PatientFormListGetInput input);
        public PatientFormLogInsertResult InsertPatientFormLog(PatientFormLogInsertInput input);
        public PatientFormStatusResult GetPatientFormStatus(PatientFormStatusGetInput input);
        public PatientADLReportResult GetPatientADLReport(PatientADLReportGetInput input);
    }

    public class PatientClass : IPatientClass
    {

        public PatientClass()
        { }
        public PatientFormResult GetPatientFormList(PatientFormListGetInput input)
        {

            PatientFormResult result = new PatientFormResult();
            PatientFormRow resultRow = new PatientFormRow();

            try
            {

                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                PatientDBClass lDB = new PatientDBClass();

                var dbResult = lDB.PatientFormListDBCall(input);
                if (dbResult.response.status == ResponseModel.responseFAIL)
                {
                    result.response = dbResult.response;
                    return result;
                }

                resultRow = new PatientFormRow();
                result.rows = new List<PatientFormRow>();

                foreach (DataRow row in dbResult.dt.Rows)
                {
                    resultRow = new PatientFormRow
                    {
                        SystemForm = row["systemForm"].ToString(),
                        FormFacilityId = Convert.ToInt32(row["idformfacility"]),
                        SystemFormId = Convert.ToInt32(row["idsystemform"]),
                        FormPatientLogId = Convert.ToInt32(row["idformpatientlog"]),
                        TransactionDate = row["transactiondate"].ToString(),
                        UserName = row["userName"].ToString()
                    };

                    result.rows.Add(resultRow);

                }

                // now the result
                result.response.status = ResponseModel.responseSUCCESS;
                result.response.errorMessage = new List<string>();

                return result;
            }

            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);

                return new PatientFormResult { response = result.response };
            }
        }
        private ResponseModel Validate(PatientFormListGetInput input)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(input.inApiToken))
                {
                    throw new ApplicationException("API Token is required for this method.");
                }

                if (input.inPatientId <= 0)
                {
                    throw new ApplicationException("Patient Id must be greater than 0.");
                }

                //DateTime temp;
                //if (DateTime.TryParse(input.inTransactionDate.to, out temp) == false)
                //{
                //    throw new ApplicationException("Must pass a valid transaction date.");
                //}
                return result;
            }
            catch (Exception ex)
            {
                result.status = ResponseModel.responseFAIL;
                result.errorMessage = new List<string>();
                result.errorMessage.Add(ex.Message);
                return result;
            }
        }
        public PatientADLByDayResult GetPatientADLListByDay(PatientADLListByDayGetInput input)
        {

            PatientADLByDayResult result = new PatientADLByDayResult();
            PatientADLByDayRow resultRow = new PatientADLByDayRow();

            try
            {

                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                PatientDBClass lDB = new PatientDBClass();

                var dbResult = lDB.PatientADLListByDayDBCall(input);
                if (dbResult.response.status == ResponseModel.responseFAIL)
                {
                    result.response = dbResult.response;
                    return result;
                }

                resultRow = new PatientADLByDayRow();
                result.rows = new List<PatientADLByDayRow>();

                foreach (DataRow row in dbResult.dt.Rows)
                {
                    resultRow = new PatientADLByDayRow
                    {
                        SystemADL = row["systemADL"].ToString(),
                        ADLPatientId = Convert.ToInt32(row["idadlpatient"]),
                        SystemADLId = Convert.ToInt32(row["idsystemadl"]),
                        TimeOfDay = row["timeofday"].ToString(),
                        ADLPatientLogId = Convert.ToInt32(row["idadlpatientlog"]),
                        TransactionDate = row["transactiondate"].ToString(),
                        UserName = row["userName"].ToString()
                    };

                    result.rows.Add(resultRow);

                }

                // now the result
                result.response.status = ResponseModel.responseSUCCESS;
                result.response.errorMessage = new List<string>();

                return result;
            }

            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);

                return new PatientADLByDayResult { response = result.response };
            }
        }
        private ResponseModel Validate(PatientADLListByDayGetInput input)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(input.inApiToken))
                {
                    throw new ApplicationException("API Token is required for this method.");
                }

                if (input.inPatientId <= 0)
                {
                    throw new ApplicationException("Patient Id must be greater than 0.");
                }

                //DateTime temp;
                //if (DateTime.TryParse(input.inTransactionDate.to, out temp) == false)
                //{
                //    throw new ApplicationException("Must pass a valid transaction date.");
                //}
                return result;
            }
            catch (Exception ex)
            {
                result.status = ResponseModel.responseFAIL;
                result.errorMessage = new List<string>();
                result.errorMessage.Add(ex.Message);
                return result;
            }
        }
        
        public PatientADLResult GetPatientADLList(PatientADLListGetInput input)
        {

            PatientADLResult result = new PatientADLResult();
            PatientADLRow resultRow = new PatientADLRow();

            try
            {

                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                PatientDBClass lDB = new PatientDBClass();

                var dbResult = lDB.PatientADLListDBCall(input);
                if (dbResult.response.status == ResponseModel.responseFAIL)
                {
                    result.response = dbResult.response;
                    return result;
                }

                resultRow = new PatientADLRow();
                result.rows = new List<PatientADLRow>();

                foreach (DataRow row in dbResult.dt.Rows)
                {
                    resultRow = new PatientADLRow
                    {
                        SystemADL = row["systemADL"].ToString(),
                        PatientId = Convert.ToInt32(row["iduser"]),
                        SystemADLId = Convert.ToInt32(row["idsystemadl"]),
                        TimeOfDay = row["timeofday"].ToString()
                    };

                    result.rows.Add(resultRow);

                }

                // now the result
                result.response.status = ResponseModel.responseSUCCESS;
                result.response.errorMessage = new List<string>();

                return result;
            }

            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);

                return new PatientADLResult { response = result.response };
            }
        }
        private ResponseModel Validate(PatientADLListGetInput input)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(input.inApiToken))
                {
                    throw new ApplicationException("API Token is required for this method.");
                }

                if (input.inPatientId <= 0)
                {
                    throw new ApplicationException("Patient Id must be greater than 0.");
                }

                return result;
            }
            catch (Exception ex)
            {
                result.status = ResponseModel.responseFAIL;
                result.errorMessage = new List<string>();
                result.errorMessage.Add(ex.Message);
                return result;
            }
        }

        public PatientADLSummaryResult GetPatientADLSummaryList(PatientADLListGetInput input)
        {

            PatientADLSummaryResult result = new PatientADLSummaryResult();
            PatientADLSummaryRow resultRow = new PatientADLSummaryRow();

            try
            {

                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                PatientDBClass lDB = new PatientDBClass();

                var dbResult = lDB.PatientADLListDBCall(input);
                if (dbResult.response.status == ResponseModel.responseFAIL)
                {
                    result.response = dbResult.response;
                    return result;
                }

                resultRow = new PatientADLSummaryRow();
                result.rows = new List<PatientADLSummaryRow>();
                
                Dictionary<int, PatientADLSummaryRow> dSummary = new Dictionary<int, PatientADLSummaryRow>();

                foreach (DataRow row in dbResult.dt.Rows)
                {
                    resultRow = new PatientADLSummaryRow
                    {
                        SystemADL = row["systemADL"].ToString(),
                        PatientId = Convert.ToInt32(row["iduser"]),
                        SystemADLId = Convert.ToInt32(row["idsystemadl"]),
                        TimeOfDay = row["timeofday"].ToString(),
                        ScheduledDays = String.Empty
                    };

                    var times = String.Empty;

                    if (dSummary.ContainsKey(Convert.ToInt32(row["idsystemadl"])) == false)
                    {
                        resultRow.ScheduledDays = ConvertDay(Convert.ToInt32(row["dayofweek"]), String.Empty);
                        dSummary.Add(Convert.ToInt32(row["idsystemadl"]), resultRow);
                    }
                    else
                    {
                        resultRow = dSummary[Convert.ToInt32(row["idsystemadl"])];
                        resultRow.ScheduledDays = ConvertDay(Convert.ToInt32(row["dayofweek"]), resultRow.ScheduledDays);

                        dSummary[Convert.ToInt32(row["idsystemadl"])] = resultRow;
                    }

                }

                foreach (KeyValuePair<int, PatientADLSummaryRow> r in dSummary)
                {
                    result.rows.Add(r.Value);
                }

                // now the result
                result.response.status = ResponseModel.responseSUCCESS;
                result.response.errorMessage = new List<string>();

                return result;
            }

            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);

                return new PatientADLSummaryResult { response = result.response };
            }
        }

        public PatientADLLogSummaryByDateResult GetPatientADLLogSummaryListByDate(PatientADLLogSummaryListByDateGetInput input)
        {

            PatientADLLogSummaryByDateResult result = new PatientADLLogSummaryByDateResult();
            PatientADLLogSummaryByDateRow resultRow = new PatientADLLogSummaryByDateRow();

            try
            {

                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                PatientDBClass lDB = new PatientDBClass();

                var dbResult = lDB.PatientADLLogSummaryListByDateDBCall(input);
                if (dbResult.response.status == ResponseModel.responseFAIL)
                {
                    result.response = dbResult.response;
                    return result;
                }

                resultRow = new PatientADLLogSummaryByDateRow();
                result.rows = new List<PatientADLLogSummaryByDateRow>();

                foreach (DataRow row in dbResult.dt.Rows)
                {
                    resultRow = new PatientADLLogSummaryByDateRow
                    {
                        Patient = row["patient"].ToString(),
                        TotalADLs = Convert.ToInt32(row["ADLs"]),
                        IncompleteADLs = Convert.ToInt32(row["ADLsNotCompleted"]),
                        LateADLs = Convert.ToInt32(row["ADLsLate"]),
                        PatientId = Convert.ToInt32(row["patientId"]),
                        PctComplete = 0
                    };

                    // calculate pct complete
                    if (resultRow.TotalADLs == resultRow.IncompleteADLs || 
                        resultRow.TotalADLs == 0)
                    { 
                        resultRow.PctComplete = 0;
                    }
                    else if (resultRow.IncompleteADLs == 0)
                    {
                        resultRow.PctComplete = 100;
                    }
                    else
                    {
                        resultRow.PctComplete = (int) (100 * (decimal)(((decimal)resultRow.TotalADLs - (decimal)resultRow.IncompleteADLs) / (decimal)resultRow.TotalADLs));
                    }
                    result.rows.Add(resultRow);

                }

                // now the result
                result.response.status = ResponseModel.responseSUCCESS;
                result.response.errorMessage = new List<string>();

                return result;
            }

            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);

                return new PatientADLLogSummaryByDateResult { response = result.response };
            }
        }
        private ResponseModel Validate(PatientADLLogSummaryListByDateGetInput input)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(input.inApiToken))
                {
                    throw new ApplicationException("API Token is required for this method.");
                }

                if (input.inFacilityId <= 0)
                {
                    throw new ApplicationException("Facility Id must be greater than 0.");
                }

                return result;
            }
            catch (Exception ex)
            {
                result.status = ResponseModel.responseFAIL;
                result.errorMessage = new List<string>();
                result.errorMessage.Add(ex.Message);
                return result;
            }
        }

        public PatientADLDeleteResult DeletePatientADL(PatientADLDeleteInput input)
        {

            PatientADLDeleteResult result = new PatientADLDeleteResult();

            try
            {
                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                PatientDBClass lDB = new PatientDBClass();

                var dbResult = lDB.DeletePatientADLDBCall(input);
                if (dbResult.response.status == ResponseModel.responseFAIL)
                {
                    result.response = dbResult.response;
                    return result;
                }

                foreach (DataRow row in dbResult.dt.Rows)
                {
                    result.ReturnCode = Convert.ToInt32(row["returnCode"]);
                }

                if (result.ReturnCode < 0)
                {
                    throw new ApplicationException(DBCodes.Get(result.ReturnCode));
                }

                // now the result
                result.response.status = ResponseModel.responseSUCCESS;
                result.response.errorMessage = new List<string>();

                return result;
            }

            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);
                return new PatientADLDeleteResult { response = result.response };
            }
        }
        private ResponseModel Validate(PatientADLDeleteInput input)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(input.inApiToken))
                {
                    throw new ApplicationException("API Token is required for this method.");
                }

                if (input.inPatientId <= 0)
                {
                    throw new ApplicationException("Patient Id must be greater than 0.");
                }

                if (input.inSystemADLId <= 0)
                {
                    throw new ApplicationException("System ADL Id must be greater than 0.");
                }
                return result;
            }
            catch (Exception ex)
            {
                result.status = ResponseModel.responseFAIL;
                result.errorMessage = new List<string>();
                result.errorMessage.Add(ex.Message);
                return result;
            }
        }

        public PatientADLUpdateResult UpdatePatientADL(PatientADLUpdateInput input)
        {

            PatientADLUpdateResult result = new PatientADLUpdateResult();

            try
            {
                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                PatientDBClass lDB = new PatientDBClass();
                foreach (PatientADLUpdateRow r in input.rows)
                {
                    // build DB Row
                    PatientADLUpdateDBRow dr = new PatientADLUpdateDBRow();

                    dr.inPatientId = input.inPatientId;
                    dr.inApiToken = input.inApiToken;
                    dr.inSystemADLId = input.inSystemADLId;
                    // items in loop
                    dr.inDayOfTheWeek = r.inDayOfTheWeek;
                    dr.inDelete = (r.inDelete == true ? 1 : 0);
                    dr.inTimeOfDay = " " + r.inTimeOfDay.Replace(":", ",");

                    var dbResult = lDB.UpdatePatientADLDBCall(dr);

                    if (dbResult.response.status == ResponseModel.responseFAIL)
                    {
                        result.response = dbResult.response;
                        return result;
                    }

                    foreach (DataRow row in dbResult.dt.Rows)
                    {
                        result.ReturnCode = Convert.ToInt32(row["returnCode"]);
                    }

                    if (result.ReturnCode < 0)
                    {
                        throw new ApplicationException(DBCodes.Get(result.ReturnCode));
                    }
                }

                // now the result
                result.response.status = ResponseModel.responseSUCCESS;
                result.response.errorMessage = new List<string>();

                return result;
            }

            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);
                return new PatientADLUpdateResult { response = result.response };
            }
        }
        private ResponseModel Validate(PatientADLUpdateInput input)
        {
            ResponseModel result = new ResponseModel();

            try
            {               

                if (String.IsNullOrEmpty(input.inApiToken))
                {
                    throw new ApplicationException("API Token is required for this method.");
                }

                if (input.inPatientId <= 0)
                {
                    throw new ApplicationException("Patient Id must be greater than 0.");
                }

                if (input.inSystemADLId <= 0)
                {
                    throw new ApplicationException("System ADL Id must be greater than 0.");
                }

                // validate all rows...
                foreach (PatientADLUpdateRow r in input.rows)
                {
                    if (r.inDayOfTheWeek <= 0 || r.inDayOfTheWeek > 7)
                    {
                        throw new ApplicationException("Day of the Week must be between 1 and 7.");
                    }

                    if (r.inDelete == false)
                    {
                        if (String.IsNullOrEmpty(r.inTimeOfDay))
                        {
                            throw new ApplicationException("Time of the Day is required for this method.");
                        }
                    }
                }
                return result;
            }
            catch (Exception ex)
            {
                result.status = ResponseModel.responseFAIL;
                result.errorMessage = new List<string>();
                result.errorMessage.Add(ex.Message);
                return result;
            }
        }

        public PatientADLItemResult GetPatientADLItem(PatientADLItemGetInput input)
        {

            PatientADLItemResult result = new PatientADLItemResult();
            PatientADLItemRow resultRow = new PatientADLItemRow();

            try
            {

                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                PatientDBClass lDB = new PatientDBClass();

                var dbResult = lDB.PatientADLItemDBCall(input);
                if (dbResult.response.status == ResponseModel.responseFAIL)
                {
                    result.response = dbResult.response;
                    return result;
                }

                resultRow = new PatientADLItemRow();
                result.rows = new List<PatientADLItemRow>();

                foreach (DataRow row in dbResult.dt.Rows)
                {
                    resultRow = new PatientADLItemRow
                    {
                        PatientId = Convert.ToInt32(row["iduser"]),
                        SystemADLId = Convert.ToInt32(row["idsystemadl"]),
                        TimeOfDay = row["timeofday"].ToString(),
                        DayOfWeek = Convert.ToInt32(row["dayofweek"]),
                        StartDate = row["StartDate"].ToString()
                    };

                    result.rows.Add(resultRow);

                }

                // now the result
                result.response.status = ResponseModel.responseSUCCESS;
                result.response.errorMessage = new List<string>();

                return result;
            }

            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);

                return new PatientADLItemResult { response = result.response };
            }
        }
        private ResponseModel Validate(PatientADLItemGetInput input)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(input.inApiToken))
                {
                    throw new ApplicationException("API Token is required for this method.");
                }

                if (input.inPatientId <= 0)
                {
                    throw new ApplicationException("Patient Id must be greater than 0.");
                }

                if (input.inSystemADLId <= 0)
                {
                    throw new ApplicationException("System ADL Id must be greater than 0.");
                }

                return result;
            }
            catch (Exception ex)
            {
                result.status = ResponseModel.responseFAIL;
                result.errorMessage = new List<string>();
                result.errorMessage.Add(ex.Message);
                return result;
            }
        }


        public PatientADLLogInsertResult InsertPatientADLLog(PatientADLLogInsertInput input)
        {

            PatientADLLogInsertResult result = new PatientADLLogInsertResult();

            try
            {
                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                PatientDBClass lDB = new PatientDBClass();

                var dbResult = lDB.InsertPatientADLLogDBCall(input);

                if (dbResult.response.status == ResponseModel.responseFAIL)
                {
                    result.response = dbResult.response;
                    return result;
                }

                foreach (DataRow row in dbResult.dt.Rows)
                {
                    result.ReturnCode = Convert.ToInt32(row["returnCode"]);
                }

                if (result.ReturnCode < 0)
                {
                    throw new ApplicationException(DBCodes.Get(result.ReturnCode));
                }
                

                // now the result
                result.response.status = ResponseModel.responseSUCCESS;
                result.response.errorMessage = new List<string>();

                return result;
            }

            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);
                return new PatientADLLogInsertResult { response = result.response };
            }
        }
        private ResponseModel Validate(PatientADLLogInsertInput input)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(input.inApiToken))
                {
                    throw new ApplicationException("API Token is required for this method.");
                }

                if (input.inUserId <= 0)
                {
                    throw new ApplicationException("User Id must be greater than 0.");
                }

                if (input.inADLPatientId <= 0)
                {
                    throw new ApplicationException("ADL Patient Id must be greater than 0.");
                }

                return result;
            }
            catch (Exception ex)
            {
                result.status = ResponseModel.responseFAIL;
                result.errorMessage = new List<string>();
                result.errorMessage.Add(ex.Message);
                return result;
            }
        }


        public PatientFormLogInsertResult InsertPatientFormLog(PatientFormLogInsertInput input)
        {

            PatientFormLogInsertResult result = new PatientFormLogInsertResult();

            try
            {
                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                PatientDBClass lDB = new PatientDBClass();

                var dbResult = lDB.InsertPatientFormLogDBCall(input);

                if (dbResult.response.status == ResponseModel.responseFAIL)
                {
                    result.response = dbResult.response;
                    return result;
                }

                foreach (DataRow row in dbResult.dt.Rows)
                {
                    result.ReturnCode = Convert.ToInt32(row["returnCode"]);
                }

                if (result.ReturnCode < 0)
                {
                    throw new ApplicationException(DBCodes.Get(result.ReturnCode));
                }


                // now the result
                result.response.status = ResponseModel.responseSUCCESS;
                result.response.errorMessage = new List<string>();

                return result;
            }

            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);
                return new PatientFormLogInsertResult { response = result.response };
            }
        }
        private ResponseModel Validate(PatientFormLogInsertInput input)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(input.inApiToken))
                {
                    throw new ApplicationException("API Token is required for this method.");
                }

                if (input.inUserId <= 0)
                {
                    throw new ApplicationException("User Id must be greater than 0.");
                }

                if (input.inPatientId <= 0)
                {
                    throw new ApplicationException("Patient Id must be greater than 0.");
                }

                if (input.inFormFacilityId <= 0)
                {
                    throw new ApplicationException("Form Facility Id must be greater than 0.");
                }

                return result;
            }
            catch (Exception ex)
            {
                result.status = ResponseModel.responseFAIL;
                result.errorMessage = new List<string>();
                result.errorMessage.Add(ex.Message);
                return result;
            }
        }

        public PatientFormStatusResult GetPatientFormStatus(PatientFormStatusGetInput input)
        {

            PatientFormStatusResult result = new PatientFormStatusResult();

            try
            {

                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                PatientDBClass lDB = new PatientDBClass();

                var dbResult = lDB.PatientFormStatusDBCall(input);
                if (dbResult.response.status == ResponseModel.responseFAIL)
                {
                    result.response = dbResult.response;
                    return result;
                }

                foreach (DataRow row in dbResult.dt.Rows)
                { 
                    result.TotalForms = Convert.ToInt32(row["TotalForms"]);
                    result.TotalSigned = Convert.ToInt32(row["TotalSigned"]);
                }

                // now the result
                result.response.status = ResponseModel.responseSUCCESS;
                result.response.errorMessage = new List<string>();

                return result;
            }

            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);

                return new PatientFormStatusResult { response = result.response };
            }
        }
        private ResponseModel Validate(PatientFormStatusGetInput input)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(input.inApiToken))
                {
                    throw new ApplicationException("API Token is required for this method.");
                }

                if (input.inPatientId <= 0)
                {
                    throw new ApplicationException("Patient Id must be greater than 0.");
                }

                //DateTime temp;
                //if (DateTime.TryParse(input.inTransactionDate.to, out temp) == false)
                //{
                //    throw new ApplicationException("Must pass a valid transaction date.");
                //}
                return result;
            }
            catch (Exception ex)
            {
                result.status = ResponseModel.responseFAIL;
                result.errorMessage = new List<string>();
                result.errorMessage.Add(ex.Message);
                return result;
            }
        }

        public PatientADLReportResult GetPatientADLReport(PatientADLReportGetInput input)
        {

            PatientADLReportResult result = new PatientADLReportResult();

            try
            {

                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                PatientDBClass lDB = new PatientDBClass();

                var dbResult = lDB.PatientADLReportDBCall(input);
                if (dbResult.response.status == ResponseModel.responseFAIL)
                {
                    result.response = dbResult.response;
                    return result;
                }

                Dictionary<string, string> cols = new Dictionary<string, string>();
                ClassBuilder dc = new ClassBuilder();
                var output = new Object();

                foreach (DataRow row in dbResult.dt.Rows)
                {
                    foreach (DataColumn col in dbResult.dt.Columns)
                    {
                        cols[col.ColumnName] = row[col.ColumnName].ToString();
                    }
                    output = dc.GetTheClass(cols);
                    result.rows.Add(output);
                }

                // now the result
                result.response.status = ResponseModel.responseSUCCESS;
                result.response.errorMessage = new List<string>();

                return result;
            }

            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);

                return new PatientADLReportResult { response = result.response };
            }
        }
        private ResponseModel Validate(PatientADLReportGetInput input)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(input.inApiToken))
                {
                    throw new ApplicationException("API Token is required for this method.");
                }

                if (input.inPatientId < 0)
                {
                    throw new ApplicationException("Patient Id must be greater than 0.");
                }

                //DateTime temp;
                //if (DateTime.TryParse(input.inTransactionDate.to, out temp) == false)
                //{
                //    throw new ApplicationException("Must pass a valid transaction date.");
                //}
                return result;
            }
            catch (Exception ex)
            {
                result.status = ResponseModel.responseFAIL;
                result.errorMessage = new List<string>();
                result.errorMessage.Add(ex.Message);
                return result;
            }
        }


        /* private */
        private string ConvertDay(int inDay, string currentVal)
        {
            var retData = "";

            switch (inDay)
            {
                case 1:
                    retData = "Su";
                    break;
                case 2:
                    retData = "M";
                    break;
                case 3:
                    retData = "Tu";
                    break;
                case 4:
                    retData = "W";
                    break;
                case 5:
                    retData = "Th";
                    break;
                case 6:
                    retData = "F";
                    break;
                case 7:
                    retData = "Sa";
                    break;

            }

            return currentVal + (currentVal.Length == 0 ? String.Empty : ", ") + retData;
        }
    }

}
