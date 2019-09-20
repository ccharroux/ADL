var autoRerunInterval = 120 * 1000; // 

var reportObjectArray = new Array();
var reportFilterObjectArray = new Array();

// dma drill down reports
var reportActionsArray = new Array();
reportActionsArray.push("edit");

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
reportName.push("rptStationOutOfSyncList");
reportName.push("rptStationProductSetupList");
reportName.push("rptMRRMissingManagerSuggestedList");
reportName.push("rptStationMissingDataList");

// dma reports
reportName.push("rptRevenueComparisonMarket");
reportName.push("rptRevenueComparisonStation");
reportName.push("rptRevenueComparisonStationDetail");

// xray reports
reportName.push("rptNewAdvertisers");
reportName.push("rptNewAgencies");

reportName.push("rptAdvertisersList");
reportName.push("rptAdvertisersAgenciesList");
reportName.push("rptDisabledAdvertisersList");
reportName.push("rptMediaAdvertisersList");
reportName.push("rptParentAdvertiserList");
reportName.push("rptParentAdvertiserAdvertiserList");
reportName.push("rptStationAdvertisersList");

reportName.push("rptAgencyList");
reportName.push("rptAgencyAdvertiserAccountsList");
reportName.push("rptDisabledAgencyList");
reportName.push("rptParentAgencyList");
reportName.push("rptParentAgencyAgencyList");
reportName.push("rptStationAgencyList");

reportName.push("rptUsersNotSetupInSystem");
reportName.push("rptXRAYDataRetentionList");
reportName.push("rptMRRComplimentaryMarketRevenueEntry");
reportName.push("rptMRRModeUsageSummary");

reportName.push("rptMRROutstandingStationList");
reportName.push("rptTVBOutstandingStationList");

reportName.push("rptAgencyDisabledAndNotMergedList");
reportName.push("rptAdvertiserDisabledAndNotMergedList");

reportName.push("rptAPILogList");
reportName.push("rptImpersonationLogList");

//Corporate Reports
reportName.push("rptTrafficSystemAdvertiser");
reportName.push("rptCorporateAgency");
reportName.push("rptMonthToMonth");

// TVB
reportName.push("rptTimeSalesVsRepBilling");
reportName.push("rptRepBillingSubmissionStatusList");
reportName.push("rptRepBillingStationList");
reportName.push("rptTimeSalesStationList");

reportName.push("rptRepBillingCompareList");
reportName.push("rptTimeSalesCompareList");

reportName.push("rptTimeSalesCompleteRevenueList");

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
        for (var v = 0; v < reportObjectArray[i].product.length; v++)
        {

            for (var z = 0; z < rptType.length; z++)
            {
                if (reportObjectArray[i].product[v].toLowerCase() == rptType[z].toLowerCase()) {
                    rptHit = true;
                    $("#" + control).append("<option value='" + i + "'>" + reportObjectArray[i].reportTitle + "</option>");
                }
            }
        }
  
    }

    if (rptHit == true)
    {
        $("#" + control).prepend("<option value='-1'>  -- Select a Report --  </option>");
        $("#" + control).val("-1");
        $("#" + container).show();

        try {
            convertToChosenSelect(control, false, false);
        }
        catch (err) {
            console.log("This page is not converted to use Chosen selects yet.");
        }
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
        var reportPath = '/utilities/genericreport/genericReport.html';

        if (!reportObjectArray[reportId].reportPath == false)
        {
            reportPath = reportObjectArray[reportId].reportPath;
        }
  
        var url = reportPath + "?reportId=" + reportId;

        var i = parseInt($("#ddlMarket").val());

        if (i > 0)
        {
            url = url + "&marketid=" + $("#ddlMarket").val();
        }

        url = url + "&hideHeader=true";

        showComponentDialog(url, reportObjectArray[reportId].reportTitle);

        //window.location = url;
    }
}
function getDMAReportObjectByKeyValue(inKey, inValue) {
    //get the item by the key with a value

    for (var i = 0; i < reportObjectArray.length; i++)
    {
        if (reportObjectArray[i][inKey] === inValue)
        {
            reportObjectArray[i].reportIndex = i;
            return reportObjectArray[i];
        }
    }
    return null;

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
        product: ['owner']
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
        product: ['owner']
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
         product: ['mrr']
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
    columnsToDisplay.push("Query Date");
 
    columnsToDisplay.push("Query");
    columnsToDisplay.push("Login Date ");
    columnsToDisplay.push("Browser");
 
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Owner");
    columnsToDisplay.push("User");
    columnsToDisplay.push("Duration");

    tempObject =
    {
        // id: rptXRAYUsage,
        reportTitle:  "XRay Usage Report",
        apiControllerAction:  "/api/XRAYReport/GetXRayUsage",
        apiType:  "get",
        columnsToDisplay:  columnsToDisplay,
         product: ['xry']
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
         product: ['mrr']
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
         product: ['tvb']
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
         product: ['mrr']
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
         product: ['xry']
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
         product: ['xry']
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
         product: ['xry']
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
         product: ['xry']
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
        product: ['personnel']
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
         product: ['xry']
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
        jsCall: "getMarketListByProduct",
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
         product: ['market']
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
         product: ['tvb']
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
        product: ['personnel']
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
         product: ['station']
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
         product: ['training']
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
         product: ['station']
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
         product: ['xry']
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
        reportTitle:  "MRR / XRay Revenue Comparison",
        apiControllerAction:  "/api/Report/GetMarketRevenueRevenueXRay",
        apiType:  "get",
        columnsToDisplay:  columnsToDisplay,
        product: ['mrr','xry']
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
         product: ['station']
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
         product: ['station']
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
         product: ['station']
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
        product: ['mrr']
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
         product: ['station']
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
        product: ['mrr']
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
         product: ['owner group']
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
         product: ['owner group']
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
        token: "Product",
        jsCall: "getProductList",
        objectName: "ddlProduct",
        required: true
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
         product: ['owner group']
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
         product: ['owner group'],
        sortable: false
    }

    return tempObject;

}

function getReportFilterArray_MarketSetupMarket() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: new Array('MRR'),
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
        product: ['mrr'],
        sortable: true
    }

    return tempObject;

}


function getReportFilterArray_MarketSetupMarketMRRCategories() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: new Array('MRR'),
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
        product: ['mrr'],
        sortable: true
    }

    return tempObject;

}

function getReportFilterArray_MarketSetupMarketMRRReports() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: new Array('MRR'),
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
        product: ['mrr'],
        sortable: true
    }

    return tempObject;

}

function getReportFilterArray_MarketSetupMarketOwnerGroups() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: new Array('MRR'),
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
        product: ['mrr'],
        sortable: true
    }

    return tempObject;

}

function getReportFilterArray_MarketSetupMarketProducts() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: new Array('MRR'),
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
        product: ['mrr'],
        sortable: true
    }

    return tempObject;

}

function getReportFilterArray_MarketSetupMarketStations() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: new Array('MRR'),
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
        product: ['mrr'],
        sortable: true
    }

    return tempObject;

}

function getReportFilterArray_MarketSetupMarketUsers() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: new Array('MRR'),
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
        product: ['mrr'],
        sortable: true
    }

    return tempObject;

}

function getReportFilterArray_MarketSetupMarketVirtualGroups() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: new Array('MRR'),
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

        reportTitle: "Market Setup - Virtual Groups",
        apiControllerAction: "/api/MarketReport/GetMarketSetupMarketVirtualGroups",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['mrr'],
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
        product: ['personnel'],
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
        jsCall: "getStationListByGeneralFilters",
        objectName: "ddlStation",
        required: false,
        reloadBasedMarket: true,
        reloadBasedOwner: true,
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
        product: ['personnel'],
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
        jsCall: "getStationListByGeneralFilters",
        objectName: "ddlStation",
        required: false,
        reloadBasedMarket: true,
        reloadBasedOwner: true,
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
        product: ['personnel'],
        sortable: true
    }

    return tempObject;

}

function getReportFilterArray_MRRNoPrimaryContactList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = new Object();
    arrayObject = {
        token: "Product",
        objectName: "ddlProduct",
        jsCall: "getProductList",
        jsCallParameters: ['MRR'],
        required: false
    }
    arrayFilters.push(arrayObject);


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

    //arrayObject = {
    //    token: "OwnerGroup",
    //    jsCall: "getOwnerGroupList",
    //    objectName: "ddlOwnerGroup",
    //    required: false
    //}
    //arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Station",
        objectName: "ddlStation",
        jsCall: "getStationListByGeneralFilters",
        required: false,
        reloadBasedProduct: true,
        reloadBasedOwner: true,
        reloadBasedMarket: true
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

        reportTitle: "MRR Missing Primary Contact",
        apiControllerAction: "/api/MRRReport/GetNoPrimaryContactList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['mrr'],
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
         product: ['market'],
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
        product: ['mrr'],
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
        product: ['mrr'],
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

        reportTitle: "XRay Market Release",
        apiControllerAction: "/api/XRAYReport/GetMarketRelease",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
         product: ['xry'],
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

        reportTitle: "XRay Market Station Release",
        apiControllerAction: "/api/XRAYReport/GetMarketRelease",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
         product: ['xry'],
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
         product: ['tvb'],
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
         product: ['tvb'],
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
         product: ['tech']
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
         product: ['tvb']
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
        product: ['mrr']
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
        product: ['mrr']
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
        product: ['mrr']
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
         product: ['tvb']
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
         product: ['tvb']
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
         product: ['tvb']
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
         product: ['station']
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
         product: ['station']
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
         product: ['tech']
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
         product: ['tech']
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
         product: ['dma']
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
        product: ['personnel']
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
         product: ['xry']
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
         product: ['tech']
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
         product: ['dma']
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
         product: ['tech']
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
         product: ['tech']
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
         product: ['xry']
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
         product: ['xry']
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
         product: ['xry']
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
        product: ['personnel']
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
        product: ['mrr']
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
        product: ['mrr']
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
         product: ['owner group']
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
        product: ['personnel']
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
        product: ['personnel']
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
        reportTitle: "User Assigned Invalid Owner Report",
        apiControllerAction: "/api/PersonnelReport/GetUsersAssignedReportsInvalidOwnerList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['personnel']
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
        reportTitle: "User Assigned Invalid Market Report",
        apiControllerAction: "/api/PersonnelReport/GetUsersAssignedInvalidMarketReportList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['personnel']
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
        reportTitle: "Users Assigned to Disabled Stations",
        apiControllerAction: "/api/PersonnelReport/GetUsersWithDisabledStationAssignedList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['personnel']
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
        reportTitle: "XRay Import User Script List",
        apiControllerAction: "/api/XRAYReport/GetXRAYImportScriptList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
         product: ['xry']
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
         product: ['xry']
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
        product: ['mrr']
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
         product: ['market']
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
         product: ['tech'],
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
         product: ['xry'],
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
        product: ['mrr'],
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
        product: ['mrr'],
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
        product: ['mrr'],
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
         product: ['xry'],
        autoUpdate: false
    }

    return tempObject;
}
 
