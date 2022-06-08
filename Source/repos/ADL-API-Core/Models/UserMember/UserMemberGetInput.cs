namespace ADLAPICore.Models.UserMember
{
    public class UserMemberListGetInput
    {
        public string inApiToken { get; set; }
        public int inRoleId { get; set; }
    }
    public class UserMemberListByFacilityGetInput
    {
        public string inApiToken { get; set; }
        public int inRoleId { get; set; }
        public int inFacilityId { get; set; }
    }
    public class UserMemberAccessListGetInput
    {
        public string inApiToken { get; set; }
        public int inUserId { get; set; }
    }
    public class UserMemberGetInput
    {
        public string inApiToken { get; set; }
        public int inUserId { get; set; }
    }
    public class UserMemberAddressGetInput
    {
        public string inApiToken { get; set; }
        public int inUserId { get; set; }
    }
}
