var autoRerunInterval = 120 * 1000; // 

var reportObjectArray = new Array();
var reportFilterObjectArray = new Array();

var reportName = new Array();
reportName.push("rptMRRMarketSummary");
reportName.push("rptXRAYUsage");
reportName.push("rptMRRUsage");
reportName.push("rptTVBUsage");
reportName.push("rptMarketRevenueHourlyActivity");
reportName.push("rptUserActivity");
reportName.push("rptUserActivityDetail");
reportName.push("rptUserQuerySummary");
reportName.push("rptUserQuerySummaryByOwner");
reportName.push("rptUserListing");
reportName.push("rptTraining");
reportName.push("rptAEStatus");
reportName.push("rptNationwideRecipients");
reportName.push("rptNewUserListing");
reportName.push("rptStationChangeHistory");
reportName.push("rptMarketRevenueXRay");
reportName.push("rptStationListing");
reportName.push("rptMarketDelivery");
reportName.push("rptTVBUserListing");
// -- Parent Ownership
reportName.push("rptParentOwnershipList");
// -- Ownership
reportName.push("rptOwnershipList");
// -- Stations
reportName.push("rptActiveStationList");
reportName.push("rptDisabledStationList");
reportName.push("rptStationChanges");
reportName.push("rptMRREstimatedStationList");
reportName.push("rptMRRStationManagerList");
reportName.push("rptDetailedStationSetup");

// owner groups
reportName.push("rptOwnershipGroupList");
reportName.push("rptOwnershipGroupDistributionList");
reportName.push("rptMarketOwnershipGroup");
reportName.push("rptDetailedOwnerGroupSetup");

// Markets
reportName.push("rptMarketSetupMarket");
reportName.push("rptMarketSetupMarketMRRCategories");
reportName.push("rptMarketSetupMarketMRRReports");
reportName.push("rptMarketSetupMarketOwnerGroups");
reportName.push("rptMarketSetupMarketProducts");
reportName.push("rptMarketSetupMarketStations");
reportName.push("rptMarketSetupMarketUsers");
reportName.push("rptMarketSetupMarketVirtualGroups");
reportName.push("rptMarketReleaseList");

// Personnal
reportName.push("rptPersonnelContactList");
reportName.push("rptPersonnelRecipientList");
reportName.push("rptWebUserList");

reportName.push("rptMRRNoPrimaryContactList");

reportName.push("rptMRRMarketRelease");
reportName.push("rptMRRMarketStationRelease");

reportName.push("rptXRYMarketRelease");
reportName.push("rptXRYMarketStationRelease");

reportName.push("rptTVBMarketRelease");
reportName.push("rptTVBMarketStationRelease");
 
reportName.push("rptFeatureImplementationList");

reportName.push("rptTVBMRRCompare");

reportName.push("rptMRRReportList");
reportName.push("rptMRRMarketReportList");
reportName.push("rptMRROwnerReportList");

reportName.push("rptTVBRepBillingStationList");
reportName.push("rptTVBTimeSalesStationList");
reportName.push("rptTVBMarketNielsenRankingList");

reportName.push("rptOwnerStationGrid");
reportName.push("rptGeneralStationData");

reportName.push("rptAPIActivityList");
reportName.push("rptAPIAccessList");
reportName.push("rptDMAMRRCategoryMappingList");
reportName.push("rptCorporateGroupUserList");

reportName.push("rptKeywordIndustryList");
reportName.push("rptAdminDeviceList");

reportName.push("rptParentMarketCategoryTemplateList");

reportName.push("rptSAMLOwnerList");
reportName.push("rptSAMLUserExceptionList");

reportName.push("rptAdvertiserRevenueInWrongMarket");
reportName.push("rptAgencyRevenueInWrongMarket");
reportName.push("rptDisabledUserAccountExecutive");
reportName.push("rptDuplicateUser");
reportName.push("rptMRRWithoutManager");
reportName.push("rptMRRUserMissing");
reportName.push("rptMultipleOwnersPerUser");
reportName.push("rptOwnerGroupReportingEntityIssues");
reportName.push("rptUserMissingGroup");
reportName.push("rptUsersAssignedReportsInvalidOwner");
reportName.push("rptUsersAssignedInvalidMarket");
reportName.push("rptUsersWithDisabledStationAssigned");
reportName.push("rptXRAYImportScript");
reportName.push("rptXRYAccountAndRevenueAssignment");

reportName.push("rptMRRReportMatrix");

reportName.push("rptMarketProductStationSummary");

reportName.push("rptAsyncJobQueueStatus");

reportName.push("rptDisabledAEList");

reportName.push("rptMRRRevenueWithoutSubmitterList");
reportName.push("rptMRRRevenueOutOfBalanceList");
reportName.push("rptMRRRevenueEntryMissingList");
reportName.push("rptAdvertiserAgencyRevenueList");
reportName.push("rptMRRMarketDistributionList");

reportName.push("rptOwnershipProductList");

reportName.push("rptEmailStatusList");

reportName.push("rptMRRUploadTemplateByOwner");
reportName.push("rptMRRUploadTemplateByOwnerWithRevenue");

reportName.push("rptMRRMarketRevisionHistory");

reportName.push("rptMRRNationwideTVByAffiliation");
reportName.push("rptMRRNationwideTVByRegion");
reportName.push("rptMRRNationwideTVBySize");

reportName.push("rptMRRNationwideRadioByFormat");
reportName.push("rptMRRNationwideRadioByRegion");
reportName.push("rptMRRNationwideRadioBySize");

function buildReportArray()
{
    var reportCounter = 1;
    var success = true;
    var reportArray = new Array();

    do 
    {
        var outObject = getReportObject(reportCounter);

        if (outObject.apiControllerAction == null)
        {
            success = false;
        }
        else
        {
            reportArray.push(outObject);
            reportCounter++;
        }
    }
    while (success == true);

    return reportArray;
}

buildReportObjectArray();

//---------------------------
// Generic Report Wrapper Routines
//---------------------------
function buildReportObjectArray()
{
    var arrayObject = new Object();

    for (var x = 0; x < reportName.length; x++)
    {
        var module = reportName[x].replace("rpt", "");
       // console.log(module);
        arrayObject = window[("getReportObject_" + module)]();
        arrayObject.filters = window[("getReportFilterArray_" + module)]();
        reportObjectArray.push(arrayObject);

    }


}
function getReportObject(inReportId)
{
 
    return reportObjectArray[inReportId];
  
}

function buildQuickReports(rptType, control, container, postfix)
{

    if (!control)
    {
        control = 'ddlQuickReport';
    }

    if (!control) {
        control = 'divQuickReport';
    }

    var rptHit = false;

    for (var i = 0; i < reportObjectArray.length; i++)
    {

        if (reportObjectArray[i].product.toLowerCase() == rptType.toLowerCase())
        {
             
            rptHit = true;
            $("#" + control).append("<option value='" + i + "'>" + reportObjectArray[i].reportTitle + "</option>");
        }

    }

    if (rptHit == true) {
        $("#" + control).prepend("<option value='-1'>  -- Select a Report --  </option>");
        $("#" + control).val("-1");
        $("#" + container).show();
    }
    else
    {
        $("#" + container).hide();
    }

}
function getQuickReport(reportId)
{
    if (reportId > -1)
    {
        var url = "/utilities/genericReport.html?reportId=" + reportId;

        var i = parseInt($("#ddlMarket").val());

        if (i > 0)
        {
            url = url + "&marketid=" + $("#ddlMarket").val();
        }

        window.location = url;
    }
}


//-------------------------
// REPORT AREA
//-------------------------

// Parent Ownership
function getReportFilterArray_ParentOwnershipList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    return arrayFilters;
}
function getReportObject_ParentOwnershipList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();

    tempObject =
    {
        // id: rptParentOwnershipList,
        reportTitle: "Parent Ownership List",
        apiControllerAction: "/api/ParentOwnershipReport/GetParentOwnershipReportList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'owner'
    }

    return tempObject;
}

// Ownership
function getReportFilterArray_OwnershipList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    return arrayFilters;
}
function getReportObject_OwnershipList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        // id: rptOwnershipList,
        reportTitle: "Ownership List",
        apiControllerAction: "/api/OwnerReport/GetOwnerList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'owner'
    }

    return tempObject;
}

// MRR Market Summary
function getReportFilterArray_MRRMarketSummary()
{

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['MRR'],
        objectName: "ddlMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token:  "Year",
        jsCall:  "getYearList",
        objectName:  "ddlYear",
        required:  true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token:  "Period",
        objectName:  "ddlPeriod",
        jsCall:  "getPeriodList",
        required:  true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_MRRMarketSummary()
{

    var tempObject = new Object();

    columnsToDisplay = new Array();
    columnsToDisplay.push("Category");
    columnsToDisplay.push("Current Amount");
    columnsToDisplay.push("Previous Amount");
    columnsToDisplay.push("Period Pct");
    columnsToDisplay.push("Current Amount YTD");
    columnsToDisplay.push("Previous Amount YTD");
    columnsToDisplay.push("YTD Pct");

    tempObject =
    {
        // id: rptMRRMarketSummary,
        reportTitle:  "Market Summary",
        apiControllerAction:  "/api/MRRReport/GetMarketSummary",
        apiType:  "get",
        columnsToDisplay:  columnsToDisplay,
        product:  'mrr'
    }

    return tempObject;
}

// XRAY Usage
function getReportFilterArray_XRAYUsage() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token:  "StartDate",
        jsCall:  null,
        objectName:  "dtStartDate",
        required:  true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "EndDate",
        jsCall:  null,
        objectName:  "dtEndDate",
        required:  true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['XRY'],
        objectName:  "ddlMarket",
        required:  false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['XRY'],
        objectName:  "ddlOwner",
        required:  false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_XRAYUsage() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    columnsToDisplay.push("QueryDateTime");
    columnsToDisplay.push("PersonnelId");
    columnsToDisplay.push("QueryForm");
    columnsToDisplay.push("LoginDateTime");
    columnsToDisplay.push("Browser");
    columnsToDisplay.push("MarketId");
    columnsToDisplay.push("MarketName");
    columnsToDisplay.push("OwnerName");
    columnsToDisplay.push("UserName");

    tempObject =
    {
        // id: rptXRAYUsage,
        reportTitle:  "XRay Usage Report",
        apiControllerAction:  "/api/XRAYReport/GetXRayUsage",
        apiType:  "get",
        columnsToDisplay:  columnsToDisplay,
        product:  'xry'
    }

    return tempObject;
}

