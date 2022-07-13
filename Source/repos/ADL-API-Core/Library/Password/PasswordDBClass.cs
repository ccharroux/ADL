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
            DBClass dbClass = new DBClass();
            var result = new DBResult();
            try
            {
                dbClass.dbCmd = new MySqlCommand("insertAddress", dbClass.dbConn);
                dbClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inAddress1", input.inAddress1);
                dbClass.dbCmd.Parameters.Add(param);
                
                param = new MySqlParameter("inAddress2", input.inAddress2);
                dbClass.dbCmd.Parameters.Add(param);
                
                param = new MySqlParameter("inCity", input.inCity);
                dbClass.dbCmd.Parameters.Add(param);
                
                param = new MySqlParameter("inStateId", input.inStateId);
                dbClass.dbCmd.Parameters.Add(param);
                
                param = new MySqlParameter("inCountryId", input.inCountryId);
                dbClass.dbCmd.Parameters.Add(param);
                
                param = new MySqlParameter("inZipCode", input.inZipCode);
                dbClass.dbCmd.Parameters.Add(param);
                
                //param = new MySqlParameter("inPhone", input.inPhone);
                //dbClass.dbCmd.Parameters.Add(param);

                result = dbClass.getDBResults();

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
            DBClass dbClass = new DBClass();
            try
            {

                dbClass.dbCmd = new MySqlCommand("updateAddress", dbClass.dbConn);
                dbClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inAddressId", input.inAddressId);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inAddress1", input.inAddress1);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inAddress2", input.inAddress2);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inCity", input.inCity);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inStateId", input.inStateId);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inCountryId", input.inCountryId);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inZipCode", input.inZipCode);
                dbClass.dbCmd.Parameters.Add(param);

                //param = new MySqlParameter("inPhone", input.inPhone);
                //dbClass.dbCmd.Parameters.Add(param);

                result = dbClass.getDBResults();

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
            DBClass dbClass = new DBClass();
            var result = new DBResult();
            try
            {
                dbClass.dbCmd = new MySqlCommand("getAddressByAddressId", dbClass.dbConn);
                dbClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inAddressid", input.inAddressId);
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

    }
}
