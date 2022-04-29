using System;
using System.Text.RegularExpressions;
using System.Web;
 

namespace ADLAPICore.Library.utilities
{
    public enum FieldSecurityClass
    {
        StandardText
        ,
        StandardEmail
        ,
        StandardNumeric
        ,
        StandardDate
        ,
        StandardTime
        ,
        StandardFileName
        ,
        StandardUserName
        ,
        StandardPassword
        ,
        StandardPhone
        ,
        Guid
        ,
        DirectoryOnly
        ,
        StandardURL
        ,
        StandardDateTime
        ,
        StandardNumericPositiveInteger

    } //end FieldSecurityClass

    public class CleaningTools
    {
        static Regex _htmlRegex = new Regex("<.*?>", RegexOptions.Compiled);

        protected const string _RegExPattern_HTML =
            @"<[/]{0,1}[\s]{0,}(?:html|script|meta|link|body|head|table|tr|td|thead|tbody|div|object|embed|iframe|layer|frame|frameset)[^/>]*[/]{0,1}>";

        protected const string _RegExPattern_HTML_NoScript =
            @"(<[/]{0,1}[\s]{0,}script[^/>]*[/]{0,1}>)|(&lt;[/]{0,1}script&gt;)";

        protected const string _RegExPattern_URL =
            @"[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?";

        protected const string _RegExPattern_GUID =
            @"^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$";

        public static bool CleanBoolean(string inText)
        {
            bool bTemp = inText != null && (inText == "1" || inText.ToLower() == "true");

            return bTemp;
        }

        //public static string GetCleanQueryString(string inText)
        //{
        //    return CleanText(HttpContext.Current.Request.QueryString[inText]);
        //}
        public static DateTime CleanDateTime(string inText)
        {
            var dtTemp = new DateTime();

            if (string.IsNullOrWhiteSpace(inText))
            {
                return dtTemp;
            }

            inText = PreCleanValue(inText, FieldSecurityClass.StandardDateTime);

            DateTime.TryParse(inText, out dtTemp);

            return dtTemp;
        }

        public static decimal CleanDecimal(string inText)
        {
            var dTemp = 0.0m;

            if (string.IsNullOrWhiteSpace(inText))
            {
                return dTemp;
            }

            inText = PreCleanValue(inText, FieldSecurityClass.StandardNumeric);

            decimal.TryParse(inText, out dTemp);

            return dTemp;
        }

        public static double CleanDouble(string inText)
        {
            var dTemp = 0d;

            if (string.IsNullOrWhiteSpace(inText))
            {
                return dTemp;
            }

            inText = PreCleanValue(inText, FieldSecurityClass.StandardNumeric);

            double.TryParse(inText, out dTemp);

            return dTemp;
        }

        public static float CleanFloat(string inText)
        {
            var fTemp = 0f;

            if (string.IsNullOrWhiteSpace(inText))
            {
                return fTemp;
            }

            inText = PreCleanValue(inText, FieldSecurityClass.StandardNumeric);

            float.TryParse(inText, out fTemp);

            return fTemp;
        }

        public static int CleanInt(string inText)
        {
            var iTemp = 0;

            if (string.IsNullOrWhiteSpace(inText))
            {
                return iTemp;
            }

            inText = PreCleanValue(inText, FieldSecurityClass.StandardNumeric);

            int.TryParse(inText, out iTemp);

            return iTemp;
        }

        public static long CleanLong(string inText)
        {
            var lTemp = 0L;

            if (string.IsNullOrWhiteSpace(inText))
            {
                return lTemp;
            }

            inText = PreCleanValue(inText, FieldSecurityClass.StandardNumeric);

            long.TryParse(inText, out lTemp);

            return lTemp;
        }

        public static long CleanLongPositiveInteger(string inText)
        {
            var lTemp = 0L;

            if (string.IsNullOrWhiteSpace(inText))
            {
                return lTemp;
            }

            inText = PreCleanValue(inText, FieldSecurityClass.StandardNumericPositiveInteger);

            long.TryParse(inText, out lTemp);

            return lTemp;
        }

        public static Guid CleanGuid(string inText)
        {
            Guid g;
            Guid.TryParse(inText, out g);
            return g;
        }

        public static string CleanText(string inText, bool allowHtml = false)
        {
            //if have performance issues can change to parsing character array
            //may need to reduce this to specific tags
            if (string.IsNullOrWhiteSpace(inText))
            {
                return inText;
            }

            inText = allowHtml == false
                ? _htmlRegex.Replace(inText, string.Empty)
                : PreCleanValue(inText, FieldSecurityClass.StandardText, allowHtml);

            return inText;
        }

