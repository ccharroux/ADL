using System;
using System.Collections.Generic;
using System.Text;
using MySql.Data.MySqlClient;
using ADLAPICore.Library.Common;
using System.Data;
using ADLAPICore.Models.General;
using ADLAPICore.Models.Country;
using ADLAPICore.Library.utilities;

namespace ADLAPICore.Library.Country
{


    interface ICountryDBClass
    {
        public DBResult CountryListDBCall(string apitoken);
    }

    class CountryDBClass : ICountryDBClass
    {
        public DBResult CountryListDBCall(string apitoken)
        {
            var result = new DBResult();
            try
            {
                DBClass.dbCmd = new MySqlCommand("getCountryList", DBClass.dbConn);
                DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", apitoken);
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
