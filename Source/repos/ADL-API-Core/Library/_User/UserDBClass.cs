using System;
using System.Collections.Generic;
using System.Text;
using MySql.Data.MySqlClient;
using ADLAPICore.Library.Common;
using System.Data;
using ADLAPICore.Library.User;
using ADLAPICore.Models.General;

namespace ADLAPICore.Library.User
{
    interface IUserDBClass
    {
        public DataTable UpdateUserPasswordDBCall();
        public DataTable UpdateUserDBCall();
        public DataTable GetUserInfoDBCall<T>(T inUserId);
    }

    class UserDBClass : IUserDBClass
    {
        UserClass myUser = new UserClass();
        public ResponseModel result = new ResponseModel();

        public UserDBClass()
        {

        }
        public UserDBClass(UserClass inUser)
        {
            this.myUser = inUser;
        }
        public DataTable GetUserInfoDBCall<T>(T inUserId)
        {

            DBClass.dbCmd = new MySqlCommand("get_UserInfo", DBClass.dbConn);
            DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

            MySqlParameter param = new MySqlParameter("inUserId", inUserId);
            DBClass.dbCmd.Parameters.Add(param);

            return DBClass.getDBResults().dt;

        }
        public DataTable GetUserInfoListDBCall()
        {

            try
            {
                //this.result.Success = true;
                //this.result.Message = "";
                DBClass.dbCmd = new MySqlCommand("usp_get_AllMembers", DBClass.dbConn);
                DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

                return DBClass.getDBResults().dt;
            }
            catch (Exception )
            {
                //this.result.Success = false;
                //this.result.Message = ex.Message;
                return new DataTable();
            }
        }
        public DataTable UpdateUserDBCall()
        {

            DBClass.dbCmd = new MySqlCommand("update_User", DBClass.dbConn);
            DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

            MySqlParameter param = new MySqlParameter("inUserId", myUser.UserId);
            DBClass.dbCmd.Parameters.Add(param);

            param = new MySqlParameter("inEmailAddress", myUser.EmailAddress);
            DBClass.dbCmd.Parameters.Add(param);

            param = new MySqlParameter("inFirstName", myUser.FirstName);
            DBClass.dbCmd.Parameters.Add(param);

            param = new MySqlParameter("inLastName", myUser.LastName);
            DBClass.dbCmd.Parameters.Add(param);

            return DBClass.getDBResults().dt;

        }
        public DataTable UpdateUserPasswordDBCall()
        {

            DBClass.dbCmd = new MySqlCommand("update_UserPassword", DBClass.dbConn);
            DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

            MySqlParameter param = new MySqlParameter("inUserId", myUser.UserId);
            DBClass.dbCmd.Parameters.Add(param);

            param = new MySqlParameter("inPassword", myUser.Password);
            DBClass.dbCmd.Parameters.Add(param);

            return DBClass.getDBResults().dt;

        }


    }
}
