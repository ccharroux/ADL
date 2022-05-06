using System;
using MySql.Data.MySqlClient;
using ADLAPICore.Library.Common;
using System.Data;
using ADLAPICore.Models.General;
using ADLAPICore.Models.Address;
using ADLAPICore.Library.utilities;

namespace ADLAPICore.Library.Address
{

    interface IAddressDBClass
    {
        public DBResult AddressInsertDBCall(AddressInsertInput input);
        public DBResult AddressUpdateDBCall(AddressUpdateInput input);
        public DBResult AddressGetDBCall(AddressGetInput input);
    }

    class AddressDBClass : IAddressDBClass
    {
        public DBResult AddressInsertDBCall(AddressInsertInput input)
        {
            var result = new DBResult();
            try
            {
                DBClass.dbCmd = new MySqlCommand("insertAddress", DBClass.dbConn);
                DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                DBClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inAddress1", input.inAddress1);
                DBClass.dbCmd.Parameters.Add(param);
                
                param = new MySqlParameter("inAddress2", input.inAddress2);
                DBClass.dbCmd.Parameters.Add(param);
                
                param = new MySqlParameter("inCity", input.inCity);
                DBClass.dbCmd.Parameters.Add(param);
                
                param = new MySqlParameter("inStateId", input.inStateId);
                DBClass.dbCmd.Parameters.Add(param);
                
                param = new MySqlParameter("inCountryId", input.inCountryId);
                DBClass.dbCmd.Parameters.Add(param);
                
                param = new MySqlParameter("inZipCode", input.inZipCode);
                DBClass.dbCmd.Parameters.Add(param);
                
                param = new MySqlParameter("inPhone", input.inPhone);
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
        public DBResult AddressUpdateDBCall(AddressUpdateInput input)
        {
            var result = new DBResult();
            try
            {

                DBClass.dbCmd = new MySqlCommand("updateAddress", DBClass.dbConn);
                DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                DBClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inAddressId", input.inAddressId);
                DBClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inAddress1", input.inAddress1);
                DBClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inAddress2", input.inAddress2);
                DBClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inCity", input.inCity);
                DBClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inStateId", input.inStateId);
                DBClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inCountryId", input.inCountryId);
                DBClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inZipCode", input.inZipCode);
                DBClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inPhone", input.inPhone);
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
        public DBResult AddressGetDBCall(AddressGetInput input)
        {
            var result = new DBResult();
            try
            {
                DBClass.dbCmd = new MySqlCommand("getAddress", DBClass.dbConn);
                DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                DBClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inAddressid", input.inAddressId);
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
