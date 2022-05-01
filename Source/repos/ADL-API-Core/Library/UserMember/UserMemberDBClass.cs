using System;
using MySql.Data.MySqlClient;
using ADLAPICore.Library.Common;
using System.Data;
using ADLAPICore.Models.General;
using ADLAPICore.Models.UserMember;
using ADLAPICore.Library.utilities;

namespace ADLAPICore.Library.UserMember
{


    interface IUserMemberDBClass
    {
        public DBResult UserMemberListDBCall(UserMemberListGetInput input);
        public DBResult UserMemberListByFacilityDBCall(UserMemberListByFacilityGetInput input);
        public DBResult UserMemberAccessListDBCall(UserMemberAccessListGetInput input);
        public DBResult UserMemberDBCall(UserMemberGetInput input);
    }

    class UserMemberDBClass : IUserMemberDBClass
    {
        public DBResult UserMemberListDBCall(UserMemberListGetInput input)
        {
            var result = new DBResult();
            try
            {
                DBClass.dbCmd = new MySqlCommand("getUserList", DBClass.dbConn);
                DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                DBClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inroleid", input.inRoleId);
                DBClass.dbCmd.Parameters.Add(param);

                result = DBClass.getDBResults();

                return result;
            }
            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);

                return new DBResult { dt = new DataTable(), response = result.response };
            }

        }
        public DBResult UserMemberListByFacilityDBCall(UserMemberListByFacilityGetInput input)
        {
            var result = new DBResult();
            try
            {
                DBClass.dbCmd = new MySqlCommand("getUserListByFacility", DBClass.dbConn);
                DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                DBClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inroleid", input.inRoleId);
                DBClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("infacilityid", input.inFacilityId);
                DBClass.dbCmd.Parameters.Add(param);

                result = DBClass.getDBResults();

                return result;
            }
            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);

                return new DBResult { dt = new DataTable(), response = result.response };
            }

        }
        public DBResult UserMemberAccessListDBCall(UserMemberAccessListGetInput input)
        {
            var result = new DBResult();
            try
            {
                DBClass.dbCmd = new MySqlCommand("getUserAccessList", DBClass.dbConn);
                DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                DBClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inuserid", input.inUserId);
                DBClass.dbCmd.Parameters.Add(param);

                result = DBClass.getDBResults();

                return result;
            }
            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);

                return new DBResult { dt = new DataTable(), response = result.response };
            }

        }
        public DBResult UserMemberDBCall(UserMemberGetInput input)
        {
            var result = new DBResult();
            try
            {
                DBClass.dbCmd = new MySqlCommand("getUser", DBClass.dbConn);
                DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                DBClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inuserid", input.inUserId);
                DBClass.dbCmd.Parameters.Add(param);

                result = DBClass.getDBResults();

                return result;
            }
            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);

                return new DBResult { dt = new DataTable(), response = result.response };
            }

        }

    }
}
