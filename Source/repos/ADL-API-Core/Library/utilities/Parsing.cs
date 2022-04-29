using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Text.RegularExpressions;

namespace ADLAPICore.Library.utilities
{
    public class ParsingTools
    {

        protected const string _RegExPattern_YearPeriodWithDelimiter =
            @"^[0-9][0-9][0-9][0-9][^0-9Q][0-9Q][0-9]$";

        protected const string _RegExPattern_PeriodYearWithDelimiter =
            @"^[0-9Q][0-9][^0-9Q][0-9][0-9][0-9][0-9]$";

        protected const string _RegExPattern_YearPeriodWithoutDelimiter =
            @"^[0-9][0-9][0-9][0-9][0-9Q][0-9]$";

        public static int ParseYearFromYearPeriod(string inText)
        {
            if (Regex.IsMatch(inText, _RegExPattern_YearPeriodWithDelimiter))
            {
                return int.Parse(inText.Substring(0, 4));
            }

            if (Regex.IsMatch(inText, _RegExPattern_PeriodYearWithDelimiter))
            {
                return int.Parse(inText.Substring(3, 4));
            }

            if (Regex.IsMatch(inText, _RegExPattern_YearPeriodWithoutDelimiter))
            {
                return int.Parse(inText.Substring(0, 4));
            }

            return -1;
        }

        public static string ParsePeriodFromYearPeriod(string inText)
        {
            if (Regex.IsMatch(inText, _RegExPattern_YearPeriodWithDelimiter))
            {
                return inText.Substring(5, 2);
            }

            if (Regex.IsMatch(inText, _RegExPattern_PeriodYearWithDelimiter))
            {
                return inText.Substring(0, 2);
            }

            if (Regex.IsMatch(inText, _RegExPattern_YearPeriodWithoutDelimiter))
            {
                return inText.Substring(4, 2);
            }

            return null;
        }

    }

}
