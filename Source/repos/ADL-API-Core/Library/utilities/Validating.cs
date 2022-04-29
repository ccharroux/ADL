using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Text.RegularExpressions;

namespace ADLAPICore.Library.utilities
{
    public class ValidatingTools
    {

        public static string AdjustedValidationDescription(string inDescription)
        {
            return inDescription ?? "unknown";
        }

        public static string ExceptionText_NotAnInteger(string inText, string inDescription)
        {
            return string.Format(
                "{0} is not an integer: {1}",
                inDescription, inText);
        }

        public static string ExceptionText_IntegerBelowMinimum(string inText, string inDescription, int inMinimumValue)
        {
            return string.Format(
                "{0} is below minimum of {1}: {2}",
                inDescription, inMinimumValue, inText);
        }

        public static string ExceptionText_IntegerAboveMaximum(string inText, string inDescription, int inMaximumValue)
        {
            return string.Format(
                "{0} is above maximum of {1}: {2}",
                inDescription, inMaximumValue, inText);
        }

        public static int ValidateInt(string inText, string inDescription = null, int? inMinimumValue = null, int? inMaximumValue = null)
        {
            var iTemp = 0;
            var bIsValid = false;
            var originalText = inText;

            if (string.IsNullOrWhiteSpace(inText) == false)
            {
                bIsValid = int.TryParse(inText, out iTemp);
            }

            inDescription = AdjustedValidationDescription(inDescription);

            if (bIsValid == false) // covers both non-numbers and decimals
            {
                throw new ApplicationException(ExceptionText_NotAnInteger(
                    inText: originalText,
                    inDescription: inDescription));
            }

            if (iTemp < inMinimumValue) // false if inMinimumValue == null
            {
                throw new ApplicationException(ExceptionText_IntegerBelowMinimum(
                    inText: originalText,
                    inDescription: inDescription,
                    inMinimumValue: (int)inMinimumValue));
            }

            if (iTemp > inMaximumValue)
            {
                throw new ApplicationException(ExceptionText_IntegerAboveMaximum(
                    inText: originalText,
                    inDescription: inDescription,
                    inMaximumValue: (int)inMaximumValue));
            }

            return iTemp;
        }

        public static bool IsValidDateTime(DateTime dt)
        {
            if (dt == null)
            {
                return false;
            }

            // CleaningTools.CleanDateTime() uses DateTime.TryParse(), which returns DateTime.MinValue on bad input
            if (dt == DateTime.MinValue)
            {
                return false;
            }

            return true;
        }

    }

}
