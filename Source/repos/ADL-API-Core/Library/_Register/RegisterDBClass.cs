using System;
using System.Collections.Generic;
using System.Text;
using MySql.Data.MySqlClient;
using ADLAPICore.Library.Common;
using System.Data;
using ADLAPICore.Library.User;

namespace ADLAPICore.Library.Register
{
    interface IRegisterDBClass
    {
        public DataTable RegisterDBCall();
    }

    class RegisterDBClass : IRegisterDBClass
    {
        UserClass myUser = new UserClass();

        public RegisterDBClass(UserClass inUser)
        {
            this.myUser = inUser;
        }

        public DataTable RegisterDBCall()
        {

            //////                cmd.CommandType = System.Data.CommandType.StoredProcedure;
            //////                cmd.Parameters.Add(new MySqlParameter("inMemberID", MemberID));
            //////                cmd.Parameters.Add(new MySqlParameter("inFirstName", FirstName));
            //////                cmd.Parameters.Add(new MySqlParameter("inLastName", LastName));
            //////                cmd.Parameters.Add(new MySqlParameter("inEmailAddress", EmailAddress));
            //////                cmd.Parameters.Add(new MySqlParameter("inPassword", Password));
            //////                cmd.Parameters.Add(new MySqlParameter("inProviderID", ProviderID));
            //////                cmd.Parameters.Add(new MySqlParameter("inTextPhoneNumber", MobileNumber));

            //////                SQL = "usp_insert_memeber";



            DBClass.dbCmd = new MySqlCommand("insert_User", DBClass.dbConn);
            DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

            MySqlParameter param = new MySqlParameter("inEmailAddress", myUser.EmailAddress);
            DBClass.dbCmd.Parameters.Add(param);

            param = new MySqlParameter("inMemberID", 0);
            DBClass.dbCmd.Parameters.Add(param);

            param = new MySqlParameter("inPassword", myUser.Password);
            DBClass.dbCmd.Parameters.Add(param);

            param = new MySqlParameter("inFirstName", myUser.FirstName);
            DBClass.dbCmd.Parameters.Add(param);

            param = new MySqlParameter("inLastName", myUser.LastName);
            DBClass.dbCmd.Parameters.Add(param);

            param = new MySqlParameter("inProviderID", 1);
            DBClass.dbCmd.Parameters.Add(param);

            param = new MySqlParameter("inTextPhoneNumber", "");
            DBClass.dbCmd.Parameters.Add(param);

            //param = new MySqlParameter("inIsAdmin", myUser.IsAdmin);
            //DBClass.dbCmd.Parameters.Add(param);

            return DBClass.getDBResults().dt;

        }


    }
}
