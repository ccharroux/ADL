using ADLAPICore.Library.Common;
using ADLAPICore.Library.User;
using ADLAPICore.Models.General;
using System;
using System.Data;

namespace ADLAPICore.Library.Register
{
    interface IRegister
    {
        public RegisterResult RegisterUser();
        public ResponseModel Validate();
    }

    public class RegisterResult
    {
        public ResponseModel result = new ResponseModel();
        public int MemberID { get; set; }
    }

    class RegisterClass: IRegister
    {
        UserClass myUser;

        public RegisterClass(UserClass inUser)
        {
            this.myUser = inUser;
        }

        public RegisterResult RegisterUser()
        {

            RegisterResult registerResult = new RegisterResult();

            try
            {
                registerResult.result = Validate();

                //if (registerResult.result.Success == false)
                //{
                //    Console.WriteLine("ERROR: " + registerResult.result.Message);
                //    return registerResult;
                //}

                RegisterDBClass lDB = new RegisterDBClass(this.myUser);

                var dbResult = lDB.RegisterDBCall();

                foreach (DataRow row in dbResult.Rows)
                {
                    registerResult.MemberID = Convert.ToInt32(row["userId"]);

                    //if (Convert.ToInt32(row["userId"]) == this.myUser.UserId)
                    //{
                    //    registerResult.result.Success = true;
                    //    registerResult.result.Message = String.Empty;
                    //}
                    //else
                    //{
                    //    registerResult.result.Success = false;
                    //    registerResult.result.Message = "Unexpected error";
                    //}

                }
                return registerResult;
            }

            catch (Exception )
            {
                //var errResult = new GeneralResult { Message = ex.Message, Success = false };
                return new RegisterResult();// { MemberID = -1, result = errResult };
     
            }
        }
        public ResponseModel Validate()
        {
            ResponseModel result = new ResponseModel();

            try
            {
                if (String.IsNullOrEmpty(this.myUser.FirstName))
                {
                    throw new ApplicationException("First Name is required for this method.");
                }

                if (String.IsNullOrEmpty(this.myUser.LastName))
                {
                    throw new ApplicationException("Last Name is required for this method.");
                }

                if (String.IsNullOrEmpty(this.myUser.EmailAddress))
                {
                    throw new ApplicationException("Email Address is required for this method.");
                }

                if (String.IsNullOrEmpty(this.myUser.Password))
                {
                    throw new ApplicationException("Password is required for this method.");
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
