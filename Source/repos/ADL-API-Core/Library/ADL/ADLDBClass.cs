using System;
using MySql.Data.MySqlClient;
using ADLAPICore.Library.Common;
using System.Data;
using ADLAPICore.Models.General;
using ADLAPICore.Library.utilities;
using ADLAPICore.Models.ADL;

namespace ADLAPICore.Library.ADL
{


    interface IADLDBClass
    {
        public DBResult ADLListDBCall(ADLListGetInput input);
        public DBResult ADLDBCall(ADLGetInput input);
    }

    class ADLDBClass : IADLDBClass
    {
        public DBResult ADLListDBCall(ADLListGetInput input)
        {
            var result = new DBResult();
            try
            {
                DBClass.dbCmd = new MySqlCommand("getSystemADLList", DBClass.dbConn);
                DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                DBClass.dbCmd.Parameters.Add(param);
                result = DBClass.getDBResults();

                return result;
            }
            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);

                return new DBResult { dt = new DataTable(), response = result.response };
            }

        }
        public DBResult ADLDBCall(ADLGetInput input)
        {
            var result = new DBResult();
            try
            {
                DBClass.dbCmd = new MySqlCommand("getSystemADL", DBClass.dbConn);
                DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                DBClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("insystemadlId", input.inSystemADLId);
                DBClass.dbCmd.Parameters.Add(param);

                result = DBClass.getDBResults();

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
