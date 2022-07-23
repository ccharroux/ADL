namespace ADLAPICore.Models.Facility
{
    public class FacilityADLDeleteInput
    {
        public string inApiToken { get; set; }
        public int inFacilityId { get; set; }
        public int inSystemADLId { get; set; }
    }
    public class FacilityUpdateInput
    {
        public string inApiToken { get; set; }
        public int inFacilityId { get; set; }
        public string inFacility { get; set; }
    }
    public class FacilityFormDeleteInput
    {
        public string inApiToken { get; set; }
        public int inFacilityId { get; set; }
        public int inSystemFormId { get; set; }
    }

}
