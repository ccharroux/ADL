using ADLAPICore.Library.Common;
using ADLAPICore.Models.General;
using System;
using System.Collections.Generic;
using System.Data;

namespace ADLAPICore.Library.Accomplishments
{
    public class AccomplishmentsResult
    {
        public ResponseModel result = new ResponseModel();
        public List<Accomplishment> Accomplishments = new List<Accomplishment>();

        public AccomplishmentsResult()
        {
            this.Accomplishments = new List<Accomplishment>();
            //this.result.Success = false;
            //this.result.Message = "Unexpected error";
        }
    }
    public class Accomplishment
    {
        public string Label { get; set; }
        public int Count { get; set; }
    }
    public interface IAccomplishmentsClass
    {
        public AccomplishmentsResult Accomplishments(string inMemberId, string inSportId);
        public ResponseModel Validate(string inMemberId, string inSportId);
    }

    public class AccomplishmentsClass : IAccomplishmentsClass
    {

        
        public AccomplishmentsClass()
        { }

        public AccomplishmentsResult Accomplishments(string inMemberId, string inSportId)
        {

            AccomplishmentsResult AccomplishmentsResult = new AccomplishmentsResult();
            try
            {
                AccomplishmentsResult.result = Validate(inMemberId, inSportId);

                //if (AccomplishmentsResult.result.Success == false)
                //{
                //    AccomplishmentsResult.result.Message = "ERROR: " + AccomplishmentsResult.result.Message;
                //    return AccomplishmentsResult;
                //}

                AccomplishmentsDBClass lDB = new AccomplishmentsDBClass();

                var dbResult = lDB.AccomplishmentsDBCall(inMemberId, inSportId);
                foreach (DataRow row in dbResult.Rows)
                {
                    Accomplishment record = new Accomplishment();
                    record.Label = row["Label"].ToString();
                    record.Count = Convert.ToInt32(row["Count"].ToString());
                    AccomplishmentsResult.Accomplishments.Add(record);
                }
                //AccomplishmentsResult.result.Success = true;
                //AccomplishmentsResult.result.Message = String.Empty;

                return AccomplishmentsResult;
            }

            catch (Exception )
            {
                //var errResult = new GeneralResult { Message = ex.Message, Success = false };
                return new AccomplishmentsResult();// { result = errResult };
            }
        }
        public ResponseModel Validate(string inMemberId, string inSportId)
        {
            ResponseModel result = new ResponseModel();

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
