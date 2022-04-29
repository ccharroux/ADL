using MySql.Data.MySqlClient;
using ADLAPICore.Library.Common;
using System.Data;

namespace ADLAPICore.Library.Game
{
    interface IGameDBCall
    {
        public DataTable GameListDBCall(string memberId, string sportId, string gameDate);

    }

    class GameDBClass : IGameDBCall
    {
        public DataTable GameListDBCall(string memberId, string sportId, string gameDate)
        {

            DBClass.dbCmd = new MySqlCommand("usp_get_Gamelist_MemberPixx", DBClass.dbConn);
            DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

            MySqlParameter param = new MySqlParameter("inSportId", sportId);
            DBClass.dbCmd.Parameters.Add(param);

            param = new MySqlParameter("inMemberId", memberId);
            DBClass.dbCmd.Parameters.Add(param);

            param = new MySqlParameter("inGameDate", gameDate);
            DBClass.dbCmd.Parameters.Add(param);
            return DBClass.getDBResults().dt;


        }

    }
}
