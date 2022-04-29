using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ADLAPICore.Models
{
    public class UpdatePasswordInput
    {
        public string memberId { get; set; }
        public string password { get; set; }
    }
}
