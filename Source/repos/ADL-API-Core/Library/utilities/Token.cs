
using ADLAPICore.Library.Base;
using ADLAPICore.Library.Common;
using ADLAPICore.Models.General;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace ADLAPICore.Library.utilities
{
    public class TokenResult
    {
        public ResponseModel response = new ResponseModel();
        public int returnCode { get; set; }

        public TokenResult()
        {
            this.response.status = ResponseModel.responseFAIL;
            this.response.errorMessage.Add("Unexpected error");
        }
    }
    public static class Token
    {
        public static TokenResult checkToken(string inAPIToken)
        {
            TokenResult result = new TokenResult();

            try
            {

                //----------------------------------
                // Clean inputs using reflection
                //----------------------------------
                var cleanInput = (string)genericLogic.cleanAllTextFromObject(inAPIToken);

                return isTokenValid(cleanInput);

             }

            catch (Exception ex)
            {
                result = new TokenResult();
                result.response = General.buildError(ex.Message);

                return result;
            }

        }
        public static TokenResult isTokenValid(string inAPIToken)
        {

            TokenResult result = new TokenResult();

            try
            {

                result.response = Validate(inAPIToken);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                var dbResult = TokenDBCall(inAPIToken);
                if (dbResult.response.status == ResponseModel.responseFAIL)
                {
                    result.response = dbResult.response;
                    return result;
                }

                foreach (DataRow row in dbResult.dt.Rows)
                {
                    result.returnCode = Convert.ToInt32(row["returnCode"]);
                }

                // now the result
                result.response.status = ResponseModel.responseSUCCESS;
                result.response.errorMessage = new List<string>();

                return result;
            }

            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);
                return new TokenResult { response = result.response };
            }
        }
        private static ResponseModel Validate(string inAPIToken)
        {
            ResponseModel result = new ResponseModel();

            try
            {
                if (String.IsNullOrEmpty(inAPIToken))
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

        private static DBResult TokenDBCall(string apitoken)
        {
            var result = new DBResult();
            DBClass dbClass = new DBClass();
            try
            {
                dbClass.dbCmd = new MySqlCommand("hasTokenExpired", dbClass.dbConn);
                dbClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", apitoken);
                dbClass.dbCmd.Parameters.Add(param);
                result = dbClass.getDBResults();

                return result;
            }
            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);
                return new DBResult { dt = new DataTable(), response = result.response };
            }

        }
    }
}