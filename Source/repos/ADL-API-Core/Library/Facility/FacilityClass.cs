using System;
using System.Collections.Generic;
using System.Data;
using ADLAPICore.Models.General;
using ADLAPICore.Library.utilities;
using ADLAPICore.Models.Facility;
using ADLAPICore.Library.Patient;

namespace ADLAPICore.Library.Facility
{
    public class FacilityResultRow
    {
        public Int32 FacilityId { get; set; }
        public string Facility { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public Int32 StateId { get; set; }
        public string Country { get; set; } 
        public string Owner { get; set; }   
        public Int32 UserId { get; set; }
    }
    
    public class FacilityADLResultRow
    {
        public Int32 FacilityId { get; set; }
        public string SystemADL { get; set; }
        public Int32 SystemADLId { get; set; }
    }
    public class FacilityADLResult
    {
        public ResponseModel response = new ResponseModel();
        public List<FacilityADLResultRow> rows = new List<FacilityADLResultRow>();
        private FacilityADLResultRow resultRow = new FacilityADLResultRow();

        public FacilityADLResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }
    public class FacilityFormResultRow
    {
        public Int32 FacilityId { get; set; }
        public string SystemForm { get; set; }
        public Int32 SystemFormId { get; set; }
    }
    public class FacilityFormResult
    {
        public ResponseModel response = new ResponseModel();
        public List<FacilityFormResultRow> rows = new List<FacilityFormResultRow>();
        private FacilityFormResultRow resultRow = new FacilityFormResultRow();

        public FacilityFormResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }

    public class FacilityResult
    {
        public ResponseModel response = new ResponseModel();
        public Int32 FacilityId { get; set; }
        public string Facility { get; set; }

        public FacilityResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }
    public class FacilityListResult
    {
        public ResponseModel response = new ResponseModel();
        public List<FacilityResultRow> rows = new List<FacilityResultRow>();
        private FacilityResultRow resultRow = new FacilityResultRow();

        public FacilityListResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }

    public class FacilityPutResult
    {
        public ResponseModel response = new ResponseModel();
        public int ReturnCode { get; set; }

        public FacilityPutResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }
    public class FacilityPostResult
    {
        public ResponseModel response = new ResponseModel();
        public int ReturnCode { get; set; }

        public FacilityPostResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }

    public class FacilityAddressPostResult
    {
        public ResponseModel response = new ResponseModel();
        public int ReturnCode { get; set; }

        public FacilityAddressPostResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }
    public class FacilityAddressResult
    {
        public ResponseModel response = new ResponseModel();
        public Int32 AddressId { get; set; }
        public Int32 FacilityId { get; set; }

        public FacilityAddressResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }
    public class FacilityEntireListResult
    {
        public ResponseModel response = new ResponseModel();
        public List<FacilityResultRow> rows = new List<FacilityResultRow>();
        private FacilityResultRow resultRow = new FacilityResultRow();

        public FacilityEntireListResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }
    public class FacilityDashboardDataByDayResult
    {
        public ResponseModel response = new ResponseModel();
        public Int32 ADLs { get; set; }
        public Int32 ADLsNotCompleted { get; set; }
        public Int32 ADLsLate { get; set; }

        public FacilityDashboardDataByDayResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }
    public class FacilityADLLogByDayResult
    {
        public ResponseModel response = new ResponseModel();
        public List<FacilityADLLogByDayRow>  rows { get; set; }

        public FacilityADLLogByDayResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }
    public class FacilityADLLogByDayRow
    {
        public int ADLPatientId {  get;set; }
		public int UserId { get; set; }
        public int PatientId { get; set; }
        public int SystemADLId { get; set; }
        public string SystemADL { get; set; }
		public string TimeOfDay { get; set; }
		public int ADLPatientLogId { get; set; }
        public string TransactionDate { get; set; }
		public string UserName { get; set; }
		public string Patient { get; set; }
    }

