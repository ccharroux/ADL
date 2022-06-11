using System;
using System.Collections.Generic;
using System.Text;
using MySql.Data.MySqlClient;
using ADLAPICore.Library.Common;
using System.Data;
using ADLAPICore.Models.General;
using ADLAPICore.Models.Facility;
using ADLAPICore.Library.utilities;

namespace ADLAPICore.Library.Facility
{


    interface IFacilityDBClass
    {
        public DBResult FacilityAddressInsertDBCall(FacilityAddressInsertInput input);
        public DBResult FacilityADLListDBCall(FacilityADLListGetInput input);
        public DBResult FacilityOwnerListDBCall(FacilityOwnerListGetInput input);
        public DBResult FacilityListDBCall(FacilityListGetInput input);
        public DBResult FacilityDBCall(FacilityGetInput input);
        public DBResult FacilityADLInsertDBCall(FacilityADLInsertInput input);
        public DBResult FacilityADLDeleteDBCall(FacilityADLDeleteInput input);
        public DBResult FacilityAddressDBCall(FacilityAddressGetInput input);
        public DBResult FacilityInsertDBCall(FacilityInsertInput input);
        public DBResult FacilityUpdateDBCall(FacilityUpdateInput input);

    }

    class FacilityDBClass : IFacilityDBClass
    {
        public DBResult FacilityAddressInsertDBCall(FacilityAddressInsertInput input)
        {
            var result = new DBResult();
            DBClass dbClass = new DBClass();
            try
            {
                dbClass.dbCmd = new MySqlCommand("insertFacilityAddress", dbClass.dbConn);
                dbClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                dbClass.dbCmd.Parameters.Add(param);
                param = new MySqlParameter("inFacilityId", input.inFacilityId);
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
        
        public DBResult FacilityADLListDBCall(FacilityADLListGetInput input)
        {
            var result = new DBResult();
            DBClass dbClass = new DBClass();
            try
            {
                dbClass.dbCmd = new MySqlCommand("getFacilityADLList", dbClass.dbConn);
                dbClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                dbClass.dbCmd.Parameters.Add(param);
                param = new MySqlParameter("infacilityId", input.inFacilityId);
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

        public DBResult FacilityOwnerListDBCall(FacilityOwnerListGetInput input)
        {
            var result = new DBResult();
            DBClass dbClass = new DBClass();
            try
            {
                dbClass.dbCmd = new MySqlCommand("getFacilityOwnerList", dbClass.dbConn);
                dbClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                dbClass.dbCmd.Parameters.Add(param);
                param = new MySqlParameter("infacilityId", input.inFacilityId);
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
        
        public DBResult FacilityListDBCall(FacilityListGetInput input)
        {
            var result = new DBResult();
            DBClass dbClass = new DBClass();
            try
            {
                dbClass.dbCmd = new MySqlCommand("getFacilityList", dbClass.dbConn);
                dbClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
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

        public DBResult FacilityDBCall(FacilityGetInput input)
        {
            var result = new DBResult();
            DBClass dbClass = new DBClass();
            try
            {
                dbClass.dbCmd = new MySqlCommand("getFacility", dbClass.dbConn);
                dbClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inFacilityId", input.inFacilityId);
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

        public DBResult FacilityADLInsertDBCall(FacilityADLInsertInput input)
        {
            var result = new DBResult();
            DBClass dbClass = new DBClass();
            try
            {
                dbClass.dbCmd = new MySqlCommand("insertadlfacility", dbClass.dbConn);
                dbClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inFacilityId", input.inFacilityId);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inSystemAdlId", input.inSystemADLId);
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

        public DBResult FacilityADLDeleteDBCall(FacilityADLDeleteInput input)
        {
            var result = new DBResult();
            DBClass dbClass = new DBClass();
            try
            {
                dbClass.dbCmd = new MySqlCommand("deleteadlfacility", dbClass.dbConn);
                dbClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inFacilityId", input.inFacilityId);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inSystemAdlId", input.inSystemADLId);
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
        
        public DBResult FacilityAddressDBCall(FacilityAddressGetInput input)
        {
            var result = new DBResult();
            DBClass dbClass = new DBClass();
            try
            {
                dbClass.dbCmd = new MySqlCommand("getFacilityAddress", dbClass.dbConn);
                dbClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                dbClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inFacilityId", input.inFacilityId);
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

        public DBResult FacilityInsertDBCall(FacilityInsertInput input)
        {
            var result = new DBResult();
            DBClass dbClass = new DBClass();
            try
            {
                dbClass.dbCmd = new MySqlCommand("insertFacility", dbClass.dbConn);
                dbClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                dbClass.dbCmd.Parameters.Add(param);
                param = new MySqlParameter("inFacility", input.inFacility);
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
        public DBResult FacilityUpdateDBCall(FacilityUpdateInput input)
        {
            var result = new DBResult();
            DBClass dbClass = new DBClass();
            try
            {
                dbClass.dbCmd = new MySqlCommand("insertFacility", dbClass.dbConn);
                dbClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                dbClass.dbCmd.Parameters.Add(param);
                param = new MySqlParameter("inFacilityId", input.inFacilityId);
                dbClass.dbCmd.Parameters.Add(param);
                param = new MySqlParameter("inFacility", input.inFacility);
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
