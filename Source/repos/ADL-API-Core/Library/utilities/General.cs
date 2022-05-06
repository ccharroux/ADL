using ADLAPICore.Models.General;
using System.Collections.Generic;

namespace ADLAPICore.Library.utilities
{
    public static class General
    {
        public static ResponseModel buildError(string errMessage)
        {
            ResponseModel r = new ResponseModel();
            r.errorMessage = new List<string>();
            r.errorMessage.Add(errMessage);
            r.status = ResponseModel.responseFAIL;
            return r;

        }
        public static ResponseModel buildSuccess()
        {
            ResponseModel r = new ResponseModel();
            r.errorMessage = new List<string>();
            r.status = ResponseModel.responseSUCCESS;
            return r;

        }
    }
}
