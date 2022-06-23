namespace ADLAPICore.Models.ADL
{
    public class ADLDeleteInput
    {
        public string inApiToken { get; set; }
        public int inSystemADLId { get; set; }
    }
    public class ADLUpdateInput
    {
        public string inApiToken { get; set; }
        public int inSystemADLId { get; set; }
        public string inSystemADL { get; set; }
        public int inSystemADLTypeId { get; set; }
        public int inOrderNum { get; set; }

        public ADLUpdateInput()
        {
            inSystemADLTypeId = 0;
            inOrderNum = 1000;
        }
    }
}
