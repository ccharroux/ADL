using ADLAPICore.Library.Common;
using ADLAPICore.Models.General;
using System;
using System.Collections.Generic;
using System.Data;

namespace ADLAPICore.Library.User
{
    public class UserResult
    {
        public ResponseModel result = new ResponseModel();
        public UserClass user = new UserClass();
    }
    public class UserListResult
    {
        public ResponseModel result = new ResponseModel();
        public List<UserClass> user = new List<UserClass>();
    }

    public interface IUser
    {
        public ResponseModel UpdateUserPassword(UserClass inUser);
        public ResponseModel ValidatePassword();

        UserListResult getUserList<T>(T inMemberId);
        UserResult getUserInfo<T>(T userId);
        void getUserLoggedIn<T1, T2> (T1 emailAddress, T2 password);
        void getUserProfile<T>(T userId);
    }
    public class UserClass : IUser
    {
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailAddress { get; set; }
        public string Password { get; set; }
        public int ProvideID { get; set; }
        public string MobilePhone { get; set; }

        public ResponseModel Validate()
        {

            ResponseModel result = new ResponseModel();

            try
            {
                if (this.UserId <= 0)
                {
                    throw new ApplicationException("User Id is invalid for this method.");
                }

                return result;
            }

            catch (Exception)
            {
                //result.Success = false;
                //result.Message = ex.Message;
                return result;
            }
        }
        public UserClass()
        {
            this.ProvideID = -1;
        }
        public UserClass(string emailAddress, string password)
        {
            this.ProvideID = -1;
            this.EmailAddress = emailAddress;
            this.Password = password;
        }

        public UserResult getUserInfo<T>(T userId)
        {
            UserResult userResult = new UserResult();


            UserDBClass uc = new UserDBClass(new UserClass());

            var dbResult = uc.GetUserInfoDBCall(userId);

            foreach (DataRow row in dbResult.Rows)
            {
                this.UserId = Convert.ToInt32(userId);
                //this.IsAdmin = Convert.ToBoolean(row["IsAdmin"]);
                this.FirstName = row["FirstName"].ToString();
                this.LastName = row["LastName"].ToString();
                this.EmailAddress = row["EmailAddress"].ToString();
                userResult.user = this;
                //userResult.result.Success = true;
            }

            return userResult;
        }
        public UserListResult getUserList<T>(T inMemberId)
        {
            UserListResult userResultList = new UserListResult();

            UserDBClass uc = new UserDBClass(new UserClass());

            try
            {
                var dbResult = uc.GetUserInfoListDBCall();

                foreach (DataRow row in dbResult.Rows)
                {
                    if (inMemberId.Equals(row["MemberID"].ToString()) == false)
                    {
                        UserClass u = new UserClass();
                        u.UserId = Convert.ToInt32(row["MemberID"].ToString());
                        u.FirstName = row["FirstName"].ToString();
                        u.LastName = row["LastName"].ToString();
                        u.EmailAddress = row["EmailAddress"].ToString();

                        userResultList.user.Add(u);
                    }
                }
                //userResultList.result.Success = true;
                //userResultList.result.Message = "";
                return userResultList;
            }

            catch (Exception )
            {
                //ResponseModel r = new ResponseModel { Message = ex.Message, Success = false };
                return new UserListResult();// { result = r};
            }
        
        }
        public void getUserLoggedIn<T1, T2>(T1 emailAddress, T2 password)
        {
            throw new NotImplementedException();
        }

        public void getUserProfile<T>(T userId)
        {
            throw new NotImplementedException();
        
        }
        #region Update Rtn
        public ResponseModel ValidateUser()
        {
            ResponseModel result = new ResponseModel();

            try
            {
                if (this.UserId <= 0)
                {
                    throw new ApplicationException("User Id is invalid for this method.");
                }

                if (String.IsNullOrEmpty(this.FirstName))
                {
                    throw new ApplicationException("First Name is required for this method.");
                }

                if (String.IsNullOrEmpty(this.LastName))
                {
                    throw new ApplicationException("Last Name is required for this method.");
                }

                if (String.IsNullOrEmpty(this.EmailAddress))
                {
                    throw new ApplicationException("Email Address is required for this method.");
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
        public ResponseModel UpdateUser(UserClass inUser)
        {
            var result = ValidateUser();

            //if (result.Success == false)
            //{
            //    Console.WriteLine("ERROR: " + result.Message);
            //    return result;
            //}

            UserDBClass uc = new UserDBClass(inUser);

            var dbResult = uc.UpdateUserDBCall();

            foreach (DataRow row in dbResult.Rows)
            {
                //if (Convert.ToInt32(row["userId"]) == inUser.UserId)
                //{
                //    result.Success = true;
                //    result.Message = String.Empty;
                //}
                //else
                //{
                //    result.Success = false;
                //    result.Message = "Unexpected error";
                //}

            }

            return result;
        }
        #endregion
        #region Password Update Rtn
        public ResponseModel ValidatePassword()
        {
            ResponseModel result = new ResponseModel();

            try
            {
                if (this.UserId <= 0)
                {
                    throw new ApplicationException("User Id is invalid for this method.");
                }

                if (String.IsNullOrEmpty(this.Password))
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
        public ResponseModel UpdateUserPassword(UserClass inUser)
        {

            var result = ValidatePassword();

            //if (result.Success == false)
            //{
            //    Console.WriteLine("ERROR: " + result.Message);
            //    return result;
            //}

            UserDBClass uc = new UserDBClass(inUser);

            var dbResult = uc.UpdateUserPasswordDBCall();

            foreach (DataRow row in dbResult.Rows)
            {
                if (Convert.ToInt32(row["userId"]) == inUser.UserId)
                {
                    //result.Success = true;
                    //result.Message = String.Empty;
                }
                else
                {
                    //result.Success = false;
                    //result.Message = "Unexpected error";
                }

            }

            return result;
        }
    #endregion
    }


}