    public interface IFacilityClass
    {
        public FacilityFormResult GetFacilityFormList(FacilityFormListGetInput input);
        public FacilityADLResult GetFacilityADLList(FacilityADLListGetInput input);
        public FacilityResult GetFacility(FacilityGetInput input);
        public FacilityListResult GetFacilityList(FacilityListGetInput input);
        public FacilityListResult GetFacilityOwnerList(FacilityOwnerListGetInput input);

        public FacilityPostResult InsertFacilityADL(FacilityADLInsertInput input);
        public FacilityPutResult DeleteFacilityADL(FacilityADLDeleteInput input);

        public FacilityPostResult InsertFacilityForm(FacilityFormInsertInput input);
        public FacilityPutResult DeleteFacilityForm(FacilityFormDeleteInput input);

        public FacilityAddressPostResult InsertFacilityAddress(FacilityAddressInsertInput input);
        public FacilityAddressResult GetFacilityAddress(FacilityAddressGetInput input);
        public FacilityPostResult InsertFacility(FacilityInsertInput input);
        public FacilityPutResult UpdateFacility(FacilityUpdateInput input);
        public FacilityEntireListResult GetFacilityEntireList(FacilityEntireListGetInput input);
        public FacilityDashboardDataByDayResult GetFacilityDashboardDataByDay(FacilityDashboardDataByDayGetInput input);
        public FacilityADLLogByDayResult GetFacilityADLLogByDay(FacilityADLLogByDayGetInput input);
    }

    public class FacilityClass : IFacilityClass
    {
            

        public FacilityClass()
        { }
        public FacilityFormResult GetFacilityFormList(FacilityFormListGetInput input)
        {

            FacilityFormResult result = new FacilityFormResult();
            FacilityFormResultRow resultRow = new FacilityFormResultRow();

            try
            {

                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                FacilityDBClass lDB = new FacilityDBClass();

                var dbResult = lDB.FacilityFormListDBCall(input);
                if (dbResult.response.status == ResponseModel.responseFAIL)
                {
                    result.response = dbResult.response;
                    return result;
                }

                resultRow = new FacilityFormResultRow();
                result.rows = new List<FacilityFormResultRow>();


                foreach (DataRow row in dbResult.dt.Rows)
                {
                    resultRow = new FacilityFormResultRow
                    {
                        SystemForm = row["systemForm"].ToString(),
                        SystemFormId = Convert.ToInt32(row["idsystemForm"]),
                        FacilityId = Convert.ToInt32(row["idfacility"])

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
                return new FacilityFormResult { response = result.response };
            }
        }
        private ResponseModel Validate(FacilityFormListGetInput input)
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
                result = General.buildError(ex.Message);
                return result;
            }
        }


        public FacilityADLResult GetFacilityADLList(FacilityADLListGetInput input)
        {

            FacilityADLResult result = new FacilityADLResult();
            FacilityADLResultRow resultRow = new FacilityADLResultRow();

            try
            {

                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                FacilityDBClass lDB = new FacilityDBClass();

                var dbResult = lDB.FacilityADLListDBCall(input);
                if (dbResult.response.status == ResponseModel.responseFAIL)
                {
                    result.response = dbResult.response;
                    return result;
                }

                resultRow = new FacilityADLResultRow();
                result.rows = new List<FacilityADLResultRow>();


                foreach (DataRow row in dbResult.dt.Rows)
                {
                    resultRow = new FacilityADLResultRow
                    {
                        SystemADL = row["systemadl"].ToString(),
                        SystemADLId = Convert.ToInt32(row["idsystemadl"]),
                        FacilityId = Convert.ToInt32(row["idfacility"])

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
                return new FacilityADLResult { response = result.response };
            }
        }
        private ResponseModel Validate(FacilityADLListGetInput input)
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
                result = General.buildError(ex.Message);
                return result;
            }
        }

