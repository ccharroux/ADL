using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using ADLAPICore.Library.Common;
using ADLAPICore.Library.User;
using ADLAPICore.Models.General;

namespace ADLAPICore.Library.Stats
{
    public class StatsResult
    {
        public ResponseModel result = new ResponseModel();
        public List<Stat> Stats = new List<Stat>();

        public StatsResult()
        {
            this.Stats = new List<Stat>();
            //this.result.Success = false;
            //this.result.Message = "Unexpected error";
        }
    }
    public class Stat
    {
        public int MemberID { get; set; } 
        public string MemberName { get; set; } 
        public int Wins { get; set; } 
        public int Losses { get; set; } 
        public int Points { get; set; } 
        public string Label { get; set; } 
        public string LabelValue { get; set; } 
    }
    public interface IStatsClass
    {
        public StatsResult Stats(string inSportId);
        public ResponseModel Validate(string inSportId);
    }

    public class StatsClass: IStatsClass
    {

        
        public StatsClass()
        {       
        }
        public StatsResult Stats(string inSportId)
        {

            StatsResult StatsResult = new StatsResult();
            try
            {
                StatsResult.result = Validate(inSportId);

                //if (StatsResult.result.Success == false)
                //{
                //    StatsResult.result.Message = "ERROR: " + StatsResult.result.Message;
                //    return StatsResult;
                //}

                StatDBClass lDB = new StatDBClass();

                var dbResult = lDB.StatsDBCall(inSportId);
                foreach (DataRow row in dbResult.Rows)
                {
                    Stat record = new Stat();
                    record.MemberID = Convert.ToInt32(row["MemberID"].ToString());
                    record.MemberName = row["LastName"].ToString() + ", " + row["FirstName"].ToString();
                    record.Wins = Convert.ToInt32(row["Wins"].ToString());
                    record.Losses = Convert.ToInt32(row["Losses"].ToString());
                    record.Points = 0;
                    record.Label = row["Label"].ToString();
                    record.LabelValue = row["LabelValue"].ToString();
                    StatsResult.Stats.Add(record);
                }
                //StatsResult.result.Success = true;
                //StatsResult.result.Message = String.Empty;

                return StatsResult;
            }

            catch (Exception )
            {
                //var errResult = new GeneralResult { Message = ex.Message, Success = false };
                return new StatsResult(); //{ result = errResult };
            }
        }
        public ResponseModel Validate (string inSportId)
        {
            ResponseModel result = new ResponseModel();

            try
            {

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
