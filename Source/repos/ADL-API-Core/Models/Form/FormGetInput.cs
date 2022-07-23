namespace ADLAPICore.Models.Form
{

    public class FormListGetInput
    {
        public string inApiToken { get; set; }
    }
    public class FormGetInput
    {
        public string inApiToken { get; set; }
        public int inSystemFormId{ get; set; }
    }
}