        public FacilityListResult GetFacilityOwnerList(FacilityOwnerListGetInput input)
        {

            FacilityListResult result = new FacilityListResult();
            FacilityResultRow resultRow = new FacilityResultRow();

            try
            {

                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                FacilityDBClass lDB = new FacilityDBClass();

                var dbResult = lDB.FacilityOwnerListDBCall(input);
                if (dbResult.response.status == ResponseModel.responseFAIL)
                {
                    result.response = dbResult.response;
                    return result;
                }

                resultRow = new FacilityResultRow();
                result.rows = new List<FacilityResultRow>();

                var holdFacilityid = -1;

                foreach (DataRow row in dbResult.dt.Rows)
                {

                    resultRow = new FacilityResultRow
                    {
                        Facility = row["facility"].ToString(),
                        FacilityId = Convert.ToInt32(row["idFacility"]),
                        Address1 = row["Address1"].ToString(),
                        Address2 = row["Address2"].ToString(),
                        City = row["City"].ToString(),
                        State = row["StateAbbreviation"].ToString(),
                        Country = row["CountryAbbreviation"].ToString(),
                        Owner = row["OwnerName"].ToString(),
                        UserId = Convert.ToInt32(row["idUser"])

                    };

                    // this is here so we don't add multiple 
                    // facility owner lines
                    // set prior to Multiple / user -1
                    if (holdFacilityid == resultRow.FacilityId)
                    {
                        result.rows[result.rows.Count - 1].UserId = -1;
                        result.rows[result.rows.Count - 1].Owner = "Multiple";
                    }
                    else
                    {
                        result.rows.Add(resultRow);
                    }

                    holdFacilityid = resultRow.FacilityId;

                }


                // now the result
                result.response.status = ResponseModel.responseSUCCESS;
                result.response.errorMessage = new List<string>();

                return result;
            }

            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);
                return new FacilityListResult { response = result.response };
            }
        }
        private ResponseModel Validate(FacilityOwnerListGetInput input)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(input.inApiToken))
                {
                    throw new ApplicationException("API Token is required for this method.");
                }

                if (input.inFacilityId <=0)
                {
                    throw new ApplicationException("Facility Id must be greater than 0.");
                }
                return result;
            }
            catch (Exception ex)
            {
                result = General.buildError(ex.Message);
                return result;
            }
        }

        public FacilityListResult GetFacilityList(FacilityListGetInput input)
            {

                FacilityListResult result = new FacilityListResult();
                FacilityResultRow resultRow = new FacilityResultRow();

                try
                {

                    result.response = Validate(input);

                    if (result.response.status == ResponseModel.responseFAIL)
                    {
                        return result;
                    }

                    FacilityDBClass lDB = new FacilityDBClass();

                    var dbResult = lDB.FacilityListDBCall(input);
                    if (dbResult.response.status == ResponseModel.responseFAIL)
                    {
                        result.response = dbResult.response;
                        return result;
                    }

                    resultRow = new FacilityResultRow();
                    result.rows = new List<FacilityResultRow>();

                    var holdFacilityid = -1;
    
                    foreach (DataRow row in dbResult.dt.Rows)
                    {

                        resultRow = new FacilityResultRow
                        {
                            Facility = row["facility"].ToString(),
                            FacilityId = Convert.ToInt32(row["idFacility"]),
                            Address1 = row["Address1"].ToString(),
                            Address2 = row["Address2"].ToString(),
                            City = row["City"].ToString(),
                            State = row["StateAbbreviation"].ToString(),
                            //StateId = Convert.ToInt32(row["idState"]),
                            Country = row["CountryAbbreviation"].ToString(),
                            Owner = row["OwnerName"].ToString(),
                            UserId = Convert.ToInt32(row["idUser"])
                           
                        };
                        
                        // this is here so we don't add multiple 
                        // facility owner lines
                        // set prior to Multiple / user -1
                        if (holdFacilityid == resultRow.FacilityId)
                        {
                            result.rows[result.rows.Count - 1].UserId = -1;
                            result.rows[result.rows.Count - 1].Owner = "Multiple";
                        }
                        else
                        {
                            result.rows.Add(resultRow);
                        }

                        holdFacilityid = resultRow.FacilityId;

                    }


                    // now the result
                    result.response.status = ResponseModel.responseSUCCESS;
                    result.response.errorMessage = new List<string>();

                    return result;
                }

                catch (Exception ex)
                {
                    result.response = General.buildError(ex.Message);
                    return new FacilityListResult { response = result.response };
                }
            }
        private ResponseModel Validate(FacilityListGetInput input)
            {
                ResponseModel result = new ResponseModel();

                try
                {

                    if (String.IsNullOrEmpty(input.inApiToken))
                    {
                        throw new ApplicationException("API Token is required for this method.");
                    }

                    return result;
                }
                catch (Exception ex)
                {
                    result = General.buildError(ex.Message);
                    return result;
                }
            }

        public FacilityResult GetFacility(FacilityGetInput input)
        {

            FacilityResult result = new FacilityResult();

            try
            {

                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                FacilityDBClass lDB = new FacilityDBClass();

                var dbResult = lDB.FacilityDBCall(input);
                if (dbResult.response.status == ResponseModel.responseFAIL)
                {
                    result.response = dbResult.response;
                    return result;
                }
 
                foreach (DataRow row in dbResult.dt.Rows)
                {

                    result.Facility = row["facility"].ToString();
                    result.FacilityId = Convert.ToInt32(row["idFacility"]);

                }


                // now the result
                result.response.status = ResponseModel.responseSUCCESS;
                result.response.errorMessage = new List<string>();

                return result;
            }

            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);
                return new FacilityResult { response = result.response };
            }
        }
        private ResponseModel Validate(FacilityGetInput input)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(input.inApiToken))
                {
                    throw new ApplicationException("API Token is required for this method.");
                }
                if (input.inFacilityId < 1)
                {
                    throw new ApplicationException("Facility Id must be > 0.");
                }

                return result;
            }
            catch (Exception ex)
            {
                result = General.buildError(ex.Message);
                return result;
            }
        }

        public FacilityPostResult InsertFacilityADL(FacilityADLInsertInput input)
        {

            FacilityPostResult result = new FacilityPostResult();
 
            try
            {
                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                FacilityDBClass lDB = new FacilityDBClass();

                var dbResult = lDB.FacilityADLInsertDBCall(input);
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
                return new FacilityPostResult { response = result.response };
            }
        }
        private ResponseModel Validate(FacilityADLInsertInput input)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(input.inApiToken))
                {
                    throw new ApplicationException("API Token is required for this method.");
                }
                if (input.inFacilityId < 1)
                {
                    throw new ApplicationException("Facility Id must be > 0.");
                }
                if (input.inSystemADLId < 1)
                {
                    throw new ApplicationException("ADL Id must be > 0.");
                }
                return result;
            }
            catch (Exception ex)
            {
                result = General.buildError(ex.Message);
                return result;
            }
        }

        public FacilityPutResult DeleteFacilityADL(FacilityADLDeleteInput input)
        {

            FacilityPutResult result = new FacilityPutResult();

            try
            {
                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                FacilityDBClass lDB = new FacilityDBClass();

                var dbResult = lDB.FacilityADLDeleteDBCall(input);
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
                return new FacilityPutResult { response = result.response };
            }
        }
        private ResponseModel Validate(FacilityADLDeleteInput input)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(input.inApiToken))
                {
                    throw new ApplicationException("API Token is required for this method.");
                }
                if (input.inFacilityId < 1)
                {
                    throw new ApplicationException("Facility Id must be > 0.");
                }
                if (input.inSystemADLId < 1)
                {
                    throw new ApplicationException("ADL Id must be > 0.");
                }
                return result;
            }
            catch (Exception ex)
            {
                result = General.buildError(ex.Message);
                return result;
            }
        }

        public FacilityPostResult InsertFacilityForm(FacilityFormInsertInput input)
        {

            FacilityPostResult result = new FacilityPostResult();

            try
            {
                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                FacilityDBClass lDB = new FacilityDBClass();

                var dbResult = lDB.FacilityFormInsertDBCall(input);
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
                return new FacilityPostResult { response = result.response };
            }
        }
        private ResponseModel Validate(FacilityFormInsertInput input)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(input.inApiToken))
                {
                    throw new ApplicationException("API Token is required for this method.");
                }
                if (input.inFacilityId < 1)
                {
                    throw new ApplicationException("Facility Id must be > 0.");
                }
                if (input.inSystemFormId < 1)
                {
                    throw new ApplicationException("Form Id must be > 0.");
                }
                return result;
            }
            catch (Exception ex)
            {
                result = General.buildError(ex.Message);
                return result;
            }
        }

        public FacilityPutResult DeleteFacilityForm(FacilityFormDeleteInput input)
        {

            FacilityPutResult result = new FacilityPutResult();

            try
            {
                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                FacilityDBClass lDB = new FacilityDBClass();

                var dbResult = lDB.FacilityFormDeleteDBCall(input);
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
                return new FacilityPutResult { response = result.response };
            }
        }
        private ResponseModel Validate(FacilityFormDeleteInput input)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(input.inApiToken))
                {
                    throw new ApplicationException("API Token is required for this method.");
                }
                if (input.inFacilityId < 1)
                {
                    throw new ApplicationException("Facility Id must be > 0.");
                }
                if (input.inSystemFormId < 1)
                {
                    throw new ApplicationException("Form Id must be > 0.");
                }
                return result;
            }
            catch (Exception ex)
            {
                result = General.buildError(ex.Message);
                return result;
            }
        }




        public FacilityAddressPostResult InsertFacilityAddress(FacilityAddressInsertInput input)
        {

            FacilityAddressPostResult result = new FacilityAddressPostResult();

            try
            {
                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                FacilityDBClass lDB = new FacilityDBClass();

                var dbResult = lDB.FacilityAddressInsertDBCall(input);
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
                return new FacilityAddressPostResult { response = result.response };
            }
        }
        private ResponseModel Validate(FacilityAddressInsertInput input)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(input.inApiToken))
                {
                    throw new ApplicationException("API Token is required for this method.");
                }
                if (input.inFacilityId < 1)
                {
                    throw new ApplicationException("Facility Id must be > 0.");
                }
                if (input.inAddressId < 1)
                {
                    throw new ApplicationException("Address Id must be > 0.");
                }
                return result;
            }
            catch (Exception ex)
            {
                result = General.buildError(ex.Message);
                return result;
            }
        }

        public FacilityAddressResult GetFacilityAddress(FacilityAddressGetInput input)
        {

            FacilityAddressResult result = new FacilityAddressResult();

            try
            {

                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                FacilityDBClass lDB = new FacilityDBClass();

                var dbResult = lDB.FacilityAddressDBCall(input);
                if (dbResult.response.status == ResponseModel.responseFAIL)
                {
                    result.response = dbResult.response;
                    return result;
                }

                foreach (DataRow row in dbResult.dt.Rows)
                {
                    result = new FacilityAddressResult();
                    result.FacilityId = Convert.ToInt32(row["idFacility"]);
                    result.AddressId = Convert.ToInt32(row["idAddress"]);
                }


                // now the result
                result.response.status = ResponseModel.responseSUCCESS;
                result.response.errorMessage = new List<string>();

                return result;
            }

            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);
                return new FacilityAddressResult { response = result.response };
            }
        }
        private ResponseModel Validate(FacilityAddressGetInput input)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(input.inApiToken))
                {
                    throw new ApplicationException("API Token is required for this method.");
                }
                if (input.inFacilityId < 1)
                {
                    throw new ApplicationException("Facility Id must be > 0.");
                }

                return result;
            }
            catch (Exception ex)
            {
                result = General.buildError(ex.Message);
                return result;
            }
        }

        public FacilityPostResult InsertFacility(FacilityInsertInput input)
        {

            FacilityPostResult result = new FacilityPostResult();

            try
            {
                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                FacilityDBClass lDB = new FacilityDBClass();

                var dbResult = lDB.FacilityInsertDBCall(input);
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
                return new FacilityPostResult { response = result.response };
            }
        }
        private ResponseModel Validate(FacilityInsertInput input)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(input.inApiToken))
                {
                    throw new ApplicationException("API Token is required for this method.");
                }
                if (string.IsNullOrEmpty(input.inFacility))
                {
                    throw new ApplicationException("Facility must be supplied.");
                }
                return result;
            }
            catch (Exception ex)
            {
                result = General.buildError(ex.Message);
                return result;
            }
        }

        public FacilityPutResult UpdateFacility(FacilityUpdateInput input)
        {

            FacilityPutResult result = new FacilityPutResult();

            try
            {
                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                FacilityDBClass lDB = new FacilityDBClass();

                var dbResult = lDB.FacilityUpdateDBCall(input);
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
                return new FacilityPutResult { response = result.response };
            }
        }
        private ResponseModel Validate(FacilityUpdateInput input)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(input.inApiToken))
                {
                    throw new ApplicationException("API Token is required for this method.");
                }
                if (input.inFacilityId < 1)
                {
                    throw new ApplicationException("Facility Id must be > 0.");
                }
                if (string.IsNullOrEmpty(input.inFacility))
                {
                    throw new ApplicationException("Facility must be supplied.");
                }
                return result;
            }
            catch (Exception ex)
            {
                result = General.buildError(ex.Message);
                return result;
            }
        }

        public FacilityEntireListResult GetFacilityEntireList(FacilityEntireListGetInput input)
        {

            FacilityEntireListResult result = new FacilityEntireListResult();
            FacilityResultRow resultRow = new FacilityResultRow();

            try
            {

                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                FacilityDBClass lDB = new FacilityDBClass();

                var dbResult = lDB.FacilityEntireListDBCall(input);
                if (dbResult.response.status == ResponseModel.responseFAIL)
                {
                    result.response = dbResult.response;
                    return result;
                }

                resultRow = new FacilityResultRow();
                result.rows = new List<FacilityResultRow>();

                var holdFacilityid = -1;

                foreach (DataRow row in dbResult.dt.Rows)
                {

                    resultRow = new FacilityResultRow
                    {
                        Facility = row["facility"].ToString(),
                        FacilityId = Convert.ToInt32(row["idFacility"]),
                        Address1 = row["Address1"].ToString(),
                        Address2 = row["Address2"].ToString(),
                        City = row["City"].ToString(),
                        State = row["StateAbbreviation"].ToString(),
                        //StateId = Convert.ToInt32(row["idState"]),
                        Country = row["CountryAbbreviation"].ToString(),
                        Owner = row["OwnerName"].ToString(),
                        UserId = Convert.ToInt32(row["idUser"])

                    };

                    // this is here so we don't add multiple 
                    // facility owner lines
                    // set prior to Multiple / user -1
                    if (holdFacilityid == resultRow.FacilityId)
                    {
                        result.rows[result.rows.Count - 1].UserId = -1;
                        result.rows[result.rows.Count - 1].Owner = "Multiple";
                    }
                    else
                    {
                        result.rows.Add(resultRow);
                    }

                    holdFacilityid = resultRow.FacilityId;

                }


                // now the result
                result.response.status = ResponseModel.responseSUCCESS;
                result.response.errorMessage = new List<string>();

                return result;
            }

            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);
                return new FacilityEntireListResult { response = result.response };
            }
        }
        private ResponseModel Validate(FacilityEntireListGetInput input)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(input.inApiToken))
                {
                    throw new ApplicationException("API Token is required for this method.");
                }

                return result;
            }
            catch (Exception ex)
            {
                result = General.buildError(ex.Message);
                return result;
            }
        }

        public FacilityDashboardDataByDayResult GetFacilityDashboardDataByDay(FacilityDashboardDataByDayGetInput input)
        {

            FacilityDashboardDataByDayResult result = new FacilityDashboardDataByDayResult();

            try
            {

                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                FacilityDBClass lDB = new FacilityDBClass();

                var dbResult = lDB.FacilityDashboardDataByDateDBCall(input);
                if (dbResult.response.status == ResponseModel.responseFAIL)
                {
                    result.response = dbResult.response;
                    return result;
                }

                foreach (DataRow row in dbResult.dt.Rows)
                {

                    result.ADLs = Convert.ToInt32(row["ADLs"].ToString());
                    result.ADLsNotCompleted = Convert.ToInt32(row["ADLsNotCompleted"]);
                    result.ADLsLate = Convert.ToInt32(row["ADLsLate"]);
                }


                // now the result
                result.response.status = ResponseModel.responseSUCCESS;
                result.response.errorMessage = new List<string>();

                return result;
            }

            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);
                return new FacilityDashboardDataByDayResult { response = result.response };
            }
        }
        private ResponseModel Validate(FacilityDashboardDataByDayGetInput input)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(input.inApiToken))
                {
                    throw new ApplicationException("API Token is required for this method.");
                }
                if (input.inFacilityId < 1)
                {
                    throw new ApplicationException("Facility Id must be > 0.");
                }

                return result;
            }
            catch (Exception ex)
            {
                result = General.buildError(ex.Message);
                return result;
            }
        }

        public FacilityADLLogByDayResult GetFacilityADLLogByDay(FacilityADLLogByDayGetInput input)
        {

            FacilityADLLogByDayResult result = new FacilityADLLogByDayResult();
            FacilityADLLogByDayRow resultRow = new FacilityADLLogByDayRow();

            try
            {
                result.rows = new List<FacilityADLLogByDayRow>();
                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                FacilityDBClass lDB = new FacilityDBClass();

                var dbResult = lDB.FacilityADLLogByDateDBCall(input);
                if (dbResult.response.status == ResponseModel.responseFAIL)
                {
                    result.response = dbResult.response;
                    return result;
                }

                foreach (DataRow row in dbResult.dt.Rows)
                {
                    resultRow = new FacilityADLLogByDayRow();
                    resultRow.SystemADL = row["systemADL"].ToString();
                    resultRow.ADLPatientId = Convert.ToInt32(row["idadlpatient"].ToString());
                    resultRow.UserId = Convert.ToInt32(row["iduser"]);
                    resultRow.PatientId = Convert.ToInt32(row["idpatient"]);
                    resultRow.SystemADLId = Convert.ToInt32(row["idsystemadl"]);
                    resultRow.TimeOfDay = row["timeofday"].ToString();
                    resultRow.ADLPatientLogId = Convert.ToInt32(row["idadlpatientlog"]);
                    resultRow.UserName = row["userName"].ToString();
                    resultRow.Patient = row["patient"].ToString();
                    resultRow.TransactionDate = row["transactiondate"].ToString();

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
                return new FacilityADLLogByDayResult { response = result.response };
            }
        }
        private ResponseModel Validate(FacilityADLLogByDayGetInput input)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(input.inApiToken))
                {
                    throw new ApplicationException("API Token is required for this method.");
                }
                if (input.inFacilityId < 1)
                {
                    throw new ApplicationException("Facility Id must be > 0.");
                }

                return result;
            }
            catch (Exception ex)
            {
                result = General.buildError(ex.Message);
                return result;
            }
        }
    }

}
