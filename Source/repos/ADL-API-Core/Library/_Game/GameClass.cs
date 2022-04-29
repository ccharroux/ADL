using ADLAPICore.Library.Common;
using ADLAPICore.Library.MakePixx;
using ADLAPICore.Models.General;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace ADLAPICore.Library.Game
{

    public enum eGamePixx
    {
        home,
        away,
        none
    }
    public class GameRecord
    {
        public string GameID { get; set; }
        public string Visitor { get; set; }
        public string Home { get; set; }
        public string VisitorImage { get; set; }
        public string HomeImage { get; set; }
        public Int32 VisitorScore { get; set; }
        public Int32 HomeScore { get; set; }
        public string Pixx { get; set; }
        public string GameDate { get; set; }
        public string GameTime { get; set; }
        public GameRecord()
        {

        }
        public GameRecord(string gameId, string gameDate, string pixx)
        {
            this.GameID = gameId;
            this.GameDate = gameDate;
            this.Pixx = pixx;
        }
    }
    public class GameListResult
    {
        public ResponseModel result = new ResponseModel();
        public List<GameRecord> games = new List<GameRecord>();
    }
    public interface IGameClass
    {
        void GetGame<T>(T inGameId);
        public GameListResult List(string inMemberId, string inSportId, string inGameDate);
    }

    public class GameClass : IGameClass
    {


        // This constructor is just for pixx


        public void GetGame<T>(T inGameId)
        {
            return;
        }
        public GameListResult List(string inMemberId, string inSportId, string inGameDate)
        {
            GameListResult gameList = new GameListResult();

            try
            {
                gameList.result = ValidateList(inMemberId, inSportId, inGameDate);

                //if (gameList.result.Success == false)
                //{
                //    gameList.result.Message = "ERROR: " + gameList.result.Message;
                //    return gameList;
                //}

                GameDBClass lDB = new GameDBClass();

                var dbResult = lDB.GameListDBCall(inMemberId, inSportId, inGameDate);
                foreach (DataRow row in dbResult.Rows)
                {
                    GameRecord record = new GameRecord();
                    record.GameID = row["GameSourceID"].ToString();
                    record.Visitor = row["AwayTeam"].ToString();
                    record.Home = row["HomeTeam"].ToString();
                    record.VisitorImage = row["AwayTeam"].ToString() + ".gif";
                    record.HomeImage = row["HomeTeam"].ToString() + ".gif";
                    record.VisitorScore = Convert.ToInt32(row["AwayScore"].ToString());
                    record.HomeScore = Convert.ToInt32(row["HomeScore"].ToString());
                    record.Pixx = row["TeamPick"].ToString();
                    record.GameDate = inGameDate;   // UTC?
                    record.GameTime = row["GameDateDisplay"].ToString();   // UTC?
                    gameList.games.Add(record);
                }
 

                return gameList;
            }

            catch (Exception )
            {
                return new GameListResult();
                //response.errorMessage = new List<string>();
                //response.errorMessage.Add(ex.Message);
                //return new ResponseModel { status = ResponseModel.responseFAIL, errorMessage = response.errorMessage };
            }

        }
        private ResponseModel ValidateList(string inMemberId, string inSportId, string inGameDate)
        {
            ResponseModel response = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(inMemberId))
                {
                    throw new ApplicationException("Member Id is required for this method.");
                }

                int iMemberId = 0;
                if (int.TryParse(inMemberId, out iMemberId) == false)
                {
                    throw new ApplicationException("Member Id must be numeric for this method.");
                }

                if (iMemberId <= 0)
                {
                    throw new ApplicationException("Member Id must be greater than 0.");
                }

                if (String.IsNullOrEmpty(inSportId))
                {
                    throw new ApplicationException("Sport Id is required for this method.");
                }

                int iSportId = 0;
                if (int.TryParse(inSportId, out iSportId) == false)
                {
                    throw new ApplicationException("Sport Id must be numeric for this method.");
                }

                if (iSportId <= 0)
                {
                    throw new ApplicationException("Sport Id must be greater than 0.");
                }

                return response;
            }
            catch (Exception ex)
            {
                response.errorMessage = new List<string>();
                response.errorMessage.Add(ex.Message);
                return new ResponseModel { status = ResponseModel.responseFAIL, errorMessage = response.errorMessage };
            }

        }
    }
}
