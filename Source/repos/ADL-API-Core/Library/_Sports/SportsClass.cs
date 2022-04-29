using ADLAPICore.Library.Common;
using ADLAPICore.Models.General;
using System;
using System.Collections.Generic;
using System.Data;

namespace ADLAPICore.Library.Sports
{
    public class SportsResult
    {
        public ResponseModel result = new ResponseModel();
        public List<Sport> sports = new List<Sport>();

        public SportsResult()
        {
            this.sports = new List<Sport>();
            //this.result.Success = false;
            //this.result.Message = "Unexpected error";
        }
    }
    public class Sport
    {
        public int SportID { get; set; }
        public string SportName { get; set; }
    }
    public interface ISportsClass
    {
        public SportsResult Sports();
    }

    public class SportsClass: ISportsClass
    {

        
        public SportsClass()
        {}

        public SportsResult Sports()
        {

            SportsResult SportsResult = new SportsResult();
            try
            {

                SportsDBClass lDB = new SportsDBClass();

                var dbResult = lDB.SportsDBCall();
                foreach (DataRow row in dbResult.Rows)
                {
                    Sport record = new Sport();
                    record.SportName = row["SportName"].ToString();
                    record.SportID = Convert.ToInt32(row["SportID"].ToString());
                    SportsResult.sports.Add(record);
                }
                //SportsResult.result.Success = true;
                //SportsResult.result.Message = String.Empty;

                return SportsResult;
            }

            catch (Exception)
            {
                //var errResult = new GeneralResult { Message = ex.Message, Success = false };
                return new SportsResult();// { result = errResult };
            }
        }
 
    }
}
