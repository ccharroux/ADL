namespace ADLAPICore.Models.UserMember
{
    public class UserMemberInsertInput
    {
        public string inApiToken { get; set; }
        public string inFirstName { get; set; }
        public string inMiddleName { get; set; }
        public string inLastName { get; set; }
        public string inEmailAddress { get; set; }
        public string inPhoneNumber { get; set; }
    }

    public class UserAddressInsertInput
    {
        public string inApiToken { get; set; }
        public int inUserId { get; set; }
        public int inAddressId { get; set; }
    }
}
