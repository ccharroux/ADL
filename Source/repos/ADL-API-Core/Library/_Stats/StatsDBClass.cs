using System;
using System.Collections.Generic;
using System.Text;
using MySql.Data.MySqlClient;
using ADLAPICore.Library.Common;
using System.Data;

namespace ADLAPICore.Library.Stats
{
    interface IStatsDBCall
    {
        public DataTable StatsDBCall(string sportId);

    }

    class StatDBClass : IStatsDBCall
    {
        public DataTable StatsDBCall(string sportId)
        {

            DBClass.dbCmd = new MySqlCommand("usp_get_AllStats", DBClass.dbConn);
            DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

            MySqlParameter param = new MySqlParameter("inSportId", sportId);
            DBClass.dbCmd.Parameters.Add(param);

            return DBClass.getDBResults().dt;


        }

    }
}
