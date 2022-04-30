using System;
using System.Collections.Generic;
using System.Data;
using ADLAPICore.Library.Common;
using ADLAPICore.Models;
using ADLAPICore.Models.General;
using ADLAPICore.Models.Login;
using ADLAPICore.Library.utilities;
using ADLAPICore.Models.State;

namespace ADLAPICore.Library.State
{
    public class StateResultRow
    {
        public Int32 StateId { get; set; }
        public Int32 CountryId { get; set; }
        public string State { get; set; }
        public string StateAbbreviation { get; set; }
    }

    public class StateResult
    {
        public ResponseModel response = new ResponseModel();
        public List<StateResultRow> rows = new List<StateResultRow>();
        private StateResultRow resultRow = new StateResultRow();

        public StateResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }

    public interface IStateClass
    {
        public StateResult GetStateList(StateListGetInput input);
    }

    public class StateClass : IStateClass
    {
            

            public StateClass()
            { }

            
            public StateResult GetStateList(StateListGetInput input)
            {

                StateResult result = new StateResult();
                StateResultRow resultRow = new StateResultRow();

                try
                {

                    result.response = Validate(input);

                    if (result.response.status == ResponseModel.responseFAIL)
                    {
                        return result;
                    }

                    RoleDBClass lDB = new RoleDBClass();

                    var dbResult = lDB.StateListDBCall(input);
                    if (dbResult.response.status == ResponseModel.responseFAIL)
                    {
                        result.response = dbResult.response;
                        return result;
                    }

                    resultRow = new StateResultRow();
                    result.rows = new List<StateResultRow>();
                
                    foreach (DataRow row in dbResult.dt.Rows)
                    {

                        resultRow = new StateResultRow
                        {
                            State = row["State"].ToString(),
                            StateId = Convert.ToInt32(row["idState"]),
                            CountryId = Convert.ToInt32(row["idCountry"]),
                            StateAbbreviation = row["StateAbbreviation"].ToString(),                            
                        };
                        
                        result.rows.Add(resultRow);

                    }


                    // now the result
                    result.response.status = ResponseModel.responseSUCCESS;
                    result.response.errorMessage = new List<string>();

                    return result;
                }

                catch (Exception ex)
                {
                    result.response = General.buildError(ex.Message);

                    return new StateResult { response = result.response };
                }
            }
            private ResponseModel Validate(StateListGetInput input)
            {
                ResponseModel result = new ResponseModel();

                try
                {

                    if (String.IsNullOrEmpty(input.inApiToken))
                    {
                        throw new ApplicationException("API Token is required for this method.");
                    }

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
