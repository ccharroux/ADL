﻿using System;
using System.Collections.Generic;
using System.Data;
using ADLAPICore.Library.Common;
using ADLAPICore.Models;
using ADLAPICore.Models.General;
using ADLAPICore.Models.Login;
using ADLAPICore.Library.utilities;
using ADLAPICore.Models.State;
using ADLAPICore.Models.UserMember;
using ADLAPICore.Models.Address;

namespace ADLAPICore.Library.UserMember
{
    public class UserMemberProfile
    {
       public Int32 UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }    
        public string EmailAddress { get; set; }
        public string MiddleName { get; set; }  
    }

    public class UserMemberDetailRow
    {
        public ResponseModel response = new ResponseModel();
        public UserMemberProfile UserInfo { get; set; }
        public Address UserMemberAddress { get; set; }
        public List<UserMemberResultRow> UserMemberAccess { get; set; }
    }
    public class UserMemberResultRow
    {
        public Int32 UserId { get; set; }
        public Int32 FacilityId { get; set; }
        public string UserName { get; set; }
        public string Facility { get; set; }
        public string Role { get; set; }
        public string RoleToken { get; set; }
    }
    public class UserMemberInsertResult
    {
        public ResponseModel response = new ResponseModel();
        public int ReturnCode { get; set; }

        public UserMemberInsertResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }
    public class UserMemberUpdateResult
    {
        public ResponseModel response = new ResponseModel();
        public int ReturnCode { get; set; }

        public UserMemberUpdateResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }

    public class UserMemberResult
    {
        public ResponseModel response = new ResponseModel();
        public List<UserMemberResultRow> rows = new List<UserMemberResultRow>();
        private UserMemberResultRow resultRow = new UserMemberResultRow();

        public UserMemberResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }

    public interface IUserMemberClass
    {
        public UserMemberInsertResult InsertUserMember(UserMemberInsertInput input);
        public UserMemberUpdateResult UpdateUserMember(UserMemberUpdateInput input);
        public UserMemberResult GetUserMemberList(UserMemberListGetInput input);
        public UserMemberResult GetUserMemberListByFacility(UserMemberListByFacilityGetInput input);
        public UserMemberResult GetUserMemberAccessList(UserMemberAccessListGetInput input);
        public UserMemberDetailRow GetUserMember(UserMemberGetInput input);
    }

    public class UserMemberClass : IUserMemberClass
    {
            
        public UserMemberClass()
        { }

        public UserMemberInsertResult InsertUserMember(UserMemberInsertInput input)
        {

            UserMemberInsertResult result = new UserMemberInsertResult();

            try
            {

                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                UserMemberDBClass lDB = new UserMemberDBClass();

                var dbResult = lDB.UserMemberInsertDBCall(input);
                if (dbResult.response.status == ResponseModel.responseFAIL)
                {
                    result.response = dbResult.response;
                    return result;
                }

                foreach (DataRow row in dbResult.dt.Rows)
                {
                    result.ReturnCode = Convert.ToInt32(row["returncode"]);
                }

                // now the result
                result.response = General.buildSuccess();

                return result;
            }

            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);

                return new UserMemberInsertResult { response = result.response };
            }
        }
        private ResponseModel Validate(UserMemberInsertInput input)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(input.inApiToken))
                {
                    throw new ApplicationException("API Token is required for this method.");
                }
                if (String.IsNullOrEmpty(input.inFirstName))
                {
                    throw new ApplicationException("Firstname is required for this method.");
                }
                if (String.IsNullOrEmpty(input.inLastName))
                {
                    throw new ApplicationException("Lastname is required for this method.");
                }
                if (String.IsNullOrEmpty(input.inEmailAddress))
                {
                    throw new ApplicationException("EmailAddress is required for this method.");
                }

                return result;
            }
            catch (Exception ex)
            {
                result = General.buildError(ex.Message);
                return result;
            }
        }
        
        public UserMemberUpdateResult UpdateUserMember(UserMemberUpdateInput input)
        {

            UserMemberUpdateResult result = new UserMemberUpdateResult();

            try
            {

                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                UserMemberDBClass lDB = new UserMemberDBClass();

                var dbResult = lDB.UserMemberUpdateDBCall(input);
                if (dbResult.response.status == ResponseModel.responseFAIL)
                {
                    result.response = dbResult.response;
                    return result;
                }

                foreach (DataRow row in dbResult.dt.Rows)
                {
                    result.ReturnCode = Convert.ToInt32(row["returncode"]);
                }

                // now the result
                result.response = General.buildSuccess();

                return result;
            }

            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);

                return new UserMemberUpdateResult { response = result.response };
            }
        }
        private ResponseModel Validate(UserMemberUpdateInput input)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(input.inApiToken))
                {
                    throw new ApplicationException("API Token is required for this method.");
                }
                if (input.inUserId < 1)
                {
                    throw new ApplicationException("User Id must be > 0.");
                }
                if (String.IsNullOrEmpty(input.inFirstName))
                {
                    throw new ApplicationException("Firstname is required for this method.");
                }
                if (String.IsNullOrEmpty(input.inLastName))
                {
                    throw new ApplicationException("Lastname is required for this method.");
                }
                if (String.IsNullOrEmpty(input.inEmailAddress))
                {
                    throw new ApplicationException("EmailAddress is required for this method.");
                }

                return result;
            }
            catch (Exception ex)
            {
                result = General.buildError(ex.Message);
                return result;
            }
        }
       
        public UserMemberDetailRow GetUserMember(UserMemberGetInput input)
        {

            UserMemberDetailRow result = new UserMemberDetailRow();
 
            try
            {

                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                UserMemberDBClass lDB = new UserMemberDBClass();

                var dbResult = lDB.UserMemberDBCall(input);
                if (dbResult.response.status == ResponseModel.responseFAIL)
                {
                    result.response = dbResult.response;
                    return result;
                }

                var resultRow = new UserMemberResultRow();

                foreach (DataRow row in dbResult.dt.Rows)
                {
                    // user info
                    result.UserInfo.EmailAddress = row["userName"].ToString();
                    result.UserInfo.FirstName = row["firstname"].ToString();
                    result.UserInfo.LastName = row["firstname"].ToString();
                    result.UserInfo.MiddleName = row["middlename"].ToString();
                    result.UserInfo.UserId = Convert.ToInt32(row["iduser"]);

                    // address stuff
                    result.UserMemberAddress.Address1 = row["address1"].ToString();
                    result.UserMemberAddress.Address2 = row["address2"].ToString();
                    result.UserMemberAddress.City = row["city"].ToString();
                    result.UserMemberAddress.ZipCode = row["zipcode"].ToString();
                    result.UserMemberAddress.StateId = Convert.ToInt32(row["stateid"]);
                    result.UserMemberAddress.CountryId = Convert.ToInt32(row["countryid"]);
                    result.UserMemberAddress.Phone = row["phone"].ToString();

                    // user access
                    resultRow = new UserMemberResultRow
                    {
                        UserName = row["userName"].ToString(),
                        UserId = Convert.ToInt32(row["iduser"]),
                        FacilityId = Convert.ToInt32(row["idfacility"]),
                        Facility = row["facility"].ToString(),
                        Role = row["rolename"].ToString(),
                        RoleToken = row["roletoken"].ToString()
                    };

                    result.UserMemberAccess.Add(resultRow);

                }

                // now the result
                result.response.status = ResponseModel.responseSUCCESS;
                result.response.errorMessage = new List<string>();

                return result;
            }

            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);

                return new UserMemberDetailRow { response = result.response };
            }
        }
        private ResponseModel Validate(UserMemberGetInput input)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(input.inApiToken))
                {
                    throw new ApplicationException("API Token is required for this method.");
                }

                if (input.inUserId < 1)
                {
                    throw new ApplicationException("User Id must be > 0.");
                }

                return result;
            }
            catch (Exception ex)
            {
                result = General.buildError(ex.Message);
                return result;
            }
        }

        public UserMemberResult GetUserMemberList(UserMemberListGetInput input)
            {

                UserMemberResult result = new UserMemberResult();
                UserMemberResultRow resultRow = new UserMemberResultRow();

                try
                {

                    result.response = Validate(input);

                    if (result.response.status == ResponseModel.responseFAIL)
                    {
                        return result;
                    }

                    UserMemberDBClass lDB = new UserMemberDBClass();

                    var dbResult = lDB.UserMemberListDBCall(input);
                    if (dbResult.response.status == ResponseModel.responseFAIL)
                    {
                        result.response = dbResult.response;
                        return result;
                    }

                    resultRow = new UserMemberResultRow();
                    result.rows = new List<UserMemberResultRow>();
                
                    foreach (DataRow row in dbResult.dt.Rows)
                    {

                    resultRow = new UserMemberResultRow
                        {
                            UserName = row["userName"].ToString(),
                            UserId = Convert.ToInt32(row["iduser"]),
                            FacilityId = Convert.ToInt32(row["idfacility"]),
                            Facility = row["facility"].ToString(),
                            Role = row["rolename"].ToString(),
                            RoleToken = row["roletoken"].ToString()
                        };
                        
                        result.rows.Add(resultRow);

                    }

                    // now the result
                    result.response.status = ResponseModel.responseSUCCESS;
                    result.response.errorMessage = new List<string>();

                    return result;
                }

                catch (Exception ex)
                {
                    result.response = General.buildError(ex.Message);

                    return new UserMemberResult { response = result.response };
                }
            }
        private ResponseModel Validate(UserMemberListGetInput input)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(input.inApiToken))
                {
                    throw new ApplicationException("API Token is required for this method.");
                }

                if (input.inRoleId < -1)
                {
                    throw new ApplicationException("Role Id must be >= -1.");
                }

                return result;
            }
            catch (Exception ex)
            {
                result = General.buildError(ex.Message);
                return result;
            }
        }

        public UserMemberResult GetUserMemberListByFacility(UserMemberListByFacilityGetInput input)
        {

            UserMemberResult result = new UserMemberResult();
            UserMemberResultRow resultRow = new UserMemberResultRow();

            try
            {

                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                UserMemberDBClass lDB = new UserMemberDBClass();

                var dbResult = lDB.UserMemberListByFacilityDBCall(input);
                if (dbResult.response.status == ResponseModel.responseFAIL)
                {
                    result.response = dbResult.response;
                    return result;
                }

                resultRow = new UserMemberResultRow();
                result.rows = new List<UserMemberResultRow>();

                foreach (DataRow row in dbResult.dt.Rows)
                {

                    resultRow = new UserMemberResultRow
                    {
                        UserName = row["userName"].ToString(),
                        UserId = Convert.ToInt32(row["iduser"]),
                        FacilityId = Convert.ToInt32(row["idfacility"]),
                        Facility = row["facility"].ToString(),
                        Role = row["rolename"].ToString(),
                        RoleToken = row["roletoken"].ToString()
                    };

                    result.rows.Add(resultRow);

                }

                // now the result
                result.response.status = ResponseModel.responseSUCCESS;
                result.response.errorMessage = new List<string>();

                return result;
            }

            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);

                return new UserMemberResult { response = result.response };
            }
        }
        private ResponseModel Validate(UserMemberListByFacilityGetInput input)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(input.inApiToken))
                {
                    throw new ApplicationException("API Token is required for this method.");
                }

                if (input.inRoleId < 0)
                {
                    throw new ApplicationException("Role Id must be > -1.");
                }

                if (input.inFacilityId < 1)
                {
                    throw new ApplicationException("Facility Id must be > 0.");
                }

                return result;
            }
            catch (Exception ex)
            {
                result = General.buildError(ex.Message);
                return result;
            }
        }

        public UserMemberResult GetUserMemberAccessList(UserMemberAccessListGetInput input)
        {

            UserMemberResult result = new UserMemberResult();
            UserMemberResultRow resultRow = new UserMemberResultRow();

            try
            {

                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                UserMemberDBClass lDB = new UserMemberDBClass();

                var dbResult = lDB.UserMemberAccessListDBCall(input);
                if (dbResult.response.status == ResponseModel.responseFAIL)
                {
                    result.response = dbResult.response;
                    return result;
                }

                resultRow = new UserMemberResultRow();
                result.rows = new List<UserMemberResultRow>();

                foreach (DataRow row in dbResult.dt.Rows)
                {

                    resultRow = new UserMemberResultRow
                    {
                        UserName = row["userName"].ToString(),
                        UserId = Convert.ToInt32(row["iduser"]),
                        FacilityId = Convert.ToInt32(row["idfacility"]),
                        Facility = row["facility"].ToString(),
                        Role = row["rolename"].ToString(),
                        RoleToken = row["roletoken"].ToString()
                    };

                    result.rows.Add(resultRow);

                }

                // now the result
                result.response.status = ResponseModel.responseSUCCESS;
                result.response.errorMessage = new List<string>();

                return result;
            }

            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);

                return new UserMemberResult { response = result.response };
            }
        }
        private ResponseModel Validate(UserMemberAccessListGetInput input)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(input.inApiToken))
                {
                    throw new ApplicationException("API Token is required for this method.");
                }

                if (input.inUserId < 1)
                {
                    throw new ApplicationException("User Id must be > 0.");
                }

                return result;
            }
            catch (Exception ex)
            {
                result = General.buildError(ex.Message);
                return result;
            }
        }
    }

}
