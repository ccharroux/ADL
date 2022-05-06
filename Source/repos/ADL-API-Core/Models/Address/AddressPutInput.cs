using System;

namespace ADLAPICore.Models.Address
{
    public class AddressUpdateInput
    {
        public string inApiToken { get; set; }
        public Int32 inAddressId { get; set; }
        public string inAddress1 { get; set; }
        public string inAddress2 { get; set; }
        public string inCity { get; set; }
        public Int32 inStateId { get; set; }
        public Int32 inCountryId { get; set; }
        public string inZipCode { get; set; }
        public string inPhone { get; set; }
    }
}
