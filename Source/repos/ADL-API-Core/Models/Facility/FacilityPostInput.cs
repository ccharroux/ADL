namespace ADLAPICore.Models.Facility
{
    public class FacilityADLInsertInput
    {
        public string inApiToken { get; set; }
        public int inFacilityId { get; set; }
        public int inSystemADLId { get; set; }
    }
    public class FacilityAddressInsertInput
    {
        public string inApiToken { get; set; }
        public int inFacilityId { get; set; }
        public int inAddressId { get; set; }
    }
}