// MRR Usage
function getReportFilterArray_MRRUsage() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token:  "StartDate",
        jsCall:  null,
        objectName:  "dtStartDate",
        required:  true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "EndDate",
        jsCall:  null,
        objectName:  "dtEndDate",
        required:  true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['MRR'],
        objectName:  "ddlMarket",
        required:  false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['XRY'],
        objectName:  "ddlOwner",
        required:  false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_MRRUsage() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    columnsToDisplay.push("QueryDateTime");
    columnsToDisplay.push("PersonnelId");
    columnsToDisplay.push("ReportTitle");
    columnsToDisplay.push("LoginDateTime");
    columnsToDisplay.push("Browser");
    columnsToDisplay.push("MarketId");
    columnsToDisplay.push("MarketName");
    columnsToDisplay.push("OwnerGroupName");
    columnsToDisplay.push("UserName");

    tempObject =
    {
        // id: rptMRRUsage,
        reportTitle:  "MRR Usage Report",
        apiControllerAction:  "/api/MRRReport/GetMRRUsage",
        apiType:  "get",
        columnsToDisplay:  columnsToDisplay,
        product:  'mrr'
    }

    return tempObject;
}

// TVB Usage
function getReportFilterArray_TVBUsage() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token:  "StartDate",
        jsCall:  null,
        objectName:  "dtStartDate",
        required:  true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "EndDate",
        jsCall:  null,
        objectName:  "dtEndDate",
        required:  true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['TVB'],
        objectName:  "ddlMarket",
        required:  false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['TVB'],
        objectName:  "ddlOwner",
        required:  false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_TVBUsage() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    columnsToDisplay.push("ReportDateTime");
    columnsToDisplay.push("PersonnelId");
    columnsToDisplay.push("ReportTitle");
    columnsToDisplay.push("LoginDateTime");
    columnsToDisplay.push("Browser");
    columnsToDisplay.push("MarketNames");
 
    columnsToDisplay.push("OwnerNames");
    columnsToDisplay.push("UserName");

    tempObject =
    {
        // id: rptTVBUsage,
        reportTitle:  "TVB Usage Report",
        apiControllerAction:  "/api/TVBReport/GetTVBUsage",
        apiType:  "get",
        columnsToDisplay:  columnsToDisplay,
        product:  'tvb'
    }

    return tempObject;

}

// rptMarketRevenueHourlyActivity
function getReportFilterArray_MarketRevenueHourlyActivity() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token:  "StartDate",
        jsCall:  null,
        objectName:  "dtStartDate",
        required:  true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "EndDate",
        jsCall:  null,
        objectName:  "dtEndDate",
        required:  true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['MRR'],
        objectName:  "ddlMarket",
        required:  false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['MRR'],
        objectName:  "ddlOwner",
        required:  false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_MarketRevenueHourlyActivity() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    columnsToDisplay.push("Hour");
    columnsToDisplay.push("NumberLogins");
    columnsToDisplay.push("NumberReportSessions");
    columnsToDisplay.push("NumberReportSessionsWeighted");
    columnsToDisplay.push("AverageGenerationTime");
    columnsToDisplay.push("MaximumGenerationTime");

    columnsToDisplay.push("NumberIncompleteReportSessions");
    columnsToDisplay.push("NumberSubmissions");

    tempObject =
    {
        // id: rptMarketRevenueHourlyActivity,
        reportTitle:  "MRR Hourly Usage",
        apiControllerAction:  "/api/MRRReport/GetHourlyActivity",
        apiType:  "get",
        columnsToDisplay:  columnsToDisplay,
        product:  'mrr'
    }

    return tempObject;

}

// rptUserActivity
function getReportFilterArray_UserActivity() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token:  "StartDate",
        jsCall:  null,
        objectName:  "dtStartDate",
        required:  true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "EndDate",
        jsCall:  null,
        objectName:  "dtEndDate",
        required:  true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['XRY'],
        objectName:  "ddlMarket",
        required:  false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['XRY'],
        objectName:  "ddlOwner",
        required:  false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_UserActivity() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    columnsToDisplay.push("MarketID");
    columnsToDisplay.push("MarketName");
    columnsToDisplay.push("OwnerID");
    columnsToDisplay.push("OwnerName");
    columnsToDisplay.push("NumberUsers");
    columnsToDisplay.push("NumberInactiveUsers");
    columnsToDisplay.push("PercentInactiveUsers");
    columnsToDisplay.push("NumberActiveUsers");
    columnsToDisplay.push("PercentActiveUsers");

    tempObject =
    {
        // id: rptUserActivity,
        reportTitle:  "XRay User Activity",
        apiControllerAction:  "/api/XRAYReport/GetUserActivity",
        apiType:  "get",
        columnsToDisplay:  columnsToDisplay,
        product:  'xry'
    }

    return tempObject;

}

// rptUserActivityDetail
function getReportFilterArray_UserActivityDetail() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token:  "StartDate",
        jsCall:  null,
        objectName:  "dtStartDate",
        required:  true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "EndDate",
        jsCall:  null,
        objectName:  "dtEndDate",
        required:  true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['XRY'],
        objectName:  "ddlMarket",
        required:  false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['XRY'],
        objectName:  "ddlOwner",
        required:  false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_UserActivityDetail() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    columnsToDisplay.push("PersonnelID");
    columnsToDisplay.push("Name");
    columnsToDisplay.push("AccessLevel");
    columnsToDisplay.push("HasWEbLogin");
    columnsToDisplay.push("NumberQueries");
    columnsToDisplay.push("Position");
    columnsToDisplay.push("Title");
    columnsToDisplay.push("MarketName");

    tempObject =
    {
        // id: rptUserActivityDetail,
        reportTitle:  "XRay User Activity - Detail",
        apiControllerAction:  "/api/XRAYReport/GetUserActivityDetail",
        apiType:  "get",
        columnsToDisplay:  columnsToDisplay,
        product:  'xry'
    }

    return tempObject;

}

// rptUserQuerySummary
function getReportFilterArray_UserQuerySummary() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token:  "StartDate",
        jsCall:  null,
        objectName:  "dtStartDate",
        required:  true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "EndDate",
        jsCall:  null,
        objectName:  "dtEndDate",
        required:  true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['XRY'],
        objectName:  "ddlMarket",
        required:  false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['XRY'],
        objectName:  "ddlOwner",
        required:  false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_UserQuerySummary() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    columnsToDisplay.push("QueryName");
    columnsToDisplay.push("NumberRequests");

    tempObject =
    {
        // id: rptUserQuerySummary,
        reportTitle:  "XRay Query Summary",
        apiControllerAction:  "/api/XRAYReport/GetUserQuerySummary",
        apiType:  "get",
        columnsToDisplay:  columnsToDisplay,
        product:  'xry'
    }

    return tempObject;

}

// rptUserQuerySummaryByOwner
function getReportFilterArray_UserQuerySummaryByOwner() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token:  "StartDate",
        jsCall:  null,
        objectName:  "dtStartDate",
        required:  true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "EndDate",
        jsCall:  null,
        objectName:  "dtEndDate",
        required:  true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['XRY'],
        objectName:  "ddlMarket",
        required:  false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['XRY'],
        objectName:  "ddlOwner",
        required:  false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_UserQuerySummaryByOwner() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    columnsToDisplay.push("MarketID");
    columnsToDisplay.push("MarketName");
    columnsToDisplay.push("OwnerID");
    columnsToDisplay.push("OwnerName");
    columnsToDisplay.push("NumberUsers");
    columnsToDisplay.push("QueryName");
    columnsToDisplay.push("NumberUsersThisQuery");
    columnsToDisplay.push("NumberRequests");

    tempObject =
    {
        // id: rptUserQuerySummaryByOwner,
        reportTitle:  "XRay Query Summary - By Owner",
        apiControllerAction:  "/api/XRAYReport/GetUserQuerySummaryByOwner",
        apiType:  "get",
        columnsToDisplay:  columnsToDisplay,
        product:  'xry'
    }

    return tempObject;

}
// rptUserListing
function getReportFilterArray_UserListing() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token:  "Market",
        jsCall:  "getMarketListAll",
        objectName:  "ddlMarket",
        required:  false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "Personnel",
        jsCall:  null,
        objectName:  "hidPersonnel",
        required:  false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "Owner",
        jsCall:  "getOwnerList",
        objectName:  "ddlOwner",
        required:  false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_UserListing() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    columnsToDisplay.push("AccessLevel");
    columnsToDisplay.push("FirstName");
    columnsToDisplay.push("LastName");
    columnsToDisplay.push("Email");
    columnsToDisplay.push("Phone");
    columnsToDisplay.push("Position");
    columnsToDisplay.push("MarketName");
    columnsToDisplay.push("OwnerName");

    tempObject =
    {
        // id: rptUserListing,
        reportTitle:  "User Listing",
        apiControllerAction:  "/api/PersonnelReport/GetUserListing",
        apiType:  "get",
        columnsToDisplay:  columnsToDisplay,
        product:  ''
    }

    return tempObject;

}
// rptAEStatus
function getReportFilterArray_AEStatus() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token:  "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['XRY'],
        objectName:  "ddlMarket",
        required:  true
    }
    arrayFilters.push(arrayObject);
 
    return arrayFilters;
}
function getReportObject_AEStatus() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    columnsToDisplay.push("AE_AEID");
    columnsToDisplay.push("AE Name");
    columnsToDisplay.push("SA_PersonnelID");
    columnsToDisplay.push("SA_Primary");
    columnsToDisplay.push("AE Status");
    columnsToDisplay.push("User_Name");
    columnsToDisplay.push("User Status");
    columnsToDisplay.push("Last Activity");

    tempObject =
    {
        // id: rptAEStatus,
        reportTitle:  "XRay Account Executive Status",
        apiControllerAction:  "/api/AccountExecutiveReport/GetAEStatus",
        apiType:  "get",
        columnsToDisplay:  columnsToDisplay,
        product:  'xry'
    }

    return tempObject;

}

