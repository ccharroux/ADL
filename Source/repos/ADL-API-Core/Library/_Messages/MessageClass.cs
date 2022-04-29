using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using ADLAPICore.Library.Common;
using ADLAPICore.Library.User;
using ADLAPICore.Models.General;

namespace ADLAPICore.Library.Messages
{
    public class MessagesResult
    {
        public ResponseModel result = new ResponseModel();
        public List<Message> messages = new List<Message>();

        public MessagesResult()
        {
            this.messages = new List<Message>();
            //this.result.Success = false;
            //this.result.Message = "Unexpected error";
        }
    }
    public class Message
    {
        public string CreateDate { get; set; }
        public int TypeID { get; set; }
        public string NotificationTitle { get; set; }
        public string NotificationMessage { get; set; }
        public int FromMemberID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
    public interface IMessagesClass
    {
        public MessagesResult MessageList(string inMemberId);
        public ResponseModel ValidateList(string inMemberId);
        public MessagesResult MessageDetail(string inMemberId, string inFromMemberId);
        public ResponseModel ValidateDetail(string inMemberId, string inFromMemberId);
    }

    public class MessagesClass: IMessagesClass
    {

        
        public MessagesClass()
        {       
        }
        public MessagesResult MessageList(string inMemberId)
        {

            MessagesResult messagesResult = new MessagesResult();
            try
            {
                messagesResult.result = ValidateList(inMemberId);

                //if (messagesResult.result.Success == false)
                //{
                //    messagesResult.result.Message = "ERROR: " + messagesResult.result.Message;
                //    return messagesResult;
                //}

                MessageDBClass lDB = new MessageDBClass();

                var dbResult = lDB.MessagesDBCall(inMemberId);
                foreach (DataRow row in dbResult.Rows)
                {

                    Message record = new Message();
                    record.CreateDate = row["CreateDate"].ToString();
                    record.TypeID = 0;
                    record.NotificationTitle = row["NotificationTitle"].ToString();
                    record.NotificationMessage = row["NotificationMessage"].ToString();
                    record.FromMemberID = Convert.ToInt32(row["FromMemberID"].ToString());
                    record.FirstName = (record.FromMemberID == 0 ? "" : row["FirstName"].ToString());
                    record.LastName = (record.FromMemberID == 0 ? "" : row["LastName"].ToString());
                    messagesResult.messages.Add(record);
                }
                //messagesResult.result.Success = true;
                //messagesResult.result.Message = String.Empty;

                return messagesResult;
            }

            catch (Exception )
            {
               // var errResult = new ResponseModel { Message = ex.Message, Success = false };
                return new MessagesResult();// { result = errResult };
            }
        }
        public ResponseModel ValidateList(string inMemberId)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(inMemberId))
                {
                    throw new ApplicationException("MemberId is required for this method.");
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
        
        public MessagesResult MessageDetail(string inMemberId, string inFromMemberId)
        {

            MessagesResult messagesResult = new MessagesResult();
            try
            {
                //messagesResult.result = ValidateDetail(inMemberId, inFromMemberId);

                //if (messagesResult.result.Success == false)
                //{
                //    messagesResult.result.Message = "ERROR: " + messagesResult.result.Message;
                //    return messagesResult;
                //}

                MessageDBClass lDB = new MessageDBClass();

                var dbResult = lDB.MessageDetailDBCall(inMemberId, inFromMemberId);
                foreach (DataRow row in dbResult.Rows)
                {

                    Message record = new Message();
                    record.CreateDate = row["CreateDate"].ToString();
                    record.TypeID = 0;
                    record.NotificationMessage = row["NotificationMessage"].ToString();
                    record.FromMemberID = Convert.ToInt32(row["FromMemberID"].ToString());
                    record.FirstName = (record.FromMemberID == 0 ? "" : row["FirstName"].ToString());
                    record.LastName = (record.FromMemberID == 0 ? "" : row["LastName"].ToString());
                    messagesResult.messages.Add(record);
                }
                //messagesResult.result.Success = true;
                //messagesResult.result.Message = String.Empty;

                return messagesResult;
            }

            catch (Exception )
            {
                //var errResult = new GeneralResult { Message = ex.Message, Success = false };
                return new MessagesResult();// {result=errResult };
            }
        }
        public ResponseModel ValidateDetail(string inMemberId, string inFromMemberId)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(inMemberId))
                {
                    throw new ApplicationException("MemberId is required for this method.");
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

                if (String.IsNullOrEmpty(inFromMemberId))
                {
                    throw new ApplicationException("From MemberId is required for this method.");
                }

                int iFromMemberId = 0;
                if (int.TryParse(inFromMemberId, out iFromMemberId) == false)
                {
                    throw new ApplicationException("From Member Id must be numeric for this method.");
                }

                if (iFromMemberId <=0)
                {
                    throw new ApplicationException("From Member Id must be greater than 0.");
                }
                return result;
            }
            catch (Exception)


            {
                //result.Success = false;
                //result.Message = ex.Message;
                return result;
            }
        }
    }
}
