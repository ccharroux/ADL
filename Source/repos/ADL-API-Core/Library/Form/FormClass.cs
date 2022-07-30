using System;
using System.Collections.Generic;
using System.Data;
using ADLAPICore.Library.Common;
using ADLAPICore.Models;
using ADLAPICore.Models.General;
using ADLAPICore.Models.Login;
using ADLAPICore.Library.utilities;
using ADLAPICore.Models.Form;

namespace ADLAPICore.Library.Form
{
    public class FormResultRow
    {
        public Int32 SystemFormId { get; set; }
        public string Form { get; set; }
        public bool isActive { get; set; }
        public string deleteDate { get; set; }
    }
    public class FormResult
    {
        public ResponseModel response = new ResponseModel();
        public FormResultRow resultRow = new FormResultRow();

        public FormResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }
    public class FormResultList
    {
        public ResponseModel response = new ResponseModel();
        public List<FormResultRow> rows = new List<FormResultRow>();
        private FormResultRow resultRow = new FormResultRow();

        public FormResultList()
        {
            this.response = General.buildError("Unexpected error");
        }
    }
    public class FormPutResult
    {
        public ResponseModel response = new ResponseModel();
        public int ReturnCode { get; set; }

        public FormPutResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }
    public class FormPostResult
    {
        public ResponseModel response = new ResponseModel();
        public int ReturnCode { get; set; }

        public FormPostResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }


    public interface IFormClass
    {
        public FormResultList GetFormList(FormListGetInput input);
        public FormResult GetForm(FormGetInput input);
        public FormPostResult InsertForm(FormInsertInput input);
        public FormPutResult UpdateForm(FormUpdateInput input);
        public FormPutResult DeleteForm(FormDeleteInput input);

    }

    public class FormClass : IFormClass
    {
            public FormClass()
            { }
            
            public FormResultList GetFormList(FormListGetInput input)
            {

                FormResultList result = new FormResultList();
                FormResultRow resultRow = new FormResultRow();

                try
                {

                    result.response = Validate(input);

                    if (result.response.status == ResponseModel.responseFAIL)
                    {
                        return result;
                    }

                    FormDBClass lDB = new FormDBClass();

                    var dbResult = lDB.FormListDBCall(input);
                    if (dbResult.response.status == ResponseModel.responseFAIL)
                    {
                        result.response = dbResult.response;
                        return result;
                    }

                    resultRow = new FormResultRow();
                    result.rows = new List<FormResultRow>();
                
                    foreach (DataRow row in dbResult.dt.Rows)
                    {

                        resultRow = new FormResultRow
                        {
                            Form = row["systemForm"].ToString(),
                            SystemFormId = Convert.ToInt32(row["idsystemForm"]),
                            isActive = (row["deleteDate"] == DBNull.Value ? true : false)
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

                    return new FormResultList { response = result.response };
                }
            }
            private ResponseModel Validate(FormListGetInput input)
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
            public FormResult GetForm(FormGetInput input)
            {

                FormResult result = new FormResult();
                FormResultRow resultRow = new FormResultRow();

            try
                {

                    result.response = Validate(input);

                    if (result.response.status == ResponseModel.responseFAIL)
                    {
                        return result;
                    }

                    FormDBClass lDB = new FormDBClass();

                    var dbResult = lDB.FormDBCall(input);
                    if (dbResult.response.status == ResponseModel.responseFAIL)
                    {
                        result.response = dbResult.response;
                        return result;
                    }

                    resultRow = new FormResultRow();

                    foreach (DataRow row in dbResult.dt.Rows)
                    {

                    resultRow = new FormResultRow
                    {
                            Form = row["systemForm"].ToString(),
                            SystemFormId = Convert.ToInt32(row["idsystemForm"]),
                            isActive = (row["deleteDate"] == DBNull.Value ? true : false),
                            deleteDate = (row["deleteDate"] == DBNull.Value ? "" : row["deleteDate"].ToString())
                    };

                    }

                    result.resultRow = resultRow;

                    // now the result
                    result.response.status = ResponseModel.responseSUCCESS;
                    result.response.errorMessage = new List<string>();

                    return result;
                }

                catch (Exception ex)
                {
                    result.response = General.buildError(ex.Message);

                    return new FormResult { response = result.response };
                }
            }
            private ResponseModel Validate(FormGetInput input)
            {
                ResponseModel result = new ResponseModel();

                try
                {

                    if (String.IsNullOrEmpty(input.inApiToken))
                    {
                        throw new ApplicationException("API Token is required for this method.");
                    }

                    if (input.inSystemFormId < 1)
                    {
                        throw new ApplicationException("System Form must be > 0.");
                    }

                return result;
                }
                catch (Exception ex)
                {
                    result = General.buildError(ex.Message);
                    return result;
                }
            }
            public FormPostResult InsertForm(FormInsertInput input)
        {

            FormPostResult result = new FormPostResult();

            try
            {
                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                FormDBClass lDB = new FormDBClass();

                var dbResult = lDB.FormInsertDBCall(input);
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
                return new FormPostResult { response = result.response };
            }
        }
            private ResponseModel Validate(FormInsertInput input)
            {
                ResponseModel result = new ResponseModel();

                try
                {

                    if (String.IsNullOrEmpty(input.inApiToken))
                    {
                        throw new ApplicationException("API Token is required for this method.");
                    }
                    if (string.IsNullOrEmpty(input.inSystemForm) == true)
                    {
                        throw new ApplicationException("System Form is required for this method.");
                    }

                    return result;
                }
                catch (Exception ex)
                {
                    result = General.buildError(ex.Message);
                    return result;
                }
            }

            public FormPutResult DeleteForm(FormDeleteInput input)
            {

                FormPutResult result = new FormPutResult();

                try
                {
                    result.response = Validate(input);

                    if (result.response.status == ResponseModel.responseFAIL)
                    {
                        return result;
                    }

                    FormDBClass lDB = new FormDBClass();

                    var dbResult = lDB.FormDeleteDBCall(input);
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
                    return new FormPutResult { response = result.response };
                }
            }
            private ResponseModel Validate(FormDeleteInput input)
            {
                ResponseModel result = new ResponseModel();

                try
                {

                    if (String.IsNullOrEmpty(input.inApiToken))
                    {
                        throw new ApplicationException("API Token is required for this method.");
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

            public FormPutResult UpdateForm(FormUpdateInput input)
            {

                FormPutResult result = new FormPutResult();

                try
                {
                    result.response = Validate(input);

                    if (result.response.status == ResponseModel.responseFAIL)
                    {
                        return result;
                    }

                    FormDBClass lDB = new FormDBClass();

                    var dbResult = lDB.FormUpdateDBCall(input);
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
                    return new FormPutResult { response = result.response };
                }
            }
            private ResponseModel Validate(FormUpdateInput input)
            {
                ResponseModel result = new ResponseModel();

                try
                {

                    if (String.IsNullOrEmpty(input.inApiToken))
                    {
                        throw new ApplicationException("API Token is required for this method.");
                    }
                    if (input.inSystemFormId < 1)
                    {
                        throw new ApplicationException("System Form Id must be > 0.");
                    }

                    if (string.IsNullOrEmpty(input.inSystemForm) == true)
                    {
                        throw new ApplicationException("System Form is required for this method.");
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