// rptMarketDelivery
function getReportFilterArray_MarketDelivery() {

    var arrayFilters = new Array();
    var arrayObject = new Object();



     arrayObject = {
        token:  "StartDate",
        jsCall:  null,
        objectName:  "dtStartDate",
        required:  true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "EndDate",
        jsCall:  null,
        objectName:  "dtEndDate",
        required:  true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "Market",
        jsCall: "getMarketList",
        jsCallParameters: new Array(),
        objectName:  "ddlMarket",
        required: true,
        reloadBasedProduct: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "Owner",
        jsCall:  "getOwnerListByProduct",
        objectName:  "ddlOwner",
        required: false,
        reloadBasedProduct: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Product",
        jsCall: "getProductList",
        objectName: "ddlProduct",
        required: true
    }
    arrayFilters.push(arrayObject);
    return arrayFilters;
}
function getReportObject_MarketDelivery() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
 

    tempObject =
    {
        // id: rptMarketDelivery,
        reportTitle:  "Market Delivery",
        apiControllerAction:  "/api/MarketReport/GetMarketDelivery",
        apiType:  "get",
        columnsToDisplay:  columnsToDisplay,
        product:  'market'
    }

    return tempObject;

}
// rptTVBUserListing
function getReportFilterArray_TVBUserListing() {

    var arrayFilters = new Array();
    var arrayObject = new Object();


    arrayObject = {
        token:  "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['TVB'],
        objectName:  "ddlMarket",
        required:  false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['TVB'],
        objectName:  "ddlOwner",
        required:  false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_TVBUserListing() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    columnsToDisplay.push("AccessLevel");
    columnsToDisplay.push("FirstName");
    columnsToDisplay.push("LastName");
    columnsToDisplay.push("Email");
    columnsToDisplay.push("Phone");
    columnsToDisplay.push("Position");
    columnsToDisplay.push("MarketName");
    columnsToDisplay.push("OwnerName");

    tempObject =
    {
        // id: rptTVBUserListing,
        reportTitle:  "TVB User Listing",
        apiControllerAction:  "/api/TVBReport/GetTVBUserListing",
        apiType:  "get",
        columnsToDisplay:  columnsToDisplay,
        product:  'tvb'
    }

    return tempObject;

}
// rptNewUserListing
function getReportFilterArray_NewUserListing() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token:  "StartDate",
        jsCall:  null,
        objectName:  "dtStartDate",
        required:  true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "EndDate",
        jsCall:  null,
        objectName:  "dtEndDate",
        required:  true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "Market",
        jsCall:  "getMarketListAll",
        objectName:  "ddlMarket",
        required:  false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "Owner",
        jsCall:  "getOwnerList",
        objectName:  "ddlOwner",
        required:  false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_NewUserListing() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    columnsToDisplay.push("PersonnelID");
    columnsToDisplay.push("DateAdded");
    columnsToDisplay.push("FirstName");
    columnsToDisplay.push("LastName");
    columnsToDisplay.push("Email");
    columnsToDisplay.push("PositionName");
    columnsToDisplay.push("MarketID");
    columnsToDisplay.push("MarketName");
    columnsToDisplay.push("OwnerID");
    columnsToDisplay.push("OwnerName");
    columnsToDisplay.push("LoggedIn");
    columnsToDisplay.push("QueriesRun");


    tempObject =
    {
        // id: rptNewUserListing,
        reportTitle:  "New User Listing",
        apiControllerAction:  "/api/PersonnelReport/GetNewUserListing",
        apiType:  "get",
        columnsToDisplay:  columnsToDisplay,
        product:  ''
    }

    return tempObject;

}
// rptStationListing
function getReportFilterArray_StationListing() {

    var arrayFilters = new Array();
    var arrayObject = new Object();
    arrayObject = {
        token:  "Product",
        jsCall:  "getProductList",
        objectName:  "ddlProduct",
        required:  false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "Market",
        jsCall:  "getMarketListByProduct",
        objectName:  "ddlMarket",
        required: false,
        reloadBasedProduct: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "Owner",
        jsCall: "getOwnerListByProduct",
        objectName:  "ddlOwner",
        required: false,
        reloadBasedProduct: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "MediaType",
        jsCall: "getMediaTypeList",
        objectName: "ddlMediaType",
        required: false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_StationListing() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    columnsToDisplay.push("ProductID");
    columnsToDisplay.push("MarketID");
    columnsToDisplay.push("MarketName");
    columnsToDisplay.push("OwnerID");
    columnsToDisplay.push("OwnerName");
    columnsToDisplay.push("StationID");
    columnsToDisplay.push("StationName");
    columnsToDisplay.push("FormatName");
    columnsToDisplay.push("ActiveDate");
    columnsToDisplay.push("DisableDate");
    columnsToDisplay.push("ClientID");

    tempObject =
    {
        // id: rptStationListing,
        reportTitle:  "Station Listing",
        apiControllerAction:  "/api/StationReport/GetStationListing",
        apiType:  "get",
        columnsToDisplay:  columnsToDisplay,
        product:  ''
    }

    return tempObject;

}

// rptTraining
function getReportFilterArray_Training() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token:  "StartDate",
        jsCall:  null,
        objectName:  "dtStartDate",
        required:  true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "EndDate",
        jsCall:  null,
        objectName:  "dtEndDate",
        required:  true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "Market",
        jsCall:  "getMarketListAll",
        objectName:  "ddlMarket",
        required:  false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "Owner",
        jsCall:  "getOwnerList",
        objectName:  "ddlOwner",
        required:  false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_Training() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    columnsToDisplay.push("TrainingDateTimeMarketID");
    columnsToDisplay.push("MarketName");
    columnsToDisplay.push("OwnerName");
    columnsToDisplay.push("PersonnelID");
    columnsToDisplay.push("UserName");
    columnsToDisplay.push("Trainer");
    columnsToDisplay.push("Topic");
    columnsToDisplay.push("Method");
    columnsToDisplay.push("Notes");
    columnsToDisplay.push("DisplayName");

    tempObject =
    {
        // id: rptTraining,
        reportTitle:  "Training",
        apiControllerAction:  "/api/Report/GetTraining",
        apiType:  "get",
        columnsToDisplay:  columnsToDisplay,
        product:  ''
    }

    return tempObject;

}

// rptStationChangeHistory
function getReportFilterArray_StationChangeHistory() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token:  "StartDate",
        jsCall:  null,
        objectName:  "dtStartDate",
        required:  true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "EndDate",
        jsCall:  null,
        objectName:  "dtEndDate",
        required:  true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "Market",
        jsCall:  "getMarketListAll",
        objectName:  "ddlMarket",
        required:  false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "Owner",
        jsCall:  "getOwnerList",
        objectName:  "ddlOwner",
        required:  false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_StationChangeHistory() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    columnsToDisplay.push("ChangeDate");
    columnsToDisplay.push("FullName");
    columnsToDisplay.push("ProductID");
    columnsToDisplay.push("Active");
    columnsToDisplay.push("ChangeTypes");
    columnsToDisplay.push("OwnerName");
    columnsToDisplay.push("FormatName");
    columnsToDisplay.push("IsActive");
    columnsToDisplay.push("MarketName");
    columnsToDisplay.push("BillingNote");
    columnsToDisplay.push("ClientID");


    tempObject =
    {
        // id: rptStationChangeHistory,
        reportTitle:  "Station Change History",
        apiControllerAction:  "/api/StationReport/GetStationChangeHistory",
        apiType:  "get",
        columnsToDisplay:  columnsToDisplay,
        product:  ''
    }

    return tempObject;

}

// rptNationwideRecipents
function getReportFilterArray_NationwideRecipients() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token:  "StartDate",
        jsCall:  null,
        objectName:  "dtStartDate",
        required:  true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "EndDate",
        jsCall:  null,
        objectName:  "dtEndDate",
        required:  true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "Owner",
        jsCall:  "getOwnerList",
        objectName:  "ddlOwner",
        required:  false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_NationwideRecipients() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    columnsToDisplay.push("OwnerGroupID");
    columnsToDisplay.push("OwnerGroupName");
    columnsToDisplay.push("PersonnelID");
    columnsToDisplay.push("Email");
    columnsToDisplay.push("FirstName");
    columnsToDisplay.push("LastName");
    columnsToDisplay.push("FirstNationwideQuery");
    columnsToDisplay.push("NationwideQueryCount");

    tempObject =
    {
        // id: rptNationwideRecipients,
        reportTitle:  "XRay Nationwide Queries",
        apiControllerAction:  "/api/XRAYReport/GetNationwideRecipients",
        apiType:  "get",
        columnsToDisplay:  columnsToDisplay,
        product:  'xry'
    }

    return tempObject;

}

