using System;
using System.Collections.Generic;
using System.Data;
using ADLAPICore.Library.Common;
using ADLAPICore.Models;
using ADLAPICore.Models.General;
using ADLAPICore.Models.Login;
using ADLAPICore.Library.utilities;
using ADLAPICore.Models.ADL;

namespace ADLAPICore.Library.ADL
{
    public class ADLResultRow
    {
        public Int32 SystemADLId { get; set; }
        public Int32 ADLTypeId { get; set; }
        public string ADL { get; set; }
        public bool isActive { get; set; }
        public Int32 orderNum { get; set; }
    }
    public class ADLResult
    {
        public ResponseModel response = new ResponseModel();
        public ADLResultRow resultRow = new ADLResultRow();

        public ADLResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }
    public class ADLResultList
    {
        public ResponseModel response = new ResponseModel();
        public List<ADLResultRow> rows = new List<ADLResultRow>();
        private ADLResultRow resultRow = new ADLResultRow();

        public ADLResultList()
        {
            this.response = General.buildError("Unexpected error");
        }
    }

    public interface IADLClass
    {
        public ADLResultList GetADLList(ADLListGetInput input);
        public ADLResult GetADL(ADLGetInput input);
    }

    public class ADLClass : IADLClass
    {
            public ADLClass()
            { }
            
            public ADLResultList GetADLList(ADLListGetInput input)
            {

                ADLResultList result = new ADLResultList();
                ADLResultRow resultRow = new ADLResultRow();

                try
                {

                    result.response = Validate(input);

                    if (result.response.status == ResponseModel.responseFAIL)
                    {
                        return result;
                    }

                    ADLDBClass lDB = new ADLDBClass();

                    var dbResult = lDB.ADLListDBCall(input);
                    if (dbResult.response.status == ResponseModel.responseFAIL)
                    {
                        result.response = dbResult.response;
                        return result;
                    }

                    resultRow = new ADLResultRow();
                    result.rows = new List<ADLResultRow>();
                
                    foreach (DataRow row in dbResult.dt.Rows)
                    {

                        resultRow = new ADLResultRow
                        {
                            ADL = row["systemADL"].ToString(),
                            SystemADLId = Convert.ToInt32(row["idsystemadl"]),
                            ADLTypeId = Convert.ToInt32(row["idadltype"]),
                            isActive = (row["deleteDate"] == DBNull.Value ? true : false),
                            orderNum = Convert.ToInt32(row["orderNum"])
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

                    return new ADLResultList { response = result.response };
                }
            }
            private ResponseModel Validate(ADLListGetInput input)
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
            public ADLResult GetADL(ADLGetInput input)
            {

                ADLResult result = new ADLResult();
                ADLResultRow resultRow = new ADLResultRow();

            try
                {

                    result.response = Validate(input);

                    if (result.response.status == ResponseModel.responseFAIL)
                    {
                        return result;
                    }

                    ADLDBClass lDB = new ADLDBClass();

                    var dbResult = lDB.ADLDBCall(input);
                    if (dbResult.response.status == ResponseModel.responseFAIL)
                    {
                        result.response = dbResult.response;
                        return result;
                    }

                    resultRow = new ADLResultRow();

                    foreach (DataRow row in dbResult.dt.Rows)
                    {

                        resultRow = new ADLResultRow
                        {
                            ADL = row["systemADL"].ToString(),
                            SystemADLId = Convert.ToInt32(row["idsystemadl"]),
                            ADLTypeId = Convert.ToInt32(row["idadltype"]),
                            isActive = (row["deleteDate"] == DBNull.Value ? true : false),
                            orderNum = Convert.ToInt32(row["orderNum"])
                        };

                    }

                    // now the result
                    result.response.status = ResponseModel.responseSUCCESS;
                    result.response.errorMessage = new List<string>();

                    return result;
                }

                catch (Exception ex)
                {
                    result.response = General.buildError(ex.Message);

                    return new ADLResult { response = result.response };
                }
            }
            private ResponseModel Validate(ADLGetInput input)
            {
                ResponseModel result = new ResponseModel();

                try
                {

                    if (String.IsNullOrEmpty(input.inApiToken))
                    {
                        throw new ApplicationException("API Token is required for this method.");
                    }

                    if (input.inSystemADLId < 1)
                    {
                        throw new ApplicationException("System ADL must be > 0.");
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
