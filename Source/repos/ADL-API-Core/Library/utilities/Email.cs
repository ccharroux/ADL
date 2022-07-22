using ADLAPICore.Models.General;
using System;
using System.Net;
using System.Net.Mail;

namespace ADLAPICore.Library.utilities
{
    public class Email
    {
        public class EmailSendRequest
        {
            public string Subject { get; set; }
            public string Message { get; set; }
            public string ToAddress { get; set; }
            public string ToFirstName { get; set; }
            public string ToLastName { get; set; }
        }

        public ResponseModel SendEmail(EmailSendRequest input)
        {
            ResponseModel result = new ResponseModel();

            try
            {
                MailMessage mailmessage = new MailMessage();

                mailmessage.From = new MailAddress(
                        Startup.Configuration.GetSection("EmailSettings").GetSection("FromEmail").Value,
                        Startup.Configuration.GetSection("EmailSettings").GetSection("FromName").Value);

                mailmessage.To.Add(new MailAddress(input.ToAddress, input.ToFirstName + " " + input.ToLastName));

                mailmessage.Subject = input.Subject;

                mailmessage.IsBodyHtml = true;
                mailmessage.Body = input.Message;

                SmtpClient smtp = new SmtpClient(Startup.Configuration.GetSection("EmailSettings").GetSection("SMTPClient").Value);

                NetworkCredential Credentials = new NetworkCredential(
                                                            Startup.Configuration.GetSection("EmailSettings").GetSection("UserName").Value, 
                                                            Startup.Configuration.GetSection("EmailSettings").GetSection("Password").Value);
                smtp.Credentials = Credentials;
                smtp.Send(mailmessage);
                return result;

            }

            catch (Exception ex)
            {
                result = General.buildError(ex.Message);

                return result;
            }
        }

    }
}
