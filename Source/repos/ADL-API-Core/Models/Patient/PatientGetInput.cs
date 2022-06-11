using System;

namespace ADLAPICore.Models.Patient
{

    public class PatientListGetInput
    {
        public string inApiToken { get; set; }
        public int inPatientId { get; set; }
    }

    public class PatientADLListByDayGetInput
    {
        public string inApiToken { get; set; }
        public int inPatientId { get; set; }
        public DateTime inTransactionDate { get; set; }
    }
    public class PatientADLListGetInput
    {
        public string inApiToken { get; set; }
        public int inPatientId { get; set; }
    }
    public class PatientADLSummaryListGetInput
    {
        public string inApiToken { get; set; }
        public int inPatientId { get; set; }
    }
    public class PatientADLLogSummaryListByDateGetInput
    {
        public string inApiToken { get; set; }
        public int inFacilityId { get; set; }
        public DateTime inTransactionDate { get; set; }
    }

}
