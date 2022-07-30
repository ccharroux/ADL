using System;
using System.Collections.Generic;

namespace ADLAPICore.Models.Patient
{

    public class PatientADLLogInsertInput
    {
        public string inApiToken { get; set; }        
        public int inUserId { get; set; }
        public int inADLPatientId { get; set; }
 
 
    }

    public class PatientFormLogInsertInput
    {
        public string inApiToken { get; set; }
        public int inUserId { get; set; }
        public int inPatientId { get; set; }
        public int inFormFacilityId { get; set; }


    }



}
