using System;
using System.Collections.Generic;
using System.Data;
using ADLAPICore.Library.Common;
using ADLAPICore.Models;
using ADLAPICore.Models.General;
using ADLAPICore.Models.Login;
using ADLAPICore.Library.utilities;
using ADLAPICore.Models.Role;

namespace ADLAPICore.Library.Role
{
    public class RoleResultRow
    {
        public Int32 RoleId { get; set; }
        public string Role { get; set; }
        public string RoleToken { get; set; }
    }

    public class RoleResult
    {
        public ResponseModel response = new ResponseModel();
        public List<RoleResultRow> rows = new List<RoleResultRow>();
        private RoleResultRow resultRow = new RoleResultRow();

        public RoleResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }

    public interface IRoleClass
    {
        public RoleResult GetRoleList(RoleListGetInput input);
    }

    public class RoleClass : IRoleClass
    {
            

            public RoleClass()
            { }

            
            public RoleResult GetRoleList(RoleListGetInput input)
            {

                RoleResult result = new RoleResult();
                RoleResultRow resultRow = new RoleResultRow();

                try
                {

                    result.response = Validate(input);

                    if (result.response.status == ResponseModel.responseFAIL)
                    {
                        return result;
                    }

                    RoleDBClass lDB = new RoleDBClass();

                    var dbResult = lDB.RoleListDBCall(input);
                    if (dbResult.response.status == ResponseModel.responseFAIL)
                    {
                        result.response = dbResult.response;
                        return result;
                    }

                    resultRow = new RoleResultRow();
                    result.rows = new List<RoleResultRow>();
                
                    foreach (DataRow row in dbResult.dt.Rows)
                    {

                        resultRow = new RoleResultRow
                        {
                            Role = row["RoleName"].ToString(),
                            RoleId = Convert.ToInt32(row["idRole"]),
                            RoleToken = row["RoleToken"].ToString(),                            
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

                    return new RoleResult { response = result.response };
                }
            }
            private ResponseModel Validate(RoleListGetInput input)
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
 
    }

}
