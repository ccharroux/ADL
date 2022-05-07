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
        public DBResult UserAddressInsertDBCall(UserAddressInsertInput input);
        public DBResult UserMemberInsertDBCall(UserMemberInsertInput input);
        public DBResult UserMemberUpdateDBCall(UserMemberUpdateInput input);
        public DBResult UserMemberListDBCall(UserMemberListGetInput input);
        public DBResult UserMemberListByFacilityDBCall(UserMemberListByFacilityGetInput input);
        public DBResult UserMemberAccessListDBCall(UserMemberAccessListGetInput input);
        public DBResult UserMemberDBCall(UserMemberGetInput input);
    }

    class AddressDBClass : IUserMemberDBClass
    {
        public DBResult UserAddressInsertDBCall(UserAddressInsertInput input)
        {
            var result = new DBResult();
            try
            {
                DBClass.dbCmd = new MySqlCommand("insertUserAddress", DBClass.dbConn);
                DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                DBClass.dbCmd.Parameters.Add(param);
                param = new MySqlParameter("inUserId", input.inUserId);
                DBClass.dbCmd.Parameters.Add(param);
                param = new MySqlParameter("inAddressId", input.inAddressId);
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
        public DBResult UserMemberInsertDBCall(UserMemberInsertInput input)
        {
            var result = new DBResult();
            try
            {
                DBClass.dbCmd = new MySqlCommand("insertUserMember", DBClass.dbConn);
                DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                DBClass.dbCmd.Parameters.Add(param);
                param = new MySqlParameter("infirstname", input.inFirstName);
                DBClass.dbCmd.Parameters.Add(param);
                param = new MySqlParameter("inmiddlename", input.inMiddleName);
                DBClass.dbCmd.Parameters.Add(param);
                param = new MySqlParameter("inlastname", input.inLastName);
                DBClass.dbCmd.Parameters.Add(param);
                param = new MySqlParameter("inemailaddress", input.inEmailAddress);
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
        public DBResult UserMemberUpdateDBCall(UserMemberUpdateInput input)
        {
            var result = new DBResult();
            try
            {

                DBClass.dbCmd = new MySqlCommand("updateUserMember", DBClass.dbConn);
                DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                DBClass.dbCmd.Parameters.Add(param);
                param = new MySqlParameter("inuserid", input.inUserId);
                DBClass.dbCmd.Parameters.Add(param);
                param = new MySqlParameter("infirstname", input.inFirstName);
                DBClass.dbCmd.Parameters.Add(param);
                param = new MySqlParameter("inmiddlename", input.inMiddleName);
                DBClass.dbCmd.Parameters.Add(param);
                param = new MySqlParameter("inlastname", input.inLastName);
                DBClass.dbCmd.Parameters.Add(param);
                param = new MySqlParameter("inemailaddress", input.inEmailAddress);
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
