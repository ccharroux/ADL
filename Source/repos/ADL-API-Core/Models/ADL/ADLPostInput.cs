namespace ADLAPICore.Models.ADL
{
    public class ADLInsertInput
    {
        public string inApiToken { get; set; }
        public string inSystemADL { get; set; }
        public int inSystemADLTypeId { get; set; }
        public int inOrderNum { get; set; }

        public ADLInsertInput()
        {
            inSystemADLTypeId = 0;
            inOrderNum = 1000;
        }
    }
}
