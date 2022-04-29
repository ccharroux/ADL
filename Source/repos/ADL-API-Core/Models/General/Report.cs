using Newtonsoft.Json.Linq;

namespace ADLAPICore.Models.General
{
        public class ReportModel
    {
            public JObject report { get; set; }
            public ResponseModel response { get; set; }
            public int pageNumber { get; set; }
            public int totalPages { get; set; }
            public int updateStatus { get; set; }
            public string apiToken { get; set; }
        public ReportModel()
        {
            response = new ResponseModel();
           // apiToken = AccessClass.apiToken;

        }
    }
}