// rptMarketRevenueXRay
function getReportFilterArray_MarketRevenueXRay() {

    var arrayFilters = new Array();
    var arrayObject = new Object();
    arrayObject = new Object();
    arrayObject = {
        token:  "Year",
        jsCall:  "getYearList",
        objectName:  "ddlYear",
        required:  true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token:  "Period",
        objectName:  "ddlPeriod",
        jsCall:  "getPeriodList",
        required:  true
    }
    arrayFilters.push(arrayObject);
 

    arrayObject = {
        token:  "Market",
        jsCall:  "getMarketListAll",
        objectName:  "ddlMarket",
        required:  true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "Owner",
        jsCall:  "getOwnerList",
        objectName:  "ddlOwner",
        required:  false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_MarketRevenueXRay() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    columnsToDisplay.push("RowName");
    columnsToDisplay.push("RevenueClusterMRR");
    columnsToDisplay.push("RevenueClusterXRY");
    columnsToDisplay.push("RevenueClusterDifference");
    columnsToDisplay.push("RevenueMarketMRR");
    columnsToDisplay.push("RevenueMarketXRY");
    columnsToDisplay.push("RevenueMarketDifference");

    tempObject =
    {
        // id: rptMarketRevenueXRay,
        reportTitle:  "MRR / XRay Revenue Comparision",
        apiControllerAction:  "/api/Report/GetMarketRevenueRevenueXRay",
        apiType:  "get",
        columnsToDisplay:  columnsToDisplay,
        product:  ''
    }

    return tempObject;

}

// Active Station
function getReportFilterArray_ActiveStationList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        objectName: "ddlMarket",
        required: false,
        reloadBasedProduct: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        objectName: "ddlOwner",
        required: false,
        reloadBasedProduct: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "MediaType",
        jsCall: "getMediaTypeList",
        objectName: "ddlMediaType",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Product",
        jsCall: "getProductList",
        objectName: "ddlProduct",
        required: false
    }
    arrayFilters.push(arrayObject);
    return arrayFilters;
}
function getReportObject_ActiveStationList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
 


    tempObject =
    {
        // id: rptActiveStationList,
        reportTitle: "Active Stations",
        apiControllerAction: "/api/StationReport/GetActiveStationListing",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'station'
    }

    return tempObject;
}

// Disabled Station
function getReportFilterArray_DisabledStationList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        objectName: "ddlMarket",
        required: false,
        reloadBasedProduct: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        objectName: "ddlOwner",
        required: false,
        reloadBasedProduct: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "MediaType",
        jsCall: "getMediaTypeList",
        objectName: "ddlMediaType",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Product",
        jsCall: "getProductList",
        objectName: "ddlProduct",
        required: false
    }
    arrayFilters.push(arrayObject);
    return arrayFilters;
}
function getReportObject_DisabledStationList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
  

    tempObject =
    {
        // id: rptDisabledStationList,
        reportTitle: "Disabled Stations",
        apiControllerAction: "/api/StationReport/GetDisabledStationListing",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'station'
    }

    return tempObject;
}

// rptStationChanges
function getReportFilterArray_StationChanges() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = new Object();
    arrayObject = {
        token:  "Year",
        jsCall:  "getYearList",
        objectName:  "ddlYear",
        required:  true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token:  "Period",
        objectName:  "ddlPeriod",
        jsCall:  "getPeriodList",
        required:  true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        objectName: "ddlMarket",
        required: false,
        reloadBasedProduct: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        objectName: "ddlOwner",
        required: false,
        reloadBasedProduct: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Product",
        jsCall: "getProductList",
        objectName: "ddlProduct",
        required: true 
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Station",
        jsCall: "getStationListByGeneralFilters",
        objectName: "ddlStation",
        reloadBasedMarket: true,
        reloadBasedOwner: true,
        reloadBasedProduct: true,
        required: false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_StationChanges() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    //columnsToDisplay.push("marketID");
    columnsToDisplay.push("marketName");
    columnsToDisplay.push("marketReleaseDate");
    //columnsToDisplay.push("stationID");
    columnsToDisplay.push("stationFullName");
    columnsToDisplay.push("ownerName");
    columnsToDisplay.push("activityType");
    columnsToDisplay.push("activityDate");
    columnsToDisplay.push("stationAddress");
    //columnsToDisplay.push("stationAddress2");
    //columnsToDisplay.push("stationState");
    //columnsToDisplay.push("stationZIP");
    columnsToDisplay.push("stationComment");

    tempObject =
    {
        // id: rptStationChanges,
        reportTitle: "Station Changes",
        apiControllerAction: "/api/StationReport/GetStationChanges",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'station'
    }

    return tempObject;

}

// rptMRREstimatedStationList
function getReportFilterArray_MRREstimatedStationList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();


    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: new Array('MRR'),
        objectName: "ddlMarket",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: new Array('MRR'),
        objectName: "ddlOwner",
        required: false
    }
    arrayFilters.push(arrayObject);

 

    arrayObject = {
        token: "Station",
        jsCall: "getStationListByGeneralFilters",
        objectName: "ddlStation",
        reloadBasedMarket: true,
        reloadBasedOwner: true,
        required: false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_MRREstimatedStationList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
 

    tempObject =
    {
        // id: rptMRREstimatedStationList,
        reportTitle: "MRR Estimated Station List",
        apiControllerAction: "/api/MRRReport/GetMRREstimatedStationList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'mrr'
    }

    return tempObject;

}

// rptDetailedStationSetup
function getReportFilterArray_DetailedStationSetup() {

    var arrayFilters = new Array();
    var arrayObject = new Object();


    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        objectName: "ddlMarket",
        required: false,
        reloadBasedProduct: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        objectName: "ddlOwner",
        required: false,
        reloadBasedProduct: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Product",
        jsCall: "getProductList",
        objectName: "ddlProduct",
        required: false
    }
    arrayFilters.push(arrayObject);

 

    arrayObject = {
        token: "Station",
        jsCall: "getStationListByGeneralFilters",
        objectName: "ddlStation",
        required: false,
        reloadBasedProduct: true,
        reloadBasedOwner: true,
        reloadBasedMarket: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_DetailedStationSetup() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
 

    tempObject =
    {
        // id: rptDetailedStationSetup,
        reportTitle: "Detailed Station Setup",
        apiControllerAction: "/api/StationReport/GetDetailedStationSetup",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'station'
    }

    return tempObject;

}

// rptMRRStationManagerList
function getReportFilterArray_MRRStationManagerList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();


    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: new Array('MRR'),
        objectName: "ddlMarket",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: new Array('MRR'),
        objectName: "ddlOwner",
        required: false
    }
    arrayFilters.push(arrayObject);



    arrayObject = {
        token: "Station",
        jsCall: "getStationListByGeneralFilters",
        objectName: "ddlStation",
        reloadBasedMarket: true,
        reloadBasedOwner: true,
        required: false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_MRRStationManagerList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
 

    tempObject =
    {
        // id: rptMRRStationManagerList,
        reportTitle: "MRR Station Manager List",
        apiControllerAction: "/api/MRRReport/GetMRRStationManagerList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'mrr'
    }

    return tempObject;

}

function getReportFilterArray_OwnershipGroupList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();


    arrayObject = {
        token: "Product",
        jsCall: "getProductList",
        objectName: "ddlProduct",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "OwnerGroup",
        jsCall: "getOwnerGroupList",
        objectName: "ddlOwnerGroup",
        required: false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_OwnershipGroupList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    columnsToDisplay.push("ownerGroupID");
    columnsToDisplay.push("ownerGroupName");
    columnsToDisplay.push("ownerGroupProductID");
    columnsToDisplay.push("ownerGroupProductActiveDate");
    columnsToDisplay.push("ownerGroupProductDisableDate");
 

    tempObject =
    {
 
        reportTitle: "Ownership Group List",
        apiControllerAction: "/api/OwnerGroupReport/GetOwnershipGroupList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'ownergroup'
    }

    return tempObject;

}

function getReportFilterArray_OwnershipGroupDistributionList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "OwnerGroup",
        jsCall: "getOwnerGroupList",
        objectName: "ddlOwnerGroup",
        required: false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_OwnershipGroupDistributionList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    //columnsToDisplay.push("ownerGroupName");
    //columnsToDisplay.push("recipientName");
    //columnsToDisplay.push("recipientEmail");
    //columnsToDisplay.push("recipientPhone");
    //columnsToDisplay.push("recipientFax");
    //columnsToDisplay.push("recipientMobile");


    tempObject =
    {

        reportTitle: "Ownership Group Distribution List",
        apiControllerAction: "/api/OwnerGroupReport/GetOwnershipGroupDistributionList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'ownergroup'
    }

    return tempObject;

}

function getReportFilterArray_MarketOwnershipGroup() {

    var arrayFilters = new Array();
    var arrayObject = new Object();


    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        objectName: "ddlMarket",
        required: false,
        reloadBasedProduct: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListAll",
        objectName: "ddlMarket",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "OwnerGroup",
        jsCall: "getOwnerGroupList",
        objectName: "ddlOwnerGroup",
        required: false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_MarketOwnershipGroup() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
 

    tempObject =
    {

        reportTitle: "Market Ownership Group",
        apiControllerAction: "/api/OwnerGroupReport/GetMarketOwnershipGroup",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'ownergroup'
    }

    return tempObject;

}

function getReportFilterArray_DetailedOwnerGroupSetup() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "OwnerGroup",
        jsCall: "getOwnerGroupList",
        objectName: "ddlOwnerGroup",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_DetailedOwnerGroupSetup() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    columnsToDisplay.push("ownerGroupName");
    columnsToDisplay.push("ownerName");
    columnsToDisplay.push("productID");
    columnsToDisplay.push("productActive");
    columnsToDisplay.push("productActiveDate");
    columnsToDisplay.push("productDisableDate");
    columnsToDisplay.push("misc");

    tempObject =
    {

        reportTitle: "Detailed Ownership Group Setup",
        apiControllerAction: "/api/OwnerGroupReport/GetDetailedOwnerGroupSetup",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'ownergroup',
        sortable: false
    }

    return tempObject;

}

