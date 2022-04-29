using System;
using System.Collections.Generic;
using System.Data;
using ADLAPICore.Library.utilities;
using ADLAPICore.Models.General;
using ADLAPICore.Models.Patient;

namespace ADLAPICore.Library.Patient
{
    public class PatientADLByDayRow
    {
        public Int32 PatientId { get; set; }
        public Int32 SystemADLId { get; set; }
        public string SystemADL { get; set; }
        public string TimeOfDay { get; set; }
        public Int32 ADLPatientLogId { get; set; }
        public string TransactionDate { get; set; }
        public string UserName { get; set; }
    }
    public class PatientADLRow
    {
        public Int32 PatientId { get; set; }
        public Int32 SystemADLId { get; set; }
        public string SystemADL { get; set; }
        public string TimeOfDay { get; set; }
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

    public interface IPatientClass
    {
        public PatientADLByDayResult GetPatientADLListByDay(PatientADLListByDayGetInput input);
        public PatientADLResult GetPatientADLList(PatientADLListGetInput input);
    }

    public class PatientClass : IPatientClass
    {

        public PatientClass()
        { }

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

                var dbResult = lDB.PatientADLListByDay(input);
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
                        PatientId = Convert.ToInt32(row["iduser"]),
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

                var dbResult = lDB.PatientADLList(input);
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

    }

}
