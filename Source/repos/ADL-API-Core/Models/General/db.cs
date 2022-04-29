using System.Data;

namespace ADLAPICore.Models.General
{
    public class DBResult
    {
        public ResponseModel response = new ResponseModel();
        public DataTable dt { get; set; }

    }
}