function getReportFilterArray_MarketSetupMarket() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListAll",
        objectName: "ddlMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_MarketSetupMarket() {

    var tempObject = new Object();
    var columnsToDisplay = new Array();
 
    tempObject =
    {

        reportTitle: "Market Setup - Market",
        apiControllerAction: "/api/MarketReport/GetMarketSetupMarket",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'market',
        sortable: true
    }

    return tempObject;

}


function getReportFilterArray_MarketSetupMarketMRRCategories() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListAll",
        objectName: "ddlMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_MarketSetupMarketMRRCategories() {

    var columnsToDisplay = new Array();
    var tempObject = new Object();


    tempObject =
    {

        reportTitle: "Market Setup - MRR Categories",
        apiControllerAction: "/api/MarketReport/GetMarketSetupMarketMRRCategories",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'market',
        sortable: true
    }

    return tempObject;

}

function getReportFilterArray_MarketSetupMarketMRRReports() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListAll",
        objectName: "ddlMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_MarketSetupMarketMRRReports() {

    var tempObject = new Object();
    var columnsToDisplay = new Array();

    tempObject =
    {

        reportTitle: "Market Setup - MRR Reports",
        apiControllerAction: "/api/MarketReport/GetMarketSetupMarketMRRReports",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'market',
        sortable: true
    }

    return tempObject;

}

function getReportFilterArray_MarketSetupMarketOwnerGroups() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListAll",
        objectName: "ddlMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_MarketSetupMarketOwnerGroups() {

    var tempObject = new Object();
    var columnsToDisplay = new Array();

    tempObject =
    {

        reportTitle: "Market Setup - Owner Groups",
        apiControllerAction: "/api/MarketReport/GetMarketSetupMarketOwnerGroups",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'market',
        sortable: true
    }

    return tempObject;

}

function getReportFilterArray_MarketSetupMarketProducts() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListAll",
        objectName: "ddlMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_MarketSetupMarketProducts() {

    var tempObject = new Object();
    var columnsToDisplay = new Array();

    tempObject =
    {

        reportTitle: "Market Setup - Products",
        apiControllerAction: "/api/MarketReport/GetMarketSetupMarketProducts",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'market',
        sortable: true
    }

    return tempObject;

}

function getReportFilterArray_MarketSetupMarketStations() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListAll",
        objectName: "ddlMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_MarketSetupMarketStations() {

    var tempObject = new Object();
    var columnsToDisplay = new Array();

    tempObject =
    {

        reportTitle: "Market Setup - Stations",
        apiControllerAction: "/api/MarketReport/GetMarketSetupMarketStations",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'market',
        sortable: true
    }

    return tempObject;

}

function getReportFilterArray_MarketSetupMarketUsers() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListAll",
        objectName: "ddlMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_MarketSetupMarketUsers() {

    var tempObject = new Object();
    var columnsToDisplay = new Array();

    tempObject =
    {

        reportTitle: "Market Setup - Users",
        apiControllerAction: "/api/MarketReport/GetMarketSetupMarketUsers",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'market',
        sortable: true
    }

    return tempObject;

}

function getReportFilterArray_MarketSetupMarketVirtualGroups() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListAll",
        objectName: "ddlMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_MarketSetupMarketVirtualGroups() {

    var tempObject = new Object();
    var columnsToDisplay = new Array();

    tempObject =
    {

        reportTitle: "Market Setup - Market Virtual Groups",
        apiControllerAction: "/api/MarketReport/GetMarketSetupMarketVirtualGroups",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'market',
        sortable: true
    }

    return tempObject;

}

function getReportFilterArray_PersonnelContactList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        objectName: "ddlMarket",
        required: false,
        reloadBasedProduct: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        objectName: "ddlOwner",
        required: false,
        reloadBasedProduct: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Station",
        jsCall: "getStationListByGeneralFilters",
        objectName: "ddlStation",
        reloadBasedMarket: true,
        reloadBasedOwner: true,
        reloadBasedProduct: true,
        required: false
    }
    arrayFilters.push(arrayObject);

 

    arrayObject = {
        token: "Product",
        jsCall: "getProductList",
        objectName: "ddlProduct",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "MediaType",
        jsCall: "getMediaTypeList",
        objectName: "ddlMediaType",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Personnel",
        jsCall: null,
        objectName: "hidPersonnel",
        required: false
    }
    arrayFilters.push(arrayObject);
    return arrayFilters;
}
function getReportObject_PersonnelContactList() {

    var tempObject = new Object();
    var columnsToDisplay = new Array();

    tempObject =
    {

        reportTitle: "Personnel - Contact List",
        apiControllerAction: "/api/PersonnelReport/GetPersonnelContactList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'personnel',
        sortable: true
    }

    return tempObject;

}


function getReportFilterArray_PersonnelRecipientList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        objectName: "ddlMarket",
        required: false,
        reloadBasedProduct: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        objectName: "ddlOwner",
        required: false,
        reloadBasedProduct: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Station",
        jsCall: "getStationList",
        objectName: "ddlStation",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Product",
        jsCall: "getProductList",
        objectName: "ddlProduct",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "MediaType",
        jsCall: "getMediaTypeList",
        objectName: "ddlMediaType",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Personnel",
        jsCall: null,
        objectName: "hidPersonnel",
        required: false
    }
    arrayFilters.push(arrayObject);
    return arrayFilters;
}
function getReportObject_PersonnelRecipientList() {

    var tempObject = new Object();
    var columnsToDisplay = new Array();

    tempObject =
    {

        reportTitle: "Personnel - Recipient List",
        apiControllerAction: "/api/PersonnelReport/GetPersonnelRecipientList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'personnel',
        sortable: true
    }

    return tempObject;

}

function getReportFilterArray_WebUserList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        objectName: "ddlMarket",
        required: false,
        reloadBasedProduct: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        objectName: "ddlOwner",
        required: false,
        reloadBasedProduct: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "OwnerGroup",
        jsCall: "getOwnerGroupList",
        objectName: "ddlOwnerGroup",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Station",
        jsCall: "getStationList",
        objectName: "ddlStation",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Product",
        jsCall: "getProductList",
        objectName: "ddlProduct",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "MediaType",
        jsCall: "getMediaTypeList",
        objectName: "ddlMediaType",
        required: false
    }
    arrayFilters.push(arrayObject);


    return arrayFilters;
}
function getReportObject_WebUserList() {

    var tempObject = new Object();
    var columnsToDisplay = new Array();

    tempObject =
    {

        reportTitle: "Personnel - Web User List",
        apiControllerAction: "/api/PersonnelReport/GetWebUserList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'personnel',
        sortable: true
    }

    return tempObject;

}

function getReportFilterArray_MRRNoPrimaryContactList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListAll",
        objectName: "ddlMarket",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerList",
        objectName: "ddlOwner",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "OwnerGroup",
        jsCall: "getOwnerGroupList",
        objectName: "ddlOwnerGroup",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Station",
        jsCall: "getStationList",
        objectName: "ddlStation",
        required: false
    }
    arrayFilters.push(arrayObject);


    arrayObject = {
        token: "MediaType",
        jsCall: "getMediaTypeList",
        objectName: "ddlMediaType",
        required: false
    }
    arrayFilters.push(arrayObject);


    return arrayFilters;
}
function getReportObject_MRRNoPrimaryContactList() {

    var tempObject = new Object();
    var columnsToDisplay = new Array();

    tempObject =
    {

        reportTitle: "Market Revenue - Missing Primary Contact",
        apiControllerAction: "/api/MRRReport/GetNoPrimaryContactList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'mrr',
        sortable: true
    }

    return tempObject;

}

function getReportFilterArray_MarketReleaseList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "MediaType",
        jsCall: "getMediaTypeList",
        objectName: "ddlMediaType",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Product",
        jsCall: "getProductList",
        objectName: "ddlProduct",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "Year",
        jsCall:  "getYearList",
        objectName:  "ddlYear",
        required:  true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token:  "Period",
        objectName:  "ddlPeriod",
        jsCall:  "getPeriodList",
        required:  true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_MarketReleaseList() {

    var tempObject = new Object();
    var columnsToDisplay = new Array();

    tempObject =
    {

        reportTitle: "Market Release List",
        apiControllerAction: "/api/MarketReport/GetMarketReleaseList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'market',
        sortable: true
    }

    return tempObject;

}


function getReportFilterArray_MRRMarketRelease() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "MediaType",
        jsCall: "getMediaTypeList",
        objectName: "ddlMediaType",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Year",
        jsCall: "getYearList",
        objectName: "ddlYear",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Period",
        objectName: "ddlPeriod",
        jsCall: "getPeriodList",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_MRRMarketRelease() {

    var tempObject = new Object();
    var columnsToDisplay = new Array();

    tempObject =
    {

        reportTitle: "MRR Market Release",
        apiControllerAction: "/api/MRRReport/GetMarketRelease",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'mrr',
        sortable: true
    }

    return tempObject;

}

function getReportFilterArray_MRRMarketStationRelease() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['MRR'],
        objectName: "ddlMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Year",
        jsCall: "getYearList",
        objectName: "ddlYear",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Period",
        objectName: "ddlPeriod",
        jsCall: "getPeriodList",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_MRRMarketStationRelease() {

    var tempObject = new Object();
    var columnsToDisplay = new Array();

    tempObject =
    {

        reportTitle: "MRR Market Station Release",
        apiControllerAction: "/api/MRRReport/GetMarketRelease",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'mrr',
        sortable: true
    }

    return tempObject;

}

