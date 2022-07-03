using System;
using System.Collections.Generic;
using System.Data;
using ADLAPICore.Library.Common;
using ADLAPICore.Models;
using ADLAPICore.Models.General;
using ADLAPICore.Models.Login;
using ADLAPICore.Library.utilities;
using ADLAPICore.Models.FacilityAccess;

namespace ADLAPICore.Library.Login
{
    public class loginResultRow
    {
        public Int32 UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string MiddleName { get; set; }
        public string EmailAddress { get; set; }
        public List<FacilityAccess> fa = new List<FacilityAccess>();
    }

        public class LoginResult
        {
            public ResponseModel response = new ResponseModel();
            public List<loginResultRow> rows = new List<loginResultRow>();
            private loginResultRow resultRow = new loginResultRow();

            public LoginResult()
            {
                this.resultRow.UserId = -1;
                this.rows.Add(resultRow);

                this.response.status = ResponseModel.responseFAIL;
                this.response.errorMessage.Add("Unexpected error");
            }
        }

        public interface ILoginClass
        {
            public LoginResult LoginUser(LoginInput input);
        }

        public class LoginClass : ILoginClass
        {
            

            public LoginClass()
            { }

            
            public LoginResult LoginUser(LoginInput input)
            {

                LoginResult loginResult = new LoginResult();
                loginResultRow resultRow = new loginResultRow();
                FacilityAccess fa = new FacilityAccess();


                try
                {
                    var ePassword = AesEncryption.Encrypt(input.inPassword);
                    // temp here    
                    ePassword = input.inPassword;

                    loginResult.response = Validate(input.inEmailAddress, input.inPassword);

                    if (loginResult.response.status == ResponseModel.responseFAIL)
                    {
                        loginResult.response.errorMessage = new List<string>();
                        loginResult.response.errorMessage.Add("ERROR: " + loginResult.response.errorMessage[0]);
                        return loginResult;
                    }

                    LoginDBClass lDB = new LoginDBClass();

                    var dbResult = lDB.LoginDBCall(input.inEmailAddress, ePassword, input.inOffset);
                    if (dbResult.response.status == ResponseModel.responseFAIL)
                    {
                        loginResult.response = dbResult.response;
                        return loginResult;
                    }

                    resultRow = new loginResultRow();
                    loginResult.rows = new List<loginResultRow>();
                    bool bLoaded = false;
                    // hold logic added for multiple roles in one 
                    // facility
                    int holdFacilityId = -1;

                    foreach (DataRow row in dbResult.dt.Rows)
                    {
                        if (bLoaded == false)
                        {
                            resultRow.UserId = Convert.ToInt32(row["idUser"]);
                            resultRow.MiddleName = row["MiddleName"].ToString();
                            resultRow.LastName = row["LastName"].ToString();
                            resultRow.FirstName = row["FirstName"].ToString();
                            resultRow.EmailAddress = input.inEmailAddress;
                            loginResult.response.apiToken = row["apiToken"].ToString();
                            bLoaded = true;
                        }

                        if (resultRow.UserId > 0)
                        {
                            fa = new FacilityAccess();
                            fa.Facility = row["facility"].ToString();
                            fa.Role = row["roleToken"].ToString();
                            fa.FacilityId = Convert.ToInt32(row["idFacility"]);
                            if (fa.FacilityId != holdFacilityId)
                            {
                                resultRow.fa.Add(fa);
                            }
                            holdFacilityId = fa.FacilityId;
                        }


                    }
                    
                    // multi row loop to gather 
                    // access levels
                    loginResult.rows.Add(resultRow);

                    // now the result
                    loginResult.response.status = ResponseModel.responseSUCCESS;
                    loginResult.response.errorMessage = new List<string>();

                    return loginResult;
                }

                catch (Exception ex)
                {
                    loginResult.response.status = ResponseModel.responseFAIL;
                    loginResult.response.errorMessage = new List<string>();
                    loginResult.response.errorMessage.Add(ex.Message);
                    return loginResult;
                }
            }
            private ResponseModel Validate(string inEmailAddress, string inPassword )
            {
                ResponseModel result = new ResponseModel();

                try
                {

                    if (String.IsNullOrEmpty(inEmailAddress))
                    {
                        throw new ApplicationException("Email Address is required for this method.");
                    }

                    if (String.IsNullOrEmpty(inPassword))
                    {
                        throw new ApplicationException("Password is required for this method.");
                    }
 
                    return result;
                }
                catch (Exception ex)
                {
                    result.status = ResponseModel.responseFAIL;
                    result.errorMessage = new List<string>();
                    result.errorMessage.Add(ex.Message);
                    return result;
                }
            }
        }
    }
