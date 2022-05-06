using ADLAPICore.Models.General;
using System;
using System.Collections.Generic;

namespace ADLAPICore.Library.utilities
{
    public static class DBCodes
    {
        public static string returnDBErrorMessage {get;set;}
        private static List<Dictionary<int, string>> messages = new List<Dictionary<int, string>>();
        private static string defaultMessage = "Invalid Error Message";
        private static int inputCode { get;set;}

        static DBCodes()
        {
            var item = new Dictionary<int, string>();
            item[-10] = "Duplicate Record";
            messages.Add(item);

            item = new Dictionary<int, string>();
            item[-20] = "Record Not Found";
            messages.Add(item);

            item = new Dictionary<int, string>();
            item[-30] = "Existing Records Linked";
            messages.Add(item);
        }


        public static string Get(int inDBCode)
        {
            try
            {
                inputCode = inDBCode;
                return messages[inDBCode].ToString();
            }

            catch (Exception)
            {
                return defaultMessage + ": " + inputCode.ToString();
            }


        }
    }
}
