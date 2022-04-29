using ADLAPICore.Library.utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;

namespace ADLAPICore.Library.Base
{
    public class genericLogic
    {
        public static Object cleanAllTextFromObject (Object obj, bool bAllowHTML = false)
        {
            foreach (PropertyInfo p in obj.GetType().GetProperties())
            {
                if (p.PropertyType.FullName.ToLower() == "system.string")
                {
                    if (p.CanRead == true)
                    {
                        p.SetValue(obj, CleaningTools.CleanText((p.GetValue(obj, null) == null ? "" : p.GetValue(obj, null).ToString()), bAllowHTML)); //possible function
                    }
                }
            }
            return obj;

        }
        public static Dictionary<string, string> convertToDictionary(Object inObject)
        {
            Dictionary<string, string> d = new Dictionary<string, string>();

            Type myTypeObj = inObject.GetType();

            foreach (PropertyInfo propertyInfo in myTypeObj.GetProperties())
            {
                //if (propertyInfo.CanRead)
                //{

                if (propertyInfo.Name.ToLower().Contains("api") == false)
                {
                    object firstValue = propertyInfo.GetValue(inObject, null);
                    string val = CleaningTools.CleanText(firstValue == null ? "" : firstValue.ToString());
                    d.Add(propertyInfo.Name, val);
                }

                //}
            }

            return d;
        }

        public static decimal goodDecimalCheck(string inStr, string inNameofString, bool inRequired, decimal? inInvalidMinValue = null, decimal? inInvalidMaxValue = null)
        {
            var sInStr = CleaningTools.CleanText(inStr);

            if (inRequired)
            {
                if (string.IsNullOrEmpty(sInStr) == true)
                {
                    throw new ApplicationException(inNameofString + " is a required field - failed validation");
                }
            }

            var iInStr = CleaningTools.CleanDecimal(inStr);

            if (inInvalidMinValue.HasValue == true)
            {
                if (iInStr <= inInvalidMinValue)
                {
                    throw new ApplicationException("Invalid " + inNameofString + " passed: " + inStr);
                }
            }

            if (inInvalidMaxValue.HasValue == true)
            {
                if (iInStr >= inInvalidMaxValue)
                {
                    throw new ApplicationException("Invalid " + inNameofString + " passed: " + inStr);
                }
            }

            return iInStr;
        }
        public static int goodIntegerCheck(string inStr, string inNameofString, bool inRequired,  int? inInvalidMinValue = null, int? inInvalidMaxValue = null)
        {
            var sInStr = CleaningTools.CleanText(inStr);

            if (inRequired)
            {
                if (string.IsNullOrEmpty(sInStr) == true)
                {
                    throw new ApplicationException(inNameofString + " is a required field - failed validation");
                }
            }

            var iInStr = CleaningTools.CleanInt(inStr);

            if (inInvalidMinValue.HasValue == true)
            {
                if (iInStr <= inInvalidMinValue)
                {
                    throw new ApplicationException("Invalid " + inNameofString + " passed: " + inStr);
                }
            }

            if (inInvalidMaxValue.HasValue == true)
            {
                if (iInStr >= inInvalidMaxValue)
                {
                    throw new ApplicationException("Invalid " + inNameofString + " passed: " + inStr);
                }
            }

            return iInStr;
        }
        public static string goodStringCheck(string inStr, string inNameofString, bool inRequired)
        {
            var sInStr = CleaningTools.CleanText(inStr);

            if (inRequired)
            {
                if (string.IsNullOrEmpty(sInStr) == true)
                {
                    throw new ApplicationException(inNameofString + " is a required field - failed validation");
                }
            }
 
            return sInStr;
        }

    }
}