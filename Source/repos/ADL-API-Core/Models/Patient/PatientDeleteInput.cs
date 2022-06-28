using System;

namespace ADLAPICore.Models.Patient
{



    public class PatientADLDeleteInput
    {
        public string inApiToken { get; set; }
        public int inPatientId { get; set; }
        public int inSystemADLId { get; set; }
    }


}