function getReportFilterArray_XRYMarketRelease() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "MediaType",
        jsCall: "getMediaTypeList",
        objectName: "ddlMediaType",
        required: true
    }
    arrayFilters.push(arrayObject);


    arrayObject = {
        token: "Year",
        jsCall: "getYearList",
        objectName: "ddlYear",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Period",
        objectName: "ddlPeriod",
        jsCall: "getPeriodList",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_XRYMarketRelease() {

    var tempObject = new Object();
    var columnsToDisplay = new Array();

    tempObject =
    {

        reportTitle: "XRAY Market Release",
        apiControllerAction: "/api/XRAYReport/GetMarketRelease",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'xry',
        sortable: true
    }

    return tempObject;

}

function getReportFilterArray_XRYMarketStationRelease() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['XRY'],
        objectName: "ddlMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Year",
        jsCall: "getYearList",
        objectName: "ddlYear",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Period",
        objectName: "ddlPeriod",
        jsCall: "getPeriodList",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_XRYMarketStationRelease() {

    var tempObject = new Object();
    var columnsToDisplay = new Array();

    tempObject =
    {

        reportTitle: "XRAY Market Station Release",
        apiControllerAction: "/api/XRAYReport/GetMarketRelease",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'xry',
        sortable: true
    }

    return tempObject;

}

function getReportFilterArray_TVBMarketRelease() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Year",
        jsCall: "getYearList",
        objectName: "ddlYear",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Period",
        objectName: "ddlPeriod",
        jsCall: "getPeriodList",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_TVBMarketRelease() {

    var tempObject = new Object();
    var columnsToDisplay = new Array();

    tempObject =
    {

        reportTitle: "TVB Market Release",
        apiControllerAction: "/api/TVBReport/GetMarketRelease",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'tvb',
        sortable: true
    }

    return tempObject;

}

function getReportFilterArray_TVBMarketStationRelease() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['TVB'],
        objectName: "ddlMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Year",
        jsCall: "getYearList",
        objectName: "ddlYear",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Period",
        objectName: "ddlPeriod",
        jsCall: "getPeriodList",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_TVBMarketStationRelease() {

    var tempObject = new Object();
    var columnsToDisplay = new Array();

    tempObject =
    {

        reportTitle: "TVB Market Station Release",
        apiControllerAction: "/api/TVBReport/GetMarketRelease",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'tvb',
        sortable: true
    }

    return tempObject;

}


 
function getReportFilterArray_FeatureImplementationList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    return arrayFilters;
}
function getReportObject_FeatureImplementationList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();

    tempObject =
    {
        reportTitle: "Media Feature Implementation List",
        apiControllerAction: "/api/Feature/GetFeatureImplementationList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'misc'
    }

    return tempObject;
}

function getReportFilterArray_TVBMRRCompare() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token:  "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['MRR'],
        objectName:  "ddlOwner",
        required:  false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['MRR'],
        objectName: "ddlMarket",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Year",
        jsCall: "getYearList",
        objectName: "ddlYear",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Period",
        objectName: "ddlPeriod",
        jsCall: "getPeriodListQuarters",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_TVBMRRCompare() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    columnsToDisplay.push("Station");
    columnsToDisplay.push("Affiliation");
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Owner");
    columnsToDisplay.push("Period");
    columnsToDisplay.push("Local Non Political MRR");
    columnsToDisplay.push("Local Non Political TVB");
    columnsToDisplay.push("Local Non Political Difference");
    columnsToDisplay.push("National Non Political MRR");
    columnsToDisplay.push("National Non Political TVB");
    columnsToDisplay.push("National Non Political Difference");
    columnsToDisplay.push("Total Non Political MRR");
    columnsToDisplay.push("Total Non Political TVB");
    columnsToDisplay.push("Total Non Political Difference");
    columnsToDisplay.push("Local Political MRR");
    columnsToDisplay.push("Local Political TVB");
    columnsToDisplay.push("Local Political Difference");
    columnsToDisplay.push("National Political MRR");
    columnsToDisplay.push("National Political TVB");
    columnsToDisplay.push("National Political Difference");
    columnsToDisplay.push("Total Political MRR");
    columnsToDisplay.push("Total Political TVB");
    columnsToDisplay.push("Total Political Difference");

    tempObject =
    {
        reportTitle: "TVB / MRR Comparison",
        apiControllerAction: "/api/TVBReport/GetMRRTVBCompare",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'tvb'
    }

    return tempObject;
}

function getReportFilterArray_MRRReportList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

 

    return arrayFilters;
}
function getReportObject_MRRReportList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "MRR Report List",
        apiControllerAction: "/api/MRRReport/GetMRRReports",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'mrr'
    }

    return tempObject;
}

function getReportFilterArray_MRRMarketReportList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();



    return arrayFilters;
}
function getReportObject_MRRMarketReportList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "MRR Market Report List",
        apiControllerAction: "/api/MRRReport/GetMRRReportsByMarket",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'mrr'
    }

    return tempObject;
}

function getReportFilterArray_MRROwnerReportList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    return arrayFilters;
}
function getReportObject_MRROwnerReportList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "MRR Owner Report List",
        apiControllerAction: "/api/MRRReport/GetMRROwnerGroupReport",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'mrr'
    }

    return tempObject;
}

function getReportFilterArray_TVBRepBillingStationList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    return arrayFilters;
}
function getReportObject_TVBRepBillingStationList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "TVB Rep Billing Station List",
        apiControllerAction: "/api/TVBReport/GetTVBRepBillingStationList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'tvb'
    }

    return tempObject;
}

function getReportFilterArray_TVBTimeSalesStationList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    return arrayFilters;
}
function getReportObject_TVBTimeSalesStationList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "TVB Time Sales Station List",
        apiControllerAction: "/api/TVBReport/GetTVBTimeSalesStationList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'tvb'
    }

    return tempObject;
}

function getReportFilterArray_TVBMarketNielsenRankingList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    return arrayFilters;
}
function getReportObject_TVBMarketNielsenRankingList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "TVB Market Nielsen Ranking List",
        apiControllerAction: "/api/TVBReport/GetTVBMarketNielsenRankingList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'tvb'
    }

    return tempObject;
}

function getReportFilterArray_GeneralStationData() {

    var arrayFilters = new Array();
    var arrayObject = new Object();
 
    return arrayFilters;
}
function getReportObject_GeneralStationData() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "General Station Data",
        apiControllerAction: "/api/Report/GetGeneralStationData",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'station'
    }

    return tempObject;
}

function getReportFilterArray_OwnerStationGrid() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    return arrayFilters;
}
function getReportObject_OwnerStationGrid() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "Owner Station Grid",
        apiControllerAction: "/api/Report/GetOwnerStationGrid",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'station'
    }

    return tempObject;
}

function getReportFilterArray_APIAccessList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    return arrayFilters;
}
function getReportObject_APIAccessList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "API Access List",
        apiControllerAction: "/api/APIAccess/GetAPIAccessList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'tech'
    }

    return tempObject;
}

function getReportFilterArray_APIActivityList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Personnel",
        jsCall: null,
        objectName: "hidPersonnel",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_APIActivityList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "API Activity List",
        apiControllerAction: "/api/APIAccess/GetAPIActivityList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'tech'
    }

    return tempObject;
}

function getReportFilterArray_DMAMRRCategoryMappingList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "ParentMarket",
        jsCall: 'getParentMarketListDMA',
        objectName: "ddlParentMarket",
        required: false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_DMAMRRCategoryMappingList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    columnsToDisplay.push("parent Market");
    columnsToDisplay.push("DMA Category");
    columnsToDisplay.push("market");
    columnsToDisplay.push("MRR Category");

    tempObject =
    {
        reportTitle: "DMA / MRR Category Mapping List",
        apiControllerAction: "/api/DMAReport/GetDMAMRRCategoryMappingList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'dma'
    }

    return tempObject;
}

function getReportFilterArray_CorporateGroupUserList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Owner",
        jsCall: 'getOwnerList',
        objectName: "ddlOwner",
        required: false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_CorporateGroupUserList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
 

    tempObject =
    {
        reportTitle: "Corporate / Group User List",
        apiControllerAction: "/api/Report/GetCorporateAndGroupUserList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'misc'
    }

    return tempObject;
}

function getReportFilterArray_KeywordIndustryList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

 

    return arrayFilters;
}
function getReportObject_KeywordIndustryList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "Industry / Sub-Industry Keyword List",
        apiControllerAction: "/api/XRAYReport/GetKeywordList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'xry'
    }

    return tempObject;
}


function getReportFilterArray_AdminDeviceList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();



    return arrayFilters;
}
function getReportObject_AdminDeviceList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "Admin Device List",
        apiControllerAction: "/api/XRAYReport/GetAdminDeviceList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'tech'
    }

    return tempObject;
}


function getReportFilterArray_ParentMarketCategoryTemplateList() {

    var arrayFilters = new Array();
 
    var arrayObject = new Object();

    arrayObject = {
        token: "ParentMarketCategoryTemplate",
        jsCall: "getParentMarketCategoryTemplateHeaders",
        objectName: "ddlParentMarketCategoryTemplate",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_ParentMarketCategoryTemplateList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
 

    tempObject =
    {
        reportTitle: "DMA Market Category Template List",
        apiControllerAction: "/api/ParentMarketCategoryTemplate/GetParentMarketCategoryTemplateByTemplateId",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'dma'
    }

    return tempObject;
}

function getReportFilterArray_SAMLOwnerList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();



    return arrayFilters;
}
function getReportObject_SAMLOwnerList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "SAML Owner List",
        apiControllerAction: "/api/Report/GetSAMLOwnerList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'tech'
    }

    return tempObject;
}

function getReportFilterArray_SAMLUserExceptionList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();



    return arrayFilters;
}
function getReportObject_SAMLUserExceptionList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "SAML User Exception List",
        apiControllerAction: "/api/Report/GetSAMLUserExceptionList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'tech'
    }

    return tempObject;
}


function getReportFilterArray_AdvertiserRevenueInWrongMarket() {

    var arrayFilters = new Array();
    var arrayObject = new Object();



    return arrayFilters;
}
function getReportObject_AdvertiserRevenueInWrongMarket() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "Advertiser Revenue in Wrong Market",
        apiControllerAction: "/api/XRAYReport/GetAdvertiserRevenueInWrongMarketList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'xry'
    }

    return tempObject;
}
 

