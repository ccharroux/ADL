using System;
using System.Collections.Generic;
using System.Data;
using ADLAPICore.Models.General;
using ADLAPICore.Library.utilities;
using ADLAPICore.Models.Address;
using ADLAPICore.Models.Password;
using static ADLAPICore.Library.utilities.Email;
using ADLAPICore.Library.UserMember;
using ADLAPICore.Models.UserMember;

namespace ADLAPICore.Library.Password
{

    public class PasswordRequestInsertResult
    {
        public ResponseModel response = new ResponseModel();
        public int ReturnCode { get; set; }

        public PasswordRequestInsertResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }
    public class PasswordResetTokenGetResult
    {
        public ResponseModel response = new ResponseModel();
        public int ReturnCode { get; set; }

        public PasswordResetTokenGetResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }

    public class AddressUpdateResult
    {
        public ResponseModel response = new ResponseModel();
        public int ReturnCode { get; set; }

        public AddressUpdateResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }
    public class PasswordUpdateResult
    {
        public ResponseModel response = new ResponseModel();
        public int ReturnCode { get; set; }

        public PasswordUpdateResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }
    public class EmailUserInfoResult
    {
        public Email.EmailSendRequest emailInfo = new Email.EmailSendRequest();
        public ResponseModel response = new ResponseModel();
        public int ReturnCode { get; set; }

        public EmailUserInfoResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }

    public interface IPasswordClass
    {
        public PasswordRequestInsertResult InsertPasswordRequest(PasswordRequestInsertInput input);
        public PasswordUpdateResult UpdatePassword(PasswordUpdateInput input);
        public PasswordResetTokenGetResult GetPasswordResetToken(PasswordResetTokenGetInput input);
    }

    public class PasswordClass : IPasswordClass
    {

        public string PasswordUpdateConfirmationRequest { get; set; }
        public string EmailPasswordRequest { get; set; }

        public PasswordClass()
        {
            PasswordUpdateConfirmationRequest = "PasswordUpdateConfirmationRequest";
            EmailPasswordRequest = "EmailPasswordRequest";
        }

  
        public PasswordRequestInsertResult InsertPasswordRequest(PasswordRequestInsertInput input)
        {

            PasswordRequestInsertResult result = new PasswordRequestInsertResult();

            try
            {

                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                PasswordDBClass lDB = new PasswordDBClass();

                var dbResult = lDB.PasswordRequestInsertDBCall(input);
                if (dbResult.response.status == ResponseModel.responseFAIL)
                {
                    result.response = dbResult.response;
                    return result;
                }
                var resetToken = "";
                foreach (DataRow row in dbResult.dt.Rows)
                {
                    resetToken = row["resetToken"].ToString();
                    result.ReturnCode = Convert.ToInt32(row["returncode"]);
                }

                result.response = SendResetRequestEmail(resetToken);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                // now the result
                result.response = General.buildSuccess();

                return result;
            }

            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);

