using MySql.Data.MySqlClient;
using ADLAPICore.Library.Common;
using System.Data;

namespace ADLAPICore.Library.Accomplishments
{
    interface IAccomplishmentsDBCall
    {
        public DataTable AccomplishmentsDBCall(string memberId, string sportId);

    }

    class AccomplishmentsDBClass : IAccomplishmentsDBCall
    {
        public DataTable AccomplishmentsDBCall(string memberId, string sportId)
        {

            DBClass.dbCmd = new MySqlCommand("usp_get_accomplishments", DBClass.dbConn);
            DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

            MySqlParameter param = new MySqlParameter("inSportId", sportId);
            DBClass.dbCmd.Parameters.Add(param);

            param = new MySqlParameter("inMemberId", memberId);
            DBClass.dbCmd.Parameters.Add(param);

            return DBClass.getDBResults().dt;


        }

    }
}
