using MySql.Data.MySqlClient;
using ADLAPICore.Library.Common;
using System.Data;

namespace ADLAPICore.Library.Sports
{
    interface ISportsDBClass
    {
        public DataTable SportsDBCall();

    }

    class SportsDBClass : ISportsDBClass
    {
        public DataTable SportsDBCall()
        {

            DBClass.dbCmd = new MySqlCommand("usp_get_Sports", DBClass.dbConn);
            DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

            return DBClass.getDBResults().dt;


        }

    }
}
