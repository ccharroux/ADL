﻿using System;
using System.Collections.Generic;
using System.Data;
using ADLAPICore.Library.Common;
using ADLAPICore.Models;
using ADLAPICore.Models.General;
using ADLAPICore.Models.Login;
using ADLAPICore.Library.utilities;
using ADLAPICore.Models.FacilityAccess;
using ADLAPICore.Models.Facility;

namespace ADLAPICore.Library.Facility
{
    public class facilityResultRow
    {
        public Int32 FacilityId { get; set; }
        public string Facility { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; } 
        public string Phone { get; set; }
        public string Owner { get; set; }   
        public Int32 UserId { get; set; }
    }
    public class facilityADLResultRow
    {
        public Int32 FacilityId { get; set; }
        public string SystemADL { get; set; }
        public Int32 SystemADLId { get; set; }
    }
    public class FacilityADLResult
    {
        public ResponseModel response = new ResponseModel();
        public List<facilityADLResultRow> rows = new List<facilityADLResultRow>();
        private facilityADLResultRow resultRow = new facilityADLResultRow();

        public FacilityADLResult()
        {
            this.response.status = ResponseModel.responseFAIL;
            this.response.errorMessage.Add("Unexpected error");
        }
    }
    public class FacilityResult
    {
        public ResponseModel response = new ResponseModel();
        public List<facilityResultRow> rows = new List<facilityResultRow>();
        private facilityResultRow resultRow = new facilityResultRow();

        public FacilityResult()
        {
            this.response.status = ResponseModel.responseFAIL;
            this.response.errorMessage.Add("Unexpected error");
        }
    }

    public interface IFacilityClass
    {
        public FacilityADLResult GetFacilityADLList(FacilityADLListGetInput input);
        public FacilityResult GetFacility(FacilityGetInput input);
        public FacilityResult GetFacilityList(FacilityListGetInput input);
        public FacilityResult GetFacilityOwnerList(FacilityOwnerListGetInput input);
    }

    public class FacilityClass : IFacilityClass
    {
            

            public FacilityClass()
            { }

        
        public FacilityADLResult GetFacilityADLList(FacilityADLListGetInput input)
        {

            FacilityADLResult result = new FacilityADLResult();
            facilityADLResultRow resultRow = new facilityADLResultRow();

            try
            {

                result.response = Validate(input.inApiToken);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                PatientDBClass lDB = new PatientDBClass();

                var dbResult = lDB.FacilityADLListDBCall(input);
                if (dbResult.response.status == ResponseModel.responseFAIL)
                {
                    result.response = dbResult.response;
                    return result;
                }

                resultRow = new facilityADLResultRow();
                result.rows = new List<facilityADLResultRow>();


                foreach (DataRow row in dbResult.dt.Rows)
                {
                    resultRow = new facilityADLResultRow
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
                result.response.errorMessage = new List<string>();
                result.response.status = ResponseModel.responseFAIL;
                result.response.errorMessage.Add(ex.Message);

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
                result.status = ResponseModel.responseFAIL;
                result.errorMessage = new List<string>();
                result.errorMessage.Add(ex.Message);
                return result;
            }
        }

        public FacilityResult GetFacilityOwnerList(FacilityOwnerListGetInput input)
        {

            FacilityResult result = new FacilityResult();
            facilityResultRow resultRow = new facilityResultRow();

            try
            {

                result.response = Validate(input.inApiToken);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                PatientDBClass lDB = new PatientDBClass();

                var dbResult = lDB.FacilityOwnerListDBCall(input);
                if (dbResult.response.status == ResponseModel.responseFAIL)
                {
                    result.response = dbResult.response;
                    return result;
                }

                resultRow = new facilityResultRow();
                result.rows = new List<facilityResultRow>();

                var holdFacilityid = -1;

                foreach (DataRow row in dbResult.dt.Rows)
                {

                    resultRow = new facilityResultRow
                    {
                        Facility = row["facility"].ToString(),
                        FacilityId = Convert.ToInt32(row["idFacility"]),
                        Address1 = row["Address1"].ToString(),
                        Address2 = row["Address2"].ToString(),
                        City = row["City"].ToString(),
                        State = row["StateAbbreviation"].ToString(),
                        Country = row["CountryAbbreviation"].ToString(),
                        Phone = row["Phone"].ToString(),
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
                result.response.errorMessage = new List<string>();
                result.response.status = ResponseModel.responseFAIL;
                result.response.errorMessage.Add(ex.Message);

                return new FacilityResult { response = result.response };
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
                result.status = ResponseModel.responseFAIL;
                result.errorMessage = new List<string>();
                result.errorMessage.Add(ex.Message);
                return result;
            }
        }

        public FacilityResult GetFacilityList(FacilityListGetInput input)
            {

                FacilityResult result = new FacilityResult();
                facilityResultRow resultRow = new facilityResultRow();

                try
                {

                    result.response = Validate(input.inApiToken);

                    if (result.response.status == ResponseModel.responseFAIL)
                    {
                        return result;
                    }

                    PatientDBClass lDB = new PatientDBClass();

                    var dbResult = lDB.FacilityListDBCall(input);
                    if (dbResult.response.status == ResponseModel.responseFAIL)
                    {
                        result.response = dbResult.response;
                        return result;
                    }

                    resultRow = new facilityResultRow();
                    result.rows = new List<facilityResultRow>();

                    var holdFacilityid = -1;
    
                    foreach (DataRow row in dbResult.dt.Rows)
                    {

                        resultRow = new facilityResultRow
                        {
                            Facility = row["facility"].ToString(),
                            FacilityId = Convert.ToInt32(row["idFacility"]),
                            Address1 = row["Address1"].ToString(),
                            Address2 = row["Address2"].ToString(),
                            City = row["City"].ToString(),
                            State = row["StateAbbreviation"].ToString(),
                            Country = row["CountryAbbreviation"].ToString(),
                            Phone = row["Phone"].ToString(),
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
                    result.response.errorMessage = new List<string>();
                    result.response.status = ResponseModel.responseFAIL;
                    result.response.errorMessage.Add(ex.Message);

                    return new FacilityResult { response = result.response };
                }
            }
        private ResponseModel Validate(string inApiToken)
            {
                ResponseModel result = new ResponseModel();

                try
                {

                    if (String.IsNullOrEmpty(inApiToken))
                    {
                        throw new ApplicationException("API Token is required for this method.");
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

        public FacilityResult GetFacility(FacilityGetInput input)
        {

            FacilityResult result = new FacilityResult();
            facilityResultRow resultRow = new facilityResultRow();

            try
            {

                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                PatientDBClass lDB = new PatientDBClass();

                var dbResult = lDB.FacilityDBCall(input);
                if (dbResult.response.status == ResponseModel.responseFAIL)
                {
                    result.response = dbResult.response;
                    return result;
                }

                resultRow = new facilityResultRow();
                result.rows = new List<facilityResultRow>();

                var holdFacilityid = -1;

                foreach (DataRow row in dbResult.dt.Rows)
                {

                    resultRow = new facilityResultRow
                    {
                        Facility = row["facility"].ToString(),
                        FacilityId = Convert.ToInt32(row["idFacility"]),
                        Address1 = row["Address1"].ToString(),
                        Address2 = row["Address2"].ToString(),
                        City = row["City"].ToString(),
                        State = row["StateAbbreviation"].ToString(),
                        Country = row["CountryAbbreviation"].ToString(),
                        Phone = row["Phone"].ToString(),
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
                result.response.errorMessage = new List<string>();
                result.response.status = ResponseModel.responseFAIL;
                result.response.errorMessage.Add(ex.Message);

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
