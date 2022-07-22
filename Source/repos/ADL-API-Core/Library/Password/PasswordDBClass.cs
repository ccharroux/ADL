using System;
using MySql.Data.MySqlClient;
using ADLAPICore.Library.Common;
using System.Data;
using ADLAPICore.Models.General;
using ADLAPICore.Models.Address;
using ADLAPICore.Library.utilities;
using ADLAPICore.Models.Password;

namespace ADLAPICore.Library.Password
{

    interface IPasswordDBClass
    {
        public DBResult PasswordRequestInsertDBCall(PasswordRequestInsertInput input);
        public DBResult PasswordUpdateDBCall(PasswordUpdateInput input);
        public DBResult PasswordResetTokenGetDBCall(PasswordResetTokenGetInput input);
    }

    class PasswordDBClass : IPasswordDBClass
    {
        public DBResult PasswordRequestInsertDBCall(PasswordRequestInsertInput input)
        {
            DBClass dbClass = new DBClass();
            var result = new DBResult();
            try
            {
                dbClass.dbCmd = new MySqlCommand("insertResetToken", dbClass.dbConn);
                dbClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inemailaddress", input.inEmailAddress);
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
        public DBResult PasswordUpdateDBCall(PasswordUpdateInput input)
        {
            var result = new DBResult();
            DBClass dbClass = new DBClass();
            try
            {

                var password = AesEncryption.Encrypt(input.inPassword);

                dbClass.dbCmd = new MySqlCommand("updateLoginPassword", dbClass.dbConn);
                dbClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inresettoken", input.inPasswordResetToken) ;
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inpassword", password);
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
        public DBResult PasswordResetTokenGetDBCall(PasswordResetTokenGetInput input)
        {
            DBClass dbClass = new DBClass();
            var result = new DBResult();
            try
            {
                dbClass.dbCmd = new MySqlCommand("hasResetTokenExpired", dbClass.dbConn);
                dbClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inresettoken", input.inPasswordResetToken);
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
