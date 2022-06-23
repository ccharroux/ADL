using ADLAPICore.Models.General;
using System;
using System.Collections.Generic;

namespace ADLAPICore.Library.utilities
{
    public static class DBCodes
    {
        public static string returnDBErrorMessage {get;set;}
        private static Dictionary< int, string>  messages = new Dictionary<int, string> ();
        private static string defaultMessage = "Invalid Error Message";
        private static int inputCode { get;set;}
        private static Dictionary<int, string> converted = new Dictionary<int, string>();

        static DBCodes()
        {
 
            messages.Add(-10, "Duplicate Record");
            messages.Add(-20, "Record Not Found");
            messages.Add(-30, "Existing Records Linked");
 

        }


        public static string Get(int inDBCode)
        {
            try
            {
                
                return messages[inDBCode];
            }

            catch (Exception)
            {
                return defaultMessage + ": " + inDBCode.ToString();
            }


        }
    }
}
