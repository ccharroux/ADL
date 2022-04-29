using MySql.Data.MySqlClient;
using ADLAPICore.Library.Common;
using System.Data;

namespace ADLAPICore.Library.Notifications
{
    interface INotificationsDBCall
    {
        public DataTable GetNotificationsDBCall(string memberId);
        public DataTable InsertNotificationDBCall(NotificationRecord input);


    }


    class NotificationsDBClass: INotificationsDBCall
    {
        public DataTable InsertNotificationDBCall(NotificationRecord input)
        {
            DBClass.dbCmd = new MySqlCommand("usp_insert_MemberNotification", DBClass.dbConn);
            DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

            MySqlParameter param = new MySqlParameter("inMemberId", input.MemberId);
            DBClass.dbCmd.Parameters.Add(param);
            param = new MySqlParameter("inFromMemberId", input.FromMemberID);
            DBClass.dbCmd.Parameters.Add(param);
            param = new MySqlParameter("inNotificationType", input.TypeID);
            DBClass.dbCmd.Parameters.Add(param);
            param = new MySqlParameter("inNotificationTitle", input.NotificationTitle);
            DBClass.dbCmd.Parameters.Add(param);
            param = new MySqlParameter("inNotificationMessage", input.NotificationMessage);
            DBClass.dbCmd.Parameters.Add(param);

            return DBClass.getDBResults().dt;

        }
        public DataTable GetNotificationsDBCall(string memberId)
        {

            DBClass.dbCmd = new MySqlCommand("usp_get_MemberMessageSetting", DBClass.dbConn);
            DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

            MySqlParameter param = new MySqlParameter("inMemberId", memberId);
            DBClass.dbCmd.Parameters.Add(param);
            return DBClass.getDBResults().dt;


        }
        public DataTable UpdateNotificationPreferencesDBCall(NotificationPreferenceInput input)
        {

 
            DBClass.dbCmd = new MySqlCommand("usp_Delete_MemberMessageSetting", DBClass.dbConn);
            DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

            MySqlParameter param = new MySqlParameter("inMemberId", input.memberId);
            DBClass.dbCmd.Parameters.Add(param);

            var deleteResultDB = DBClass.getDBResults();
            DataTable resultDB = new DataTable();

            foreach (NotificationPreference m in input.preferences)
            {
                DBClass.dbCmd = new MySqlCommand("usp_insert_MemberMessageSetting", DBClass.dbConn);

                param = new MySqlParameter("inMemberId", input.memberId);
                DBClass.dbCmd.Parameters.Add(param);
                param = new MySqlParameter("inTypeID", m.TypeID);
                DBClass.dbCmd.Parameters.Add(param);
                param = new MySqlParameter("inTextMessage", (m.Text.ToLower() == "on" ? 1 : 0));
                DBClass.dbCmd.Parameters.Add(param);
                param = new MySqlParameter("inEmailMessage", (m.Email.ToLower() == "on" ? 1 : 0));
                DBClass.dbCmd.Parameters.Add(param);
                return DBClass.getDBResults().dt;
            }



            return resultDB;


        }

    }
}
