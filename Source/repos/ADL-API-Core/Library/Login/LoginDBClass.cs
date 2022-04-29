using System;
using System.Collections.Generic;
using System.Text;
using MySql.Data.MySqlClient;
using ADLAPICore.Library.Common;
using System.Data;
using ADLAPICore.Models.General;

namespace ADLAPICore.Library.Login
{
    interface ILoginDBClass
    {
        public DBResult LoginDBCall(string emailAddress, string password);
    }

    class LoginDBClass : ILoginDBClass
    {

        public DBResult LoginDBCall(string emailAddress, string password)
        {

            try
            {
                DBClass.dbCmd = new MySqlCommand("getLogin", DBClass.dbConn);
                DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inEmailAddress", emailAddress);
                DBClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inPassword", password);
                DBClass.dbCmd.Parameters.Add(param);

                return DBClass.getDBResults();
            }
            catch (Exception ex)
            {
                DBResult result = new DBResult();
                result.response.status = ResponseModel.responseFAIL;
                result.response.errorMessage = new List<string>();
                result.response.errorMessage.Add(ex.Message);

                return new DBResult { dt = new DataTable(), response = result.response };
            }

        }

    }
}
