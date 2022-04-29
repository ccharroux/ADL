using MySql.Data.MySqlClient;
using ADLAPICore.Library.Common;
using System.Data;

namespace ADLAPICore.Library.UpdatePassword
{
    //interface IUpatePasswordDBCall
    //{
    //    public DataTable UpdatePasswordDBCall(string inMemberId, string inPassword);
    //}

    //class UpdatePasswordDBClass: IUpatePasswordDBCall
    //{
    //    public DataTable UpdatePasswordDBCall(string inMemberId, string inPassword)
    //    {

    //        DBClass.dbCmd = new MySqlCommand("usp_update_memberpassword", DBClass.dbConn);
    //        DBClass.dbCmd.CommandType = CommandType.StoredProcedure;

    //        MySqlParameter param = new MySqlParameter("inMemberId", inMemberId);
    //        DBClass.dbCmd.Parameters.Add(param);

    //        param = new MySqlParameter("inPassword", inPassword);
    //        DBClass.dbCmd.Parameters.Add(param);

    //        return DBClass.getDBResults();

    //    }

    //}
}