function getReportFilterArray_AgencyRevenueInWrongMarket() {

    var arrayFilters = new Array();
    var arrayObject = new Object();



    return arrayFilters;
}
function getReportObject_AgencyRevenueInWrongMarket() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "Agency Revenue in Wrong Market",
        apiControllerAction: "/api/XRAYReport/GetAgencyRevenueInWrongMarketList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'xry'
    }

    return tempObject;
}

function getReportFilterArray_DisabledUserAccountExecutive() {

    var arrayFilters = new Array();
    var arrayObject = new Object();



    return arrayFilters;
}
function getReportObject_DisabledUserAccountExecutive() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "Disabled User AE List",
        apiControllerAction: "/api/XRAYReport/GetDisabledUserAccountExecutiveList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'xry'
    }

    return tempObject;
}
 
function getReportFilterArray_DuplicateUser() {

    var arrayFilters = new Array();
    var arrayObject = new Object();



    return arrayFilters;
}
function getReportObject_DuplicateUser() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "Duplicate User List",
        apiControllerAction: "/api/PersonnelReport/GetDuplicateUserList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'personnel'
    }

    return tempObject;
}

 
function getReportFilterArray_MRRWithoutManager() {

    var arrayFilters = new Array();
    var arrayObject = new Object();
    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['MRR'],
        objectName: "ddlMarket",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['MRR'],
        objectName: "ddlOwner",
        required: false
    }
    arrayFilters.push(arrayObject);


    return arrayFilters;
}
function getReportObject_MRRWithoutManager() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "MRR Missing Manager List",
        apiControllerAction: "/api/MRRReport/GetMRRWithoutManagerList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'mrr'
    }

    return tempObject;
}
 
function getReportFilterArray_MRRUserMissing() {

    var arrayFilters = new Array();
    var arrayObject = new Object();



    return arrayFilters;
}
function getReportObject_MRRUserMissing() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "MRR User Missing Report List",
        apiControllerAction: "/api/MRRReport/GetMRRUserMissingReportList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'mrr'
    }

    return tempObject;
}

function getReportFilterArray_OwnerGroupReportingEntityIssues() {

    var arrayFilters = new Array();
    var arrayObject = new Object();



    return arrayFilters;
}
function getReportObject_OwnerGroupReportingEntityIssues() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "Owner Group Station Issue List",
        apiControllerAction: "/api/OwnerGroupReport/GetOwnerGroupReportingEntityIssuesList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'ownergroup'
    }

    return tempObject;
}

/*
reportName.push("rptOwnerGroupReportingEntityIssues");*/

function getReportFilterArray_MultipleOwnersPerUser() {

    var arrayFilters = new Array();
    var arrayObject = new Object();



    return arrayFilters;
}
function getReportObject_MultipleOwnersPerUser() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "Multiple Owners Per User List",
        apiControllerAction: "/api/PersonnelReport/GetMultipleOwnersPerUserList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'personnel'
    }

    return tempObject;
}
 
function getReportFilterArray_UserMissingGroup() {

    var arrayFilters = new Array();
    var arrayObject = new Object();



    return arrayFilters;
}
function getReportObject_UserMissingGroup()
{

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "User Missing Group Report List",
        apiControllerAction: "/api/PersonnelReport/GetUserMissingGroupReportList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'personnel'
    }

    return tempObject;
} 

function getReportFilterArray_UsersAssignedReportsInvalidOwner() {

    var arrayFilters = new Array();
    var arrayObject = new Object();



    return arrayFilters;
}
function getReportObject_UsersAssignedReportsInvalidOwner() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "User Assigned Invalid Owner Report List",
        apiControllerAction: "/api/PersonnelReport/GetUsersAssignedReportsInvalidOwnerList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'personnel'
    }

    return tempObject;
}

function getReportFilterArray_UsersAssignedInvalidMarket() {

    var arrayFilters = new Array();
    var arrayObject = new Object();



    return arrayFilters;
}
function getReportObject_UsersAssignedInvalidMarket() {

    var tempObject = new Object();

    columnsToDisplay = new Array();

    tempObject =
    {
        reportTitle: "User Assigned Invalid Market Report List",
        apiControllerAction: "/api/PersonnelReport/GetUsersAssignedInvalidMarketReportList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'personnel'
    }

    return tempObject;
} 

function getReportFilterArray_UsersWithDisabledStationAssigned() {

    var arrayFilters = new Array();
    var arrayObject = new Object();



    return arrayFilters;
}
function getReportObject_UsersWithDisabledStationAssigned() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "Users Assigned to Disabled Station List",
        apiControllerAction: "/api/PersonnelReport/GetUsersWithDisabledStationAssignedList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'personnel'
    }

    return tempObject;
}


function getReportFilterArray_XRAYImportScript() {

    var arrayFilters = new Array();
    var arrayObject = new Object();



    return arrayFilters;
}
function getReportObject_XRAYImportScript() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "XRAY Import User Script List",
        apiControllerAction: "/api/XRAYReport/GetXRAYImportScriptList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'xry'
    }

    return tempObject;
}
 
function getReportFilterArray_XRYAccountAndRevenueAssignment() {

    var arrayFilters = new Array();
    var arrayObject = new Object();



    return arrayFilters;
}
function getReportObject_XRYAccountAndRevenueAssignment() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "Account + Revenue Assignment List",
        apiControllerAction: "/api/XRAYReport/GetXRYAccountAndRevenueAssignmentList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'xry'
    }

    return tempObject;
}

function getReportFilterArray_MRRReportMatrix() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['MRR'],
        objectName: "ddlMarket",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "MrrReport",
        jsCall: "getMRRReportList",
        objectName: "ddlMrrReport",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "MrrCanConsolidatePeriods",
        objectName: "chkMrrCanConsolidatePeriods",
        jsCall: null,
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "MrrCanConsolidateStations",
        objectName: "chkMrrCanConsolidateStations",
        jsCall: null,
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "MrrGroupwide",
        objectName: "chkMrrGroupwide",
        jsCall: null,
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "MrrMarketwide",
        objectName: "chkMrrMarketwide",
        jsCall: null,
        required: false
    }
    arrayFilters.push(arrayObject);
    return arrayFilters;
}
function getReportObject_MRRReportMatrix() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "MRR Report Matrix",
        apiControllerAction: "/api/MRRReport/GetMRRReportMatrixList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'mrr'
    }

    return tempObject;
}
// Market Product Station Summary
function getReportFilterArray_MarketProductStationSummary() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    return arrayFilters;
}
function getReportObject_MarketProductStationSummary() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    columnsToDisplay.push("market");
    columnsToDisplay.push("primary market");
    columnsToDisplay.push("product");
    columnsToDisplay.push("active stations");
 

    tempObject =
    {
        reportTitle: "Market Product Station Summary",
        apiControllerAction: "/api/MarketReport/GetMarketProductStationSummary",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'market'
    }

    return tempObject;
}

function getReportFilterArray_AsyncJobQueueStatus() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = new Object();
    arrayObject = {
        token: "AsyncJobStatus",
        objectName: "ddlAsyncJobStatus",
        jsCall: "getAsyncJobStatusList",
        required:  false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "AsyncJobType",
        objectName: "ddlAsyncJobType",
        jsCall: "getAsyncJobTypeList",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "AsyncJobDaysBack",
        objectName: "ddlAsyncJobDaysBack",
        jsCall: "getAsyncJobDaysBackList",
        required: false
    }
    arrayFilters.push(arrayObject);
    return arrayFilters;
}
function getReportObject_AsyncJobQueueStatus() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "Async Queue Status",
        apiControllerAction: "/api/Async/GetAsyncJobQueueStatusList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'misc',
        autoUpdate: true
    }

    return tempObject;
}

//rptDisabledAEList

function getReportFilterArray_DisabledAEList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

 
    arrayObject = new Object();
    arrayObject = {
        token: "AsyncJobDaysBack",
        objectName: "ddlAsyncJobDaysBack",
        jsCall: "getDaysBackList",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_DisabledAEList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "AE Disabled List",
        apiControllerAction: "/api/AccountExecutiveReport/GetDisabledAEList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'xry',
        autoUpdate: false
    }

    return tempObject;
}

function getReportFilterArray_MRRRevenueWithoutSubmitterList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();


    arrayObject = new Object();
    arrayObject = {
        token: "AsyncJobDaysBack",
        objectName: "ddlAsyncJobDaysBack",
        jsCall: "getDaysBackList",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_MRRRevenueWithoutSubmitterList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "MRR Revenue without Submitter",
        apiControllerAction: "/api/MRRReport/GetMRRRevenueWithoutSubmitterList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'mrr',
        autoUpdate: false
    }

    return tempObject;
}

function getReportFilterArray_MRRRevenueOutOfBalanceList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = new Object();
    arrayObject = {
        token:  "Year",
        jsCall:  "getYearList",
        objectName:  "ddlYear",
        required:  true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token:  "Period",
        objectName:  "ddlPeriod",
        jsCall:  "getPeriodList",
        required:  true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_MRRRevenueOutOfBalanceList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "MRR Revenue Out of Balance",
        apiControllerAction: "/api/MRRReport/GetMRRRevenueOutOfBalanceList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'mrr',
        autoUpdate: false
    }

    return tempObject;
}

function getReportFilterArray_MRRRevenueEntryMissingList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = new Object();
    arrayObject = {
        token: "Year",
        jsCall: "getYearList",
        objectName: "ddlYear",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Period",
        objectName: "ddlPeriod",
        jsCall: "getPeriodList",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_MRRRevenueEntryMissingList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "MRR Revenue Missing",
        apiControllerAction: "/api/MRRReport/GetMRRRevenueEntryMissingList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'mrr',
        autoUpdate: false
    }

    return tempObject;
}
function getReportFilterArray_AdvertiserAgencyRevenueList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = new Object();
    arrayObject = {
        token: "FromYear",
        jsCall: "getYearList",
        objectName: "ddlFromYear",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "ToYear",
        jsCall: "getYearList",
        objectName: "ddlToYear",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Market",
        objectName: "ddlMarket",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['XRY'],
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_AdvertiserAgencyRevenueList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "XRay Advertiser / Agency Revenue",
        apiControllerAction: "/api/XRAYReport/GetAdvertiserAgencyRevenueList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'xry',
        autoUpdate: false
    }

    return tempObject;
}
 
