using System;
using System.Collections.Generic;
using System.Text;
using MySql.Data.MySqlClient;
using ADLAPICore.Library.Common;
using System.Data;

namespace ADLAPICore.Library.Messages
{
    interface IMessageDBCall
    {
        public DataTable MessagesDBCall(string memberId);
        public DataTable MessageDetailDBCall(string memberId, string fromMemberId);
    }

    class MessageDBClass : IMessageDBCall
    {
        public DataTable MessageDetailDBCall(string memberId, string fromMemberId)
        {

            DBClass.dbCmd = new MySqlCommand("usp_get_MemberNotifications", DBClass.dbConn);
            DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

            MySqlParameter param = new MySqlParameter("inMemberId", memberId);
            DBClass.dbCmd.Parameters.Add(param);

            param = new MySqlParameter("inFromMemberId", fromMemberId);
            DBClass.dbCmd.Parameters.Add(param);

            return DBClass.getDBResults().dt;


        }
        public DataTable MessagesDBCall(string memberId)
        {

            DBClass.dbCmd = new MySqlCommand("usp_get_MemberNotificationListSummary", DBClass.dbConn);
            DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

            MySqlParameter param = new MySqlParameter("inMemberId", memberId);
            DBClass.dbCmd.Parameters.Add(param);

            return DBClass.getDBResults().dt;


        }

    }
}
