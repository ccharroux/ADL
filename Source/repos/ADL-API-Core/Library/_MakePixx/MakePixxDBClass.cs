using MySql.Data.MySqlClient;
using ADLAPICore.Library.Common;
using ADLAPICore.Library.Game;
using System.Data;

namespace ADLAPICore.Library.MakePixx
{
    interface IMakePixxDBCall
    {
        public DataTable MakePixx(MakePixxInput input);
    }

    class MakePixxDBClass : IMakePixxDBCall
    {
        public DataTable MakePixx(MakePixxInput input)
        {

            DBClass.dbCmd = new MySqlCommand("usp_insert_MemberPixx", DBClass.dbConn);
            DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

            DBClass.dbCmd.Parameters.Add(new MySqlParameter("inMemberID", input.memberId));

            DBClass.dbCmd.Parameters.Add(new MySqlParameter("inSportID", input.sportId));

            DBClass.dbCmd.Parameters.Add(new MySqlParameter("inGameSourceID", input.gameId));


            DBClass.dbCmd.Parameters.Add(new MySqlParameter("inGameDate", input.gameDate));
            DBClass.dbCmd.Parameters.Add(new MySqlParameter("inTeamPick", input.pixx));

            return DBClass.getDBResults().dt;


        }

    }
}
