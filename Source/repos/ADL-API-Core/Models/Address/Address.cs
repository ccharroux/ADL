using System;

namespace ADLAPICore.Models.Address
{
    public class Address
    {
        public Int32 AddressID { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public Int32 StateId { get; set; }
        public Int32 CountryId { get; set; }
        public string ZipCode { get; set; }
        public string Phone { get; set; }

    }
}
