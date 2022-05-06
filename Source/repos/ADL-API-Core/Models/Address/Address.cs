using System;

namespace ADLAPICore.Models.Address
{
    public class AddressRecord
    {
        public Int32 AddressId { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public Int32 StateId { get; set; }
        public Int32 CountryId { get; set; }
        public string ZipCode { get; set; }
        public string Phone { get; set; }

    }
    public class AddressGetInput
    {
        public string inApiToken { get; set; }
        public Int32 inAddressId { get; set; }
    }


}
