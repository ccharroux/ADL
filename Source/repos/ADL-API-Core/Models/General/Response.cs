using System.Collections.Generic;

namespace ADLAPICore.Models.General
{
    public class ResponseModel
    {
        public const string responseSUCCESS = "SUCCESS";
        public const string responseFAIL = "FAIL";
        public const string responseBLOCK = "BLOCK";

        public string apiToken { get; set; }
        public string status { get; set; }
        public List<string> errorMessage { get; set; }

        public ResponseModel()
        {
            status = responseSUCCESS;
            errorMessage = new List<string>();
        }
    }
}
