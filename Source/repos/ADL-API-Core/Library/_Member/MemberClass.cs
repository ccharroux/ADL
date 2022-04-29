using ADLAPICore.Library.Common;
using ADLAPICore.Models.General;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data;

namespace ADLAPICore.Library.Member
{
    public class MemberUpdateInput
    {
        [Required]
        public string MemberId { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string EmailAddress { get; set; }

    }
    public class MemberUpdatePasswordInput
    {
        public string memberId { get; set; }
        public string password { get; set; }
    }
    public class MemberSendPasswordInput
    {
        public string emailAddress { get; set; }
    }
    public class MemberSendPasswordResult
    {
        public ResponseModel result = new ResponseModel();

        public MemberSendPasswordResult()
        {
            this.result.status = ResponseModel.responseFAIL;
            this.result.errorMessage.Add("Unexpected error");
        }
    }

    public class MemberResult
    {
        public ResponseModel result = new ResponseModel();
        public MemberClass member = new MemberClass();
    }
    public class MemberListResult
    {
        public ResponseModel result = new ResponseModel();
        public List<MemberRecordClass> members = new List<MemberRecordClass>();
    }

    public class MemberUpdateResult
    {
        public ResponseModel result = new ResponseModel();
        public string memberId { get; set; }
    }
    public class MemberRecordClass
    {
        public int MemberId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailAddress { get; set; }
        public string Password { get; set; }
        public int ProvideID { get; set; }
        public string MobilePhone { get; set; }
    }
    
    public interface IMemberClass
    {
  