                return new PasswordRequestInsertResult { response = result.response };
            }
        }
        private ResponseModel Validate(PasswordRequestInsertInput input)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(input.inEmailAddress))
                { 
                    throw new ApplicationException("Email Address is required for this method.");
                }

                return result;
            }
            catch (Exception ex)
            {
                result = General.buildError(ex.Message);
                return result;
            }
        }
        
        public PasswordUpdateResult UpdatePassword(PasswordUpdateInput input)
        {

            PasswordUpdateResult result = new PasswordUpdateResult();

            try
            {

                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                PasswordDBClass lDB = new PasswordDBClass();

                var dbResult = lDB.PasswordUpdateDBCall(input);
                if (dbResult.response.status == ResponseModel.responseFAIL)
                {
                    result.response = dbResult.response;
                    return result;
                }

                foreach (DataRow row in dbResult.dt.Rows)
                {
                    result.ReturnCode = Convert.ToInt32(row["returncode"]);
                }

                result.response = SendPasswordUpdateConfirmationEmail(input.inPasswordResetToken);
                
                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                // now the result
                result.response = General.buildSuccess();

                return result;
            }

            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);

                return new PasswordUpdateResult { response = result.response };
            }
        }
        private ResponseModel Validate(PasswordUpdateInput input)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(input.inPasswordResetToken))
                {
                    throw new ApplicationException("Password Reset Token is required for this method.");
                }
 
                if (String.IsNullOrEmpty(input.inPassword))
                {
                    throw new ApplicationException("Password is required for this method.");
                }
                return result;
            }
            catch (Exception ex)
            {
                result = General.buildError(ex.Message);
                return result;
            }
        }

        public PasswordResetTokenGetResult GetPasswordResetToken(PasswordResetTokenGetInput input)
        {

            PasswordResetTokenGetResult result = new PasswordResetTokenGetResult();

            try
            {

                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                PasswordDBClass lDB = new PasswordDBClass();

                var dbResult = lDB.PasswordResetTokenGetDBCall(input);
                if (dbResult.response.status == ResponseModel.responseFAIL)
                {
                    result.response = dbResult.response;
                    return result;
                }

                // now the result
                result.response.status = ResponseModel.responseSUCCESS;
                result.response.errorMessage = new List<string>();

                return result;
            }

            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);

                return new PasswordResetTokenGetResult { response = result.response };
            }
        }
        private ResponseModel Validate(PasswordResetTokenGetInput input)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(input.inPasswordResetToken))
                {
                    throw new ApplicationException("Password Reset Token is required for this method.");
                }

                return result;
            }
            catch (Exception ex)
            {
                result = General.buildError(ex.Message);
                return result;
            }
        }

        private ResponseModel SendResetRequestEmail(string inRequestToken)
        {
            ResponseModel result = new ResponseModel();

            EmailSendRequest mailIt = new EmailSendRequest();

            try
            {


                mailIt.Subject = Startup.Configuration.GetSection(this.EmailPasswordRequest).GetSection("Subject").Value;
                mailIt.Message = Startup.Configuration.GetSection(this.EmailPasswordRequest).GetSection("Message").Value; ;
                
                var URL = Startup.Configuration.GetSection("EmailSettings").GetSection("ResetURL").Value;
                URL = URL.Replace("[TOKEN]", inRequestToken);

                mailIt.Message = mailIt.Message.Replace("[URL]", URL);

                UserMemberClass uc = new UserMemberClass();
                UserMemberFromResetTokenGetInput i = new UserMemberFromResetTokenGetInput();
                i.inResetToken = inRequestToken;

                UserMemberDetailRow dataResult = uc.GetUserMemberFromResetToken(i);

                // load class
                mailIt.ToAddress = dataResult.UserInfo.EmailAddress;
                mailIt.ToFullName = dataResult.UserInfo.UserName;
                mailIt.ToFirstName = dataResult.UserInfo.FirstName;
 

                Email e = new Email();
                result = e.SendEmail(mailIt);

                return result;
            }
            catch (Exception ex)
            {
                result = General.buildError(ex.Message);

                return result;
            }

        }

        private ResponseModel SendPasswordUpdateConfirmationEmail(string inRequestToken)
        {
            ResponseModel result = new ResponseModel();

            EmailSendRequest mailIt = new EmailSendRequest();

            try
            {

                mailIt.Subject = Startup.Configuration.GetSection(this.PasswordUpdateConfirmationRequest).GetSection("Subject").Value;
                mailIt.Message = Startup.Configuration.GetSection(this.PasswordUpdateConfirmationRequest).GetSection("Message").Value; ;
 
                UserMemberClass uc = new UserMemberClass();
                UserMemberFromResetTokenGetInput i = new UserMemberFromResetTokenGetInput();
                i.inResetToken = inRequestToken;

                UserMemberDetailRow dataResult = uc.GetUserMemberFromResetToken(i);

                // load class
                mailIt.ToAddress = dataResult.UserInfo.EmailAddress;
                mailIt.ToFullName = dataResult.UserInfo.UserName;
                mailIt.ToFirstName = dataResult.UserInfo.FirstName;
                mailIt.ToLastName = dataResult.UserInfo.LastName;

                Email e = new Email();
                result = e.SendEmail(mailIt);

                return result;
            }
            catch (Exception ex)
            {
                result = General.buildError(ex.Message);

                return result;
            }
        }

        private EmailUserInfoResult BuildUserEmailInfoFromResetToken()
        {
            EmailUserInfoResult result = new EmailUserInfoResult();

            try
            {
                return result;
            }
            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);

                return result;
            }

        }
    }

}