function getReportFilterArray_MRRMarketDistributionList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();
    arrayObject = new Object();
    arrayObject = {
        token: "Product",
        objectName: "ddlProduct",
        jsCall: "getProductList",
        jsCallParameters: ['MRR'],
        required: false
    }
    arrayFilters.push(arrayObject);

 
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
        jsCall: "getStationListByGeneralFilters",
        required: false,
        reloadBasedProduct: true,
        reloadBasedOwner: true,
        reloadBasedMarket: true
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
        reportTitle: "MRR Market Distribution List",
        apiControllerAction: "/api/MRRReport/GetMRRMarketDistributionList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['mrr'],
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
        product: ['owner'],
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
         product: ['tech'],
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
        product: ['mrr'],
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
        reportTitle: "MRR Upload Category Template (Revenue)",
        apiControllerAction: "/api/MRRReport/GetMRRUploadTemplateByOwnerWithRevenue",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['mrr'],
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
        product: ['mrr'],
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
        token: "Affiliation",
        objectName: "ddlAffiliation",
        jsCall: "getAffiliationList",
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

    columnsToDisplay.push("Category");
    columnsToDisplay.push("Affiliation");
    columnsToDisplay.push("PTD Current");
    columnsToDisplay.push("PTD Prior");
    columnsToDisplay.push("PTD Change");
    columnsToDisplay.push("YTD Current");
    columnsToDisplay.push("YTD Prior");
    columnsToDisplay.push("YTD Change");


    bLongQuery = true;

    tempObject =
    {
        reportTitle: "MRR Nationwide TV Affiliation",
        apiControllerAction: "/api/MRRReport/GetNationwideRevenueByAffiliationReport",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['mrr'],
        autoUpdate: false,
        sortable: false
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
        token: "Region",
        objectName: "ddlRegion",
        jsCall: null,
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

    columnsToDisplay.push("Category");
    columnsToDisplay.push("Region");
    columnsToDisplay.push("PTD Current");
    columnsToDisplay.push("PTD Prior");
    columnsToDisplay.push("PTD Change");
    columnsToDisplay.push("YTD Current");
    columnsToDisplay.push("YTD Prior");
    columnsToDisplay.push("YTD Change");

    bLongQuery = true;

    tempObject =
    {
        reportTitle: "MRR Nationwide TV Region",
        apiControllerAction: "/api/MRRReport/GetNationwideRevenueByRegionReport",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['mrr'],
        autoUpdate: false,
        sortable: false
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
        token: "MarketSize",
        objectName: "ddlMarketSize",
        jsCall: "getMarketSizeList",
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

    columnsToDisplay.push("Category");
    columnsToDisplay.push("Market Size");
    columnsToDisplay.push("PTD Current");
    columnsToDisplay.push("PTD Prior");
    columnsToDisplay.push("PTD Change");
    columnsToDisplay.push("YTD Current");
    columnsToDisplay.push("YTD Prior");
    columnsToDisplay.push("YTD Change");

    bLongQuery = true;

    tempObject =
    {
        reportTitle: "MRR Nationwide TV Market Size",
        apiControllerAction: "/api/MRRReport/GetNationwideRevenueBySizeReport",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['mrr'],
        autoUpdate: false,
        sortable: false
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
        token: "Format",
        objectName: "ddlFormat",
        jsCall: null,
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

    columnsToDisplay.push("Category");
    columnsToDisplay.push("Format");
    columnsToDisplay.push("PTD Current");
    columnsToDisplay.push("PTD Prior");
    columnsToDisplay.push("PTD Change");
    columnsToDisplay.push("YTD Current");
    columnsToDisplay.push("YTD Prior");
    columnsToDisplay.push("YTD Change");

    bLongQuery = true;

    tempObject =
    {
        reportTitle: "MRR Nationwide Radio Format",
        apiControllerAction: "/api/MRRReport/GetNationwideRevenueByFormatReport",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['mrr'],
        autoUpdate: false,
        sortable: false
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
        token: "Region",
        objectName: "ddlRegion",
        jsCall: null,
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

    columnsToDisplay.push("Category");
    columnsToDisplay.push("Region");
    columnsToDisplay.push("PTD Current");
    columnsToDisplay.push("PTD Prior");
    columnsToDisplay.push("PTD Change");
    columnsToDisplay.push("YTD Current");
    columnsToDisplay.push("YTD Prior");
    columnsToDisplay.push("YTD Change");

    bLongQuery = true;

    tempObject =
    {
        reportTitle: "MRR Nationwide Radio Region",
        apiControllerAction: "/api/MRRReport/GetNationwideRevenueByRegionReport",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['mrr'],
        autoUpdate: false,
        sortable: false
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
        token: "MarketSize",
        objectName: "ddlMarketSize",
        jsCall: "getMarketSizeList",
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

    columnsToDisplay.push("Category");
    columnsToDisplay.push("Market Size");
    columnsToDisplay.push("PTD Current");
    columnsToDisplay.push("PTD Prior");
    columnsToDisplay.push("PTD Change");
    columnsToDisplay.push("YTD Current");
    columnsToDisplay.push("YTD Prior");
    columnsToDisplay.push("YTD Change");

    bLongQuery = true;

    tempObject =
    {
        reportTitle: "MRR Nationwide Radio Market Size",
        apiControllerAction: "/api/MRRReport/GetNationwideRevenueBySizeReport",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['mrr'],
        autoUpdate: false,
        sortable: false
    }

    return tempObject;
}

function getReportFilterArray_StationOutOfSyncList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    return arrayFilters;
}

function getReportObject_StationOutOfSyncList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();

    tempObject =
    {
        reportTitle: "Station Out Of Sync List",
        apiControllerAction: "/api/StationReport/GetStationOutOfSyncList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
         product: ['station'],
        autoUpdate: false
    }

    return tempObject;
}

function getReportFilterArray_StationProductSetupList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Product",
        jsCall: "getProductList",
        objectName: "ddlProduct",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "ParentMarket",
        jsCall: "getParentMarketList",
        objectName: "ddlParentMarket",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: new Array(),
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

    return arrayFilters;
}

function getReportObject_StationProductSetupList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();

    tempObject =
    {
        reportTitle: "Station Product Setup List",
        apiControllerAction: "/api/StationReport/GetStationProductSetupList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
         product: ['station'],
        autoUpdate: false
    }

    return tempObject;
}

function getReportFilterArray_MRRMissingManagerSuggestedList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

   

    return arrayFilters;
}

function getReportObject_MRRMissingManagerSuggestedList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();

    tempObject =
    {
        reportTitle: "MRR Missing Manager Suggestions",
        apiControllerAction: "/api/MRRReport/GetMRRMissingManagerSuggestedList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['mrr'],
        autoUpdate: false
    }

    return tempObject;
}

function getReportFilterArray_StationMissingDataList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    return arrayFilters;
}

function getReportObject_StationMissingDataList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();

    tempObject =
    {
        reportTitle: "Station Missing Data List",
        apiControllerAction: "/api/StationReport/GetStationMissingDataList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
         product: ['station'],
        autoUpdate: false
    }

    return tempObject;
}
// DMA Reports start here...

function getReportObject_RevenueComparisonMarket() {

    var tempObject = new Object();
    var columnsToDisplay = new Array();

    columnsToDisplay.push("Parent Market");
    //columnsToDisplay.push("Revenue Year");
    columnsToDisplay.push("Revenue Period");
    columnsToDisplay.push("DMA Cat Id");
    columnsToDisplay.push("Market");
    columnsToDisplay.push("DMA Revenue");
    columnsToDisplay.push("MRR Revenue");
    columnsToDisplay.push("Revenue Diff");

    columnsToDisplay.push({
        "action": "edit",
        "mRender": function (data, type, row)
        {
            var reportIndex = reportName.indexOf("rptRevenueComparisonStation");
            var action = "";

            var revenuePeriodParts = row["Revenue Period"].split("/");

            if (reportIndex > -1)
            {
                action = "/Products/DMA/reports/dmagenericreport.html?reportid=" + reportIndex +
                        "&parentmarketid=" + row["Parent Market ID"] +
                        "&marketid=" + row["Market Id"] +
                        "&revenueperiod=" + revenuePeriodParts[1] +
                        "&revenueyear=" + revenuePeriodParts[0] +
                        "&direct=false";
            }

            return '<a onclick="determineLocationOfDMAReport(' + "'" + action + "','" + 'DMA/MRR Data Comparison - Station Level' + "'" + ');">Stations</a>';
        },
        "orderable": false,
        "searchable": false,
        "className": "text-align-right"
    });

    tempObject = {
        reportTitle: "DMA/MRR Data Comparison - Market Level",
        apiControllerAction: "/api/DMAReport/GetDMARevenueReviewByMarket",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        reportPath: "/Products/DMA/reports/dmagenericreport.html",
         product: ['dma'],
        showBackNav: false,
        reportToken: "dmaMarket",
        reportIndex: ""
    }

    return tempObject;
}

