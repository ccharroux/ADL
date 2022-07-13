using System;

namespace ADLAPICore.Models.Password
{
    public class PasswordUpdateInput
    {
        public string inPasswordResetToken { get; set; }
        public string inPassword { get; set; }
    }
}
