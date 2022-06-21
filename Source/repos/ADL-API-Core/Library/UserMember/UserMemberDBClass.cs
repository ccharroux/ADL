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
        public DBResult UserMemberAddressDBCall(UserMemberAddressGetInput input);
        public DBResult UserMemberAccessUpdateDBCall(UserMemberAccessUpdateInput input);
        public DBResult UserMemberAccessInsertDBCall(UserMemberAccessInsertInput input);
    }

    class AddressDBClass : IUserMemberDBClass
    {
        public DBResult UserAddressInsertDBCall(UserAddressInsertInput input)
        {
            DBClass dbClass = new DBClass();
            var result = new DBResult();
            try
            {
                dbClass.dbCmd = new MySqlCommand("insertUserAddress", dbClass.dbConn);
                dbClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                dbClass.dbCmd.Parameters.Add(param);
                param = new MySqlParameter("inUserId", input.inUserId);
                dbClass.dbCmd.Parameters.Add(param);
                param = new MySqlParameter("inAddressId", input.inAddressId);
                dbClass.dbCmd.Parameters.Add(param);

                result = dbClass.getDBResults();

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
            DBClass dbClass = new DBClass();
            var result = new DBResult();
            try
            {
                dbClass.dbCmd = new MySqlCommand("insertUserMember", dbClass.dbConn);
                dbClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                dbClass.dbCmd.Parameters.Add(param);
                param = new MySqlParameter("infirstname", input.inFirstName);
                dbClass.dbCmd.Parameters.Add(param);
                param = new MySqlParameter("inmiddlename", input.inMiddleName);
                dbClass.dbCmd.Parameters.Add(param);
                param = new MySqlParameter("inlastname", input.inLastName);
                dbClass.dbCmd.Parameters.Add(param);
                param = new MySqlParameter("inemailaddress", input.inEmailAddress);
                dbClass.dbCmd.Parameters.Add(param);
                param = new MySqlParameter("inphonenumber", input.inPhoneNumber);
                dbClass.dbCmd.Parameters.Add(param);

                result = dbClass.getDBResults();

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
            DBClass dbClass = new DBClass();
            try
            {

                dbClass.dbCmd = new MySqlCommand("updateUserMember", dbClass.dbConn);
                dbClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                dbClass.dbCmd.Parameters.Add(param);
                param = new MySqlParameter("inuserid", input.inUserId);
                dbClass.dbCmd.Parameters.Add(param);
                param = new MySqlParameter("infirstname", input.inFirstName);
                dbClass.dbCmd.Parameters.Add(param);
                param = new MySqlParameter("inmiddlename", input.inMiddleName);
                dbClass.dbCmd.Parameters.Add(param);
                param = new MySqlParameter("inlastname", input.inLastName);
                dbClass.dbCmd.Parameters.Add(param);
                param = new MySqlParameter("inemailaddress", input.inEmailAddress);
                dbClass.dbCmd.Parameters.Add(param);
                param = new MySqlParameter("inphonenumber", input.inPhoneNumber);
                dbClass.dbCmd.Parameters.Add(param);


                result = dbClass.getDBResults();

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
            DBClass dbClass = new DBClass();
            try
            {
                dbClass.dbCmd = new MySqlCommand("getUserList", dbClass.dbConn);
                dbClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inroleid", input.inRoleId);
                dbClass.dbCmd.Parameters.Add(param);

                result = dbClass.getDBResults();

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
            DBClass dbClass = new DBClass();
            try
            {
                dbClass.dbCmd = new MySqlCommand("getUserListByFacility", dbClass.dbConn);
                dbClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inroleid", input.inRoleId);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("infacilityid", input.inFacilityId);
                dbClass.dbCmd.Parameters.Add(param);

                result = dbClass.getDBResults();

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
            DBClass dbClass = new DBClass();
            try
            {
                dbClass.dbCmd = new MySqlCommand("getUserRoleFacilityList", dbClass.dbConn);
                dbClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inuserid", input.inUserId);
                dbClass.dbCmd.Parameters.Add(param);

                result = dbClass.getDBResults();

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
            DBClass dbClass = new DBClass();
            var result = new DBResult();
            try
            {
                dbClass.dbCmd = new MySqlCommand("getUser", dbClass.dbConn);
                dbClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inuserid", input.inUserId);
                dbClass.dbCmd.Parameters.Add(param);

                result = dbClass.getDBResults();

                return result;
            }
            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);

                return new DBResult { dt = new DataTable(), response = result.response };
            }

        }
        public DBResult UserMemberAddressDBCall(UserMemberAddressGetInput input)
        {
            var result = new DBResult();
            DBClass dbClass = new DBClass();
            try
            {
                dbClass.dbCmd = new MySqlCommand("getUserAddress", dbClass.dbConn);
                dbClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inuserid", input.inUserId);
                dbClass.dbCmd.Parameters.Add(param);

                result = dbClass.getDBResults();

                return result;
            }
            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);

                return new DBResult { dt = new DataTable(), response = result.response };
            }

        }
        public DBResult UserMemberAccessUpdateDBCall(UserMemberAccessUpdateInput input)
        {
            var result = new DBResult();
            DBClass dbClass = new DBClass();
            try
            {
                dbClass.dbCmd = new MySqlCommand("updateuserrolefacility", dbClass.dbConn);
                dbClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inroleid", input.inRoleId);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("infacilityid", input.inFacilityId);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inuserid", input.inUserId);
                dbClass.dbCmd.Parameters.Add(param); result = dbClass.getDBResults();

                return result;
            }
            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);

                return new DBResult { dt = new DataTable(), response = result.response };
            }

        }
        public DBResult UserMemberAccessInsertDBCall(UserMemberAccessInsertInput input)
        {
            var result = new DBResult();
            DBClass dbClass = new DBClass();
            try
            {
                dbClass.dbCmd = new MySqlCommand("insertuserrolefacility", dbClass.dbConn);
                dbClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inroleid", input.inRoleId);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("infacilityid", input.inFacilityId);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inuserid", input.inUserId);
                dbClass.dbCmd.Parameters.Add(param); result = dbClass.getDBResults();

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
