using ADLAPICore.Library.Common;
using System;
using System.Collections.Generic;
using System.Data;

namespace ADLAPICore.Library.UpdatePassword
{


 
 
    //public interface IUpdatePassword
    //{
    //    public GeneralResult UpdateMemberPassword(string inMemberId, string inPassword);
    //}

    //public class UpdatePasswordClass: IUpdatePassword
    //{
    //    GeneralResult result = new GeneralResult();
    //    
    //    public UpdatePasswordClass()
    //    {
    //        result.Success = false;
    //        result.Message = "Unexpected error";
    //    }

    //    public GeneralResult UpdateMemberPassword(string inMemberId, string inPassword)
    //    {

    //        try
    //        {

    //            this.result = ValidateUpdatePassword(inMemberId, inPassword);

    //            if (result.Success == false)
    //            {
    //                result.Message = "ERROR: " + result.Message;
    //                return result;
    //            }

    //            //MakePixxDBClass lDB = new MakePixxDBClass();

    //            //var dbResult = lDB.UpdatePasswordDBCall(inMemberId, inPassword);

    //            //foreach (DataRow row in dbResult.Rows)
    //            //{
    //            //    if (Convert.ToInt32(row["Result"]) > 0)
    //            //    {
    //            //        result.Success = true;
    //            //        result.Message = String.Empty;
    //            //    }
    //            //}

    //            return result;
    //        }

    //        catch (Exception ex)
    //        {
    //            return new GeneralResult { Message = ex.Message, Success = false };
    
    //        }
    //    }
    //    public GeneralResult ValidateUpdateMemberPassword(string inMemberId, string inPassword)
    //    {
    //        GeneralResult result = new GeneralResult();

    //        try
    //        {

    //            if (String.IsNullOrEmpty(inMemberId))
    //            {
    //                throw new ApplicationException("Member Id is required for this method.");
    //            }

    //            int iMemberId = 0;
    //            if (int.TryParse(inMemberId, out iMemberId) == false)
    //            {
    //                throw new ApplicationException("Member Id must be numeric for this method.");
    //            }

    //            if (iMemberId <= 0)
    //            {
    //                throw new ApplicationException("Member Id must be greater than 0.");
    //            }

    //            if (String.IsNullOrEmpty(inPassword))
    //            {
    //                throw new ApplicationException("Password is required for this method.");
    //            }

    //            return result;
    //        }
    //        catch (Exception ex)
    //        {
    //            result.Success = false;
    //            result.Message = ex.Message;
    //            return result;
    //        }
    //    }

    //}
}
