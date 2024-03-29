﻿using System;

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
    public class PatientADLItemGetInput
    {
        public string inApiToken { get; set; }
        public int inPatientId { get; set; }
        public int inSystemADLId { get; set; }
    }
    public class PatientFormListGetInput
    {
        public string inApiToken { get; set; }
        public int inPatientId { get; set; }
    }
    public class PatientFormStatusGetInput
    {
        public string inApiToken { get; set; }
        public int inPatientId { get; set; }
    }
    public class PatientADLReportGetInput
    {
        public string inApiToken { get; set; }
        public int inPatientId { get; set; }
        public DateTime inTransactionDateFrom { get; set; }
        public DateTime inTransactionDateTo { get; set; }
    }
}