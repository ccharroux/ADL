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
    public class FacilityInsertInput
    {
        public string inApiToken { get; set; }
        public string inFacility { get; set; }
    }
    public class FacilityFormInsertInput
    {
        public string inApiToken { get; set; }
        public int inFacilityId { get; set; }
        public int inSystemFormId { get; set; }
    }
}