        MemberListResult getMemberList<T>(T inMemberId);
        MemberResult getMemberInfo<T>(T userId);
        void getMemberLoggedIn<T1, T2> (T1 emailAddress, T2 password);
        void getMemberProfile<T>(T userId);
        ResponseModel SendPassword(string emailAddress);
        ResponseModel UpdateMemberPassword(string inMemberId, string inPassword);
        MemberUpdateResult UpdateMember(MemberUpdateInput input);
    }
    public class MemberClass : IMemberClass
    {
        private MemberRecordClass _member = new MemberRecordClass();
        private ResponseModel Validate()
        {

            ResponseModel result = new ResponseModel();

            try
            {
                if (this._member.MemberId <= 0)
                {
                    throw new ApplicationException("User Id is invalid for this method.");
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

        public MemberClass()
        {
            this._member.ProvideID = -1;
        }
        public MemberClass(string emailAddress, string password)
        {
            this._member.ProvideID = -1;
            this._member.EmailAddress = emailAddress;
            this._member.Password = password;
        }
        public MemberResult getMemberInfo<T>(T memberId)
        {
            MemberResult memberResult = new MemberResult();

            MemberDBClass uc = new MemberDBClass(new MemberRecordClass());

            var dbResult = uc.GetMemberInfoDBCall(memberId);

            foreach (DataRow row in dbResult.Rows)
            {
                this._member.MemberId = Convert.ToInt32(memberId);
                this._member.FirstName = row["FirstName"].ToString();
                this._member.LastName = row["LastName"].ToString();
                this._member.EmailAddress = row["EmailAddress"].ToString();
                memberResult.member = this;
                //memberResult.result.Success = true;
            }

            return memberResult;
        }
        public MemberListResult getMemberList<T>(T inMemberId)
        {
            MemberListResult memberResultList = new MemberListResult();

            MemberDBClass uc = new MemberDBClass(new MemberRecordClass());

            try
            {
                var dbResult = uc.GetMemberInfoListDBCall();

                foreach (DataRow row in dbResult.Rows)
                {
                    if (inMemberId.Equals(row["MemberID"].ToString()) == false)
                    {
                        MemberRecordClass u = new MemberRecordClass();
                        u.MemberId = Convert.ToInt32(row["MemberID"].ToString());
                        u.FirstName = row["FirstName"].ToString();
                        u.LastName = row["LastName"].ToString();
                        u.EmailAddress = row["EmailAddress"].ToString();

                        memberResultList.members.Add(u);
                    }
                }
                //memberResultList.result.Success = true;
                //memberResultList.result.Message = "";
                return memberResultList;
            }

            catch (Exception )
            {
                //GeneralResult r = new GeneralResult { Message = ex.Message, Success = false };
                return new MemberListResult {  };
            }
        
        }
        public void getMemberLoggedIn<T1, T2>(T1 emailAddress, T2 password)
        {
            throw new NotImplementedException();
        }
        public void getMemberProfile<T>(T userId)
        {
            throw new NotImplementedException();
        
        }

        #region Update Member Password
            public ResponseModel UpdateMemberPassword(string inMemberId, string inPassword)
            {

                ResponseModel result = new ResponseModel();
                try
                {

                    result = ValidateUpdateMemberPassword(inMemberId, inPassword);

                    //if (result.Success == false)
                    //{
                    //    result.Message = "ERROR: " + result.Message;
                    //    return result;
                    //}

                    MemberDBClass d = new MemberDBClass();

                    var dbResult = d.UpdateMemberPasswordDBCall(inMemberId, inPassword);

                    foreach (DataRow row in dbResult.Rows)
                    {
                        //if (Convert.ToInt32(row["Result"]) == 1)
                        //{
                        //    result.Success = true;
                        //    result.Message = String.Empty;
                        //}
                        //else
                        //{
                        //    result.Success = false;
                        //    result.Message = "Unexpected error";
                        //}

                    }

                    return result;
                }

                catch (Exception )
                {
                    return new ResponseModel {  };

                }
            }
            public ResponseModel ValidateUpdateMemberPassword(string inMemberId, string inPassword)
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

                if (String.IsNullOrEmpty(inPassword))
                {
                    throw new ApplicationException("Password is required for this method.");
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
        #endregion

        #region Send Password Rtn
        public ResponseModel SendPassword(string emailAddress)
        {
            ResponseModel result = new ResponseModel();
            try
            {
                result = ValidateSendPassword(emailAddress);

                //if (result.Success == false)
                //{
                //    result.Message = "ERROR: " + result.Message;
                //    return result;
                //}

                MemberDBClass lDB = new MemberDBClass();

                var dbResult = lDB.SendMemberPasswordDBCall(emailAddress);
                foreach (DataRow row in dbResult.Rows)
                {
                    string password = row["Password"].ToString();
                    if (password.Length > 0)
                    {
                        Email.SendEmail("PIXX Password", "<p>Here is your PIXX Password: " + password + "</p>", emailAddress, "", "");
                    }

                    //result.Success = true;
                    //result.Message = String.Empty;
                }

                return result;
            }

            catch (Exception )
            {
                return new ResponseModel();
                //{ Message = ex.Message, Success = false };

            }
        }
        public ResponseModel ValidateSendPassword(string inEmailAddress)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(inEmailAddress))
                {
                    throw new ApplicationException("EmailAddress is required for this method.");
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
        #endregion

        #region Update Rtn
        private ResponseModel ValidateMember()
        {
            ResponseModel result = new ResponseModel();

            try
            {
                if (this._member.MemberId <= 0)
                {
                    throw new ApplicationException("User Id is invalid for this method.");
                }

                if (String.IsNullOrEmpty(this._member.FirstName))
                {
                    throw new ApplicationException("First Name is required for this method.");
                }

                if (String.IsNullOrEmpty(this._member.LastName))
                {
                    throw new ApplicationException("Last Name is required for this method.");
                }

                if (String.IsNullOrEmpty(this._member.EmailAddress))
                {
                    throw new ApplicationException("Email Address is required for this method.");
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
        public MemberUpdateResult UpdateMember(MemberUpdateInput input)
        {
            MemberUpdateResult m = new MemberUpdateResult();
            //m.result.Success = false;
            //m.result.Message = "Unexpected error";

            MemberDBClass uc = new MemberDBClass( );

            var dbResult = uc.UpdateMemberDBCall(input);

            foreach (DataRow row in dbResult.Rows)
            {
                m.memberId = row["MemberId"].ToString();
                //m.result.Success = true;
                //m.result.Message = String.Empty;
            }

            return m;
        }
        #endregion

        //#region Password Update Rtn
        //private GeneralResult ValidatePassword()
        //{
        //    GeneralResult result = new GeneralResult();

        //    try
        //    {
        //        if (this._member.MemberId <= 0)
        //        {
        //            throw new ApplicationException("User Id is invalid for this method.");
        //        }

        //        if (String.IsNullOrEmpty(this._member.Password))
        //        {
        //            throw new ApplicationException("Password is required for this method.");
        //        }

        //        return result;
        //    }
        //    catch (Exception ex)
        //    {
        //        result.Success = false;
        //        result.Message = ex.Message;
        //        return result;
        //    }
        //}
        //public GeneralResult UpdateMemberPassword(MemberRecordClass inMember)
        //{

        //    var result = ValidatePassword();

        //    if (result.Success == false)
        //    {
        //        Console.WriteLine("ERROR: " + result.Message);
        //        return result;
        //    }

        //    MemberDBClass uc = new MemberDBClass(inMember);

        //    var dbResult = uc.UpdateMemberPasswordDBCall();

        //    foreach (DataRow row in dbResult.Rows)
        //    {
        //        if (Convert.ToInt32(row["userId"]) == inMember.MemberId)
        //        {
        //            result.Success = true;
        //            result.Message = String.Empty;
        //        }
        //        else
        //        {
        //            result.Success = false;
        //            result.Message = "Unexpected error";
        //        }

        //    }

        //    return result;
        //}
        //#endregion
    }


}