function getReportFilterArray_MRRMarketDistributionList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = new Object();
    arrayObject = {
        token: "Market",
        objectName: "ddlMarket",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['MRR'],
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Owner",
        objectName: "ddlOwner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['MRR'],
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Station",
        objectName: "ddlStation",
        jsCall: "getMRRStationList",
        required: false
    }
    arrayFilters.push(arrayObject);


    arrayObject = new Object();
    arrayObject = {
        token: "MediaType",
        objectName: "ddlMediaType",
        jsCall: "getMediaTypeList",
        required: false
    }
    arrayFilters.push(arrayObject);
    return arrayFilters;
}
function getReportObject_MRRMarketDistributionList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "MRR - Market Distribution List",
        apiControllerAction: "/api/MRRReport/GetMRRMarketDistributionList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'mrr',
        autoUpdate: false
    }

    return tempObject;
}

//reportName.push("rptOwnershipProductList");
function getReportFilterArray_OwnershipProductList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = new Object();
    arrayObject = {
        token: "ParentOwner",
        objectName: "ddlParentOwner",
        jsCall: "getParentOwnerList",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Owner",
        objectName: "ddlOwner",
        jsCall: "getOwnerList",
        required: false
    }
    arrayFilters.push(arrayObject);

   
    return arrayFilters;
}
function getReportObject_OwnershipProductList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "Owner Product List",
        apiControllerAction: "/api/OwnerReport/GetOwnerProductList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'owner',
        autoUpdate: false
    }

    return tempObject;
}

function getReportFilterArray_EmailStatusList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = new Object();
    arrayObject = {
        token: "EmailStatus",
        objectName: "ddlEmailStatus",
        jsCall: "getEmailStatusList",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "EmailDaysBack",
        objectName: "ddlEmailDaysBack",
        jsCall: "getEmailDaysBackList",
        required: false
    }
    arrayFilters.push(arrayObject);


    return arrayFilters;
}
function getReportObject_EmailStatusList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "Email Status",
        apiControllerAction: "/api/Email/GetEmailStatus",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'tech',
        autoUpdate: false
    }

    return tempObject;
}
//rptMRRUploadTemplateByOwner
function getReportFilterArray_MRRUploadTemplateByOwner() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = new Object();
    arrayObject = {
        token: "Owner",
        objectName: "ddlOwner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['MRR'],
        required: true
    }
    arrayFilters.push(arrayObject);


    return arrayFilters;
}
function getReportObject_MRRUploadTemplateByOwner() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "MRR Upload Category Template",
        apiControllerAction: "/api/MRRReport/GetMRRUploadTemplateByOwner",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'mrr',
        autoUpdate: false
    }

    return tempObject;
}

function getReportFilterArray_MRRUploadTemplateByOwnerWithRevenue() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = new Object();
    arrayObject = {
        token: "Owner",
        objectName: "ddlOwner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['MRR'],
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token:  "Year",
        jsCall:  "getYearList",
        objectName:  "ddlYear",
        required:  true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token:  "Period",
        objectName:  "ddlPeriod",
        jsCall:  "getPeriodList",
        required:  true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_MRRUploadTemplateByOwnerWithRevenue() {

    var tempObject = new Object();

    columnsToDisplay = new Array();

    bLongQuery = true;

    tempObject =
    {
        reportTitle: "MRR Upload Category Template - With Revenue",
        apiControllerAction: "/api/MRRReport/GetMRRUploadTemplateByOwnerWithRevenue",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'mrr',
        autoUpdate: false
    }

    return tempObject;
}

function getReportFilterArray_MRRMarketRevisionHistory() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        objectName: "ddlMarket",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['MRR'],
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "FromYearPeriod",
        jsCall: "getPeriodList_YYYYMM",
        objectName: "ddlFromYYYYMM",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "ToYearPeriod",
        jsCall: "getPeriodList_YYYYMM",
        objectName: "ddlToYYYYMM",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_MRRMarketRevisionHistory() {

    var tempObject = new Object();

    columnsToDisplay = new Array();

    bLongQuery = true;

    tempObject =
    {
        reportTitle: "MRR Market Revision History",
        apiControllerAction: "/api/MRRReport/GetMarketRevisionHistoryReport",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'mrr',
        autoUpdate: false
    }

    return tempObject;
}

function getReportFilterArray_MRRNationwideTVByAffiliation() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "MediaType",
        objectName: "ddlMediaType",
        jsCall: "getMediaTypeListByType",
        jsCallParameters: ["television"],
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Year",
        jsCall: "getYearList",
        objectName: "ddlYear",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Period",
        objectName: "ddlPeriod",
        jsCall: "getPeriodList",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_MRRNationwideTVByAffiliation() {

    var tempObject = new Object();

    columnsToDisplay = new Array();

    bLongQuery = true;

    tempObject =
    {
        reportTitle: "MRR Nationwide TV By Affiliation",
        apiControllerAction: "/api/MRRReport/GetNationwideRevenueByAffiliationReport",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'mrr',
        autoUpdate: false
    }

    return tempObject;
}

function getReportFilterArray_MRRNationwideTVByRegion() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "MediaType",
        objectName: "ddlMediaType",
        jsCall: "getMediaTypeListByType",
        jsCallParameters: ["television"],
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Year",
        jsCall: "getYearList",
        objectName: "ddlYear",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Period",
        objectName: "ddlPeriod",
        jsCall: "getPeriodList",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_MRRNationwideTVByRegion() {

    var tempObject = new Object();

    columnsToDisplay = new Array();

    bLongQuery = true;

    tempObject =
    {
        reportTitle: "MRR Nationwide TV By Region",
        apiControllerAction: "/api/MRRReport/GetNationwideRevenueByRegionReport",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'mrr',
        autoUpdate: false
    }

    return tempObject;
}

function getReportFilterArray_MRRNationwideTVBySize() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "MediaType",
        objectName: "ddlMediaType",
        jsCall: "getMediaTypeListByType",
        jsCallParameters: ["television"],
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Year",
        jsCall: "getYearList",
        objectName: "ddlYear",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Period",
        objectName: "ddlPeriod",
        jsCall: "getPeriodList",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_MRRNationwideTVBySize() {

    var tempObject = new Object();

    columnsToDisplay = new Array();

    bLongQuery = true;

    tempObject =
    {
        reportTitle: "MRR Nationwide TV By Size",
        apiControllerAction: "/api/MRRReport/GetNationwideRevenueBySizeReport",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'mrr',
        autoUpdate: false
    }

    return tempObject;
}

function getReportFilterArray_MRRNationwideRadioByFormat() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "MediaType",
        objectName: "ddlMediaType",
        jsCall: "getMediaTypeListByType",
        jsCallParameters: ["radio"],
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Year",
        jsCall: "getYearList",
        objectName: "ddlYear",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Period",
        objectName: "ddlPeriod",
        jsCall: "getPeriodList",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_MRRNationwideRadioByFormat() {

    var tempObject = new Object();

    columnsToDisplay = new Array();

    bLongQuery = true;

    tempObject =
    {
        reportTitle: "MRR Nationwide Radio By Format",
        apiControllerAction: "/api/MRRReport/GetNationwideRevenueByFormatReport",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'mrr',
        autoUpdate: false
    }

    return tempObject;
}

function getReportFilterArray_MRRNationwideRadioByFormat() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "MediaType",
        objectName: "ddlMediaType",
        jsCall: "getMediaTypeListByType",
        jsCallParameters: ["radio"],
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Year",
        jsCall: "getYearList",
        objectName: "ddlYear",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Period",
        objectName: "ddlPeriod",
        jsCall: "getPeriodList",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_MRRNationwideRadioByFormat() {

    var tempObject = new Object();

    columnsToDisplay = new Array();

    bLongQuery = true;

    tempObject =
    {
        reportTitle: "MRR Nationwide Radio By Format",
        apiControllerAction: "/api/MRRReport/GetNationwideRevenueByFormatReport",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'mrr',
        autoUpdate: false
    }

    return tempObject;
}

function getReportFilterArray_MRRNationwideRadioByRegion() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "MediaType",
        objectName: "ddlMediaType",
        jsCall: "getMediaTypeListByType",
        jsCallParameters: ["radio"],
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Year",
        jsCall: "getYearList",
        objectName: "ddlYear",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Period",
        objectName: "ddlPeriod",
        jsCall: "getPeriodList",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_MRRNationwideRadioByRegion() {

    var tempObject = new Object();

    columnsToDisplay = new Array();

    bLongQuery = true;

    tempObject =
    {
        reportTitle: "MRR Nationwide Radio By Region",
        apiControllerAction: "/api/MRRReport/GetNationwideRevenueByRegionReport",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'mrr',
        autoUpdate: false
    }

    return tempObject;
}

function getReportFilterArray_MRRNationwideRadioBySize() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "MediaType",
        objectName: "ddlMediaType",
        jsCall: "getMediaTypeListByType",
        jsCallParameters: ["radio"],
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Year",
        jsCall: "getYearList",
        objectName: "ddlYear",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Period",
        objectName: "ddlPeriod",
        jsCall: "getPeriodList",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_MRRNationwideRadioBySize() {

    var tempObject = new Object();

    columnsToDisplay = new Array();

    bLongQuery = true;

    tempObject =
    {
        reportTitle: "MRR Nationwide Radio By Size",
        apiControllerAction: "/api/MRRReport/GetNationwideRevenueBySizeReport",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'mrr',
        autoUpdate: false
    }

    return tempObject;
}
