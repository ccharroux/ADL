using System;
using System.Collections.Generic;
using System.Text;
using MySql.Data.MySqlClient;
using ADLAPICore.Library.Common;
using System.Data;
using ADLAPICore.Models.General;
using ADLAPICore.Models.Facility;

namespace ADLAPICore.Library.Facility
{


    interface IFacilityDBClass
    {
        public DBResult FacilityADLListDBCall(FacilityADLListGetInput input);
        public DBResult FacilityOwnerListDBCall(FacilityOwnerListGetInput input);
        public DBResult FacilityListDBCall(FacilityListGetInput input);
        public DBResult FacilityDBCall(FacilityGetInput input);
    }

    class PatientDBClass : IFacilityDBClass
    {
        public DBResult FacilityADLListDBCall(FacilityADLListGetInput input)
        {
            var result = new DBResult();
            try
            {
                DBClass.dbCmd = new MySqlCommand("getFacilityADLList", DBClass.dbConn);
                DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                DBClass.dbCmd.Parameters.Add(param);
                param = new MySqlParameter("infacilityId", input.inFacilityId);
                DBClass.dbCmd.Parameters.Add(param);
                result = DBClass.getDBResults();

                return result;
            }
            catch (Exception ex)
            {
                result.response.status = ResponseModel.responseFAIL;
                result.response.errorMessage = new List<string>();
                result.response.errorMessage.Add(ex.Message);

                return new DBResult { dt = new DataTable(), response = result.response };
            }

        }
        public DBResult FacilityOwnerListDBCall(FacilityOwnerListGetInput input)
        {
            var result = new DBResult();
            try
            {
                DBClass.dbCmd = new MySqlCommand("getFacilityOwnerList", DBClass.dbConn);
                DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                DBClass.dbCmd.Parameters.Add(param);
                param = new MySqlParameter("infacilityId", input.inFacilityId);
                DBClass.dbCmd.Parameters.Add(param);
                result = DBClass.getDBResults();

                return result;
            }
            catch (Exception ex)
            {
                result.response.status = ResponseModel.responseFAIL;
                result.response.errorMessage = new List<string>();
                result.response.errorMessage.Add(ex.Message);

                return new DBResult { dt = new DataTable(), response = result.response };
            }

        }
        public DBResult FacilityListDBCall(FacilityListGetInput input)
        {
            var result = new DBResult();
            try
            {
                DBClass.dbCmd = new MySqlCommand("getFacilityList", DBClass.dbConn);
                DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                DBClass.dbCmd.Parameters.Add(param);
                result = DBClass.getDBResults();

                return result;
            }
            catch (Exception ex)
            {
                result.response.status = ResponseModel.responseFAIL;
                result.response.errorMessage = new List<string>();
                result.response.errorMessage.Add(ex.Message);

                return new DBResult { dt = new DataTable(), response = result.response };
            }

        }
        public DBResult FacilityDBCall(FacilityGetInput input)
        {
            var result = new DBResult();
            try
            {
                DBClass.dbCmd = new MySqlCommand("getFacility", DBClass.dbConn);
                DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

                MySqlParameter param = new MySqlParameter("inapitoken", input.inApiToken);
                DBClass.dbCmd.Parameters.Add(param);

                param = new MySqlParameter("inFacilityId", input.inFacilityId);
                DBClass.dbCmd.Parameters.Add(param);

                result = DBClass.getDBResults();

                return result;
            }
            catch (Exception ex)
            {
                result.response.status = ResponseModel.responseFAIL;
                result.response.errorMessage = new List<string>();
                result.response.errorMessage.Add(ex.Message);
 
                return new DBResult { dt = new DataTable(), response = result.response };
            }

        }

    }
}
