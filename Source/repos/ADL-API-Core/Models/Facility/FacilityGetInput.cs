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
}
