using System;

namespace ADLAPICore.Models.Facility
{
    public class FacilityGetInput
    {
        public string inApiToken { get; set; }
        public int inFacilityId { get; set; }   
    }
    public class FacilityAddressGetInput
    {
        public string inApiToken { get; set; }
        public int inFacilityId { get; set; }
    }
    public class FacilityOwnerListGetInput
    {
        public string inApiToken { get; set; }
        public int inFacilityId { get; set; }
    }
    public class FacilityListGetInput
    {
        public string inApiToken { get; set; }
    }
    public class FacilityADLListGetInput
    {
        public string inApiToken { get; set; }
        public int inFacilityId { get; set; }
    }
    public class FacilityFormListGetInput
    {
        public string inApiToken { get; set; }
        public int inFacilityId { get; set; }
    }
    public class FacilityEntireListGetInput
    {
        public string inApiToken { get; set; }
    }
    public class FacilityDashboardDataByDayGetInput
    {
        public string inApiToken { get; set; }
        public int inFacilityId { get; set; }
        public DateTime inTransactionDate { get; set; }
    }
    public class FacilityADLLogByDayGetInput
    {
        public string inApiToken { get; set; }
        public int inFacilityId { get; set; }
        public DateTime inTransactionDate { get; set; }
    }
    public class FacilityADLReportGetInput
    {
        public string inApiToken { get; set; }
        public int inFacilityId { get; set; }
        public DateTime inTransactionDateFrom { get; set; }
        public DateTime inTransactionDateTo { get; set; }
    }


}
