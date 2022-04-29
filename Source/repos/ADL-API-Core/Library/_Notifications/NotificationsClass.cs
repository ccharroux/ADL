using ADLAPICore.Library.Common;
using ADLAPICore.Models.General;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data;

namespace ADLAPICore.Library.Notifications
{
    public class NotificationRecord
    {
        public string CreateDate { get; set; }
        [Required]
        public string TypeID { get; set; }
        public string NotificationTitle { get; set; }
        [Required] 
        public string NotificationMessage { get; set; }
        [Required] 
        public string FromMemberID { get; set; }
        [Required] 
        public string FirstName { get; set; }
        [Required] 
        public string LastName { get; set; }
        [Required]
        public string MemberId { get; set; }
    }
    public class NotificationsResult
    {
        public ResponseModel result = new ResponseModel();
        public List<NotificationPreference> Notifications = new List<NotificationPreference>();

        public NotificationsResult()
        {
            this.Notifications = new List<NotificationPreference>();
            //this.result.Success = false;
            //this.result.Message = "Unexpected error";
        }
    }
    public class NotificationPreference
    {
        [Required]
        public string TypeID;
        [Required]
        public string Email;
        [Required]
        public string Text;
    }
    public class NotificationPreferenceInput
    {
        public string memberId { get; set; }
        public List<NotificationPreference> preferences = new List<NotificationPreference>();
    }
    public interface INotificationsClass
    {
        public NotificationsResult GetNotificationSettings(string inMemberId);
        public ResponseModel InsertNotification(NotificationRecord input);
        public ResponseModel UpdateNotificationPreferences(NotificationPreferenceInput input);
    }

    public class NotificationsClass: INotificationsClass
    {

        
        public NotificationsClass()
        {}

        public ResponseModel UpdateNotificationPreferences(NotificationPreferenceInput input)
        {
            ResponseModel result = new ResponseModel();
            try
            {

                NotificationsDBClass lDB = new NotificationsDBClass();

                var dbResult = lDB.UpdateNotificationPreferencesDBCall(input);

                //result.Success = true;
                //result.Message = String.Empty;

                return result;
            }

            catch (Exception )
            {
                return new ResponseModel();// { Message = ex.Message, Success = false };
            }
        }

        public ResponseModel InsertNotification(NotificationRecord input)
        {

            ResponseModel result = new ResponseModel();
            try
            {
 
                NotificationsDBClass lDB = new NotificationsDBClass();

                var dbResult = lDB.InsertNotificationDBCall(input);
                foreach (DataRow row in dbResult.Rows)
                {
                    int ReturnCode = 0;
                    int.TryParse(row["ReturnCode"].ToString(), out ReturnCode);

                    if (ReturnCode > 0)
                    {
                        string FirstName = row["FirstName"].ToString();
                        string LastName = row["LastName"].ToString();
                        string EmailAddress = row["EmailAddress"].ToString();
                        string Text = (row["TextMessage"] == null ? "0" : row["TextMessage"].ToString());
                        string EmailSetting = (row["EmailMessage"] == null ? "0" : row["EmailMessage"].ToString());
                        string TextAddress = (row["TextAddress"] == null ? "" : row["TextAddress"].ToString());
                        if (EmailSetting == "1")
                        {
                            string mSubject = input.FirstName + " " + input.LastName + " has sent you a PIXX message!";
                            string mMessage = "<p>" + FirstName + ",<br></p><p><br><strong>Subject:&nbsp;</strong>" + mSubject + "<br><br>" + input.NotificationMessage + "</p><p><hr>To reply and make your PIXX for today's games, login to your PIXX account.<br><br>The PIXX Team</p>";
                            Email.SendEmail(mSubject, mMessage, EmailAddress, FirstName, LastName);
                        }

                        if (Text == "1")
                        {
                            EmailAddress = TextAddress;
                            if (input.NotificationMessage.Length > 0 && EmailAddress.Length > 0)
                            {
                                string mMessage = input.NotificationMessage;
                                Email.SendEmail("", mMessage, EmailAddress, "", "");
                            }
                        }

                    }
                }

                //result.Success = true;
                //result.Message = String.Empty;

                return result;
            }

            catch (Exception )
            {
                return new ResponseModel();// { Message = ex.Message, Success = false };
            }
        }
        public NotificationsResult GetNotificationSettings(string inMemberId)
        {

            NotificationsResult NotificationsResult = new NotificationsResult();
            try
            {
                NotificationsResult.result = Validate(inMemberId);

                //if (NotificationsResult.result.Success == false)
                //{
                //    NotificationsResult.result.Message = "ERROR: " + NotificationsResult.result.Message;
                //    return NotificationsResult;
                //}

                NotificationsDBClass lDB = new NotificationsDBClass();

                var dbResult = lDB.GetNotificationsDBCall(inMemberId);
                foreach (DataRow row in dbResult.Rows)
                {
                    NotificationPreference record = new NotificationPreference
                    {
                        //TypeName = row["TypeName"].ToString(),
                        Text = (row["TextMessage"] == null ? false.ToString() : (row["TextMessage"].ToString() == "1" ? true.ToString() : false.ToString())),
                        Email = (row["EmailMessage"] == null ? false.ToString() : (row["EmailMessage"].ToString() == "1" ? true.ToString() : false.ToString())),
                        TypeID = row["MemberMessageTypeID"].ToString()
                    };
                    NotificationsResult.Notifications.Add(record);
                }

                //NotificationsResult.result.Success = true;
                //NotificationsResult.result.Message = String.Empty;

                return NotificationsResult;
            }

            catch (Exception )
            {
                //var errResult = new GeneralResult { Message = ex.Message, Success = false };
                return new NotificationsResult();// { result = errResult };
            }
        }
        private ResponseModel Validate (string inMemberId)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(inMemberId))
                {
                    throw new ApplicationException("Member Id is required for this method.");
                }

                int iMemberId = 0;
                if (int.TryParse(inMemberId, out iMemberId) == false)
                {
                    throw new ApplicationException("Member Id must be numeric for this method.");
                }

                if (iMemberId <= 0)
                {
                    throw new ApplicationException("Member Id must be greater than 0.");
                }


                return result;
            }
            catch (Exception )
            {
                //result.Success = false;
                //result.Message = ex.Message;
                return result;
            }
        }
 
    }
}
