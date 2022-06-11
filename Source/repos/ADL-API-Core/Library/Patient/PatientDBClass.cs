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
        public DBResult PatientADLLogSummaryListByDate(PatientADLLogSummaryListByDateGetInput input);

    }

    class PatientDBClass : IPatientDBClass
    {
        public DBResult PatientADLListByDay(PatientADLListByDayGetInput input)
        {
            var result = new DBResult();
            DBClass dbClass = new DBClass();
            try
            {
                dbClass.dbCmd = new MySqlCommand("getPatientADLListByDay", dbClass.dbConn);
                dbClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                dbClass.dbCmd.Parameters.Add(param);
                
                param = new MySqlParameter("inPatientId", input.inPatientId);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("intransactiondate", input.inTransactionDate);
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
        public DBResult PatientADLList(PatientADLListGetInput input)
        {
            var result = new DBResult();
            DBClass dbClass = new DBClass();
            try
            {
                dbClass.dbCmd = new MySqlCommand("getPatientADLList", dbClass.dbConn);
                dbClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inPatientId", input.inPatientId);
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
        public DBResult PatientADLLogSummaryListByDate(PatientADLLogSummaryListByDateGetInput input)
        {
            var result = new DBResult();
            DBClass dbClass = new DBClass();
            try
            {
                dbClass.dbCmd = new MySqlCommand("getPatientADLLogSummaryListByDate", dbClass.dbConn);
                dbClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inFacilityId", input.inFacilityId);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inTransactionDate", input.inTransactionDate);
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
