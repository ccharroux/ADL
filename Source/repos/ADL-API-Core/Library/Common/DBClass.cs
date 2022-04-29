using ADLAPICore.Library.Facility;
using ADLAPICore.Models.General;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Text;

namespace ADLAPICore.Library.Common
{
    public interface IDBClass
    {
        public DBResult getDBResults();
    }       

    public static class DBClass
    {
        public static MySqlConnection dbConn = new MySqlConnection();
        public static MySqlCommand dbCmd;
        public static DBResult response = new DBResult();
        public static DataTable dt;

        static DBClass()
        {
            dbConn.ConnectionString = Startup.Configuration.GetSection("ConnectionStrings").GetSection("ADLDB").Value;
            dbConn.Open();
        }
        public static ResponseModel executeDB()
        {
            var response = new ResponseModel();

            try
            {
                dbCmd.ExecuteNonQuery();
                return response;
            }

            catch (Exception ex)
            {
                response.errorMessage = new List<string>();
                response.errorMessage.Add(ex.Message);
                return new ResponseModel { status = ResponseModel.responseFAIL, errorMessage = response.errorMessage};
            }
        }
        public static DBResult getDBResults()
        {
            MySqlDataAdapter sda = new MySqlDataAdapter();
            DataTable dt = new DataTable();
            DBResult dr = new DBResult();
            

            try
            {
                sda = new MySqlDataAdapter(dbCmd);
                dt = new DataTable();
                sda.Fill(dt);

                dr.dt = dt;

                return dr;
            }

            catch (Exception ex)
            {
                var message = new List<string>();
                message.Add(ex.Message);
                dr.response.status = ResponseModel.responseFAIL;
                dr.response.errorMessage = message;

                return dr;
            }

            finally
            {
                dbConn.Close();
            }
 
        }
    }
}
