using System;
using System.Collections.Generic;
using System.Data;
using ADLAPICore.Library.Common;
using ADLAPICore.Models;
using ADLAPICore.Models.General;
using ADLAPICore.Models.Login;
using ADLAPICore.Library.utilities;
using ADLAPICore.Models.Country;

namespace ADLAPICore.Library.Country
{
    public class CountryResultRow
    {
        public Int32 CountryId { get; set; }
        public string Country { get; set; }
        public string CountryAbbreviation { get; set; }
    }

    public class CountryResult
    {
        public ResponseModel response = new ResponseModel();
        public List<CountryResultRow> rows = new List<CountryResultRow>();
        private CountryResultRow resultRow = new CountryResultRow();

        public CountryResult()
        {
            this.response.status = ResponseModel.responseFAIL;
            this.response.errorMessage.Add("Unexpected error");
        }
    }

    public interface ICountryClass
    {
        public CountryResult GetCountryList(CountryListGetInput input);
    }

    public class CountryClass : ICountryClass
    {
            

            public CountryClass()
            { }

            
            public CountryResult GetCountryList(CountryListGetInput input)
            {

                CountryResult result = new CountryResult();
                CountryResultRow resultRow = new CountryResultRow();

                try
                {

                    result.response = Validate(input);

                    if (result.response.status == ResponseModel.responseFAIL)
                    {
                        return result;
                    }

                    CountryDBClass lDB = new CountryDBClass();

                    var dbResult = lDB.CountryListDBCall(input.inApiToken);
                    if (dbResult.response.status == ResponseModel.responseFAIL)
                    {
                        result.response = dbResult.response;
                        return result;
                    }

                    resultRow = new CountryResultRow();
                    result.rows = new List<CountryResultRow>();
                
                    foreach (DataRow row in dbResult.dt.Rows)
                    {

                        resultRow = new CountryResultRow
                        {
                            Country = row["Country"].ToString(),
                            CountryId = Convert.ToInt32(row["idCountry"]),
                            CountryAbbreviation = row["CountryAbbreviation"].ToString(),                            
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
                    result.response= General.buildError(ex.Message);
                    return new CountryResult { response = result.response };
                }
            }
            private ResponseModel Validate(CountryListGetInput input)
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