function getReportFilterArray_RevenueComparisonMarket() {

    var arrayFilters = new Array();
    var arrayObject = new Array();

    arrayObject = {
        token: "ParentMarket",
        jsCall: "getParentMarketList",
        objectName: "ddlParentMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Period",
        jsCall: "getPeriodList",
        jsCallParameters: ["quarters"],
        objectName: "ddlPeriod",
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

    return arrayFilters;

}

function getReportObject_RevenueComparisonStation() {
    var tempObject = new Object();
    var columnsToDisplay = new Array();

    columnsToDisplay.push("Market");
    //columnsToDisplay.push("Revenue Year");
    columnsToDisplay.push("Revenue Period");
    columnsToDisplay.push("DMA Cat Id");
    columnsToDisplay.push("Station");
    columnsToDisplay.push("DMA Revenue");
    columnsToDisplay.push("MRR Revenue");
    columnsToDisplay.push("Revenue Diff");

    columnsToDisplay.push({
        "action": "edit",
        "mRender": function (data, type, row)
        {
            var reportIndex = reportName.indexOf("rptRevenueComparisonStationDetail");
            var action = "";

            var revenuePeriodParts = row["Revenue Period"].split("/");

            if (reportIndex > -1)
            {
                action = "/Products/DMA/reports/dmagenericreport.html?reportid=" + reportIndex +
                    "&parentmarketid=" + $("#ddlParentMarket").val() +
                    "&marketid=" + row["Market ID"] +
                    "&revenueperiod=" + revenuePeriodParts[1] +
                    "&revenueyear=" + revenuePeriodParts[0] +
                    "&stationid=" + row["Station Id"] +
                    "&direct=false";
            }

            //return '<a href="' + action + '">Details</a>';

            return '<a onclick="determineLocationOfDMAReport(' + "'" + action + "','" + 'DMA/MRR Data Comparison - Detail Level' + "'" + ');">Details</a>';

        },
        "orderable": false,
        "searchable": false,
        "className": "text-align-right"
    });

    var arrButtons = new Array();
    arrButtons.push({ name: "Market", title: "Back to Market Level" });

    tempObject = {
        reportTitle: "DMA/MRR Data Comparison - Station Level",
        apiControllerAction: "/api/DMAReport/GetDMARevenueReviewByStation",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        reportPath: "/Products/DMA/reports/dmagenericreport.html",
         product: ['dma'],
        showBackNav: true,
        backNavButtons: arrButtons,
        reportToken: "dmaStation",
        reportIndex: ""
    }

    return tempObject;
}

function getReportFilterArray_RevenueComparisonStation() {
    var arrayFilters = new Array();
    var arrayObject = new Array();

    arrayObject = {
        token: "ParentMarket",
        jsCall: "getParentMarketList",
        objectName: "ddlParentMarket",
        required: true,
        onchange: function () {

            getMarketList($("#ddlParentMarket").val());

        }
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Market",
        jsCall: "getDefaultMarket",
        objectName: "ddlMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Period",
        jsCall: "getPeriodList",
        jsCallParameters: ["quarters"],
        objectName: "ddlPeriod",
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

    return arrayFilters;
}

function getReportObject_RevenueComparisonStationDetail() {
    var tempObject = new Object();
    var columnsToDisplay = new Array();

    //need to figure out how to make them non-sortable
    columnsToDisplay.push("Desc");
    //columnsToDisplay.push("Revenue Year");
    columnsToDisplay.push("Revenue Period");
    columnsToDisplay.push("DMA Cat Id");
    columnsToDisplay.push("MRR Cat Id");
    columnsToDisplay.push("Station");
    columnsToDisplay.push("Market");
    columnsToDisplay.push("DMA Revenue");

    var arrButtons = new Array();

    arrButtons.push({ name: "Market", title: "Back to Market Level" });
    arrButtons.push({ name: "Station", title: "Back to Station Level" });

    tempObject = {
        reportTitle: "DMA/MRR Data Comparison - MRR Level",
        apiControllerAction: "/api/DMAReport/GetDMARevenueReviewByStationDetails",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        reportPath: "/Products/DMA/reports/dmagenericreport.html",
         product: ['dma'],
        sortable: false,
        showBackNav: true,
        backNavButtons: arrButtons,
        reportToken: "dmaStationDetail",
        reportIndex: ""
    }

    //back to market
    //back to station
    //include button title



    return tempObject;
}

function getReportFilterArray_RevenueComparisonStationDetail() {
    var arrayFilters = new Array();
    var arrayObject = new Array();

    //parent market
    arrayObject = {
        token: "ParentMarket",
        jsCall: "getParentMarketList",
        objectName: "ddlParentMarket",
        required: true,
        onchange: function () {

            getMarketList($("#ddlParentMarket").val());

        }
    }
    arrayFilters.push(arrayObject);



    //market
    arrayObject = {
        token: "Market",
        jsCall: "getDefaultMarket",
        objectName: "ddlMarket",
        required: true,
        onchange: function () {

            getStationList($("#ddlMarket").val());

        }
    }
    arrayFilters.push(arrayObject);

    //station
    arrayObject = {
        token: "Station",
        jsCall: "getDefaultStation",
        objectName: "ddlStation",
        required: true
    }
    arrayFilters.push(arrayObject);

    //revenue period
    arrayObject = {
        token: "Period",
        jsCall: "getPeriodList",
        jsCallParameters: ["quarters"],
        objectName: "ddlPeriod",
        required: true
    }
    arrayFilters.push(arrayObject);

    //revenue year
    arrayObject = {
        token: "Year",
        jsCall: "getYearList",
        objectName: "ddlYear",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

// DMA Reports end here...

// XRY Reports start here...
function getReportObject_Advertisers() {
    var tempObject = new Object();

    var columnsToDisplay = new Array();

    columnsToDisplay.push("market");
    columnsToDisplay.push("advertiser");
    columnsToDisplay.push("industry Name");
    columnsToDisplay.push("sub Industry");
    columnsToDisplay.push("parent Advertiser");

    //this column is used to create the edit link
    //for each result row
    columnsToDisplay.push({
        "action": "edit",
        "mRender": function (data, type, row) {
            var action = "/admin/advertiser/advertiser.html?AdvertiserID=";
            return '<a href="#" onclick=\'loadActionPage("' + action + '",' + row.advertiserId + ')\'>Edit</a>';
        },
        "orderable": false,
        "searchable": false,
        "className": "text-align-right"
    });

    tempObject =
    {
        reportTitle: "Advertisers",
        apiControllerAction: "/api/AdvertiserAudit/GetAdvertiserAuditList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
         product: ['advertiser', 'xry'],
        reportPath: "/Products/XRY/reports/xrygenericreport.html"
    }

    return tempObject;
}

function getReportFilterArray_Advertisers() {
    var arrayFilters = new Array();
    var arrayObject = new Array();

    arrayObject = {
        token: "Market",
        jsCall: "getXRYMarketList",
        objectName: "ddlMarket",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "MediaCode",
        jsCall: "getXRYMediaCodeList",
        objectName: "ddlMediaCode",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "AdvertiserName",
        objectName: "txtAdvertiserName",
        jsCall: null,
        required: true
    }
    arrayFilters.push(arrayObject);

    //The onchange property includes a function that will
    //be executed for that object if it exists.
    arrayObject = {
        token: "Industry",
        jsCall: "getIndustryList",
        objectName: "ddlIndustry",
        onchange: function () {

            getSubIndustryList($("#ddlIndustry").val(), '');

        },
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "SubIndustry",
        jsCall: "getDefaultSubIndustry",
        objectName: "ddlSubIndustry",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "ParentAdvertiser",
        jsCall: null,
        objectName: "hidParentAdvertiser",
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

function getReportObject_MediaAdvertisers() {
    var tempObject = new Object();

    var columnsToDisplay = new Array();
    columnsToDisplay.push("market");
    columnsToDisplay.push("media Advertiser");
    columnsToDisplay.push("media Advertiser Code");
    columnsToDisplay.push("market Advertiser");
    columnsToDisplay.push("mediaType");

    //this column is used to create the edit link
    //for each result row
    columnsToDisplay.push({
        "action": "edit",
        "mRender": function (data, type, row) {
            var action = "/admin/mediaadvertiser/mediaadvertiser.html?MediaAdvertiserID=";
            return '<a href="#" onclick=\'loadActionPage("' + action + '",' + row.mediaAdvertiserId + ')\'>Edit</a>';
        },
        "orderable": false,
        "searchable": false,
        "className": "text-align-right"
    });

    tempObject =
    {
        reportTitle: "Media Advertisers",
        apiControllerAction: "/api/MediaAdvertiserAudit/GetMediaAdvertiserAuditList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
         product: ['advertiser', 'xry'],
        reportPath: "/Products/XRY/reports/xrygenericreport.html"
    }

    return tempObject;
}

function getReportFilterArray_MediaAdvertisers() {
    var arrayFilters = new Array();
    var arrayObject = new Array();

    arrayObject = {
        token: "Market",
        jsCall: "getXRYMarketList",
        objectName: "ddlMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "MediaAdvertiserName",
        jsCall: null,
        objectName: "txtMediaAdvertiserName",
        required: false,
        multiFieldOption: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "MarketAdvertiserName",
        jsCall: null,
        objectName: "txtMarketAdvertiserName",
        required: false,
        multiFieldOption: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "MediaType",
        jsCall: "getMediaAdvertiserMediaTypeList",
        objectName: "ddlMediaType",
        required: false
    }
    arrayFilters.push(arrayObject);


    return arrayFilters;
}

function getReportObject_StationAdvertisers() {
    var tempObject = new Object();

    var columnsToDisplay = new Array();
    columnsToDisplay.push("market");
    columnsToDisplay.push("station");
    columnsToDisplay.push("station Advertiser");
    columnsToDisplay.push("station Code");
    columnsToDisplay.push("market Advertiser");
    columnsToDisplay.push("industry Name");
    columnsToDisplay.push("sub Industry");

    //this column is used to create the edit link
    //for each result row
    columnsToDisplay.push({
        "action": "edit",
        "mRender": function (data, type, row) {
            var action = "/admin/stationadvertiser/stationadvertiser.html?StationAdvertiserID=";
            return '<a href="#" onclick=\'loadActionPage("' + action + '",' + row.stationAdvertiserId + ')\'>Edit</a>';
        },
        "orderable": false,
        "searchable": false,
        "className": "text-align-right"
    });

    tempObject =
    {
        reportTitle: "Station Advertisers",
        apiControllerAction: "/api/StationAdvertiserAudit/GetStationAdvertiserAuditList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
         product: ['advertiser', 'xry'],
        reportPath: "/Products/XRY/reports/xrygenericreport.html"
    }

    return tempObject;
}

function getReportFilterArray_StationAdvertisers() {
    var arrayFilters = new Array();
    var arrayObject = new Array();

    arrayObject = {
        token: "Market",
        jsCall: "getXRYMarketList",
        objectName: "ddlMarket",
        onchange: function () {

            getOwnerList($("#ddlMarket").val());

        },
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Owner",
        jsCall: "getDefaultOwner",
        objectName: "ddlOwner",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "StationAdvertiserName",
        jsCall: null,
        objectName: "txtStationAdvertiserName",
        required: false,
        multiFieldOption: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "MarketAdvertiserName",
        jsCall: null,
        objectName: "txtMarketAdvertiserName",
        required: false,
        multiFieldOption: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Industry",
        jsCall: "getIndustryList",
        objectName: "ddlIndustry",
        onchange: function () {

            getSubIndustryList($("#ddlIndustry").val(), '');

        },
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "SubIndustry",
        jsCall: "getDefaultSubIndustry",
        objectName: "ddlSubIndustry",
        required: false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_NewAdvertisers() {
    var tempObject = new Object();

    var columnsToDisplay = new Array();

    columnsToDisplay.push("station advertiser name");
    columnsToDisplay.push("advertiser name");
    columnsToDisplay.push("industry name");
    columnsToDisplay.push("sub industry name");
    //columnsToDisplay.push("media code id");
    columnsToDisplay.push("station name");
    columnsToDisplay.push("action code");
    columnsToDisplay.push("comment");

    //this column is used to create the edit links
    //for each result row
    columnsToDisplay.push({
        "action": "edit",
        "mRender": function (data, type, row)
        {
            if ($("#header-summary-section").is(":visible") == false || $("#header-summary").html() == "")
            {
                $("#header-summary-section").show();
                $("#header-summary").html(
                    'Market last released ' + new Date(row.releaseDate).toLocaleString('en-US')
                );
            }

            var action = '<a href="#" onclick=\'setUpBackButton(); loadActionPage("/admin/advertiser/advertiser.html?AdvertiserID=",' + row.advertiserId + ')\'>Edit&nbsp;Advertiser</a>';
            var action2 = '';

            if (row.stationAdvertiserId != null)
            {
                action2 = '<a href="#" onclick=\'setUpBackButton(); loadActionPage("/admin/stationadvertiser/stationadvertiser.html?StationAdvertiserID=",' + row.stationAdvertiserId + ')\'>Edit&nbsp;Station&nbsp;Advertiser</a>';
            }

            if (row.mediaAdvertiserId != null)
            {
                action2 = '<a href="#" onclick=\'setUpBackButton(); loadActionPage("/admin/mediaadvertiser/mediaadvertiser.html?MediaAdvertiserID=",' + row.mediaAdvertiserId + ')\'>Edit&nbsp;Media&nbsp;Advertiser</a>';
            }

            return action + (action2.length == 0 ? '' :'<br />' + action2);
        },
        "orderable": false,
        "searchable": false,
        "className": "text-align-right"
    });

    tempObject =
    {
        reportTitle: "New Advertisers",
        apiControllerAction: "/api/AdvertiserAudit/GetNewAdvertiserAuditList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
         product: ['xry'],
        reportPath: "/Products/XRY/reports/xrygenericreport.html"
    }

    return tempObject;
}

function getReportFilterArray_NewAdvertisers() {
    var arrayFilters = new Array();
    var arrayObject = new Array();

    arrayObject = {
        token: "Market",
        jsCall: "getXRYMarketList",
        objectName: "ddlMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_Agencies() {
    var tempObject = new Object();

    var columnsToDisplay = new Array();
    columnsToDisplay.push("market");
    columnsToDisplay.push("agency");
    columnsToDisplay.push("parent Agency");
    columnsToDisplay.push("account Type");

    //this column is used to create the edit link
    //for each result row
    columnsToDisplay.push({
        "action": "edit",
        "mRender": function (data, type, row) {
            var action = "/Admin/agency/agency.html?AgencyID=";
            return '<a href="#" onclick=\'loadActionPage("' + action + '",' + row.agencyId + ')\'>Edit</a>';
        },
        "orderable": false,
        "searchable": false,
        "className": "text-align-right"
    });

    tempObject =
    {
        reportTitle: "Agencies",
        apiControllerAction: "/api/AgencyAudit/GetAgencyAuditList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'agencies',
        reportPath: "/Products/XRY/reports/xrygenericreport.html"
    }

    return tempObject;
}

function getReportFilterArray_Agencies() {
    var arrayFilters = new Array();
    var arrayObject = new Array();

    arrayObject = {
        token: "Market",
        jsCall: "getXRYMarketList",
        objectName: "ddlMarket",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "AgencyName",
        jsCall: null,
        objectName: "txtAgencyName",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "MediaType",
        jsCall: "getMediaTypeList",
        objectName: "ddlMediaType",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "ParentAgency",
        jsCall: null,
        objectName: "hidParentAgency",
        required: false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_StationAgencies() {
    var tempObject = new Object();

    var columnsToDisplay = new Array();
    columnsToDisplay.push("market");
    columnsToDisplay.push("station");
    columnsToDisplay.push("station Agency");
    columnsToDisplay.push("station Agency Code");
    columnsToDisplay.push("market Agency");
    columnsToDisplay.push("account Type");

    //this column is used to create the edit link
    //for each result row
    columnsToDisplay.push({
        "action": "edit",
        "mRender": function (data, type, row) {
            var action = "/admin/stationagency/stationagency.html?StationAgencyID=";
            return '<a href="#" onclick=\'loadActionPage("' + action + '",' + row.stationAgencyId + ')\'>Edit</a>';
        },
        "orderable": false,
        "searchable": false,
        "className": "text-align-right"
    });

    tempObject =
    {
        reportTitle: "Station Agencies",
        apiControllerAction: "/api/StationAgencyAudit/GetStationAgencyAuditList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'agencies',
        reportPath: "/Products/XRY/reports/xrygenericreport.html"
    }

    return tempObject;
}

function getReportFilterArray_StationAgencies() {
    var arrayFilters = new Array();
    var arrayObject = new Array();

    arrayObject = {
        token: "Market",
        jsCall: "getXRYMarketList",
        objectName: "ddlMarket",
        onchange: function () {

            getOwnerList($("#ddlMarket").val());

        },
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "StationAgencyName",
        jsCall: null,
        objectName: "txtStationAgencyName",
        required: false,
        multiFieldOption: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "MarketAgencyName",
        jsCall: null,
        objectName: "txtMarketAgencyName",
        required: false,
        multiFieldOption: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Owner",
        jsCall: "getDefaultOwner",
        objectName: "ddlOwner",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "AccountType",
        jsCall: "getAccountTypeList",
        objectName: "ddlAccountType",
        required: false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_NewAgencies() {
    var tempObject = new Object();

    var columnsToDisplay = new Array();

    columnsToDisplay.push("station agency name");
    columnsToDisplay.push("agency name");
    columnsToDisplay.push("station name");
    columnsToDisplay.push("action code");
    columnsToDisplay.push("comment");

    //this column is used to create the edit links
    //for each result row
    columnsToDisplay.push({
        "action": "edit",
        "mRender": function (data, type, row) {
            if ($("#header-summary-section").is(":visible") == false || $("#header-summary").html() == "") {
                $("#header-summary-section").show();
                $("#header-summary").html(
                    'Market last released ' + new Date(row.releaseDate).toLocaleString('en-US')
                );
            }

            var action = '<a href="#" onclick=\'setUpBackButton(); loadActionPage("/Admin/agency/agency.html?AgencyID=",' + row.agencyId + ')\'>Edit&nbsp;Agency</a>';
            var action2 = '<a href="#" onclick=\'setUpBackButton(); loadActionPage("/admin/stationagency/stationagency.html?StationAgencyID=",' + row.stationAgencyId + ')\'>Edit&nbsp;Station&nbsp;Agency</a>';
            return action + '<br />' + action2;
        },
        "orderable": false,
        "searchable": false,
        "className": "text-align-right"
    });

    tempObject =
    {
        reportTitle: "New Agencies",
        apiControllerAction: "/api/AgencyAudit/GetNewAgencyAuditList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
         product: ['xry'],
        reportPath: "/Products/XRY/reports/xrygenericreport.html"
    }

    return tempObject;
}

function getReportFilterArray_NewAgencies() {
    var arrayFilters = new Array();
    var arrayObject = new Array();

    arrayObject = {
        token: "Market",
        jsCall: "getXRYMarketList",
        objectName: "ddlMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_MarketStationSummary() {
    var tempObject = new Object();

    var columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "Market Station Summary",
        apiControllerAction: "",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['xry'],
        reportPath: "/Products/XRY/reports/xrygenericreport.html"
    }

    return tempObject;

}

function getReportFilterArray_MarketStationSummary() {
    var arrayFilters = new Array();
    var arrayObject = new Array();

    //media type
    //load markets
    //period
    //years

    return arrayFilters;
}

function getReportObject_AdvertisersRevenueResearch() {
    var tempObject = new Object();

    var columnsToDisplay = new Array();
    columnsToDisplay.push("market");
    columnsToDisplay.push("advertiser");
    columnsToDisplay.push("station");
    columnsToDisplay.push("period");
    columnsToDisplay.push("revenue");
    columnsToDisplay.push("agency");
    columnsToDisplay.push("account Type");
    columnsToDisplay.push("posted By");
    columnsToDisplay.push("date Posted");

    //For the Revenue Research audits,
    //need to add a footerFormat property to allow for 
    //the totals to be created.
    //The footerCallback property creates a function that will
    //create the revenue totals for the page and entire datatable.
    tempObject =
    {
        reportTitle: "Advertiser Revenue Research",
        apiControllerAction: "/api/AdvertiserAudit/GetAdvertiserRevenueResearchList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['advertiser', 'xry'],
        reportPath: "/Products/XRY/reports/xrygenericreport.html",
        footerFormat: '<tfoot class="rev-research-footer" style="display: none;"><tr>' +
            '<th></th>' +
            '<th></th>' +
            '<th></th>' +
            '<th></th>' +
            '<th></th>' +
            '<th></th>' +
            '<th></th>' +
            '<th></th>' +
            '<th></th>' +
            '</tr></tfoot>',
        footerCallback: function (row, data, start, end, display) {

            $(".rev-research-footer").show();

            var api = this.api(), data;

            // Remove the formatting to get integer data for summation
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\$,]/g, '') * 1 :
                    typeof i === 'number' ?
                    i : 0;
            };

            // Total over all pages
            var total = api
                .column(4)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            // Total over this page
            var pageTotal = api
                .column(4, { page: 'current' })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            // Update footer
            $(api.column(4).footer()).html(
                pageTotal.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 0
                }) + ' ( ' + total.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 0
                }) + ' total)'
            );
        }
    }

    return tempObject;
}

function getReportFilterArray_AdvertisersRevenueResearch() {
    var arrayFilters = new Array();
    var arrayObject = new Array();

    arrayObject = {
        token: "Market",
        jsCall: "getXRYMarketList",
        objectName: "ddlMarket",
        onchange: function () {

            getOwnerList($("#ddlMarket").val());

        },
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "AdvertiserName",
        objectName: "txtAdvertiserName",
        jsCall: null,
        required: false,
        multiFieldOption: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "AgencyName",
        jsCall: null,
        objectName: "txtAgencyName",
        required: false,
        multiFieldOption: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Owner",
        jsCall: "getDefaultOwner",
        objectName: "ddlOwner",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "StartDate",
        jsCall: null,
        objectName: "dtStartDate",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "EndDate",
        jsCall: null,
        objectName: "dtEndDate",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_MediaRevenueResearch() {
    var tempObject = new Object();

    var columnsToDisplay = new Array();
    columnsToDisplay.push("market");
    columnsToDisplay.push("advertiser");
    columnsToDisplay.push("media Code");
    columnsToDisplay.push("period");
    columnsToDisplay.push("revenue");
    columnsToDisplay.push("posted By");
    columnsToDisplay.push("date Posted");

    tempObject =
    {
        reportTitle: "Media Revenue Research",
        apiControllerAction: "/api/MediaAdvertiserAudit/GetMediaRevenueResearchList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['advertiser', 'xry'],
        reportPath: "/Products/XRY/reports/xrygenericreport.html",
        footerFormat: '<tfoot class="rev-research-footer" style="display: none;"><tr>' +
            '<th></th>' +
            '<th></th>' +
            '<th></th>' +
            '<th></th>' +
            '<th></th>' +
            '<th></th>' +
            '<th></th>' +
            '</tr></tfoot>',
        footerCallback: function (row, data, start, end, display) {

            $(".rev-research-footer").show();

            var api = this.api(), data;

            // Remove the formatting to get integer data for summation
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\$,]/g, '') * 1 :
                    typeof i === 'number' ?
                    i : 0;
            };

            // Total over all pages
            var total = api
                .column(4)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            // Total over this page
            var pageTotal = api
                .column(4, { page: 'current' })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            // Update footer
            $(api.column(4).footer()).html(
                pageTotal.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 0
                }) + ' ( ' + total.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 0
                }) + ' total)'
            );
        }
    }

    return tempObject;
}

function getReportFilterArray_MediaRevenueResearch() {
    var arrayFilters = new Array();
    var arrayObject = new Array();

    arrayObject = {
        token: "Market",
        jsCall: "getXRYMarketList",
        objectName: "ddlMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "AdvertiserName",
        objectName: "txtAdvertiserName",
        jsCall: null,
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "MediaType",
        jsCall: "getMediaAdvertiserMediaTypeList",
        objectName: "ddlMediaType",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "StartDate",
        jsCall: null,
        objectName: "dtStartDate",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "EndDate",
        jsCall: null,
        objectName: "dtEndDate",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportFilterArray_AEStatusList() {
    var arrayFilters = new Array();
    var arrayObject = new Array();

    arrayObject = {
        token: "FirstName",
        jsCall: null,
        objectName: "txtFirstName",
        multiFieldOption: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "LastName",
        jsCall: null,
        objectName: "txtLastName",
        multiFieldOption: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_AEStatusList() {
    var tempObject = new Object();

    var columnsToDisplay = new Array();
    columnsToDisplay.push("ae");
    columnsToDisplay.push("owner");
    columnsToDisplay.push("market");
    columnsToDisplay.push("active date");
    columnsToDisplay.push("disable date");
    columnsToDisplay.push("linked user");

    //this column is used to create the edit link
    //for each result row
    columnsToDisplay.push({
        "action": "edit",
        "mRender": function (data, type, row) {
            var action = "/admin/AccountExecutive/accountexecutivedetails.html?AccountExecutiveID=" + row.AEId +
                "&AEName=" + row.AE + "&Owner=" + row.Owner +
                "&Market=" + row.Market + "&LinkedUser=" + row["Linked User"] +
                "&ActiveDate=" + row["Active Date"] + "&DisableDate=" + row["Disable Date"];
            return '<a href="' + encodeURI(action) + '" >Details</a>';
        },
        "orderable": false,
        "searchable": false,
        "className": "text-align-right"
    });

    tempObject =
    {
        reportTitle: "Account Executive Status List",
        apiControllerAction: "/api/AccountExecutiveReport/GetAEStatusList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
         product: ['account executive'],
        reportPath: "/Products/XRY/reports/xrygenericreport.html"
    }

    return tempObject;
}

function getReportFilterArray_AdvertisersList() {
    var arrayFilters = new Array();
    var arrayObject = new Array();

    arrayObject = {
        token: "Market",
        jsCall: "getXRYMarketList",
        objectName: "ddlMarket",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "AdvertiserName",
        objectName: "txtAdvertiserName",
        jsCall: null,
        required: true
    }
    arrayFilters.push(arrayObject);

    //The onchange property includes a function that will
    //be executed for that object if it exists.
    arrayObject = {
        token: "Industry",
        jsCall: "getIndustryList",
        objectName: "ddlIndustry",
        onchange: function () {

            getSubIndustryList($("#ddlIndustry").val(), '');

        },
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "SubIndustry",
        jsCall: "getDefaultSubIndustry",
        objectName: "ddlSubIndustry",
        required: false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_AdvertisersList() {
    var tempObject = new Object();

    var columnsToDisplay = new Array();
    columnsToDisplay.push("Market Advertiser");
    columnsToDisplay.push("Active");
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Industry");
    columnsToDisplay.push("Sub Industry");
    columnsToDisplay.push("Date Modified");
    columnsToDisplay.push("Posted By");

    tempObject =
    {
        reportTitle: "Market Advertiser List",
        apiControllerAction: "/api/Advertiser/GetMarketAdvertiserList",
        apiType: "post",
        columnsToDisplay: columnsToDisplay,
        product: ['advertiser', 'xry'],
        reportPath: "/Products/XRY/reports/xrygenericreport.html"
    }

    return tempObject;
}

function getReportFilterArray_AdvertisersAgenciesList() {
    var arrayFilters = new Array();
    var arrayObject = new Array();

    arrayObject = {
        token: "Market",
        jsCall: "getXRYMarketList",
        objectName: "ddlMarket",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "AdvertiserName",
        objectName: "txtAdvertiserName",
        jsCall: null,
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_AdvertisersAgenciesList() {
    var tempObject = new Object();

    var columnsToDisplay = new Array();
    columnsToDisplay.push("Advertiser");
    columnsToDisplay.push("Agency");
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Account Type");

    tempObject =
    {
        reportTitle: "Market Advertiser / Market Agency List",
        apiControllerAction: "/api/Advertiser/GetMarketAdvertiserMarketAgencyList",
        apiType: "post",
        columnsToDisplay: columnsToDisplay,
        product: ['advertiser', 'xry'],
        reportPath: "/Products/XRY/reports/xrygenericreport.html"
    }

    return tempObject;
}

function getReportFilterArray_DisabledAdvertisersList() {
    var arrayFilters = new Array();
    var arrayObject = new Array();

    //Currently no filters

    return arrayFilters;
}

function getReportObject_DisabledAdvertisersList() {
    var tempObject = new Object();

    var columnsToDisplay = new Array();
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Station");
    columnsToDisplay.push("Station Advertiser");
    columnsToDisplay.push("Market Advertiser");

    tempObject =
    {
        reportTitle: "Disabled Advertiser List",
        apiControllerAction: "/api/StationAdvertiser/GetDisabledAdvertiserList",
        apiType: "post",
        columnsToDisplay: columnsToDisplay,
        product: ['advertiser', 'xry'],
        reportPath: "/Products/XRY/reports/xrygenericreport.html"
    }

    return tempObject;
}

function getReportFilterArray_MediaAdvertisersList() {
    var arrayFilters = new Array();
    var arrayObject = new Array();

    arrayObject = {
        token: "Market",
        jsCall: "getXRYMarketList",
        objectName: "ddlMarket",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "MediaAdvertiserName",
        jsCall: null,
        objectName: "txtMediaAdvertiserName",
        required: false,
        multiFieldOption: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "MarketAdvertiserName",
        jsCall: null,
        objectName: "txtMarketAdvertiserName",
        required: false,
        multiFieldOption: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "MediaType",
        jsCall: "getMediaAdvertiserMediaTypeList",
        objectName: "ddlMediaType",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "StartDate",
        jsCall: null,
        objectName: "dtStartDate",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "EndDate",
        jsCall: null,
        objectName: "dtEndDate",
        required: true
    }
    arrayFilters.push(arrayObject);


    return arrayFilters;
}

function getReportObject_MediaAdvertisersList() {
    var tempObject = new Object();

    var columnsToDisplay = new Array();
    columnsToDisplay.push("Media Advertiser");
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Media Type");
    columnsToDisplay.push("Market Advertiser");
    columnsToDisplay.push("Date Modified");
    columnsToDisplay.push("Radio Advertiser");

    tempObject =
    {
        reportTitle: "Media Advertiser List",
        apiControllerAction: "/api/MediaAdvertiser/GetMediaAdvertiserListForReport",
        apiType: "post",
        columnsToDisplay: columnsToDisplay,
        product: ['advertiser', 'xry'],
        reportPath: "/Products/XRY/reports/xrygenericreport.html"
    }

    return tempObject;
}

function getReportFilterArray_ParentAdvertiserList() {
    var arrayFilters = new Array();
    var arrayObject = new Array();

    arrayObject = {
        token: "ParentAdvertiserName",
        jsCall: null,
        objectName: "txtParentAdvertiserName",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_ParentAdvertiserList() {
    var tempObject = new Object();

    var columnsToDisplay = new Array();
    columnsToDisplay.push("Parent Advertiser");
    columnsToDisplay.push("Industry");
    columnsToDisplay.push("Sub Industry");

    tempObject =
    {
        reportTitle: "Parent Advertiser List",
        apiControllerAction: "/api/ParentAdvertiser/GetParentAdvertiserListForReport",
        apiType: "post",
        columnsToDisplay: columnsToDisplay,
        product: ['advertiser', 'xry'],
        reportPath: "/Products/XRY/reports/xrygenericreport.html"
    }

    return tempObject;
}

function getReportFilterArray_ParentAdvertiserAdvertiserList() {
    var arrayFilters = new Array();
    var arrayObject = new Array();

    arrayObject = {
        token: "ParentAdvertiserName",
        jsCall: null,
        objectName: "txtParentAdvertiserName",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_ParentAdvertiserAdvertiserList() {
    var tempObject = new Object();

    var columnsToDisplay = new Array();
    columnsToDisplay.push("Parent Advertiser");
    columnsToDisplay.push("Market Advertiser");
    columnsToDisplay.push("Market");

    tempObject =
    {
        reportTitle: "Parent Advertiser / Market Advertiser List",
        apiControllerAction: "/api/ParentAdvertiser/GetParentAdvertiserMarketAdvertiserList",
        apiType: "post",
        columnsToDisplay: columnsToDisplay,
        product: ['advertiser', 'xry'],
        reportPath: "/Products/XRY/reports/xrygenericreport.html"
    }

    return tempObject;
}

function getReportFilterArray_StationAdvertisersList() {
    var arrayFilters = new Array();
    var arrayObject = new Array();

    arrayObject = {
        token: "Market",
        jsCall: "getXRYMarketList",
        objectName: "ddlMarket",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Station",
        jsCall: "getXrayStationList",
        objectName: "ddlStation",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "StationAdvertiserName",
        jsCall: null,
        objectName: "txtStationAdvertiserName",
        required: false,
        multiFieldOption: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "MarketAdvertiserName",
        jsCall: null,
        objectName: "txtMarketAdvertiserName",
        required: false,
        multiFieldOption: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_StationAdvertisersList() {
    var tempObject = new Object();

    var columnsToDisplay = new Array();

    columnsToDisplay.push("Owner");
    columnsToDisplay.push("Station Advertiser");
    columnsToDisplay.push("Station");
    columnsToDisplay.push("Market Advertiser");
    columnsToDisplay.push("Date Modified");


    tempObject =
    {
        reportTitle: "Station Advertiser List",
        apiControllerAction: "/api/StationAdvertiser/GetStationAdvertiserListForReport",
        apiType: "post",
        columnsToDisplay: columnsToDisplay,
        product: ['advertiser', 'xry'],
        reportPath: "/Products/XRY/reports/xrygenericreport.html"
    }

    return tempObject;
}

function getReportFilterArray_AgencyList() {
    var arrayFilters = new Array();
    var arrayObject = new Array();

    arrayObject = {
        token: "Market",
        jsCall: "getXRYMarketList",
        objectName: "ddlMarket",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "AgencyName",
        jsCall: null,
        objectName: "txtAgencyName",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_AgencyList() {
    var tempObject = new Object();

    var columnsToDisplay = new Array();
    columnsToDisplay.push("Agency");
    columnsToDisplay.push("Account Type");
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Parent Agency");
    columnsToDisplay.push("Date Modified");
    columnsToDisplay.push("Posted By");

    tempObject =
    {
        reportTitle: "Market Agency List",
        apiControllerAction: "/api/Agency/GetMarketAgencyList",
        apiType: "post",
        columnsToDisplay: columnsToDisplay,
        product: ['agency', 'xry'],
        reportPath: "/Products/XRY/reports/xrygenericreport.html"
    }

    return tempObject;
}

function getReportFilterArray_AgencyAdvertiserAccountsList() {
    var arrayFilters = new Array();
    var arrayObject = new Array();

    arrayObject = {
        token: "Market",
        jsCall: "getXRYMarketList",
        objectName: "ddlMarket",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "AgencyName",
        jsCall: null,
        objectName: "txtAgencyName",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_AgencyAdvertiserAccountsList() {
    var tempObject = new Object();

    var columnsToDisplay = new Array();
    columnsToDisplay.push("Agency");
    columnsToDisplay.push("Advertiser");
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Account Type");

    tempObject =
    {
        reportTitle: "Market Agency / Market Advertiser List",
        apiControllerAction: "/api/Agency/GetMarketAgencyMarketAdvertiserList",
        apiType: "post",
        columnsToDisplay: columnsToDisplay,
        product: ['agency', 'xry'],
        reportPath: "/Products/XRY/reports/xrygenericreport.html"
    }

    return tempObject;
}

function getReportFilterArray_DisabledAgencyList() {
    var arrayFilters = new Array();
    var arrayObject = new Array();

    //no filters at this time

    return arrayFilters;
}

function getReportObject_DisabledAgencyList() {
    var tempObject = new Object();

    var columnsToDisplay = new Array();
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Station");
    columnsToDisplay.push("Station Agency");
    columnsToDisplay.push("Market Agency");

    tempObject =
    {
        reportTitle: "Disabled Agency List",
        apiControllerAction: "/api/StationAgency/GetDisabledAgencyList",
        apiType: "post",
        columnsToDisplay: columnsToDisplay,
        product: ['agency', 'xry'],
        reportPath: "/Products/XRY/reports/xrygenericreport.html"
    }

    return tempObject;
}

function getReportFilterArray_ParentAgencyList() {
    var arrayFilters = new Array();
    var arrayObject = new Array();

    arrayObject = {
        token: "ParentAgencyName",
        jsCall: null,
        objectName: "txtParentAgencyName",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_ParentAgencyList() {
    var tempObject = new Object();

    var columnsToDisplay = new Array();
    columnsToDisplay.push("Parent Agency");
    columnsToDisplay.push("Date Setup");
    columnsToDisplay.push("Date Changed");

    tempObject =
    {
        reportTitle: "Parent Agency List",
        apiControllerAction: "/api/ParentAgency/GetParentAgencyListForReport",
        apiType: "post",
        columnsToDisplay: columnsToDisplay,
        product: ['agency', 'xry'],
        reportPath: "/Products/XRY/reports/xrygenericreport.html"
    }

    return tempObject;
}

function getReportFilterArray_ParentAgencyAgencyList() {
    var arrayFilters = new Array();
    var arrayObject = new Array();

    arrayObject = {
        token: "ParentAgencyName",
        jsCall: null,
        objectName: "txtParentAgencyName",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_ParentAgencyAgencyList() {
    var tempObject = new Object();

    var columnsToDisplay = new Array();
    columnsToDisplay.push("Parent Agency");
    columnsToDisplay.push("Market Agency");
    columnsToDisplay.push("Market");

    tempObject =
    {
        reportTitle: "Parent Agency / Market Agency List",
        apiControllerAction: "/api/ParentAgency/GetParentAgencyMarketAgencyList",
        apiType: "post",
        columnsToDisplay: columnsToDisplay,
        product: ['agency', 'xry'],
        reportPath: "/Products/XRY/reports/xrygenericreport.html"
    }

    return tempObject;
}

function getReportFilterArray_StationAgencyList() {
    var arrayFilters = new Array();
    var arrayObject = new Array();

    arrayObject = {
        token: "Market",
        jsCall: "getXRYMarketList",
        objectName: "ddlMarket",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Station",
        jsCall: "getXrayStationList",
        objectName: "ddlStation",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "StationAgencyName",
        jsCall: null,
        objectName: "txtStationAgencyName",
        required: false,
        multiFieldOption: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "MarketAgencyName",
        jsCall: null,
        objectName: "txtMarketAgencyName",
        required: false,
        multiFieldOption: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_StationAgencyList() {
    var tempObject = new Object();

    var columnsToDisplay = new Array();
    columnsToDisplay.push("Owner");
    columnsToDisplay.push("Station Agency");
    columnsToDisplay.push("Station");
    columnsToDisplay.push("Station Agency Code");
    columnsToDisplay.push("Market Agency");
    columnsToDisplay.push("Date Modified");

    tempObject =
    {
        reportTitle: "Station Agency List",
        apiControllerAction: "/api/StationAgency/GetStationAgencyListForReport",
        apiType: "post",
        columnsToDisplay: columnsToDisplay,
        product: ['agency', 'xry'],
        reportPath: "/Products/XRY/reports/xrygenericreport.html"
    }

    return tempObject;
}
// XRY Reports end here

function getReportFilterArray_UsersNotSetupInSystem() {
    var arrayFilters = new Array();
    var arrayObject = new Array();
 

    return arrayFilters;
}

function getReportObject_UsersNotSetupInSystem()
{
    var tempObject = new Object();

    var columnsToDisplay = new Array();

    tempObject =
    {
        reportTitle: "Users Not Setup in the System",
        apiControllerAction: "/api/PersonnelReport/GetUsersNotSetupInSystemList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['personnel'],
        sortable : false

    }

    return tempObject;
}
 
function getReportFilterArray_XRAYDataRetentionList() {
    var arrayFilters = new Array();
    var arrayObject = new Array();


    return arrayFilters;
}

function getReportObject_XRAYDataRetentionList() {
    var tempObject = new Object();

    var columnsToDisplay = new Array();

    tempObject =
    {
        reportTitle: "XRAY Data Retention Exceptions",
        apiControllerAction: "/api/XRAYReport/GetDataRetentionList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['xry'],
        sortable: true

    }

    return tempObject;
}

function getReportFilterArray_MRRComplimentaryMarketRevenueEntry() {
    var arrayFilters = new Array();
    var arrayObject = new Array();


    return arrayFilters;
}

function getReportObject_MRRComplimentaryMarketRevenueEntry()
{
    var tempObject = new Object();

    var columnsToDisplay = new Array();

    tempObject =
    {
        reportTitle: "MRR Complimentary Market Revenue Entry",
        apiControllerAction: "/api/MRRReport/GetComplimentaryMarketRevenueEntryList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['mrr'],
        sortable: true

    }

    return tempObject;
}
//
function getReportFilterArray_MRRModeUsageSummary() {
    var arrayFilters = new Array();
    var arrayObject = new Array();
    arrayObject = {
        token: "StartDate",
        jsCall: null,
        objectName: "dtStartDate",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "EndDate",
        jsCall: null,
        objectName: "dtEndDate",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_MRRModeUsageSummary()
{
    var tempObject = new Object();

    var columnsToDisplay = new Array();

    columnsToDisplay.push("Effective Report Title");
    columnsToDisplay.push("Report Type");
    columnsToDisplay.push("Total Reports");
    columnsToDisplay.push("Total Interactive");
    columnsToDisplay.push("% Interactive");
    columnsToDisplay.push("Total PDF");
    columnsToDisplay.push("% PDF");
    columnsToDisplay.push("Total Excel");
    columnsToDisplay.push("% Excel");

    tempObject =
    {
        reportTitle: "MRR Output Mode Usage Summary",
        apiControllerAction: "/api/MRRReport/GetMRRModeUsageSummary",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['mrr'],
        sortable: false

    }

    return tempObject;
}

function getReportFilterArray_MRROutstandingStationList()
{

    var arrayFilters = new Array();
    var arrayObject = new Array();

 
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

    arrayObject = {
        token: "MediaType",
        jsCall: "getMediaTypeList",
        objectName: "ddlMediaType",
        required: false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_MRROutstandingStationList() {
    var tempObject = new Object();

    var columnsToDisplay = new Array();

    columnsToDisplay.push("Owner");
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Station");
    columnsToDisplay.push("Media Type");
    columnsToDisplay.push("Contact Type");
    columnsToDisplay.push("Name");
    columnsToDisplay.push("Email");
    columnsToDisplay.push("Phone");
    columnsToDisplay.push("Position");

    tempObject =
    {
        reportTitle: "MRR Outstanding Stations",
        apiControllerAction: "/api/MRRReport/GetOutstandingStations",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['mrr'],
        sortable: true

    }

    return tempObject;
}

function getReportFilterArray_TVBOutstandingStationList() {

    var arrayFilters = new Array();
    var arrayObject = new Array();


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


    arrayObject = new Object();
    arrayObject = {
        token: "TVBOutstandingStationMode",
        objectName: "ddlTVBOutstandingStationMode",
        jsCall: "getTVBOutstandingStationMode",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_TVBOutstandingStationList() {
    var tempObject = new Object();

    var columnsToDisplay = new Array();

    columnsToDisplay.push("Owner");
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Station");
    columnsToDisplay.push("Media Type");
    columnsToDisplay.push("Contact Type");
    columnsToDisplay.push("Name");
    columnsToDisplay.push("Email");
    columnsToDisplay.push("Phone");
    columnsToDisplay.push("Position");

    tempObject =
    {
        reportTitle: "TVB Outstanding Stations",
        apiControllerAction: "/api/TVBReport/GetOutstandingStations",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['tvb'],
        sortable: true

    }

    return tempObject;
}

function getReportFilterArray_AdvertiserDisabledAndNotMergedList() {

    var arrayFilters = new Array();
    var arrayObject = new Array();


    arrayObject = new Object();
    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['XRY'],
        objectName: "ddlMarket",
        required: false
    }
    arrayFilters.push(arrayObject);



    return arrayFilters;
}
function getReportObject_AdvertiserDisabledAndNotMergedList()
{

    var tempObject = new Object();

    var columnsToDisplay = new Array();

    //columnsToDisplay.push("Owner");
    //columnsToDisplay.push("Market");
    //columnsToDisplay.push("Station");
    //columnsToDisplay.push("Media Type");
    //columnsToDisplay.push("Contact Type");
    //columnsToDisplay.push("Name");
    //columnsToDisplay.push("Email");
    //columnsToDisplay.push("Phone");
    //columnsToDisplay.push("Position");

    columnsToDisplay.push("Market");
    columnsToDisplay.push("Advertiser");
    columnsToDisplay.push("Industry");
    columnsToDisplay.push("Sub-Industry");
    columnsToDisplay.push("Media Code");
    columnsToDisplay.push("Parent Advertiser");
    columnsToDisplay.push("Date Setup");
    columnsToDisplay.push("Date Changed");
    columnsToDisplay.push("Disable Date");
    columnsToDisplay.push("Posted By");
    columnsToDisplay.push("Has Revenue");

    tempObject =
    {
        reportTitle: "Advertisers Disabled / Not Merged List",
        apiControllerAction: "/api/XRayReport/GetAdvertisersDisabledWithoutMerge",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['xry', 'advertiser'],
        sortable: true

    }

    return tempObject;
}

function getReportFilterArray_AgencyDisabledAndNotMergedList() {

    var arrayFilters = new Array();
    var arrayObject = new Array();
 
    arrayObject = new Object();
    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['XRY'],
        objectName: "ddlMarket",
        required: false
    }
    arrayFilters.push(arrayObject);



    return arrayFilters;
}
function getReportObject_AgencyDisabledAndNotMergedList() {

    var tempObject = new Object();

    var columnsToDisplay = new Array();

    //columnsToDisplay.push("Owner");
    //columnsToDisplay.push("Market");
    //columnsToDisplay.push("Station");
    //columnsToDisplay.push("Media Type");
    //columnsToDisplay.push("Contact Type");
    //columnsToDisplay.push("Name");
    //columnsToDisplay.push("Email");
    //columnsToDisplay.push("Phone");
    //columnsToDisplay.push("Position");

    columnsToDisplay.push("Market");
    columnsToDisplay.push("Agency");
    columnsToDisplay.push("Account Type");
    columnsToDisplay.push("Parent Agency");
    columnsToDisplay.push("Date Setup");
    columnsToDisplay.push("Date Changed");
    columnsToDisplay.push("Disable Date");
    columnsToDisplay.push("Posted By");
    columnsToDisplay.push("Has Revenue");

    tempObject =
    {
        reportTitle: "Agencies Disabled / Not Merged List",
        apiControllerAction: "/api/XRayReport/GetAgenciesDisabledWithoutMerge",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['xry', 'agency'],
        sortable: true

    }

    return tempObject;
}

function getReportFilterArray_APILogList() {

    var arrayFilters = new Array();
    var arrayObject = new Array();

    arrayObject = new Object();
    arrayObject = {
        token: "APIController",
        jsCall: "getAPIControllerList",
        objectName: "ddlAPIController",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "APIAction",
        jsCall: "getAPIActionList",
        objectName: "ddlAPIAction",
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

    arrayObject = new Object();
    arrayObject = {
        token: "DaysBack",
        jsCall: "getAPIActionList",
        objectName: "ddlAction",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "InternalUser",
        jsCall: "getInternalUserList",
        objectName: "ddlInternalUser",
        required: false
    }
    arrayFilters.push(arrayObject);
    return arrayFilters;
}
function getReportObject_APILogList() {

    var tempObject = new Object();

    var columnsToDisplay = new Array();

    tempObject =
    {
        reportTitle: "API Log List",
        apiControllerAction: "/api/APIAccess/GetAPILogList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['misc', 'personnel', 'tech'],
        sortable: true

    }

    return tempObject;
}

function getReportFilterArray_ImpersonationLogList() {

    var arrayFilters = new Array();
    var arrayObject = new Array();

    arrayObject = new Object();
    arrayObject = {
        token: "InternalUser",
        jsCall: "getInternalUserList",
        objectName: "ddlInternalUser",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "StartDate",
        jsCall: null,
        objectName: "dtStartDate",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "EndDate",
        jsCall: null,
        objectName: "dtEndDate",
        required: true
    }
    arrayFilters.push(arrayObject);


    return arrayFilters;
}
function getReportObject_ImpersonationLogList() {

    var tempObject = new Object();

    var columnsToDisplay = new Array();

    tempObject =
    {
        reportTitle: "Impersonation Log List",
        apiControllerAction: "/api/PersonnelReport/GetImpersonationLogList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['misc', 'personnel','tech'],
        sortable: true

    }

    return tempObject;
}


//Corporate Reports 

function getReportFilterArray_TrafficSystemAdvertiser() {
    var arrayFilters = new Array();
    var arrayObject = new Array();

    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerList",
        objectName: "ddlOwner",
        required: true
    }

    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_TrafficSystemAdvertiser() {
    var tempObject = new Object();

    tempObject = {
        reportTitle: "Advertiser Translation",
        apiControllerAction: "/api/CorporateReport/InsertTrafficSystemAdvertiserReportIntoQueue",
        apiType: 'post',
        product: ['corporate'],
        reportPath: "/Products/XRY/reports/xrycorporatereport.html"
    }

    return tempObject;

}

function getReportFilterArray_CorporateAgency() {
    var arrayFilters = new Array();
    var arrayObject = new Array();

    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerList",
        objectName: "ddlOwner",
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

function getReportObject_CorporateAgency() {
    var tempObject = new Object();

    tempObject = {
        reportTitle: "Corporate Agency",
        apiControllerAction: "/api/CorporateReport/InsertCorporateAgencyReportIntoQueue",
        apiType: 'post',
        product: ['corporate'],
        reportPath: "/Products/XRY/reports/xrycorporatereport.html"
    }

    return tempObject;
}

function getReportFilterArray_MonthToMonth() {
    var arrayFilters = new Array();
    var arrayObject = new Array();

    arrayObject = {
        token: "Year",
        jsCall: "getYearList",
        objectName: "ddlYear",
        required: true
    }

    arrayFilters.push(arrayObject)

    arrayObject = {
        token: "Period",
        jsCall: "getPeriodList",
        objectName: "ddlPeriod",
        required: true
    }

    arrayFilters.push(arrayObject)

    return arrayFilters;
}

function getReportObject_MonthToMonth() {
    var rempObject = new Object();

    tempObject = {
        reportTitle: "Month to Month",
        apiControllerAction: "/api/CorporateReport/InsertMonthToMonthReportIntoQueue",
        apiType: "post",
        product: ['corporate'],
        reportPath: "/Products/XRY/reports/xrycorporatereport.html"
    }

    return tempObject;
}


function getReportFilterArray_TimeSalesVsRepBilling() {

    var arrayFilters = new Array();
    var arrayObject = new Array();

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

    arrayObject = new Object();
    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['TVB'],
        objectName: "ddlMarket",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['TVB'],
        objectName: "ddlOwner",
        required: false
    }
    arrayFilters.push(arrayObject);
    return arrayFilters;
}
function getReportObject_TimeSalesVsRepBilling() {

    var tempObject = new Object();

    var columnsToDisplay = new Array();

    tempObject =
    {
        reportTitle: "Time Sales vs Rep Billing",
        apiControllerAction: "/api/TVBReport/GetTimeSalesVersusRepBilling",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['tvb'],
        sortable: true

    }

    return tempObject;
}

function getReportFilterArray_RepBillingSubmissionStatusList() {

    var arrayFilters = new Array();
    var arrayObject = new Array();

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

    arrayObject = new Object();
    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['TVB'],
        objectName: "ddlMarket",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['TVB'],
        objectName: "ddlOwner",
        required: false
    }
    arrayFilters.push(arrayObject);
    return arrayFilters;
}
function getReportObject_RepBillingSubmissionStatusList() {

    var tempObject = new Object();

    var columnsToDisplay = new Array();

    tempObject =
    {
        reportTitle: "Rep Billing Submission Status List",
        apiControllerAction: "/api/TVBReport/GetRepBillingSubmissionStatus",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['tvb'],
        sortable: true

    }

    return tempObject;
}

function getReportFilterArray_RepBillingStationList() {

    var arrayFilters = new Array();
    var arrayObject = new Array();

    arrayObject = new Object();
    arrayObject = {
        token: "RepFirm",
        objectName: "ddlRepFirm",
        jsCall: "getRepFirmList",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['TVB'],
        objectName: "ddlMarket",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['TVB'],
        objectName: "ddlOwner",
        required: false
    }
    arrayFilters.push(arrayObject);
    return arrayFilters;
}
function getReportObject_RepBillingStationList() {

    var tempObject = new Object();

    var columnsToDisplay = new Array();

    tempObject =
    {
        reportTitle: "Rep Firm Station List",
        apiControllerAction: "/api/TVBReport/GetRepBillingStationList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['tvb'],
        sortable: true

    }

    return tempObject;
}

function getReportFilterArray_TimeSalesStationList() {

    var arrayFilters = new Array();
    var arrayObject = new Array();

    arrayObject = new Object();
    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['TVB'],
        objectName: "ddlMarket",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['TVB'],
        objectName: "ddlOwner",
        required: false
    }
    arrayFilters.push(arrayObject);
    return arrayFilters;
}
function getReportObject_TimeSalesStationList() {

    var tempObject = new Object();

    var columnsToDisplay = new Array();

    tempObject =
    {
        reportTitle: "Time Sales Station List",
        apiControllerAction: "/api/TVBReport/GetTimeSalesStationList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['tvb'],
        sortable: true

    }

    return tempObject;
}

function getReportFilterArray_RepBillingCompareList() {

    var arrayFilters = new Array();
    var arrayObject = new Array();

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

    arrayObject = new Object();
    arrayObject = {
        token: "PriorYear",
        jsCall: "getYearList",
        objectName: "ddlPriorYear",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "PriorPeriod",
        objectName: "ddlPriorPeriod",
        jsCall: "getPeriodList",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['TVB'],
        objectName: "ddlMarket",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['TVB'],
        objectName: "ddlOwner",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "RepFirm",
        objectName: "ddlRepFirm",
        jsCall: "getRepFirmList",
        required: false
    }
    arrayFilters.push(arrayObject);
    return arrayFilters;
}
function getReportObject_RepBillingCompareList() {

    var tempObject = new Object();

    var columnsToDisplay = new Array();

    tempObject =
    {
        reportTitle: "Rep Billing Compare",
        apiControllerAction: "/api/TVBReport/GetRepBillingCompare",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['tvb'],
        sortable: true

    }

    return tempObject;
}

function getReportFilterArray_TimeSalesCompareList() {

    var arrayFilters = new Array();
    var arrayObject = new Array();

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

    arrayObject = new Object();
    arrayObject = {
        token: "PriorYear",
        jsCall: "getYearList",
        objectName: "ddlPriorYear",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "PriorPeriod",
        objectName: "ddlPriorPeriod",
        jsCall: "getPeriodList",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['TVB'],
        objectName: "ddlMarket",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['TVB'],
        objectName: "ddlOwner",
        required: false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_TimeSalesCompareList() {

    var tempObject = new Object();

    var columnsToDisplay = new Array();

    tempObject =
    {
        reportTitle: "Time Sales Compare",
        apiControllerAction: "/api/TVBReport/GetTimeSalesCompare",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['tvb'],
        sortable: true

    }

    return tempObject;
}

function getReportFilterArray_TimeSalesCompleteRevenueList() {

    var arrayFilters = new Array();
    var arrayObject = new Array();

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

    arrayObject = new Object();
    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['TVB'],
        objectName: "ddlMarket",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['TVB'],
        objectName: "ddlOwner",
        required: false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_TimeSalesCompleteRevenueList() {

    var tempObject = new Object();

    var columnsToDisplay = new Array();

    tempObject =
    {
        reportTitle: "Time Sales Complete Revenue List",
        apiControllerAction: "/api/TVBReport/GetTimeSalesCompleteRevenue",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['tvb'],
        sortable: true

    }

    return tempObject;
}