        public static string PreCleanValue(string inValue, FieldSecurityClass inFieldType, bool removeScriptOnly = false)
        {
            string sWork = "";

            if (inValue != null)
                sWork = inValue.Trim();

            try
            {
                switch (inFieldType)
                {
                    case FieldSecurityClass.StandardPhone:

                        sWork = Regex.Replace(sWork, "[^0-9]", "");

                        break;


                    case FieldSecurityClass.StandardNumericPositiveInteger:

                        sWork = Regex.Replace(sWork, @"[^0-9]", "");

                        break;

                    case FieldSecurityClass.StandardNumeric:

                        sWork = Regex.Replace(sWork, @"[^0-9.-]", "");

                        break;

                    case FieldSecurityClass.StandardDate:

                        sWork = Regex.Replace(sWork, "[^0-9/.-]", "");
                        break;

                    case FieldSecurityClass.StandardDateTime:
                        sWork = Regex.Replace(sWork, @"[^0-9/.\-\s:APMapm]", "");
                        break;

                    case FieldSecurityClass.StandardEmail:

                        if (sWork.IndexOf("@") > -1)
                        {
                            string[] parts = sWork.Split(new char[] { '@' });

                            // Split it up but only count the first two parts. If there are more,
                            // it's malformed anyway.
                            // NOTE: the account part of an address (account@domain.tld) is more
                            // flexible in what is allowed
                            parts[0] = Regex.Replace(parts[0], @"[^A-Za-z0-9_\-\.']", "");
                            parts[1] = Regex.Replace(parts[1], @"[^A-Za-z0-9\-\.]", "");

                            sWork = parts[0] + "@" + parts[1];
                        } //end if
                        else
                            sWork = "";

                        // If we still don't match a valid e-mail pattern, then kill the string for safety.
                        if (!Regex.IsMatch(sWork, @"^[A-Za-z0-9_\-\.]+@(([A-Za-z0-9\-])+\.)+([A-Za-z\-])+$"))
                            sWork = "";

                        break;

                    case FieldSecurityClass.Guid:

                        if (!Regex.IsMatch(sWork, _RegExPattern_GUID))
                            sWork = "";

                        break;

                    case FieldSecurityClass.DirectoryOnly:
                        sWork = Regex.Replace(sWork, "[^a-zA-Z0-9]", ""); // No punctuation, no spaces.

                        break;

                    case FieldSecurityClass.StandardURL:
                        Regex pattern = new Regex(_RegExPattern_URL, RegexOptions.IgnoreCase);

                        sWork = (!pattern.IsMatch(sWork) ? "" : ReplaceNewLines(sWork, ""));

                        break;

                    default:

                        // Only limit versus special characters/phrases that could cause issues
                        sWork = Regex.Replace(sWork, removeScriptOnly ? _RegExPattern_HTML_NoScript : _RegExPattern_HTML,
                            "", RegexOptions.IgnoreCase);
                        break;

                } //end switch

            }
            catch (Exception )
            {
                //Logging.Logging.HandleAlert("CleaningTools.PreCleanValue",ex.ToString() + " GetCleanFormValue with HTML " + sWork, AlertLevel.Error);
                sWork = "";
            }

            return sWork;
        }

        public static string ReplaceNewLines(string inText, string replaceWith)
        {
            return inText.Replace("\r\n", replaceWith).Replace("\n", replaceWith).Replace("\r", replaceWith);
        }

        public static string HtmlEncoding(string inText)
        {
            //if (string.IsNullOrWhiteSpace(inText))
            //{
            //    return "";
            //}

            //try
            //{
            //    return HttpContext.Current.Server.HtmlEncode(inText);
            //}
            //catch (Exception )
            //{
            //    //Logging.Logging.HandleAlert(Logging.Logging.GetCallingInfo(),  ex.ToString() + " Trying to HTML encode: " + inText, AlertLevel.Error);
            //    return "";
            //}
            return "";
        }

        public static string HtmlDecoding(string inText)
        {
            //if (string.IsNullOrWhiteSpace(inText))
            //{
            //    return "";
            //}

            //try
            //{
            //    return HttpContext.Current.Server.HtmlDecode(inText);
            //}
            //catch (Exception )
            //{
            //    //Logging.Logging.HandleAlert(Logging.Logging.GetCallingInfo(), ex.ToString() + " Trying to HTML decode: " + inText, AlertLevel.Error);
            //    return "";
            //}
            return "";

        }
        //can start using this if there are performance issues
        //private static string StripTagsCharArray(string source)
        //{
        //    char[] array = new char[source.Length];
        //    int arrayIndex = 0;
        //    bool inside = false;

        //    for (int i = 0; i < source.Length; i++)
        //    {
        //        char let = source[i];
        //        if (let == '<')
        //        {
        //            inside = true;
        //            continue;
        //        }
        //        if (let == '>')
        //        {
        //            inside = false;
        //            continue;
        //        }
        //        if (!inside)
        //        {
        //            array[arrayIndex] = let;
        //            arrayIndex++;
        //        }
        //    }
        //    return new string(array, 0, arrayIndex);
        //}
        //public static void GetControls(Control control)
        //{
        //    //Get text from form elements
        //    foreach (Control ctrl in control.Controls)
        //    {
        //        if (ctrl.Controls.Count > 0)
        //        {
        //            GetControls(ctrl);
        //        }
        //        else if (ctrl is TextBox)
        //        {
        //            //Box the control into a textbox. Not really needed, but do it anyway
        //            var textbox = (TextBox)ctrl;

        //            textbox.Text = CleanText(textbox.Text);
        //        }
        //    }

        //}
    }
}
