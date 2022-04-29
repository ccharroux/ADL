using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace ADLAPICore.Library.Common
{
    public static class Email
    {
        public static void SendEmail(string Subject, string Message, string ToAddress, string ToFirstName, string ToLastName)
        {

            try
            {
                MailMessage mailmessage = new MailMessage();

                mailmessage.From = new MailAddress("postmaster@pixxsports.com", "PIXX Sports");

                mailmessage.To.Add(new MailAddress(ToAddress, ToFirstName + " " + ToLastName));

                mailmessage.Subject = Subject;

                mailmessage.IsBodyHtml = true;
                mailmessage.Body = Message;
                SmtpClient smtp = new SmtpClient("mail.pixxsports.com");

                NetworkCredential Credentials = new NetworkCredential("postmaster@pixxsports.com", "Moorpark62!");
                smtp.Credentials = Credentials;
                smtp.Send(mailmessage);
            }

            catch (Exception)
            {
                return;
            }
        }

    }
}
