using System.ComponentModel.DataAnnotations;

namespace ADLAPICore.Models.Login
{
    public class LoginInput
    {
        public string inEmailAddress { get; set; }
        public string inPassword { get; set; }
    }
}
