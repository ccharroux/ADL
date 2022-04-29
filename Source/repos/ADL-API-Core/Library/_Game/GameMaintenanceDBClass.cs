using System;
using System.Collections.Generic;
using System.Text;
using MySql.Data.MySqlClient;
using ADLAPICore.Library.Common;
using System.Data;
using ADLAPICore.Library.User;

namespace ADLAPICore.Library.Game
{
    interface IGameMaintenanceDBClass
    {
        //DataTable GetGamesToday<T1, T2>(T1 inDate, T2 inUserId);
    }

    public class GameMaintenanceDBClass : IGameMaintenanceDBClass
    {

        //GameClass myGame = new GameClass();

        //public GameMaintenanceDBClass(GameClass inGame)
        //{
        //    this.myGame = inGame;
        //}

        //public DataTable UpdateGame()
        //{

        //    DBClass.dbCmd = new MySqlCommand("update_game", DBClass.dbConn);
        //    DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

        //    //MySqlParameter param = new MySqlParameter("ingamedate", this.myGame.GameDate);
        //    //DBClass.dbCmd.Parameters.Add(param);

        //    //param = new MySqlParameter("ingamestarttime", this.myGame.GameStartTime);
        //    //DBClass.dbCmd.Parameters.Add(param);

        //    //param = new MySqlParameter("ingamekey", this.myGame.GameKey);
        //    //DBClass.dbCmd.Parameters.Add(param);

        //    //param = new MySqlParameter("inhomecity", this.myGame.HomeCity);
        //    //DBClass.dbCmd.Parameters.Add(param);

        //    //param = new MySqlParameter("inhomenickname", this.myGame.HomeNickname);
        //    //DBClass.dbCmd.Parameters.Add(param);

        //    //param = new MySqlParameter("inhomescore", this.myGame.HomeScore);
        //    //DBClass.dbCmd.Parameters.Add(param);

        //    //param = new MySqlParameter("inawaycity", this.myGame.AwayCity);
        //    //DBClass.dbCmd.Parameters.Add(param);

        //    //param = new MySqlParameter("inawaynickname", this.myGame.AwayNickname);
        //    //DBClass.dbCmd.Parameters.Add(param);

        //    //param = new MySqlParameter("inawayscore", this.myGame.AwayScore);
        //    //DBClass.dbCmd.Parameters.Add(param);

        //    //param = new MySqlParameter("ingameperiod", this.myGame.GamePeriod);
        //    //DBClass.dbCmd.Parameters.Add(param);

        //    //param = new MySqlParameter("ingametime", this.myGame.GameTime);
        //    //DBClass.dbCmd.Parameters.Add(param);

        //    return DBClass.getDBResults();

        //}


    }
}
