using System;
using MySql.Data.MySqlClient;
using ADLAPICore.Library.Common;
using System.Data;
using ADLAPICore.Library.User;
using ADLAPICore.Models.General;

namespace ADLAPICore.Library.Member
{
    interface IMemberDBClass
    {
        public DataTable UpdateMemberPasswordDBCall(string inMemberId, string inPassword);
        public DataTable UpdateMemberDBCall(MemberUpdateInput input);
        public DataTable GetMemberInfoDBCall<T>(T inUserId);
 
        public DataTable SendMemberPasswordDBCall(string emailAddress);
    }

    class MemberDBClass : IMemberDBClass
    {
        MemberRecordClass myMember = new MemberRecordClass();
        public ResponseModel result = new ResponseModel();

        public MemberDBClass()
        {

        }
        public MemberDBClass(MemberRecordClass inMember)
        {
            this.myMember = inMember;
        }
        public DataTable GetMemberInfoDBCall<T>(T inUserId)
        {

            DBClass.dbCmd = new MySqlCommand("get_UserInfo", DBClass.dbConn);
            DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

            MySqlParameter param = new MySqlParameter("inUserId", inUserId);
            DBClass.dbCmd.Parameters.Add(param);

            return DBClass.getDBResults().dt;

        }
        public DataTable GetMemberInfoListDBCall ()
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
        public DataTable UpdateMemberDBCall(MemberUpdateInput input)
        {

            DBClass.dbCmd = new MySqlCommand("usp_insert_Memeber", DBClass.dbConn);
            DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

            MySqlParameter param = new MySqlParameter("inMemberId", input.MemberId);
            DBClass.dbCmd.Parameters.Add(param);
           
            param = new MySqlParameter("inEmailAddress", input.EmailAddress);
            DBClass.dbCmd.Parameters.Add(param);

            param = new MySqlParameter("inFirstName", input.FirstName);
            DBClass.dbCmd.Parameters.Add(param);

            param = new MySqlParameter("inLastName", input.LastName);
            DBClass.dbCmd.Parameters.Add(param);

            param = new MySqlParameter("inPassword", "DONOTCHANGE");
            DBClass.dbCmd.Parameters.Add(param);

            param = new MySqlParameter("inProviderID", 1);
            DBClass.dbCmd.Parameters.Add(param);
            
            param = new MySqlParameter("inTextPhoneNumber", "1111111111");
            DBClass.dbCmd.Parameters.Add(param);


            return DBClass.getDBResults().dt;

        }
 

        public DataTable SendMemberPasswordDBCall(string emailAddress)
        {

            DBClass.dbCmd = new MySqlCommand("usp_get_MemberPassword", DBClass.dbConn);
            DBClass.dbCmd.CommandType = CommandType.StoredProcedure;
            MySqlParameter param = new MySqlParameter("inEmailAddress", emailAddress);
            DBClass.dbCmd.Parameters.Add(param);

            return DBClass.getDBResults().dt;


        }
        public DataTable UpdateMemberPasswordDBCall(string inMemberId, string inPassword)
        {

            DBClass.dbCmd = new MySqlCommand("usp_update_memberpassword", DBClass.dbConn);
            DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

            MySqlParameter param = new MySqlParameter("inMemberId", inMemberId);
            DBClass.dbCmd.Parameters.Add(param);

            param = new MySqlParameter("inPassword", inPassword);
            DBClass.dbCmd.Parameters.Add(param);

            return DBClass.getDBResults().dt;

        }
    }
}
