using System;
using System.Collections.Generic;
using System.Text;
using MySql.Data.MySqlClient;
using ADLAPICore.Library.Common;
using System.Data;
using ADLAPICore.Models.General;
using ADLAPICore.Models.Patient;
using ADLAPICore.Library.utilities;

namespace ADLAPICore.Library.Patient
{
    interface IPatientDBClass
    {
        public DBResult PatientADLListByDay(PatientADLListByDayGetInput input);
        public DBResult PatientADLList(PatientADLListGetInput input);

    }

    class PatientDBClass : IPatientDBClass
    {
        public DBResult PatientADLListByDay(PatientADLListByDayGetInput input)
        {
            var result = new DBResult();
            try
            {
                DBClass.dbCmd = new MySqlCommand("getPatientADLListByDay", DBClass.dbConn);
                DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                DBClass.dbCmd.Parameters.Add(param);
                
                param = new MySqlParameter("inPatientId", input.inPatientId);
                DBClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("intransactiondate", input.inTransactionDate);
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
        public DBResult PatientADLList(PatientADLListGetInput input)
        {
            var result = new DBResult();
            try
            {
                DBClass.dbCmd = new MySqlCommand("getPatientADLList", DBClass.dbConn);
                DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                DBClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inPatientId", input.inPatientId);
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
