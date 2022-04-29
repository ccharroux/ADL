using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Web;
 
namespace ADLAPICore.Library.utilities
{
    public static class GenerateTextFromDBParms
    {

        //public static string GetMessages(List<SqlParameter> Params)
        //{
        //    try
        //    {
        //        StringBuilder message = new StringBuilder();
        //        var bFirstRun = true;
        //        foreach (SqlParameter s in Params)
        //        {
        //            if (bFirstRun == false)
        //            {
        //                message.Append(", ");
        //            }
        //            bFirstRun = false;
        //            message.Append(s.ParameterName);
        //            message.Append(": ");
        //            message.Append(s.Value.ToString());
        //        }

        //        return message.ToString();
        //    }
        //    catch
        //    {
        //        return "Issue with GetMessages routine.";
        //    }
        //}
    }
}