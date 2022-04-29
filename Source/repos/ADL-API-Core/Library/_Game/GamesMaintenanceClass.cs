using ADLAPICore.Library.Common;
using ADLAPICore.Library.Game;
using ADLAPICore.Library.MakePixx;
using ADLAPICore.Models.General;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace ADLAPICore.Library.Game
{
    public interface IGameMaintenanceClass
    {
        //GamesOnThisDate GetGames();
    }

    public class GameMaintenanceResult
    {
        public ResponseModel result = new ResponseModel();
        public bool GameOver { get; set; }
        public bool GameStarted { get; set; }
        public bool GameAdded { get; set; }
    }

    public class GameMaintenanceClass
    {
        //private GameClass myGame = new GameClass();

        public GameMaintenanceClass(GameClass inGame)
        {
            //this.myGame = inGame;
        }

        public GameMaintenanceResult updateGame()
        {
            // work vars
            GameMaintenanceResult gameResult = new GameMaintenanceResult();

            gameResult.result = Validate();

            //if (gameResult.result.Success == false)
            //{
            //    Console.WriteLine("ERROR: " + gameResult.result.Message);
            //    return gameResult;
            //}

            // proc work
            //GameMaintenanceDBClass lDB = new GameMaintenanceDBClass(myGame);

            //var dbResult = lDB.UpdateGame();

            //foreach (DataRow row in dbResult.Rows)
            //{
            //    gameResult.GameAdded = Convert.ToBoolean(row["gameadded"].ToString());
            //    gameResult.GameOver = Convert.ToBoolean(row["gameover"].ToString());
            //    gameResult.GameStarted = Convert.ToBoolean(row["gamestarted"].ToString());
            //}

            return gameResult;

        }

        public ResponseModel Validate()
        {
            ResponseModel result = new ResponseModel();

            try
            {

                //if (String.IsNullOrEmpty(this.myGame.GameDate))
                //{
                //    throw new ApplicationException("A game date is required for this method.");
                //}

                //if (String.IsNullOrEmpty(this.myGame.GameKey))
                //{
                //    throw new ApplicationException("A game key is required for this method.");
                //}

                return result;
            }
            catch (Exception )
            {
                //result.Success = false;
                //result.Message = ex.Message;
                return result;
            }
        }
    }
}
