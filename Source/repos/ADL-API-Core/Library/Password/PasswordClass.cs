using System;
using System.Collections.Generic;
using System.Data;
using ADLAPICore.Models.General;
using ADLAPICore.Library.utilities;
using ADLAPICore.Models.Address;

namespace ADLAPICore.Library.Address
{

    public class AddressDetailRow
    {
        public ResponseModel response = new ResponseModel();
        public AddressRecord addressRecord { get; set; }
    }

    public class AddressInsertResult
    {
        public ResponseModel response = new ResponseModel();
        public int ReturnCode { get; set; }

        public AddressInsertResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }
    public class AddressUpdateResult
    {
        public ResponseModel response = new ResponseModel();
        public int ReturnCode { get; set; }

        public AddressUpdateResult()
        {
            this.response = General.buildError("Unexpected error");
        }
    }

    public interface IAddressClass
    {
        public AddressInsertResult InsertAddress(AddressInsertInput input);
        public AddressUpdateResult UpdateAddress(AddressUpdateInput input);
        public AddressDetailRow GetAddress(AddressGetInput input);
    }

    public class AddressClass : IAddressClass
    {
            
        public AddressClass()
        { }

        public AddressInsertResult InsertAddress(AddressInsertInput input)
        {

            AddressInsertResult result = new AddressInsertResult();

            try
            {

                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                AddressDBClass lDB = new AddressDBClass();

                var dbResult = lDB.AddressInsertDBCall(input);
                if (dbResult.response.status == ResponseModel.responseFAIL)
                {
                    result.response = dbResult.response;
                    return result;
                }

                foreach (DataRow row in dbResult.dt.Rows)
                {
                    result.ReturnCode = Convert.ToInt32(row["returncode"]);
                }

                // now the result
                result.response = General.buildSuccess();

                return result;
            }

            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);

                return new AddressInsertResult { response = result.response };
            }
        }
        private ResponseModel Validate(AddressInsertInput input)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(input.inApiToken))
                {
                    throw new ApplicationException("API Token is required for this method.");
                }

                if (String.IsNullOrEmpty(input.inAddress1))
                {
                    throw new ApplicationException("Address1 is required for this method.");
                }

                if (String.IsNullOrEmpty(input.inCity))
                {
                    throw new ApplicationException("City is required for this method.");
                }

                if (input.inStateId < 1)
                {
                    throw new ApplicationException("State Id must be > 0.");
                }

                if (input.inCountryId < 1)
                {
                    throw new ApplicationException("Country Id must be > 0.");
                }

                if (String.IsNullOrEmpty(input.inZipCode))
                {
                    throw new ApplicationException("ZipCode is required for this method.");
                }

                //if (String.IsNullOrEmpty(input.inPhone))
                //{
                //    throw new ApplicationException("Phone is required for this method.");
                //}


                return result;
            }
            catch (Exception ex)
            {
                result = General.buildError(ex.Message);
                return result;
            }
        }
        
        public AddressUpdateResult UpdateAddress(AddressUpdateInput input)
        {

            AddressUpdateResult result = new AddressUpdateResult();

            try
            {

                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                AddressDBClass lDB = new AddressDBClass();

                var dbResult = lDB.AddressUpdateDBCall(input);
                if (dbResult.response.status == ResponseModel.responseFAIL)
                {
                    result.response = dbResult.response;
                    return result;
                }

                foreach (DataRow row in dbResult.dt.Rows)
                {
                    result.ReturnCode = Convert.ToInt32(row["returncode"]);
                }

                // now the result
                result.response = General.buildSuccess();

                return result;
            }

            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);

                return new AddressUpdateResult { response = result.response };
            }
        }
        private ResponseModel Validate(AddressUpdateInput input)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(input.inApiToken))
                {
                    throw new ApplicationException("API Token is required for this method.");
                }
                
                if (input.inAddressId < 1)
                {
                    throw new ApplicationException("Address Id must be > 0.");
                }

                if (String.IsNullOrEmpty(input.inAddress1))
                {
                    throw new ApplicationException("Address1 is required for this method.");
                }

                if (String.IsNullOrEmpty(input.inCity))
                {
                    throw new ApplicationException("City is required for this method.");
                }
                
                if (input.inStateId < 1)
                {
                    throw new ApplicationException("State Id must be > 0.");
                }
                
                if (input.inCountryId < 1)
                {
                    throw new ApplicationException("Country Id must be > 0.");
                }
                
                if (String.IsNullOrEmpty(input.inZipCode))
                {
                    throw new ApplicationException("ZipCode is required for this method.");
                }
                
                //if (String.IsNullOrEmpty(input.inPhone))
                //{
                //    throw new ApplicationException("Phone is required for this method.");
                //}

                return result;
            }
            catch (Exception ex)
            {
                result = General.buildError(ex.Message);
                return result;
            }
        }
       
        public AddressDetailRow GetAddress(AddressGetInput input)
        {

            AddressDetailRow result = new AddressDetailRow();
 
            try
            {

                result.response = Validate(input);

                if (result.response.status == ResponseModel.responseFAIL)
                {
                    return result;
                }

                AddressDBClass lDB = new AddressDBClass();

                var dbResult = lDB.AddressGetDBCall(input);
                if (dbResult.response.status == ResponseModel.responseFAIL)
                {
                    result.response = dbResult.response;
                    return result;
                }

                foreach (DataRow row in dbResult.dt.Rows)
                {
                    result.addressRecord = new AddressRecord();

                    // address stuff
                    result.addressRecord.Address1 = row["address1"].ToString();
                    result.addressRecord.Address2 = row["address2"].ToString();
                    result.addressRecord.City = row["city"].ToString();
                    result.addressRecord.ZipCode = row["zipcode"].ToString();
                    result.addressRecord.StateId = Convert.ToInt32(row["idstate"]);
                    result.addressRecord.CountryId = Convert.ToInt32(row["idcountry"]);

                }

                // now the result
                result.response.status = ResponseModel.responseSUCCESS;
                result.response.errorMessage = new List<string>();

                return result;
            }

            catch (Exception ex)
            {
                result.response = General.buildError(ex.Message);

                return new AddressDetailRow { response = result.response };
            }
        }
        private ResponseModel Validate(AddressGetInput input)
        {
            ResponseModel result = new ResponseModel();

            try
            {

                if (String.IsNullOrEmpty(input.inApiToken))
                {
                    throw new ApplicationException("API Token is required for this method.");
                }

                if (input.inAddressId < 1)
                {
                    throw new ApplicationException("Address Id must be > 0.");
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
