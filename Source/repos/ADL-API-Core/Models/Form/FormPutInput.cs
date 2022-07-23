namespace FormAPICore.Models.Form
{
    public class FormDeleteInput
    {
        public string inApiToken { get; set; }
        public int inSystemFormId { get; set; }
    }
    public class FormUpdateInput
    {
        public string inApiToken { get; set; }
        public int inSystemFormId { get; set; }
        public string inSystemForm { get; set; }
 
    }
}
