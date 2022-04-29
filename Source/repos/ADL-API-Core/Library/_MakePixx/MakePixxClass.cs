using ADLAPICore.Library.Common;
using ADLAPICore.Library.Game;
using ADLAPICore.Models.General;
using System;
using System.Data;

namespace ADLAPICore.Library.MakePixx
{
    public interface IMakePixxClass
    {

        public ResponseModel MakePixx(MakePixxInput input);

    }

    public class MakePixxInput
    {
        public string memberId { get; set; }
        public string sportId { get; set; }
        public string gameDate { get; set; }
        public string gameId { get; set; }
        public string pixx { get; set; }
    }
    class MakePixxClass : IMakePixxClass
    {

        private ResponseModel result = new ResponseModel();

        public MakePixxClass()
        {
            //result.Success = false;
            //result.Message = "Unexpected error";
        }



        public ResponseModel MakePixx(MakePixxInput input)
        {

            try
            {

                this.result = Validate(input);

                //if (result.Success == false)
                //{
                //    result.Message = "ERROR: " + result.Message;
                //    return result;
                //}

                MakePixxDBClass lDB = new MakePixxDBClass();

                var dbResult = lDB.MakePixx(input);

                foreach (DataRow row in dbResult.Rows)
                {
                    //if (Convert.ToInt32(row["ReturnCode"]) > 0)
                    //{
                    //    result.Success = true;
                    //    result.Message = String.Empty;
                    //}
                }

                return result;
            }

            catch (Exception )
            {
                return new ResponseModel();// { Message = ex.Message, Success = false };

            }
        }
        public ResponseModel Validate(MakePixxInput input)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(input.memberId))
                {
                    throw new ApplicationException("Member Id is required for this method.");
                }

                if (int.TryParse(input.memberId, out int iMemberId) == false)
                {
                    throw new ApplicationException("Member Id must be numeric for this method.");
                }

                if (iMemberId <= 0)
                {
                    throw new ApplicationException("Member Id must be greater than 0.");
                }


                if (String.IsNullOrEmpty(input.sportId))
                {
                    throw new ApplicationException("Sport Id is required for this method.");
                }

                if (int.TryParse(input.sportId, out int iSportId) == false)
                {
                    throw new ApplicationException("Sport Id must be numeric for this method.");
                }

                if (iSportId <= 0)
                {
                    throw new ApplicationException("Sport Id must be greater than 0.");
                }

                if (string.IsNullOrEmpty(input.gameDate))
                {
                    throw new ApplicationException("Game Date is required for this method.");
                }

                if (string.IsNullOrEmpty(input.gameId))
                {
                    throw new ApplicationException("Game ID is required for this method.");
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
