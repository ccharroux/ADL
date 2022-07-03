using System;
using System.Collections.Generic;

namespace ADLAPICore.Models.Patient
{

    public class PatientADLUpdateInput
    {
        public string inApiToken { get; set; }        
        public int inPatientId { get; set; }
        public int inSystemADLId { get; set; }
        //public List<PatientADLUpdateRow> rows = new List<PatientADLUpdateRow>();
    }

    public class PatientADLUpdateRow
    {
        public int inDayOfTheWeek { get; set; }
        public string inTimeOfDay { get; set; }
        public bool inDelete { get; set; }
    }
    
    public class PatientADLUpdateDBRow
    {
        public string inApiToken { get; set; }
        public int inPatientId { get; set; }
        public int inSystemADLId { get; set; }
        public int inDayOfTheWeek { get; set; }
        public string inTimeOfDay { get; set; }
        public int inDelete { get; set; }
    }

}
