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
        public DBResult PatientADLListByDayDBCall(PatientADLListByDayGetInput input);
        public DBResult PatientADLListDBCall(PatientADLListGetInput input);
        public DBResult PatientADLLogSummaryListByDateDBCall(PatientADLLogSummaryListByDateGetInput input);
        public DBResult DeletePatientADLDBCall(PatientADLDeleteInput input);
        public DBResult UpdatePatientADLDBCall(PatientADLUpdateDBRow input);
        public DBResult PatientADLItemDBCall(PatientADLItemGetInput input);
        public DBResult InsertPatientADLLogDBCall(PatientADLLogInsertInput input);
        public DBResult PatientFormListDBCall(PatientFormListGetInput input);
        public DBResult InsertPatientFormLogDBCall(PatientFormLogInsertInput input);
        public DBResult PatientFormStatusDBCall(PatientFormStatusGetInput input);
        public DBResult PatientADLReportDBCall(PatientADLReportGetInput input);

    }

    class PatientDBClass : IPatientDBClass
    {
        public DBResult PatientADLListByDayDBCall(PatientADLListByDayGetInput input)
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
        public DBResult PatientADLListDBCall(PatientADLListGetInput input)
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
        public DBResult PatientADLLogSummaryListByDateDBCall(PatientADLLogSummaryListByDateGetInput input)
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
        public DBResult DeletePatientADLDBCall(PatientADLDeleteInput input)
        {
            var result = new DBResult();
            DBClass dbClass = new DBClass();
            try
            {
                dbClass.dbCmd = new MySqlCommand("deleteADLPatient", dbClass.dbConn);
                dbClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inUserId", input.inPatientId);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inSystemADLId", input.inSystemADLId);
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
        public DBResult UpdatePatientADLDBCall(PatientADLUpdateDBRow input)
        {
            var result = new DBResult();
            DBClass dbClass = new DBClass();
            try
            {
                dbClass.dbCmd = new MySqlCommand("updateADLPatient", dbClass.dbConn);
                dbClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inUserId", input.inPatientId);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inSystemADLId", input.inSystemADLId);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inDayOfTheWeek", input.inDayOfTheWeek);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inTimeOfDay", input.inTimeOfDay);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inDelete", input.inDelete);
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
        public DBResult PatientADLItemDBCall(PatientADLItemGetInput input)
        {
            var result = new DBResult();
            DBClass dbClass = new DBClass();
            try
            {
                dbClass.dbCmd = new MySqlCommand("getADLPatientItem", dbClass.dbConn);
                dbClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inPatientId", input.inPatientId);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inSystemADLId", input.inSystemADLId);
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
        public DBResult InsertPatientADLLogDBCall(PatientADLLogInsertInput input)
        {
            var result = new DBResult();
            DBClass dbClass = new DBClass();
            try
            {
                dbClass.dbCmd = new MySqlCommand("insertADLPatientLog", dbClass.dbConn);
                dbClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inUserId", input.inUserId);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inadlpatientid", input.inADLPatientId);
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
        public DBResult PatientFormListDBCall(PatientFormListGetInput input)
        {
            var result = new DBResult();
            DBClass dbClass = new DBClass();
            try
            {
                dbClass.dbCmd = new MySqlCommand("getPatientFormList", dbClass.dbConn);
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
        public DBResult InsertPatientFormLogDBCall(PatientFormLogInsertInput input)
        {
            var result = new DBResult();
            DBClass dbClass = new DBClass();
            try
            {
                dbClass.dbCmd = new MySqlCommand("insertFormPatientLog", dbClass.dbConn);
                dbClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inUserId", input.inUserId);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inPatientId", input.inPatientId);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("informfacilityid", input.inFormFacilityId);
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
        public DBResult PatientFormStatusDBCall(PatientFormStatusGetInput input)
        {
            var result = new DBResult();
            DBClass dbClass = new DBClass();
            try
            {
                dbClass.dbCmd = new MySqlCommand("getPatientFormStatus", dbClass.dbConn);
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
        public DBResult PatientADLReportDBCall(PatientADLReportGetInput input)
        {
            var result = new DBResult();
            DBClass dbClass = new DBClass();
            try
            {
                dbClass.dbCmd = new MySqlCommand("getPatientADLReport", dbClass.dbConn);
                dbClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inPatientId", input.inPatientId);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inTransactionDateFrom", input.inTransactionDateFrom);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inTransactionDateTo", input.inTransactionDateTo);
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
