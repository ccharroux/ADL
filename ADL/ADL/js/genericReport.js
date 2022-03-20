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
reportName.push("rptParentOwnershipList");
reportName.push("rptOwnershipList");
reportName.push("rptActiveStationList");
reportName.push("rptDisabledStationList");
reportName.push("rptStationChanges");
reportName.push("rptMRREstimatedStationList");
reportName.push("rptMRRStationManagerList");
reportName.push("rptDetailedStationSetup");
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

// TVB
reportName.push("rptTimeSalesVsRepBilling");
reportName.push("rptRepBillingSubmissionStatusList");
reportName.push("rptRepBillingStationList");
reportName.push("rptTimeSalesStationList");
reportName.push("rptRepBillingCompareList");
reportName.push("rptTimeSalesCompareList");
reportName.push("rptTimeSalesCompleteRevenueList");
reportName.push("rptTimeSalesPersonnelContactList");
reportName.push("rptPersonnelContactListForEstimates");
reportName.push("rptPersonnelContactListByRepFirm");
reportName.push("rptAEStatusList");
reportName.push("rptAdvertisers");
reportName.push("rptMediaAdvertisers");
reportName.push("rptStationAdvertisers");
reportName.push("rptAgencies");
reportName.push("rptStationAgencies");
reportName.push("rptAdvertisersRevenueResearch");
reportName.push("rptMediaRevenueResearch");
reportName.push("rptMarketStationProductCountList");
reportName.push("rptTrafficSystemAdvertiser");
reportName.push("rptCorporateAgency");
reportName.push("rptMonthToMonth");
reportName.push("rptLAIndSummary");
reportName.push("rptIRMktbyIndAnalysis");
reportName.push("rptTop50Advertisers");
reportName.push("rptPostedData");
reportName.push("rptActiveMarketLog");
reportName.push("rptActiveMarketLogSummary");
reportName.push("rptMRRStationSubmissionStatusByMarket");
reportName.push("rptExclusiveAdvertiserChanges");
reportName.push("rptMRRMarketTotalsForNAB");
reportName.push("rptSweeperLogMRRRevenue");
reportName.push("rptRABSummaryByRegion");
reportName.push("rptRAB");
reportName.push("rptProductMarketOwnerActivationList");
reportName.push("rptXRYMarketExclusivitySettings");
reportName.push("rptAEWebUserMatches");
reportName.push("rptRevenueWithDisabledAdvertisersAgencies");
reportName.push("rptMarketStationSummary");
reportName.push("rptXRYImportTypeIssueList");
reportName.push("rptXRYContactListByMarketOwner");
reportName.push("rptXRYAdvertiserExclusivitySpecs");
reportName.push("rptDemoMarketList");
reportName.push("rptDemoStationList");
reportName.push("rptInactiveStationAssignmentList");
reportName.push("rptMRRStationSubmissionStatus");
reportName.push("rptMediaRevenueWithDisabledAdvertisers");
reportName.push("rptComplementaryMarketStationGapAnalysis");
reportName.push("rptUnreleasedMarketIssueList");
reportName.push("rptTVBReviewUserListing");
reportName.push("rptUsersByProduct");
//reportName.push("rptOutstandingStations");
reportName.push("rptListErrors");

reportName.push("rptXRYOwnersWithoutRecipients")
reportName.push("rptMRRImportMarketCategoryWarningToleranceList")
reportName.push("rptAccountExecutiveStatusMarketOwnerList")
reportName.push("rptMediaActionList")
reportName.push("rptAdvertiserListByOwner");
reportName.push("rptAgencyListByOwner");
reportName.push("rptUsersNotLoggedInAfterDateList");
reportName.push("rptStandardInputList");
reportName.push("rptQueryMarketCounts");
reportName.push("rptQueryUserCounts");
reportName.push("rptQueryCountsByOwnerMarket");
reportName.push("rptQueryDetailByOwnerMarket");
reportName.push("rptImportScriptListByOwner");
reportName.push("rptStandardInputNotIncludedList");
reportName.push("rptMRRUserListing");
reportName.push("rptMRRUploadTemplateByOwnerWithRevenueExtended");
reportName.push("rptCategoryGrowthByMarket");
reportName.push("rptTimeSalesVsAllRepBillingStations");
reportName.push("rptPersonnelGroupList");
reportName.push("rptAdvertiserByCategory");
reportName.push("rptTVBInvalidStationList");
reportName.push("rptMRRCategoryYTDList");
reportName.push("rptXrayDeleteStationRevenueLogList");
reportName.push("rptExclusiveAccountChanges");
reportName.push("rptMarketInfo");
reportName.push("rptInternalUserFavorites");
reportName.push("rptAsyncStatusIncompleteList");
reportName.push("rptMisMatchedParentAdvertiserIndustrySubIndustryList");
reportName.push("rptMRROwnerGroupMarketAnalysis");
reportName.push("rptXRYOwnerGroupMarketAnalysis");
reportName.push("rptTVBReportingMarketStatus");
reportName.push("rptTVBStationIssueList");
reportName.push("rptGetParentHistoryAndMarketStatusByParentMarket");
reportName.push("rptGetParentAdvertiserSetupStatusList");
reportName.push("rptGetParentAgencySetupStatusList");
reportName.push("rptDMXXRYRevenueReviewByParentMarket");
reportName.push("rptDMXXRYRevenueReviewByMarket");
reportName.push("rptDMXXRYRevenueReviewByStation");
reportName.push("rptDMXXRYRevenueReviewByParentAdvertiser");
reportName.push("rptDMXXRYRevenueReviewByParentAgency");
reportName.push("rptDMXXRYRevenueReviewByAdvertiser");
reportName.push("rptDMXXRYRevenueReviewByAgency");
reportName.push("rptDMAParentMarketAssignedCategoryTemplate");
reportName.push("rptMRRStationRevenueYTDByMediaType");
reportName.push("rptDMXParentMarketExclusivitySettings");

reportName.push("rptMarketHoldList");
reportName.push("rptStationParticipationDMX");
reportName.push("rptStationParticipationDMA");
reportName.push("rptStationParticipationTVB");
reportName.push("rptStationParticipationXRY");
reportName.push("rptStationParticipationMRR");

reportName.push("rptMRRCategoryMissingDefinitionList");
reportName.push("rptDMXUserListing");
reportName.push("rptDMAUserListing");



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
        //console.log(module);
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
    var reportNameArray = new Array();
    var reportNumberArray = new Array();

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
                if (reportObjectArray[i].product[v].toLowerCase() == rptType[z].toLowerCase())
                {
                    rptHit = true;
                    var index = reportNumberArray.findIndex(function (element, index, array) {
                         return element == i;
                    });

                    if (index == -1) {
                        reportNameArray.push(reportObjectArray[i].reportTitle);
                        reportNumberArray.push(i);
                    }
                }
            }
        }
  
    }
 
    if (rptHit == true)
    {
        var ddlStr = "<option value='-1'>  -- Select a Report --  </option>";


        for (var i = 0; i < reportNameArray.length; i++)
        {
            ddlStr = ddlStr  +  "<option value='" + reportNumberArray[i] + "'>" + reportNameArray[i] + "</option>";
        }

        $("#" + control).html(ddlStr);
        $("#" + container).show();

        try {
            convertToChosenSelect(control, gChosenParams.allowSearchContains, gChosenParams.allowSplitWordSearch);
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

function buildReportLink(row, reportNameToFind)
{
     //console.log(reportNameToFind);
    var adjustedReport = reportNameToFind.toString().replace("AgencyFromAdvertiser", "Agency").replace("AgencyFromParent", "Agency");

    //console.log(adjustedReport);
    var revenuePeriodParts = row["Revenue Period"].split("/");
    var reportIndex = reportName.indexOf(adjustedReport);
    var action = "";
    var link = "";

    if (reportIndex == -1) {
        return link;
    }

    switch (reportNameToFind)
    {
        case "rptDMXXRYRevenueReviewByParentAgency":
            action = "/utilities/genericreport/genericReport.html?reportid=" + reportIndex +
                "&parentmarketid=" + $("#ddlParentMarket").val() +
                "&marketid=" + getIDFromString(row["Market"]) +
                "&parentadvertiserid=" + getIDFromString(row["Parent Advertiser"]) +
                "&stationid=" + getIDFromString(row["Station"]) +
                "&revenueperiod=" + revenuePeriodParts[1] +
                "&revenueyear=" + revenuePeriodParts[0] +
                "&industryid=" + getIDFromString(row["Industry"]);
            link = '<a href="' + action + '">' + 'by Parent Agency</a>';
            break;

        case "rptDMXXRYRevenueReviewByAdvertiser":
            action = "/utilities/genericreport/genericReport.html?reportid=" + reportIndex +
                "&parentmarketid=" + $("#ddlParentMarket").val() +
                "&marketid=" + getIDFromString(row["Market"]) +
                "&parentadvertiserid=" + getIDFromString(row["Parent Advertiser"]) +
                "&stationid=" + getIDFromString(row["Station"]) +
                "&revenueperiod=" + revenuePeriodParts[1] +
                "&revenueyear=" + revenuePeriodParts[0] +
                "&industryid=" + getIDFromString(row["Industry"]);
            link = '<a href="' + action + '">' + 'by Advertiser</a>';
            break;

        case "rptDMXXRYRevenueReviewByAgencyFromAdvertiser":
            //"&parentagencyid=" + getIDFromString(row["Parent Agency"]) +
                //"&parentadvertiserid=" + getIDFromString(row["Parent Advertiser"]) +
            action = "/utilities/genericreport/genericReport.html?reportid=" + reportIndex +
                "&parentmarketid=" + $("#ddlParentMarket").val() +
                "&marketid=" + getIDFromString(row["Market"]) +
                "&advertiserid=" + getIDFromString(row["Advertiser"]) +
                "&stationid=" + getIDFromString(row["Station"]) +
                "&revenueperiod=" + revenuePeriodParts[1] +
                "&revenueyear=" + revenuePeriodParts[0] +
                "&industryid=" + getIDFromString(row["Industry"]);
            if (row["Industry"] == "TOTALS") {
                link = "";
            }
            else {
                link = '<a href="' + action + '">' + 'by Agency</a>';
            }
 
            break;

        case "rptDMXXRYRevenueReviewByAgencyFromParent":
            //"&parentadvertiserid=" + getIDFromString(row["Parent Advertiser"]) +
                //"&advertiserid=" + getIDFromString(row["Advertiser"]) +
 
            action = "/utilities/genericreport/genericReport.html?reportid=" + reportIndex +
                "&parentmarketid=" + $("#ddlParentMarket").val() +
                "&marketid=" + getIDFromString(row["Market"]) +
                "&parentagencyid=" + getIDFromString(row["Parent Agency"]) +
                "&stationid=" + getIDFromString(row["Station"]) +
                "&revenueperiod=" + revenuePeriodParts[1] +
                "&revenueyear=" + revenuePeriodParts[0] +
                "&industryid=" + getIDFromString(row["Industry"]);
            if (row["Industry"] == "TOTALS") {
                link = "";
            }
            else {
                link = '<a href="' + action + '">' + 'by Agency</a>';
            }

            break;

        case "rptDMXXRYRevenueReviewByParentAdvertiser":
            action = "/utilities/genericreport/genericReport.html?reportid=" + reportIndex +
                "&parentmarketid=" + $("#ddlParentMarket").val() +
                "&marketid=" + getIDFromString(row["Market"]) +
                "&stationid=" + getIDFromString(row["Station"]) +
                "&revenueperiod=" + revenuePeriodParts[1] +
                "&revenueyear=" + revenuePeriodParts[0] +
                "&industryid=" + getIDFromString(row["Industry"]);
                link = '<a href="' + action + '">' + 'by Parent Advertiser</a>';
            break;

        case "rptDMXXRYRevenueReviewByMarket":
            action = "/utilities/genericreport/genericReport.html?reportid=" + reportIndex +
                   "&parentmarketid=" + $("#ddlParentMarket").val() +
                   "&marketid=" + getIDFromString(row["Market"]) +
                   "&revenueperiod=" + revenuePeriodParts[1] +
                   "&revenueyear=" + revenuePeriodParts[0] +
                   "&industryid=" + getIDFromString(row["Industry"]);
            link = '<a href="' + action + '">' + 'by Market</a>';
            break;

        case "rptDMXXRYRevenueReviewByStation":
                action = "/utilities/genericreport/genericReport.html?reportid=" + reportIndex +
                "&parentmarketid=" + $("#ddlParentMarket").val() +
                "&marketid=" + getIDFromString(row["Market"]) +
                "&revenueperiod=" + revenuePeriodParts[1] +
                "&revenueyear=" + revenuePeriodParts[0] +
                "&industryid=" + getIDFromString(row["Industry"]);
                link = '<a href="' + action + '">' + 'by Station</a>';
            break;

        case "rptDMXXRYRevenueReviewByParentMarket":
            action = "/utilities/genericreport/genericReport.html?reportid=" + reportIndex +
                "&parentmarketid=" + $("#ddlParentMarket").val() +
                "&revenueperiod=" + revenuePeriodParts[1] +
                "&revenueyear=" + revenuePeriodParts[0];
            link =  '<a href="' + action + '">' + 'by Parent Market</a>';
            break;
    }
 
    return link;

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
        reportTitle:  "MRR Market Summary",
        apiControllerAction:  "/api/MRRReport/GetMarketSummary",
        apiType:  "get",
        columnsToDisplay:  columnsToDisplay,
        product: ['mrr', 'MRR Data Review', 'mrr delivery', 'mrr pre-release'],
        approved : true
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
 
        reportTitle:  "XRay Usage Report",
        apiControllerAction:  "/api/XRAYReport/GetXRayUsage",
        apiType:  "get",
        columnsToDisplay:  columnsToDisplay,
        product: ['xry'],
        approved: true
    }

    return tempObject;
}

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
    columnsToDisplay.push("Report Date Time");
    columnsToDisplay.push("User");
    columnsToDisplay.push("Report Title");
    columnsToDisplay.push("Login Date Time");
    columnsToDisplay.push("Browser");
    //columnsToDisplay.push("MarketId");
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Owner Group");
    columnsToDisplay.push("Email");
    columnsToDisplay.push("Output Format");

    tempObject =
    {
 
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

    columnsToDisplay.push("Report Date");
    columnsToDisplay.push("Report Title");
    columnsToDisplay.push("Login Date");
    columnsToDisplay.push("Browser");
    columnsToDisplay.push("Market(s)"); 
    columnsToDisplay.push("Owner(s)");
    columnsToDisplay.push("Email");
    columnsToDisplay.push("User");

    tempObject =
    {
 
        reportTitle:  "TVB Usage Report",
        apiControllerAction:  "/api/TVBReport/GetTVBUsage",
        apiType:  "get",
        columnsToDisplay:  columnsToDisplay,
        product: ['tvb'],
        approved: true
    }

    return tempObject;

}

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

 

    return arrayFilters;
}
function getReportObject_MarketRevenueHourlyActivity() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    columnsToDisplay.push("Hour");
    columnsToDisplay.push("Number Logins");
    columnsToDisplay.push("Number Report Sessions");
    columnsToDisplay.push("Number Report Sessions Weighted");
    columnsToDisplay.push("Average Generation Time");
    columnsToDisplay.push("Maximum Generation Time");

    columnsToDisplay.push("Number Incomplete Report Sessions");
    columnsToDisplay.push("Number Submissions");

    tempObject =
    {
        // id: rptMarketRevenueHourlyActivity,
        reportTitle:  "MRR Hourly Usage",
        apiControllerAction:  "/api/MRRReport/GetHourlyActivity",
        apiType:  "get",
        columnsToDisplay:  columnsToDisplay,
        product: ['mrr'],
        approved: true
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

    tempObject =
    {
        // id: rptUserActivityDetail,
        reportTitle:  "XRay User Activity - Detail",
        apiControllerAction:  "/api/XRAYReport/GetUserActivityDetail",
        apiType:  "get",
        columnsToDisplay:  columnsToDisplay,
        product: ['xry'],
        approved: true
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
        token: "Product",
        jsCall: "getProductListHidden",
        jsCallParameters: ['XRY', true],
        objectName: "ddlProduct",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProductMediaType",
        jsCallParameters: ['XRY'],
        objectName: "ddlMarket",
        reloadBasedProduct: true,
        reloadBasedMediaType: true,
        required: false

    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProductMarketMediaType",
        jsCallParameters: ['XRY'],
        objectName: "ddlOwner",
        reloadBasedProduct: true,
        reloadBasedMarket: true,
        reloadBasedMediaType: true,
        required: false
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
        token: "Position",
        jsCall: "getPositionList",
        objectName: "ddlPosition",
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
function getReportObject_UserListing() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    columnsToDisplay.push("Access Level");
    columnsToDisplay.push("User")
    columnsToDisplay.push("Email");
    columnsToDisplay.push("Phone");
    columnsToDisplay.push("Position");
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Owner");

    tempObject =
    {
        // id: rptUserListing,
        reportTitle:  "XRAY User Listing",
        apiControllerAction:  "/api/XRAYReport/GetXRAYUserListing",
        apiType:  "get",
        columnsToDisplay:  columnsToDisplay,
        product: ['personnel', 'xry'],
        approved: true
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
    //columnsToDisplay.push("AE_AEID");
    //columnsToDisplay.push("AE Name");
    //columnsToDisplay.push("SA_PersonnelID");
    //columnsToDisplay.push("SA_Primary");
    //columnsToDisplay.push("AE Status");
    //columnsToDisplay.push("User_Name");
    //columnsToDisplay.push("User Status");
    //columnsToDisplay.push("Last Activity");

    tempObject =
    {
        // id: rptAEStatus,
        reportTitle:  "XRay Account Executive Status",
        apiControllerAction:  "/api/AccountExecutiveReport/GetAEStatus",
        apiType:  "get",
        columnsToDisplay:  columnsToDisplay,
        product: ['xry', 'account executive'],
        approved: true
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

    arrayObject = {
        token: "Position",
        jsCall: "getPositionList",
        objectName: "ddlPosition",
        required: false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_TVBUserListing() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    columnsToDisplay.push("Access Level");
    columnsToDisplay.push("User");
    columnsToDisplay.push("Email");
    columnsToDisplay.push("Phone");
    columnsToDisplay.push("Position");
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Owner");

    tempObject =
    {
 
        reportTitle:  "TVB User Listing",
        apiControllerAction:  "/api/TVBReport/GetTVBUserListing",
        apiType:  "get",
        columnsToDisplay:  columnsToDisplay,
        product: ['tvb'],
        approved: true
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
    columnsToDisplay.push("Date Added");
    columnsToDisplay.push("User");
    columnsToDisplay.push("Email");
    columnsToDisplay.push("Position");
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Owner");
    columnsToDisplay.push("Logged In");
    columnsToDisplay.push("Queries Run");


    tempObject =
    {
        // id: rptNewUserListing,
        reportTitle:  "New User Listing",
        apiControllerAction:  "/api/PersonnelReport/GetNewUserListing",
        apiType:  "get",
        columnsToDisplay:  columnsToDisplay,
        product: ['personnel'],
        approved: true
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
        required:  true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "Market",
        jsCall: "getMarketListByProductMediaType",
        objectName:  "ddlMarket",
        required: false,
        reloadBasedProduct: true,
        reloadBasedMediaType: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token:  "Owner",
        jsCall: "getOwnerListByProductMarketMediaType",
        objectName:  "ddlOwner",
        required: false,
        reloadBasedProduct: true,
        reloadBasedMarket: true,
        reloadBasedMediaType: true
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
    //columnsToDisplay.push("ProductID");
    //columnsToDisplay.push("MarketID");
    //columnsToDisplay.push("MarketName");
    //columnsToDisplay.push("OwnerID");
    //columnsToDisplay.push("OwnerName");
    //columnsToDisplay.push("StationID");
    //columnsToDisplay.push("StationName");
    //columnsToDisplay.push("FormatName");
    //columnsToDisplay.push("ActiveDate");
    //columnsToDisplay.push("DisableDate");
    //columnsToDisplay.push("ClientID");

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
    columnsToDisplay.push("Training Date");
    columnsToDisplay.push("Training Time");
    columnsToDisplay.push("Trainer");
    columnsToDisplay.push("Training Topic");
    columnsToDisplay.push("Training Method");
    columnsToDisplay.push("Training Status");
    columnsToDisplay.push("Notes");
    columnsToDisplay.push("Individual Trainees");
    columnsToDisplay.push("Cluster Trainees");
    columnsToDisplay.push("Owner Group Trainees");
    columnsToDisplay.push("Trainee");
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Owner");
    columnsToDisplay.push("Owner Group");

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

    arrayObject = {
        token: "Station",
        jsCall: "getStationListByGeneralFilters",
        objectName: "ddlStation",
        reloadBasedMarket: true,
        reloadBasedOwner: true,
        reloadBasedProduct: false,
        required: false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_StationChangeHistory() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    columnsToDisplay.push("Change Date");
    columnsToDisplay.push("Station");
    columnsToDisplay.push("Product");
    columnsToDisplay.push("Active");
    columnsToDisplay.push("Change Types");
    columnsToDisplay.push("Owner");
    columnsToDisplay.push("Format");
    columnsToDisplay.push("Is Active");
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Billing Note");
    columnsToDisplay.push("Client ID");


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
    columnsToDisplay.push("Category");
    columnsToDisplay.push("Cluster MRR");
    columnsToDisplay.push("Cluster XRY");
    columnsToDisplay.push("Cluster Diff %");
    columnsToDisplay.push("Market MRR");
    columnsToDisplay.push("Market XRY");
    columnsToDisplay.push("Market Diff %");

    tempObject =
    {
        // id: rptMarketRevenueXRay,
        reportTitle:  "MRR / XRay Revenue Comparison",
        apiControllerAction:  "/api/Report/GetMarketRevenueRevenueXRay",
        apiType:  "get",
        columnsToDisplay:  columnsToDisplay,
        product: ['mrr', 'xry', 'XRY Data Review', 'MRR Data Review', 'mrr pre-release']
    }

    return tempObject;

}

// Active Station
function getReportFilterArray_ActiveStationList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProductMediaType",
        objectName: "ddlMarket",
        required: false,
        reloadBasedProduct: true,
        reloadBasedMediaType: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProductMarketMediaType",
        objectName: "ddlOwner",
        required: false,
        reloadBasedProduct: true,
        reloadBasedMarket: true,
        reloadBasedMediaType: true
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
        jsCall: "getMarketListByProductMediaType",
        objectName: "ddlMarket",
        required: false,
        reloadBasedProduct: true,
        reloadBasedMediaType: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProductMarketMediaType",
        objectName: "ddlOwner",
        required: false,
        reloadBasedProduct: true,
        reloadBasedMarket: true,
        reloadBasedMediaType: true
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
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Market Release Date");
    //columnsToDisplay.push("stationID");
    columnsToDisplay.push("Station");
    columnsToDisplay.push("Owner");
    columnsToDisplay.push("Activity Type");
    columnsToDisplay.push("Activity Date");
    columnsToDisplay.push("Station Address");
    //columnsToDisplay.push("stationAddress2");
    //columnsToDisplay.push("stationState");
    //columnsToDisplay.push("stationZIP");
    columnsToDisplay.push("Station Comment");

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
        product: ['mrr', 'MRR Data Review', 'mrr pre-release'],
        approved : true
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
        product: ['mrr', 'mrr pre-release'],
        approved: true
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
 
    columnsToDisplay.push("Owner Group");
    columnsToDisplay.push("Product");
    columnsToDisplay.push("Active");
    columnsToDisplay.push("Active Date");
    columnsToDisplay.push("Disabled Date");
 

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
    columnsToDisplay.push("Owner Group");
    columnsToDisplay.push("Owner");
    columnsToDisplay.push("Product");
    columnsToDisplay.push("Product Active");
    columnsToDisplay.push("Active Date");
    columnsToDisplay.push("Disable Date");
    columnsToDisplay.push("Misc");
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
        product: ['mrr', 'mrr setup info'],
        sortable: true,
        approved: true
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
        product: ['mrr', 'mrr setup info'],
        sortable: true,
        approved: true
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
        product: ['mrr', 'mrr setup info'],
        sortable: true,
        approved: true
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
        product: ['mrr', 'mrr setup info'],
        sortable: true,
        approved: true
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
        product: ['mrr', 'mrr setup info'],
        sortable: true,
        approved: true
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
        product: ['mrr', 'mrr setup info'],
        sortable: true,
        approved: true
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
        product: ['mrr', 'mrr setup info'],
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
        product: ['mrr', 'mrr setup info'],
        sortable: true,
        approved: true
    }

    return tempObject;

}

function getReportFilterArray_PersonnelContactList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProductMediaType",
        objectName: "ddlMarket",
        required: false,
        reloadBasedProduct: true,
        reloadBasedMediaType: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProductMarketMediaType",
        objectName: "ddlOwner",
        required: false,
        reloadBasedProduct: true,
        reloadBasedMarket: true,
        reloadBasedMediaType: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Station",
        jsCall: "getStationListByGeneralFilters",
        objectName: "ddlStation",
        reloadBasedMarket: true,
        reloadBasedOwner: true,
        reloadBasedProduct: true,
        reloadBasedMediaType: true,
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
        jsCall: "getMarketListByProductMediaType",
        objectName: "ddlMarket",
        required: false,
        reloadBasedProduct: true,
        reloadBasedMediaType: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProductMarketMediaType",
        objectName: "ddlOwner",
        required: false,
        reloadBasedProduct: true,
        reloadBasedMarket: true,
        reloadBasedMediaType: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Station",
        jsCall: "getStationListByGeneralFilters",
        objectName: "ddlStation",
        required: false,
        reloadBasedMarket: true,
        reloadBasedOwner: true,
        reloadBasedProduct: true,
        reloadBasedMediaType: true
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
        jsCall: "getMarketListByProductMediaType",
        objectName: "ddlMarket",
        required: false,
        reloadBasedProduct: true,
        reloadBasedMediaType: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProductMarketMediaType",
        objectName: "ddlOwner",
        required: false,
        reloadBasedProduct: true,
        reloadBasedMarket: true,
        reloadBasedMediaType: true
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
        reloadBasedProduct: true,
        reloadBasedMediaType: true
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
        jsCall: "getMarketListByProductMediaType",
        jsCallParameters: ['MRR'],
        required: false,
        reloadBasedMediaType: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Owner",
        objectName: "ddlOwner",
        jsCall: "getOwnerListByProductMarketMediaType",
        jsCallParameters: ['MRR'],
        required: false,
        reloadBasedMarket: true,
        reloadBasedMediaType: true
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
        reloadBasedMarket: true,
        reloadBasedMediaType: true
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
        product: ['mrr', 'MRR Data Review', 'MRR Notifications'],
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
        objectName: "ddlProduct",
        jsCall: "getProductList",
        jsCallParameters: ['MRR'],
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
        jsCall: "getPeriodList",
        jsCallParameters: ['all', 'priorperiod'],
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

        reportTitle: "MRR Market Release List",
        apiControllerAction: "/api/MarketReport/GetMarketReleaseList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['mrr', 'MRR Data Review', 'mrr delivery', 'mrr delivery'],
        sortable: true,
        approved: true
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

    columnsToDisplay.push("Market");
    columnsToDisplay.push("Reminder Sent By");
    columnsToDisplay.push("Reminder Sent On");
    columnsToDisplay.push("Stations Pending");
    columnsToDisplay.push("Contacts Pending");
    columnsToDisplay.push("Schedule");
    columnsToDisplay.push("Status"); // Active or On Hold


    tempObject =
    {

        reportTitle: "MRR Market Release",
        apiControllerAction: "/api/MRRReport/GetMarketRelease",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['mrr', 'MRR Data Review'],
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

    columnsToDisplay.push("Contact");
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Station");
    columnsToDisplay.push("Reminders");
    columnsToDisplay.push("Input On");
    columnsToDisplay.push("Reminder Sent On");

    tempObject =
    {

        reportTitle: "MRR Market Station Release",
        apiControllerAction: "/api/MRRReport/GetMarketRelease",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['mrr', 'MRR Data Review', 'mrr delivery'],
        sortable: true,
        approved: true
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
    
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Reminder Sent By");
    columnsToDisplay.push("Reminder Sent On");
    columnsToDisplay.push("Stations Pending");
    columnsToDisplay.push("Contacts Pending");
    columnsToDisplay.push("On Hold");

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

    columnsToDisplay.push("Contact");
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Station");
    columnsToDisplay.push("Reminders");
    columnsToDisplay.push("Input On");
    columnsToDisplay.push("Reminder Sent On");

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

    columnsToDisplay.push('Market');
    columnsToDisplay.push('Reminder Sent By');
    columnsToDisplay.push('Reminder Sent On');
    columnsToDisplay.push('Stations Pending');
    columnsToDisplay.push('Contacts Pending');
    columnsToDisplay.push('On Hold');

    tempObject =
    {

        reportTitle: "TVB Market Release",
        apiControllerAction: "/api/TVBReport/GetMarketRelease",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['tvb'],
        sortable: true,
        approved: true
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
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['tvb'],
        objectName: "ddlOwner",
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
        jsCall: "getPeriodList",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_TVBMarketStationRelease() {

    var tempObject = new Object();
    var columnsToDisplay = new Array();

    columnsToDisplay.push("Contact");
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Owner");
    columnsToDisplay.push("Station");
    columnsToDisplay.push("Reminders");
    columnsToDisplay.push("Input On");
    columnsToDisplay.push("Reminder Sent On");

    tempObject =
    {

        reportTitle: "TVB Market Station Release",
        apiControllerAction: "/api/TVBReport/GetMarketRelease",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['tvb'],
        sortable: true,
        approved: true
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
        jsCall: "getPeriodList",
        jsCallParameters: ["quarter", "quarter"],
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
        product: ['tvb', 'TVB Data Review'],
        approved: true
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
        product: ['mrr'],
        approved: true
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
        product: ['mrr', 'mrr pre-release'],
        approved: true
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
    columnsToDisplay.push("Owner");
    columnsToDisplay.push("Owner Group");
    columnsToDisplay.push("Includes Monthly");
    columnsToDisplay.push("Includes Quarterly");

    tempObject =
    {
        reportTitle: "MRR Owner Report List",
        apiControllerAction: "/api/MRRReport/GetMRROwnerGroupReport",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['mrr'],
        approved: true
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
        product: ['tvb'],
        approved: true
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
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Market Rank");

    tempObject =
    {
        reportTitle: "TVB Market Nielsen Ranking List",
        apiControllerAction: "/api/TVBReport/GetTVBMarketNielsenRankingList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['tvb'],
        approved: true
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
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Owner");
    columnsToDisplay.push("Station");
    columnsToDisplay.push("Affiliation");
    columnsToDisplay.push("Active");
    columnsToDisplay.push("Product Active Date");
    columnsToDisplay.push("Product Disable Date");
    columnsToDisplay.push("Product");
    columnsToDisplay.push("Media");


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
        required: false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_APIActivityList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "External User API Activity List",
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
        jsCall: 'getParentMarketList',
        jsCallParameters: ['DMA'],
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
    columnsToDisplay.push("Owner");
    columnsToDisplay.push("Email");
    columnsToDisplay.push("User");
    columnsToDisplay.push("Position");

    columnsToDisplay.push("MRR");
    columnsToDisplay.push("XRAY");
 
    tempObject =
    {
        reportTitle: "Corporate / Group User List",
        apiControllerAction: "/api/Report/GetCorporateAndGroupUserList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['personnel'],
        approved: true
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
        product: ['xry'],
        approved: true
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
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Advertiser");
    columnsToDisplay.push("Advertiser Market");
 
    columnsToDisplay.push("Revenue Period");
    columnsToDisplay.push("Revenue");

    tempObject =
    {
        reportTitle: "Advertiser Revenue in Wrong Market",
        apiControllerAction: "/api/XRAYReport/GetAdvertiserRevenueInWrongMarketList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['xry', 'advertiser']
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
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Agency");
    columnsToDisplay.push("Agency Market");
    columnsToDisplay.push("Revenue Period");

    columnsToDisplay.push("Revenue");

    tempObject =
    {
        reportTitle: "Agency Revenue in Wrong Market",
        apiControllerAction: "/api/XRAYReport/GetAgencyRevenueInWrongMarketList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['xry', 'agency']
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
        product: ['xry', 'account executive'],
        approved: true
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
        product: ['personnel'],
        approved: true
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
        reportTitle: "MRR Station Missing Administrator List",
        apiControllerAction: "/api/MRRReport/GetMRRWithoutManagerList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['mrr', 'MRR Security and Analysis', 'mrr pre-release'],
        approved: true
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
        product: ['mrr', 'MRR Security and Analysis'],
        approved: true
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
        reportTitle: "Multiple Parent Owners Per User List",
        apiControllerAction: "/api/PersonnelReport/GetMultipleOwnersPerUserList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['personnel'],
        approved: true
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
    columnsToDisplay.push("User");
    columnsToDisplay.push("Email");
    columnsToDisplay.push("Owner");
    columnsToDisplay.push("Owner Group");
    columnsToDisplay.push("Report");

    tempObject =
    {
        reportTitle: "User Missing Group Report List",
        apiControllerAction: "/api/PersonnelReport/GetUserMissingGroupReportList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['personnel'],
        approved: true
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
        product: ['personnel'],
        approved: true
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
    columnsToDisplay.push("User");
    columnsToDisplay.push("Email");
    columnsToDisplay.push("Report Title");
    columnsToDisplay.push("Report Market Wide");
    columnsToDisplay.push("Report Sequencing");
    columnsToDisplay.push("Market");

    tempObject =
    {
        reportTitle: "User Assigned Invalid Market Report",
        apiControllerAction: "/api/PersonnelReport/GetUsersAssignedInvalidMarketReportList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['personnel'],
        approved: true
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
        reportTitle: "MRR Users Assigned to Disabled Stations",
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
        reportTitle: "Import Station Script List",
        apiControllerAction: "/api/XRAYReport/GetXRAYImportScriptList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['xry', 'xry imports'],
        approved: true
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
        product: ['mrr'],
        approved: true
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
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Primary Market");
    columnsToDisplay.push("Product");
    columnsToDisplay.push("Active Stations");
 

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
        product: ['xry', 'account executive'],
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
        product: ['mrr', 'MRR Security and Analysis'],
        autoUpdate: false,
        approved: true
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
        product: ['mrr', 'MRR Security and Analysis'],
        autoUpdate: false,
        approved: true
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
        product: ['mrr', 'MRR Data Review'],
        autoUpdate: true,
        approved: true
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
        autoUpdate: false,
        approved: true
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
        required: true
    }
    arrayFilters.push(arrayObject);

 
    arrayObject = new Object();
    arrayObject = {
        token: "Market",
        objectName: "ddlMarket",
        jsCall: "getMarketListByProductMediaType",
        jsCallParameters: ['MRR'],
        required: true,
        reloadBasedProduct: true,
        reloadBasedMediaType: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Owner",
        objectName: "ddlOwner",
        jsCall: "getOwnerListByProductMarketMediaType",
        jsCallParameters: ['MRR'],
        reloadBasedProduct: true,
        reloadBasedMarket: true,
        reloadBasedMediaType: true,
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
        reloadBasedMarket: true,
        reloadBasedMediaType: true
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
    bLongQuery = true;

    tempObject =
    {
        reportTitle: "MRR Market Distribution List",
        apiControllerAction: "/api/MRRReport/GetMRRMarketDistributionList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['mrr', 'mrr delivery'],
        autoUpdate: false,
        approved: true
    }

    return tempObject;
}

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
        product: ['mrr', 'MRR Data Review'],
        autoUpdate: false,
        approved: true
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
    columnsToDisplay.push("Period");
    columnsToDisplay.push("Station Id");	
    columnsToDisplay.push("Station");	
    columnsToDisplay.push("Category");	
    columnsToDisplay.push("Category Description");	
    columnsToDisplay.push("Market Id");
    columnsToDisplay.push("Market");	
    columnsToDisplay.push("Prior Year");	
    columnsToDisplay.push("Revenue");
    columnsToDisplay.push("Prior Year Revenue");
    columnsToDisplay.push("Prior Period");
    columnsToDisplay.push("Prior Period Revenue");
 
    bLongQuery = true;

    tempObject =
    {
        reportTitle: "MRR Upload Category Template (Revenue)",
        apiControllerAction: "/api/MRRReport/GetMRRUploadTemplateByOwnerWithRevenue",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['mrr', 'MRR Data Review'],
        autoUpdate: false,
        approved: true
    }

    return tempObject;
}

function getReportFilterArray_MRRUploadTemplateByOwnerWithRevenueExtended() {

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
function getReportObject_MRRUploadTemplateByOwnerWithRevenueExtended() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    columnsToDisplay.push("Period");
    columnsToDisplay.push("Station Id");
    columnsToDisplay.push("Station");
    columnsToDisplay.push("Affiliation");

    columnsToDisplay.push("Category");
    columnsToDisplay.push("Category Description");
    columnsToDisplay.push("Market Id");
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Market Size");

    columnsToDisplay.push("Prior Year");
    columnsToDisplay.push("Revenue");
    columnsToDisplay.push("Prior Year Revenue");
    columnsToDisplay.push("Prior Period");
    columnsToDisplay.push("Prior Period Revenue");

    bLongQuery = true;

    tempObject =
    {
        reportTitle: "MRR Upload Category Template (Revenue) Extended",
        apiControllerAction: "/api/MRRReport/GetMRRUploadTemplateByOwnerWithRevenue",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['mrr', 'MRR Data Review'],
        autoUpdate: false,
        approved: true
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
        required: false
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
        product: ['mrr', 'MRR Data Review', 'mrr delivery', 'mrr pre-release'],
        autoUpdate: false,
        approved: true
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
        jsCallParameters: ['all', 'priorperiod'],
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Filter",
        objectName: "chkFilter",
        filterValue: "Nationwide",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "MRRNationwideTVByRegion",
        objectName: "btnMRRNationwideTVByRegion",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "MRRNationwideTVByMarketSize",
        objectName: "btnMRRNationwideTVByMarketSize",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "MRRNationwideTVByAffiliation",
        objectName: "btnMRRNationwideTVByAffiliation",
        required: false
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
        product: ['mrr', 'MRR Setup Info'],
        autoUpdate: false,
        sortable: false,
        approved: true
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
        jsCall: "getRegionListByMediaType",
        jsCallParameters: ["2"],
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
        jsCallParameters: ['all', 'priorperiod'],
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Filter",
        objectName: "chkFilter",
        filterValue: "Nationwide",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "MRRNationwideTVByRegion",
        objectName: "btnMRRNationwideTVByRegion",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "MRRNationwideTVByMarketSize",
        objectName: "btnMRRNationwideTVByMarketSize",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "MRRNationwideTVByAffiliation",
        objectName: "btnMRRNationwideTVByAffiliation",
        required: false
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
        product: ['mrr', 'MRR Setup Info'],
        autoUpdate: false,
        sortable: false,
        approved: true
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
        jsCallParameters: ['all', 'priorperiod'],
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Filter",
        objectName: "chkFilter",
        filterValue: "Nationwide",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "MRRNationwideTVByRegion",
        objectName: "btnMRRNationwideTVByRegion",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "MRRNationwideTVByMarketSize",
        objectName: "btnMRRNationwideTVByMarketSize",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "MRRNationwideTVByAffiliation",
        objectName: "btnMRRNationwideTVByAffiliation",
        required: false
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
        product: ['mrr', 'MRR Setup Info'],
        autoUpdate: false,
        sortable: false,
        approved: true
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
        jsCall: "getFormatListByMediaType",
        jsCallParameters: ["1"],
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
        jsCallParameters: ['all', 'priorperiod'],
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Filter",
        objectName: "chkFilter",
        filterValue: "Nationwide",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "MRRNationwideRadioByRegion",
        objectName: "btnMRRNationwideRadioByRegion",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "MRRNationwideRadioByMarketSize",
        objectName: "btnMRRNationwideRadioByMarketSize",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "MRRNationwideRadioByFormat",
        objectName: "btnMRRNationwideRadioByFormat",
        required: false
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
        product: ['mrr', 'MRR Setup Info'],
        autoUpdate: false,
        sortable: false,
        approved: true
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
        jsCall: "getRegionListByMediaType",
        jsCallParameters: ["1"],
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
        jsCallParameters: ['all', 'priorperiod'],
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Filter",
        objectName: "chkFilter",
        filterValue: "Nationwide",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "MRRNationwideRadioByRegion",
        objectName: "btnMRRNationwideRadioByRegion",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "MRRNationwideRadioByMarketSize",
        objectName: "btnMRRNationwideRadioByMarketSize",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "MRRNationwideRadioByFormat",
        objectName: "btnMRRNationwideRadioByFormat",
        required: false
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
        product: ['mrr', 'MRR Setup Info'],
        autoUpdate: false,
        sortable: false,
        approved: true
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
        jsCallParameters: ['all', 'priorperiod'],
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Filter",
        objectName: "chkFilter",
        filterValue: "Nationwide",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "MRRNationwideRadioByRegion",
        objectName: "btnMRRNationwideRadioByRegion",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "MRRNationwideRadioByMarketSize",
        objectName: "btnMRRNationwideRadioByMarketSize",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "MRRNationwideRadioByFormat",
        objectName: "btnMRRNationwideRadioByFormat",
        required: false
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
        product: ['mrr', 'MRR Setup Info'],
        autoUpdate: false,
        sortable: false,
        approved: true
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
        reportTitle: "MRR Missing Manager / ADMIN Suggestions",
        apiControllerAction: "/api/MRRReport/GetMRRMissingManagerSuggestedList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['mrr', 'MRR Security and Analysis'],
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
    columnsToDisplay.push("DMA Cat");
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

            return '<a href="#" onclick="determineLocationOfDMAReport(' + "'" + action + "','" + 'DMA / MRR Data Comparison - Station Level' + "'" + ');">Stations</a>';
        },
        "orderable": false,
        "searchable": false,
        "className": "text-align-right"
    });

    tempObject = {
        reportTitle: "DMA / MRR Data Comparison - Market Level",
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
    var arrayObject = new Object();

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
    columnsToDisplay.push("DMA Cat");
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

            return '<a href="#" onclick="determineLocationOfDMAReport(' + "'" + action + "','" + 'DMA / MRR Data Comparison - Detail Level' + "'" + ');">Details</a>';

        },
        "orderable": false,
        "searchable": false,
        "className": "text-align-right"
    });

    var arrButtons = new Array();
    arrButtons.push({ name: "Market", title: "Back to Market Level" });

    tempObject = {
        reportTitle: "DMA / MRR Data Comparison - Station Level",
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
    var arrayObject = new Object();

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
    columnsToDisplay.push("DMA Cat");
    columnsToDisplay.push("MRR Cat");
    columnsToDisplay.push("Station");
    columnsToDisplay.push("Market");
    columnsToDisplay.push("DMA Revenue");
    columnsToDisplay.push("MRR Revenue");
    columnsToDisplay.push("Revenue Diff");

    var arrButtons = new Array();

    arrButtons.push({ name: "Market", title: "Back to Market Level" });
    arrButtons.push({ name: "Station", title: "Back to Station Level" });

    tempObject = {
        reportTitle: "DMA / MRR Data Comparison - MRR Level",
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
    var arrayObject = new Object();

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

    columnsToDisplay.push("Market");
    columnsToDisplay.push("Advertiser");
    columnsToDisplay.push("Industry");
    columnsToDisplay.push("Sub Industry");
    columnsToDisplay.push("Parent Advertiser");

    //this column is used to create the edit link
    //for each result row
    columnsToDisplay.push({
        "action": "edit",
        "mRender": function (data, type, row) {
            //var action = "/admin/advertiser/advertiser.html?AdvertiserID=";
            //return '<a href="#" onclick=\'loadActionPage("' + action + '",' + row.advertiserId + ')\'>Edit</a>';
            var action = "editAdvertiser(" + row.advertiserId + ")";
            return '<a href="#" onclick=\'' + action + '\'>Edit</a>';
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
        reportPath: "/Products/XRY/reports/xrygenericreport.html",
        approved: true
    }

    return tempObject;
}

function getReportFilterArray_Advertisers() {
    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Product",
        jsCall: "getProductListHidden",
        jsCallParameters: ['XRY', true],
        objectName: "ddlProduct",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProductMediaType",
        jsCallParameters: ['XRY'],
        objectName: "ddlMarket",
        required: false,
        reloadBasedProduct: true,
        reloadBasedMediaType: true
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
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "SubIndustry",
        jsCall: "getSubIndustryList",
        objectName: "ddlSubIndustry",
        reloadBasedIndustry: true,
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
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Media Advertiser");
    columnsToDisplay.push("Media Advertiser Code");
    columnsToDisplay.push("Market Advertiser");
    columnsToDisplay.push("Media Type");

    //this column is used to create the edit link
    //for each result row
    columnsToDisplay.push({
        "action": "edit",
        "mRender": function (data, type, row) {
            //var action = "/admin/mediaadvertiser/mediaadvertiser.html?MediaAdvertiserID=";
            return '<a href="#" onclick=\'editMediaAdvertiser(' + row.mediaAdvertiserId + ')\'>Edit</a>';
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
        reportPath: "/Products/XRY/reports/xrygenericreport.html",
        approved: true
    }

    return tempObject;
}

function getReportFilterArray_MediaAdvertisers() {
    var arrayFilters = new Array();
    var arrayObject = new Object();

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
    columnsToDisplay.push("industry");
    columnsToDisplay.push("sub Industry");

    //this column is used to create the edit link
    //for each result row
    columnsToDisplay.push({
        "action": "edit",
        "mRender": function (data, type, row) {
            //var action = "/admin/stationadvertiser/stationadvertiser.html?StationAdvertiserID=";
            //return '<a href="#" onclick=\'loadActionPage("' + action + '",' + row.stationAdvertiserId + ')\'>Edit</a>';
            var action = "editStationAdvertiser(" + row.stationAdvertiserId + ")";
            return '<a href="#" onclick=\'' + action + '\'>Edit</a>';
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
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getXRYMarketList",
        objectName: "ddlMarket",
        //onchange: function () {

        //    getOwnerList($("#ddlMarket").val());

        //},
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerList",
        objectName: "ddlOwner",
        reloadBasedMarket: true,
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
        //onchange: function () {

        //    getSubIndustryList($("#ddlIndustry").val(), '');

        //},
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "SubIndustry",
        jsCall: "getSubIndustryList",
        objectName: "ddlSubIndustry",
        reloadBasedIndustry: true,
        required: false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_NewAdvertisers() {
    var tempObject = new Object();

    var columnsToDisplay = new Array();

    columnsToDisplay.push("Station Advertiser");
    columnsToDisplay.push("Advertiser");
    columnsToDisplay.push("Industry");
    columnsToDisplay.push("Sub Industry");
    //columnsToDisplay.push("media code id");
    columnsToDisplay.push("Station");
    columnsToDisplay.push("Action Code");
    columnsToDisplay.push("Comment");

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
                    'Market last released ' + row["Release Date"]
                );
            }

            //var action = '<a href="#" onclick=\'setUpBackButton(); loadActionPage("/admin/advertiser/advertiser.html?AdvertiserID=",' + row.advertiserId + ')\'>Edit&nbsp;Advertiser</a>';
            var action = '<a href="#" onclick=\'setUpBackButton();editAdvertiser(' + row.advertiserId + ')\'>Edit&nbsp;Advertiser</a>';
            var action2 = '';

            if (row.stationAdvertiserId != null)
            {
                //action2 = '<a href="#" onclick=\'setUpBackButton(); loadActionPage("/admin/stationadvertiser/stationadvertiser.html?StationAdvertiserID=",' + row.stationAdvertiserId + ')\'>Edit&nbsp;Station&nbsp;Advertiser</a>';
                action2 = '<a href="#" onclick=\'setUpBackButton(); editStationAdvertiser(' + row.stationAdvertiserId + ')\'>Edit&nbsp;Station&nbsp;Advertiser</a>';
            }

            if (row.mediaAdvertiserId != null)
            {
                //action2 = '<a href="#" onclick=\'setUpBackButton(); loadActionPage("/admin/mediaadvertiser/mediaadvertiser.html?MediaAdvertiserID=",' + row.mediaAdvertiserId + ')\'>Edit&nbsp;Media&nbsp;Advertiser</a>';
                action2 = '<a href="#" onclick=\'setUpBackButton(); editMediaAdvertiser(' + row.mediaAdvertiserId + ')\'>Edit&nbsp;Media&nbsp;Advertiser</a>';
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
        product: ['xry', 'advertiser', 'XRY Data Review'],
        reportPath: "/Products/XRY/reports/xrygenericreport.html",
        approved: true
    }

    return tempObject;
}

function getReportFilterArray_NewAdvertisers() {
    var arrayFilters = new Array();
    var arrayObject = new Object();

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
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Agency");
    columnsToDisplay.push("Parent Agency");
    columnsToDisplay.push("Account Type");

    //this column is used to create the edit link
    //for each result row
    columnsToDisplay.push({
        "action": "edit",
        "mRender": function (data, type, row) {
            //var action = "/Admin/agency/agency.html?AgencyID=";
            return '<a href="#" onclick=\'editAgency(' + row.agencyId + ')\'>Edit</a>';
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
        product: ['agency'],
        reportPath: "/Products/XRY/reports/xrygenericreport.html"
    }

    return tempObject;
}

function getReportFilterArray_Agencies() {
    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Product",
        jsCall: "getProductListHidden",
        jsCallParameters: ['XRY', true],
        objectName: "ddlProduct",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProductMediaType",
        jsCallParameters: ['XRY'],
        objectName: "ddlMarket",
        required: false,
        reloadBasedProduct: true,
        reloadBasedMediaType: true
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
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Station");
    columnsToDisplay.push("Station Agency");
    columnsToDisplay.push("Station Agency Code");
    columnsToDisplay.push("Market Agency");
    columnsToDisplay.push("Account Type");

    //this column is used to create the edit link
    //for each result row
    columnsToDisplay.push({
        "action": "edit",
        "mRender": function (data, type, row) {
            //var action = "/admin/stationagency/stationagency.html?StationAgencyID=";
            //return '<a href="#" onclick=\'loadActionPage("' + action + '",' + row.stationAgencyId + ')\'>Edit</a>';
            var action = "editStationAgency(" + row.stationAgencyId + ")";
            return '<a href="#" onclick=\'' + action + '\'>Edit</a>';
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
        product: ['agency'],
        reportPath: "/Products/XRY/reports/xrygenericreport.html"
    }

    return tempObject;
}

function getReportFilterArray_StationAgencies() {
    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getXRYMarketList",
        objectName: "ddlMarket",
        //onchange: function () {

        //    getOwnerList($("#ddlMarket").val());

        //},
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
        jsCall: "getOwnerList",
        objectName: "ddlOwner",
        reloadBasedMarket: true,
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

    columnsToDisplay.push("station agency");
    columnsToDisplay.push("agency");
    columnsToDisplay.push("station");
    columnsToDisplay.push("action code");
    columnsToDisplay.push("comment");

    //this column is used to create the edit links
    //for each result row
    columnsToDisplay.push({
        "action": "edit",
        "mRender": function (data, type, row) {
            if ($("#header-summary-section").is(":visible") == false || $("#header-summary").html() == "")
            {
                $("#header-summary-section").show();
                $("#header-summary").html(
                    'Market last released ' + new Date(row.releaseDate).toLocaleString('en-US')
                );
            }

            //var action = '<a href="#" onclick=\'setUpBackButton(); loadActionPage("/Admin/agency/agency.html?AgencyID=",' + row.agencyId + ')\'>Edit&nbsp;Agency</a>';
            var action = '<a href="#" onclick=\'setUpBackButton(); editAgency(' + row.agencyId + ');\'>Edit&nbsp;Agency</a>';
            //var action2 = '<a href="#" onclick=\'setUpBackButton(); loadActionPage("/admin/stationagency/stationagency.html?StationAgencyID=",' + (row.stationAgencyId == null ? '0' : row.stationAgencyId) + ')\'>Edit&nbsp;Station&nbsp;Agency</a>';
            var action2 = '<a href="#" onclick=\'setUpBackButton(); editStationAgency(' + row.stationAgencyId + ');\'>Edit&nbsp;Station&nbsp;Agency</a>';
            if (row.stationAgencyId == null)
            {
                action2 = "";
            }
            return action + (action2.length > 0 ? '<br />' + action2: "");
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
        product: ['xry', 'agency', 'XRY Data Review'],
        reportPath: "/Products/XRY/reports/xrygenericreport.html",
        approved: true
    }

    return tempObject;
}

function getReportFilterArray_NewAgencies() {
    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getXRYMarketList",
        objectName: "ddlMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

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
        },
        approved: true
    }

    return tempObject;
}

function getReportFilterArray_AdvertisersRevenueResearch() {
    var arrayFilters = new Array();
    var arrayObject = new Object();

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
        },
        approved: true
    }

    return tempObject;
}

function getReportFilterArray_MediaRevenueResearch() {
    var arrayFilters = new Array();
    var arrayObject = new Object();

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
    var arrayObject = new Object();

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
    columnsToDisplay.push("Account Executive");
    columnsToDisplay.push("Owner");
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Active Date");
    columnsToDisplay.push("Disable Date");
    columnsToDisplay.push("User");

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
    var arrayObject = new Object();

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
        reportPath: "/Products/XRY/reports/xrygenericreport.html",
        approved: true
    }

    return tempObject;
}

function getReportFilterArray_AdvertisersAgenciesList() {
    var arrayFilters = new Array();
    var arrayObject = new Object();

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
        reportTitle: "Market Advertiser / Agency List",
        apiControllerAction: "/api/Advertiser/GetMarketAdvertiserMarketAgencyList",
        apiType: "post",
        columnsToDisplay: columnsToDisplay,
        product: ['advertiser', 'xry'],
        reportPath: "/Products/XRY/reports/xrygenericreport.html",
        approved: true
    }

    return tempObject;
}

function getReportFilterArray_DisabledAdvertisersList() {
    var arrayFilters = new Array();
    var arrayObject = new Object();

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
        reportPath: "/Products/XRY/reports/xrygenericreport.html",
        approved: true
    }

    return tempObject;
}

function getReportFilterArray_MediaAdvertisersList() {
    var arrayFilters = new Array();
    var arrayObject = new Object();

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
    var arrayObject = new Object();

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
        reportPath: "/Products/XRY/reports/xrygenericreport.html",
        approved: true
    }

    return tempObject;
}

function getReportFilterArray_ParentAdvertiserAdvertiserList() {
    var arrayFilters = new Array();
    var arrayObject = new Object();

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
        reportPath: "/Products/XRY/reports/xrygenericreport.html",
        approved: true
    }

    return tempObject;
}

function getReportFilterArray_StationAdvertisersList() {
    var arrayFilters = new Array();
    var arrayObject = new Object();

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
        reportPath: "/Products/XRY/reports/xrygenericreport.html",
        approved: true
    }

    return tempObject;
}

function getReportFilterArray_AgencyList() {
    var arrayFilters = new Array();
    var arrayObject = new Object();

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
        reportPath: "/Products/XRY/reports/xrygenericreport.html",
        approved: true
    }

    return tempObject;
}

function getReportFilterArray_AgencyAdvertiserAccountsList() {
    var arrayFilters = new Array();
    var arrayObject = new Object();

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
        reportTitle: "Market Agency / Advertiser List",
        apiControllerAction: "/api/Agency/GetMarketAgencyMarketAdvertiserList",
        apiType: "post",
        columnsToDisplay: columnsToDisplay,
        product: ['agency', 'xry'],
        reportPath: "/Products/XRY/reports/xrygenericreport.html",
        approved: true
    }

    return tempObject;
}

function getReportFilterArray_DisabledAgencyList() {
    var arrayFilters = new Array();
    var arrayObject = new Object();

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
        reportPath: "/Products/XRY/reports/xrygenericreport.html",
        approved: true
    }

    return tempObject;
}

function getReportFilterArray_ParentAgencyList() {
    var arrayFilters = new Array();
    var arrayObject = new Object();

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
        reportPath: "/Products/XRY/reports/xrygenericreport.html",
        approved: true
    }

    return tempObject;
}

function getReportFilterArray_ParentAgencyAgencyList() {
    var arrayFilters = new Array();
    var arrayObject = new Object();

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
        reportPath: "/Products/XRY/reports/xrygenericreport.html",
        approved: true
    }

    return tempObject;
}

function getReportFilterArray_StationAgencyList() {
    var arrayFilters = new Array();
    var arrayObject = new Object();

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
        reportPath: "/Products/XRY/reports/xrygenericreport.html",
        approved: true
    }

    return tempObject;
}

function getReportFilterArray_PostedData() {
    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['XRY'],
        objectName: "ddlMarket",
        required: false        
    }

    arrayFilters.push(arrayObject);
    arrayObject = new Object();

    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['XRY'],
        objectName: "ddlOwner",
        required: false
    }

    arrayFilters.push(arrayObject);
    arrayObject = new Object();

    arrayObject = {
        token: "Station",
        jsCall: "getStationListByGeneralFilters",
        objectName: "ddlStation",
        reloadBasedMarket: true,
        reloadBasedOwner: true,
        required: true
    }

    arrayFilters.push(arrayObject);
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
        jsCall: "getPeriodList",
        jsCallParameters: ['months'],
        objectName: "ddlPeriod",
        required: true 
    }

    arrayFilters.push(arrayObject);

    return arrayFilters;

}

function getReportObject_PostedData() {
    var tempObject = new Object();
    var columnsToDisplay = new Array();

    columnsToDisplay.push("Advertiser");
    columnsToDisplay.push("Agency");
    columnsToDisplay.push("Account Type");
    columnsToDisplay.push("Revenue");

    tempObject = {
        reportTitle: "Posted Data",
        apiControllerAction: "/api/XRayReport/GetPostedData",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['xry'],
        approved: true
    }

    return tempObject;

}

function getReportFilterArray_ActiveMarketLog() {
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
        jsCall: "getPeriodList",
        jsCallParameters: ['months'],
        objectName: "ddlPeriod",
        required: true
    }

    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_ActiveMarketLog() {
    var tempObject = new Object();
    var columnsToDisplay = new Array();

    columnsToDisplay.push("Station");
    columnsToDisplay.push("Client ID");
    columnsToDisplay.push("Input Date");
    columnsToDisplay.push("Balance");
    columnsToDisplay.push("Phone");
    columnsToDisplay.push("Owner");
    columnsToDisplay.push("Script");
    columnsToDisplay.push("Contact");
    columnsToDisplay.push("Email");

    tempObject = {
        reportTitle: "Active Market Log",
        apiControllerAction: "/api/XRayReport/GetActiveMarketLog",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['xry'],
        approved: true
    }

    return tempObject;
}

function getReportFilterArray_ActiveMarketLogSummary() {
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
    arrayObject = new Object();

    arrayObject = {
        token: "Year",
        jsCall: "getYearList",
        objectName: "ddlYear",
        required: true
    }

    arrayFilters.push(arrayObject),
    arrayObject = new Object();

    arrayObject = {
        token: "Period",
        jsCall: "getPeriodList",
        jsCallParameters: ['months'],
        objectName: "ddlPeriod",
        required: true
    }

    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_ActiveMarketLogSummary() {
    var tempObject = new Object();
    var columnsToDisplay = new Array();

    columnsToDisplay.push("Radio Total");
    columnsToDisplay.push("Television Total");
    columnsToDisplay.push("Newspaperss Total");
    columnsToDisplay.push("System Total");
    columnsToDisplay.push("Radio Adjustment");
    columnsToDisplay.push("Book Radio");

    tempObject = {
        reportTitle: "Active Market Log Summary",
        apiControllerAction: "/api/XRayReport/GetActiveMarketLogSummary",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['xry']
    }

    return tempObject;
}


// XRY Reports end here

function getReportFilterArray_UsersNotSetupInSystem() {
    var arrayFilters = new Array();
    var arrayObject = new Object();
 

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
        sortable: true,
        approved: true 

    }

    return tempObject;
}
 
function getReportFilterArray_XRAYDataRetentionList() {
    var arrayFilters = new Array();
    var arrayObject = new Object();


    return arrayFilters;
}

function getReportObject_XRAYDataRetentionList() {
    var tempObject = new Object();

    var columnsToDisplay = new Array();

    tempObject =
    {
        reportTitle: "XRay Data Retention Exceptions",
        apiControllerAction: "/api/XRAYReport/GetDataRetentionList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['xry'],
        sortable: true,
        approved: true

    }

    return tempObject;
}

function getReportFilterArray_MRRComplimentaryMarketRevenueEntry() {
    var arrayFilters = new Array();
    var arrayObject = new Object();


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
        product: ['mrr', 'MRR Setup Info'],
        sortable: true,
        approved: true

    }

    return tempObject;
}
//
function getReportFilterArray_MRRModeUsageSummary() {
    var arrayFilters = new Array();
    var arrayObject = new Object();
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

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['MRR'],
        objectName: "ddlMarket",
        required: false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_MRRModeUsageSummary()
{
    var tempObject = new Object();

    var columnsToDisplay = new Array();


    columnsToDisplay.push("Market");

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
        sortable: false,
        approved: true

    }

    return tempObject;
}

function getReportFilterArray_MRROutstandingStationList()
{

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
        jsCallParameters: ['all', 'priorperiod'],
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
    columnsToDisplay.push("User");
    columnsToDisplay.push("Email");
    columnsToDisplay.push("Phone");
    columnsToDisplay.push("Position");

    tempObject =
    {
        reportTitle: "MRR Outstanding Stations",
        apiControllerAction: "/api/MRRReport/GetOutstandingStations",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['mrr', 'MRR Data Review', 'MRR Notifications'],
        sortable: true,
        approved: true

    }

    return tempObject;
}

function getReportFilterArray_TVBOutstandingStationList() {

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
        jsCallParameters: ['all', 'priorperiod'],
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
    columnsToDisplay.push("User");
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
        sortable: true,
        approved: true

    }

    return tempObject;
}

function getReportFilterArray_AdvertiserDisabledAndNotMergedList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();


    arrayObject = new Object();
    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['XRY'],
        objectName: "ddlMarket",
        required: true
    }
    arrayFilters.push(arrayObject);



    return arrayFilters;
}
function getReportObject_AdvertiserDisabledAndNotMergedList()
{

    var tempObject = new Object();

    var columnsToDisplay = new Array();

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
    columnsToDisplay.push("Has Links");

    columnsToDisplay.push({
        "action": "edit",
        "mRender": function (data, type, row) {

            //still need to determine what the delete functionality is
            var actionParameters = "";
            actionParameters = row["Advertiser Id"] + ",'" + row["Advertiser"] + "'";

            if (row["Has Revenue"].toLowerCase() == "no" && row["Has Links"].toLowerCase() == "no") {
                return "<a href=\"#\" onclick=\"deleteDisabledAdvertiser(" + actionParameters + ")\">Delete</a>";
            } else {
                return '';
            }

        },
        "orderable": false,
        "searchable": false,
        "className": "text-align-right"
    });


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
    var arrayObject = new Object();
 
    arrayObject = new Object();
    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['XRY'],
        objectName: "ddlMarket",
        required: true
    }
    arrayFilters.push(arrayObject);



    return arrayFilters;
}
function getReportObject_AgencyDisabledAndNotMergedList() {

    var tempObject = new Object();

    var columnsToDisplay = new Array();

    columnsToDisplay.push("Market");
    columnsToDisplay.push("Agency");
    columnsToDisplay.push("Account Type");
    columnsToDisplay.push("Parent Agency");
    columnsToDisplay.push("Date Setup");
    columnsToDisplay.push("Date Changed");
    columnsToDisplay.push("Disable Date");
    columnsToDisplay.push("Posted By");
    columnsToDisplay.push("Has Revenue");
    columnsToDisplay.push("Has Links");

    columnsToDisplay.push({
        "action": "edit",
        "mRender": function (data, type, row) {

            //still need to determine what the delete functionality is
            var actionParameters = "";
            actionParameters = row["Agency Id"] + ",'" + row["Agency"] + "'";

            if (row["Has Revenue"].toLowerCase() == "no" && row["Has Links"].toLowerCase() == "no") {
                return "<a href=\"#\" onclick=\"deleteDisabledAgency(" + actionParameters + ")\">Delete</a>";
            } else {
                return '';
            }

        },
        "orderable": false,
        "searchable": false,
        "className": "text-align-right"
    });

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
    var arrayObject = new Object();

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
        sortable: true,
        approved: true

    }

    return tempObject;
}

function getReportFilterArray_ImpersonationLogList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

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
        product: ['misc', 'personnel','tech', 'qa'],
        sortable: false,
        approved: true

    }

    return tempObject;
}


//Corporate Reports 

function getReportFilterArray_TrafficSystemAdvertiser() {
    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['XRY'],
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
    var arrayObject = new Object();

    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['XRY'],
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
    var arrayObject = new Object();

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
    var tempObject = new Object();

    tempObject = {
        reportTitle: "Month to Month",
        apiControllerAction: "/api/CorporateReport/InsertMonthToMonthReportIntoQueue",
        apiType: "post",
        product: ['corporate'],
        reportPath: "/Products/XRY/reports/xrycorporatereport.html"
    }

    return tempObject;
}

function getReportFilterArray_LAIndSummary() {
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
    arrayObject = new Object();

    arrayObject = {
        token: "ToYearPeriod",
        jsCall: "getPeriodList_YYYYMM",
        objectName: "ddlToYYYYMM",
        required: true
    }

    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_LAIndSummary() {
    var tempObject = new Object();

    tempObject = {
        reportTitle: "LA Ind Summary",
        apiControllerAction: "/api/CorporateReport/InsertLAIndSummaryReportIntoQueue",
        apiType: "post",
        product: ['corporate'],
        reportPath: "/Products/XRY/reports/xrycorporatereport.html"
    }

    return tempObject;
}

function getReportFilterArray_IRMktbyIndAnalysis() {
    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['XRY'],
        objectName: "ddlOwner",
        required: true
    }

    arrayFilters.push(arrayObject);
    arrayObject = new Object();

    arrayObject = {
        token: "ToYearPeriod",
        jsCall: "getPeriodList_YYYYMM",
        objectName: "ddlToYYYYMM",
        required: true
    }

    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_IRMktbyIndAnalysis() {
    var tempObject = new Object();

    tempObject = {
        reportTitle: "Market Ind Analysis",
        apiControllerAction: "/api/CorporateReport/InsertIRMktbyIndAnalysisReportIntoQueue",
        apiType: "post",
        product: ['corporate'],
        reportPath: "/Products/XRY/reports/xrycorporatereport.html"
    }

    return tempObject;
}

function getReportFilterArray_Top50Advertisers() {
    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['XRY'],
        objectName: "ddlOwner",
        required: true
    }

    arrayFilters.push(arrayObject);
    arrayObject = new Object();

    arrayObject = {
        token: "ToYearPeriod",
        jsCall: "getPeriodList_YYYYMM",
        objectName: "ddlToYYYYMM",
        required: true
    }

    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_Top50Advertisers() {
    var tempObject = new Object();

    tempObject = {
        reportTitle: "Top 50 Advertisers",
        apiControllerAction: "/api/CorporateReport/InsertTop50AdvertisersReportIntoQueue",
        apiType: "post",
        product: ['corporate'],
        reportPath: "/Products/XRY/reports/xrycorporatereport.html"
    }

    return tempObject;
}

function getReportFilterArray_RABSummaryByRegion() {
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
        jsCall: "getPeriodList",
        jsCallParameters: ["quarters"],
        objectName: "ddlPeriod",
        required: true
    }

    arrayFilters.push(arrayObject);
    return arrayFilters;

}

function getReportObject_RABSummaryByRegion() {
    var tempObject = new Object();

    tempObject = {
        reportTitle: "RAB Summary By Region",
        apiControllerAction: "/api/CorporateReport/InsertRABReportSummaryByRegionIntoQueue",
        apiType: "post",
        product: ['corporate'],
        reportPath: "/Products/XRY/reports/xrycorporatereport.html"
    }

    return tempObject;
}

function getReportFilterArray_RAB() {
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
        jsCall: "getPeriodList",
        jsCallParameters: ["quarters"],
        objectName: "ddlPeriod",
        required: true
    }

    arrayFilters.push(arrayObject);
    arrayObject = new Object();

    arrayObject = {
        token: "InternalReport",
        objectName: "ddlInternalReport",
        jsCall: null,
        required: true
    }

    arrayFilters.push(arrayObject);
    arrayObject = new Object();

    arrayObject = {
        token: "YTDReport",
        objectName: "ddlYTDReport",
        jsCall: null,
        required: true
    }

    arrayFilters.push(arrayObject);
    return arrayFilters;

}

function getReportObject_RAB() {
    var tempObject = new Object();

    tempObject = {
        reportTitle: "RAB",
        apiControllerAction: "/api/CorporateReport/InsertRABReportIntoQueue",
        apiType: "post",
        product: ['corporate'],
        reportPath: "/Products/XRY/reports/xrycorporatereport.html"
    }

    return tempObject;
}

//End Of Corporate Reports


function getReportFilterArray_TimeSalesVsRepBilling() {

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
        jsCallParameters: ['all', 'quarter'],
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
        product: ['tvb', 'TVB Data Review', 'old admin'],
        sortable: true,
        approved: true

    }

    return tempObject;
}

function getReportFilterArray_RepBillingSubmissionStatusList() {

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
        jsCallParameters: ['all', 'quarter'],
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
        product: ['tvb', 'TVB Data Review', 'old admin'],
        sortable: true,
        approved: true

    }

    return tempObject;
}

function getReportFilterArray_RepBillingStationList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

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
        sortable: true,
        approved: true

    }

    return tempObject;
}

function getReportFilterArray_TimeSalesStationList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

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
        sortable: true,
        approved: true

    }

    return tempObject;
}

function getReportFilterArray_RepBillingCompareList() {

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
        jsCallParameters: ['all', 'quarter'],
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
        product: ['tvb', 'TVB Data Review', 'old admin'],
        sortable: true,
        // Possible future improvement: generalize this to .generic-report-footer, also in genericreport.html / xrygenericreport.html / dmagenericreport.html)
        footerFormat: '<tfoot class="rev-research-footer" style="display: none"><tr>'
            + '<th>Totals</th>' // market
            + '<th></th>' // owner
            + '<th></th>' // station
            + '<th></th>' // rep firm
            + '<th></th>' // national non-political current
            + '<th></th>' // national non-political prior
            + '<th></th>' // national non-political growth
            + '<th></th>' // national political current
            + '<th></th>' // national political prior
            + '<th></th>' // national political growth
            + '<th></th>' // national time sales current
            + '<th></th>' // national time sales prior
            + '<th></th>' // national time sales growth
            + '</tr></tfoot>',
        footerCallback: function (row, data, start, end, display) {

            $(".rev-research-footer").show();

            var api = this.api();

            // Remove the formatting to get integer data for summation
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\$,]/g, '') * 1 :
                    typeof i === 'number' ?
                    i : 0;
            };

            // DataTables approach runs into https://datatables.net/manual/tech-notes/4 for some reason
            //var columnsWithTotals = [
            //    4, // national non-political current
            //    5, // national non-political prior
            //    7, // national political current
            //    8, // national political prior
            //    10, // national time sales current
            //    11 // national time sales prior
            //];
            //columnsWithTotals.forEach(function (currentColumn) {
            //    var totalAmount = api.column(currentColumn).data().reduce(function (a, b) {
            //        return intVal(a) + intVal(b);
            //    }, 0);
            //    $(api.column(currentColumn).footer()).html(
            //        totalAmount.toLocaleString('en-US', {
            //            style: 'currency',
            //            currency: 'USD',
            //            minimumFractionDigits: 0
            //        })
            //    );
            //});

            var columnsWithTotals = [
                [4, "National Non-Political Current"],
                [5, "National Non-Political Prior"],
                [7, "National Political Current"],
                [8, "National Political Prior"],
                [10, "National Time Sales Current"],
                [11, "National Time Sales Prior"]
            ];
            columnsWithTotals.forEach(function (currentColumn) {
                var totalAmount = 0;
                data.forEach(function (currentRow) {
                    totalAmount += intVal(currentRow[currentColumn[1]]);
                });
                $(api.column(currentColumn[0]).footer()).html(
                    totalAmount.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 0
                    })
                );
            });

        }
    }

    return tempObject;
}

function getReportFilterArray_TimeSalesCompareList() {

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
        jsCallParameters: ['all', 'priorperiod'],
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
        jsCallParameters: ['all', 'priorperiod'],
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
        product: ['tvb', 'TVB Data Review', 'old admin'],
        sortable: true,
        approved: true

    }

    return tempObject;
}

function getReportFilterArray_TimeSalesCompleteRevenueList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = new Object();
    arrayObject = {
        token: "Year",
        jsCall: "getYearList",
        objectName: "ddlYear",
        required: true,
        approved: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Period",
        objectName: "ddlPeriod",
        jsCall: "getPeriodList",
        jsCallParameters: ['all', 'priorperiod'],
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
        product: ['tvb', 'TVB Data Review', 'old admin'],
        sortable: true,
        approved: true

    }

    return tempObject;
}

function getReportFilterArray_TimeSalesPersonnelContactList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: new Array('TVB'),
        objectName: "ddlMarket",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: new Array('TVB'),
        objectName: "ddlOwner",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Station",
        jsCall: "getStationListByGeneralFilters",
        objectName: "ddlStation",
        reloadBasedMarket: true,
        reloadBasedOwner: true,
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Personnel",
        jsCall: null,
        objectName: "hidPersonnel",
        required: false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_TimeSalesPersonnelContactList() {

    var tempObject = new Object();

    var columnsToDisplay = new Array();

    tempObject =
    {
        reportTitle: "Time Sales Contact List",
        apiControllerAction: "/api/TVBReport/GetPersonnelContactList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['tvb'],
        sortable: true,
        approved: true

    }

    return tempObject;
}

function getReportFilterArray_PersonnelContactListForEstimates() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: new Array('TVB'),
        objectName: "ddlMarket",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: new Array('TVB'),
        objectName: "ddlOwner",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Station",
        jsCall: "getStationListByGeneralFilters",
        objectName: "ddlStation",
        reloadBasedMarket: true,
        reloadBasedOwner: true,
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Personnel",
        jsCall: null,
        objectName: "hidPersonnel",
        required: false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_PersonnelContactListForEstimates() {

    var tempObject = new Object();

    var columnsToDisplay = new Array();

    tempObject =
    {
        reportTitle: "Estimated Contact List",
        apiControllerAction: "/api/TVBReport/GetPersonnelContactListForEstimates",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['tvb'],
        sortable: true

    }

    return tempObject;
}

function getReportFilterArray_PersonnelContactListByRepFirm() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: new Array('TVB'),
        objectName: "ddlMarket",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: new Array('TVB'),
        objectName: "ddlOwner",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Station",
        jsCall: "getStationListByGeneralFilters",
        objectName: "ddlStation",
        reloadBasedMarket: true,
        reloadBasedOwner: true,
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Personnel",
        jsCall: null,
        objectName: "hidPersonnel",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "RepFirm",
        jsCall: "getRepFirmList",
        objectName: "ddlRepFirm",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_PersonnelContactListByRepFirm() {

    var tempObject = new Object();

    var columnsToDisplay = new Array();

    tempObject =
    {
        reportTitle: "Rep Firm Contact List",
        apiControllerAction: "/api/TVBReport/GetPersonnelContactListByRepFirm",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['tvb'],
        sortable: true,
        approved:true

    }

    return tempObject;
}

 
function getReportFilterArray_MarketStationProductCountList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = new Object();
    arrayObject = {
        token: "Product",
        jsCall: "getProductList",
        objectName: "ddlProduct",
        required: false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_MarketStationProductCountList() {

    var tempObject = new Object();

    var columnsToDisplay = new Array();

    tempObject =
    {
        reportTitle: "Market Product Station Count List",
        apiControllerAction: "/api/MarketReport/GetMarketStationProductCountList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['market', 'station'],
        sortable: true

    }

    return tempObject;
}
function getReportFilterArray_MRRStationSubmissionStatus() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Product",
        jsCall: "getProductListHidden",
        jsCallParameters: ['MRR', true],
        objectName: "ddlProduct",
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

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProductMediaType",
        jsCallParameters: ['MRR'],
        objectName: "ddlMarket",
        reloadBasedProduct: true,
        reloadBasedMediaType: true,
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

    arrayObject = {
        token: "StationStatus",
        jsCall: "getStationStatus",
        objectName: "ddlStationStatus",
        required: false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_MRRStationSubmissionStatus() {

    var tempObject = new Object();

    var columnsToDisplay = new Array();

    tempObject =
    {
        reportTitle: "MRR Station Submission Status",
        apiControllerAction: "/api/MRRReport/GetMRRStationSubmissionStatus",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['market', 'station', 'mrr', 'MRR Data Review', 'mrr delivery'],
        sortable: true,
        approved: true

    }

    return tempObject;
}
 
function getReportFilterArray_MRRStationSubmissionStatusByMarket() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = new Object();
    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['MRR'],
        objectName: "ddlMarket",
        required: true
     }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_MRRStationSubmissionStatusByMarket() {

    var tempObject = new Object();

    var columnsToDisplay = new Array();

    tempObject =
    {
        reportTitle: "MRR UI Station Submission Status",
        apiControllerAction: "/api/MRRReport/GetMRRStationSubmissionStatusByMarket",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['market', 'station', 'mrr'],
        sortable: true,
        approved: true

    }

    return tempObject;
}

function getReportFilterArray_ExclusiveAdvertiserChanges() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = new Object();
    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['XRY'],
        objectName: "ddlMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['XRY'],
        objectName: "ddlOwner",
        required: false
    }

    arrayFilters.push(arrayObject);
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
function getReportFilterArray_ExclusiveAccountChanges() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = new Object();
    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['XRY'],
        objectName: "ddlMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['XRY'],
        objectName: "ddlOwner",
        required: false
    }

    arrayFilters.push(arrayObject);
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
function getReportObject_ExclusiveAdvertiserChanges() {

    var tempObject = new Object();

    var columnsToDisplay = new Array();

    tempObject =
    {
        reportTitle: "XRay Exclusive Advertiser Changes",
        apiControllerAction: "/api/XRAYReport/GetExclusiveAdvertiserChanges",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['market', 'advertiser', 'xry', 'qa'],
        sortable: true

    }

    return tempObject;
}
function getReportObject_ExclusiveAccountChanges() {

    var tempObject = new Object();

    var columnsToDisplay = new Array();

    tempObject =
    {
        reportTitle: "XRay Exclusive Account Changes",
        apiControllerAction: "/api/XRAYReport/GetExclusiveAccountChanges",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['market', 'agency', 'xry', 'qa'],
        sortable: true

    }

    return tempObject;
}
function getReportFilterArray_MRRMarketTotalsForNAB() {

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

 

    return arrayFilters;
}
function getReportObject_MRRMarketTotalsForNAB() {

    var tempObject = new Object();

    var columnsToDisplay = new Array();

    tempObject =
    {
        reportTitle: "MRR Market Totals for NAB",
        apiControllerAction: "/api/SurveyReport/GetMRRMarketTotals",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['mrr', 'NAB', 'survey'],
        sortable: true,
        approved : true

    }

    return tempObject;
}

function getReportFilterArray_SweeperLogMRRRevenue() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = new Object();
    arrayObject = {
        token: "AsyncJobDaysBack",
        objectName: "ddlAsyncJobDaysBack",
        jsCall: "getAsyncJobDaysBackList",
        required: true
    }
    arrayFilters.push(arrayObject);
    return arrayFilters;
}
function getReportObject_SweeperLogMRRRevenue() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "MRR Revenue Sweeper Log",
        apiControllerAction: "/api/MRRReport/GetSweeperLogMRRRevenue",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['tech', 'mrr', 'MRR Security and Analysis'],
        autoUpdate: false,
        approved: true
    }

    return tempObject;
}

function getReportFilterArray_ProductMarketOwnerActivationList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

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

    arrayObject = {
        token: "Product",
        jsCall: "getProductList",
        objectName: "ddlProduct",
        required: false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_ProductMarketOwnerActivationList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {
 
        reportTitle: "Product Market/Owner Activation List",
        apiControllerAction: "/api/ProductReport/GetProductMarketOwnerActivationList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['product', 'owner', 'market'],
        approved: true
    }

    return tempObject;

}

function getReportFilterArray_XRYMarketExclusivitySettings() {

    var arrayFilters = new Array();
    var arrayObject = new Object();
    return arrayFilters;
}
function getReportObject_XRYMarketExclusivitySettings() {

    var tempObject = new Object();

    columnsToDisplay = new Array();


    tempObject =
    {

        reportTitle: "XRay Market Exclusivity Settings",
        apiControllerAction: "/api/XRAYReport/GetMarketExclusionSettings",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['xry', 'advertiser', 'agency'],
        approved: true
    }

    return tempObject;

}

function getReportFilterArray_AEWebUserMatches() {

    var arrayFilters = new Array();
    var arrayObject = new Object();
    return arrayFilters;
}
function getReportObject_AEWebUserMatches() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Owner");
    columnsToDisplay.push("User");
    columnsToDisplay.push("Email");
    columnsToDisplay.push("Account Executive");
    columnsToDisplay.push("Status");
    columnsToDisplay.push({
        "action": "edit",
        "mRender": function (data, type, row) {
            var linkType = 'primary';
            var link = '';
            if (row.Status.indexOf('secondary') > -1 )
            {
                linkType = 'primary';
            }

            if (row.Status.indexOf('none') > -1 )
            {
                linkType = 'primary';
                link = '<a href="#" onclick=\'linkAE(' + row.personnelId + ',' + row.aeId + ',' + 'true);\'>link as primary</a>';;
                link = link + '<br><a href="#" onclick=\'linkAE(' + row.personnelId + ',' + row.aeId + ',' + 'false);\'>link as secondary</a>';;
            }

            if (link.length > 0)
            {
                return link;
            }
            else
            {
                return "";
            }
            return
        },
        "orderable": false,
        "searchable": false,
        "className": "text-align-right"
    });

    tempObject =
    {

        reportTitle: "Account Executive Web Matches",
        apiControllerAction: "/api/AccountExecutiveReport/GetAEWebUserMatches",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['xry', 'account executive']
    }

    return tempObject;

}
function getReportFilterArray_MediaRevenueWithDisabledAdvertisers() {

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

function getReportObject_MediaRevenueWithDisabledAdvertisers() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    columnsToDisplay.push("Market");
    //columnsToDisplay.push("Station");
    //columnsToDisplay.push("Station Advertiser");
    columnsToDisplay.push("Media Advertiser");
    columnsToDisplay.push("Media Period");
    columnsToDisplay.push("Advertiser");
    columnsToDisplay.push("Advertiser Disable Date");
    columnsToDisplay.push("Media Type");
 
    columnsToDisplay.push("Revenue");
    columnsToDisplay.push("Date Posted");


    tempObject =
    {

        reportTitle: "Media Revenue with Disabled Advertisers",
        apiControllerAction: "/api/XRAYRevenue/GetMediaRevenueWithDisabledAdvertisers",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['xry', 'XRY Data Review']
    }

    return tempObject;

}
function getReportFilterArray_RevenueWithDisabledAdvertisersAgencies() {

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
        token: "Station",
        jsCall: "getStationListByGeneralFilters",
        objectName: "ddlStation",
        reloadBasedMarket: true,
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
        jsCall: "getPeriodList",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_RevenueWithDisabledAdvertisersAgencies() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Station");
    columnsToDisplay.push("Station Advertiser");
    columnsToDisplay.push("Advertiser");
    columnsToDisplay.push("Advertiser Disable Date");
    columnsToDisplay.push("Media Type");
    columnsToDisplay.push("Station Agency");
    columnsToDisplay.push("Agency");
    columnsToDisplay.push("Agency Disable Date");
    columnsToDisplay.push("Revenue");
    columnsToDisplay.push("Date Posted");


    tempObject =
    {

        reportTitle: "Revenue with Disabled Advertisers/Agencies",
        apiControllerAction: "/api/XRAYRevenue/GetRevenueWithDisabledAdvertisersAgencies",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['xry', 'XRY Data Review']
    }

    return tempObject;

}

function getReportFilterArray_MarketStationSummary() {

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
function getReportObject_MarketStationSummary() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    columnsToDisplay.push("Station");
    columnsToDisplay.push("Client Number");
    columnsToDisplay.push("Revenue");
    columnsToDisplay.push("MRR Total Spot + Paid + Digital");
    columnsToDisplay.push("Diff XRay / MRR");
    columnsToDisplay.push("XRay/MRR %");
    columnsToDisplay.push("This Year Last Period %");
    columnsToDisplay.push("Last Year This Period %");
    columnsToDisplay.push("Revenue This Year - Last Period");
    columnsToDisplay.push("Revenue Last Year - This Period");	
    columnsToDisplay.push("MRR/XRY Combo Station");	
    columnsToDisplay.push("MRR Total Spot + Paid");	
    columnsToDisplay.push("MRR Total Digital");	
    columnsToDisplay.push("Script");	
    columnsToDisplay.push("Owner");

    tempObject =
    {

        reportTitle: "Market Station Summary",
        apiControllerAction: "/api/XRAYRevenue/GetMarketStationSummary",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['xry', 'XRY Data Review'],
        sortable: false,
        approved: true
    }

    return tempObject;

}

 
function getReportFilterArray_XRYImportTypeIssueList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();
 
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
        jsCallParameters: ['months'],
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['XRY'],
        objectName: "ddlOwner",
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
function getReportObject_XRYImportTypeIssueList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
 
    tempObject =
    {
        reportTitle: "XRay Import Issue Type List",
        apiControllerAction: "/api/XRAYReport/GetImportIssueTypeList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['xry', 'XRY Data Review', 'xry imports']
    }

    return tempObject;
}
 
function getReportFilterArray_XRYContactListByMarketOwner() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['XRY'],
        objectName: "ddlMarket",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['XRY'],
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
        reloadBasedProduct: true,
        required: false
    }
    arrayFilters.push(arrayObject);
    return arrayFilters;
}
function getReportObject_XRYContactListByMarketOwner() {

    var tempObject = new Object();

    columnsToDisplay = new Array();

    tempObject =
    {
 
        reportTitle: "XRay Contact List",
        apiControllerAction: "/api/XRAYReport/GetContactListByMarketOwner",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['xry', 'XRY Data Review'],
        approved: true
    }

    return tempObject;
}

 
function getReportFilterArray_XRYAdvertiserExclusivitySpecs() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "MarketAdvertiser",
        objectName: "txtMarketAdvertiser",
        required: true
    }
    arrayFilters.push(arrayObject);

 
    return arrayFilters;
}
function getReportObject_XRYAdvertiserExclusivitySpecs() {

    var tempObject = new Object();

    columnsToDisplay = new Array();

    tempObject =
    {

        reportTitle: "XRay Advertiser Exclusivity List",
        apiControllerAction: "/api/XRAYReport/GetAdvertiserExclusivitySpecs",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['xry', 'qa']
    }

    return tempObject;
}

function getReportFilterArray_DemoMarketList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    return arrayFilters;
}
function getReportObject_DemoMarketList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();

    tempObject =
    {

        reportTitle: "Demo Market List",
        apiControllerAction: "/api/Demo/GetDemoMarketList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['tech']
    }

    return tempObject;
}

function getReportFilterArray_DemoStationList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    return arrayFilters;
}
function getReportObject_DemoStationList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();

    tempObject =
    {

        reportTitle: "Demo Station List",
        apiControllerAction: "/api/Demo/GetDemoStationList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['tech']
    }

    return tempObject;
}
 
function getReportFilterArray_InactiveStationAssignmentList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    return arrayFilters;
}
function getReportObject_InactiveStationAssignmentList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();

    tempObject =
    {

        reportTitle: "Inactive Station Assignment List",
        apiControllerAction: "/api/PersonnelReport/GetInactiveStationAssignmentList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['personnel'],
        approved: true
    }

    return tempObject;
}
function getReportFilterArray_ComplementaryMarketStationGapAnalysis() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getComplementaryMarketList",
        objectName: "ddlMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_ComplementaryMarketStationGapAnalysis() {

    var tempObject = new Object();

    columnsToDisplay = new Array();

    tempObject =
    {

        reportTitle: "Complementary Market Station Gap Analysis",
        apiControllerAction: "/api/MarketReport/GetComplementaryMarketStationGapAnalysis",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['market']
    }

    return tempObject;
}
 
function getReportFilterArray_UnreleasedMarketIssueList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();
 

    return arrayFilters;
}
function getReportObject_UnreleasedMarketIssueList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();

    tempObject =
    {

        reportTitle: "Unreleased Market Issue List",
        apiControllerAction: "/api/MarketReport/GetUnreleasedMarketIssueList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['market']
    }

    return tempObject;
}
 
function getReportFilterArray_TVBReviewUserListing() {

    var arrayFilters = new Array();
    var arrayObject = new Object();
    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['TVB'],
        objectName: "ddlMarket",
        required: false
    }
    arrayFilters.push(arrayObject);

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
function getReportObject_TVBReviewUserListing() {

    var tempObject = new Object();

    columnsToDisplay = new Array();

    tempObject =
    {

        reportTitle: "TVB Data Review User Listing",
        apiControllerAction: "/api/TVBReport/GetTVBRecipientListing",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['tvb', 'TVB Data Review', 'old admin'],
        approved: true
    }

    return tempObject;
}

function getReportFilterArray_UsersByProduct() {

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
function getReportObject_UsersByProduct() {

    var tempObject = new Object();

    columnsToDisplay = new Array();

    tempObject =
    {

        reportTitle: "Users by Product",
        apiControllerAction: "/api/Report/GetAllUsersStationProduct",
        apiType: "post",
        columnsToDisplay: columnsToDisplay,
        product: ['personnel', 'old admin']
    }

    return tempObject;
}

//function getReportFilterArray_OutstandingStations() {

//    var arrayFilters = new Array();
//    var arrayObject = new Object();


//    return arrayFilters;
//}
//function getReportObject_OutstandingStations() {

//    var tempObject = new Object();

//    columnsToDisplay = new Array();

//    tempObject =
//    {

//        reportTitle: "Outstanding Stations",
//        apiControllerAction: "none",
//        apiType: "get",
//        columnsToDisplay: columnsToDisplay,
//        product: ['station', 'old admin']
//    }

//    return tempObject;
//}

function getReportFilterArray_ListErrors() {

    var arrayFilters = new Array();
    var arrayObject = new Object();
    arrayObject = {
        token: "ErrorDates",
        jsCall: "getErrorDates",
        objectName: "ddlErrorDates",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "ErrorIPAddress",
        jsCall: null,
        objectName: "ddlErrorIPAddress",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_ListErrors() {

    var tempObject = new Object();

    columnsToDisplay = new Array();

    tempObject =
    {

        reportTitle: "Web Error Report",
        apiControllerAction: "/api/Error/GetErrorList",
        apiType: "post",
        columnsToDisplay: columnsToDisplay,
        product: ['tech', 'old admin']
    }

    return tempObject;
}
 
function getReportFilterArray_XRYOwnersWithoutRecipients() {

    var arrayFilters = new Array();
    var arrayObject = new Object();


    return arrayFilters;
}
function getReportObject_XRYOwnersWithoutRecipients() {

    var tempObject = new Object();

    columnsToDisplay = new Array();

    tempObject =
    {

        reportTitle: "XRay Owners without Recipients",
        apiControllerAction: "/api/XRAYReport/GetOwnersWithoutRecipients",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['xry'],
        approved: true

    }

    return tempObject;
}

function getReportFilterArray_MRRImportMarketCategoryWarningToleranceList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();


    return arrayFilters;
}
function getReportObject_MRRImportMarketCategoryWarningToleranceList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();

    tempObject =
    {

        reportTitle: "MRR Import Warning Tolerance",
        apiControllerAction: "/api/RevenueCategory/GetMRRImportMarketCategoryWarningToleranceList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['mrr'],
        approved: true
    }

    return tempObject;
}


function getReportFilterArray_AccountExecutiveStatusMarketOwnerList() {

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
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['XRY'],
        objectName: "ddlOwner",
        required: false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_AccountExecutiveStatusMarketOwnerList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
 

    tempObject =
    {
        reportTitle: "Account Executive Account Type List",
        apiControllerAction: "/api/AccountExecutiveReport/GetAccountExecutiveStatusByMarketOwner",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['xry', 'Account Executive']
    }

    return tempObject;
}

function getReportFilterArray_MediaActionList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

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
function getReportObject_MediaActionList() {

    var tempObject = new Object();
 
    tempObject =
    {
 
        reportTitle: "Media Action Report",
        apiControllerAction: "/api/Report/GetMediaAction",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['tech'],
        approved: true
    }

    return tempObject;

}

function getReportFilterArray_AdvertiserListByOwner() {
    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['XRY'],
        objectName: "ddlMarket",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['XRY'],
        objectName: "ddlOwner",
        required: true
    }
    arrayFilters.push(arrayObject);


    arrayObject = {
        token: "MarketAgencyName",
        objectName: "txtMarketAgencyName",
        jsCall: null,
        required: false
    }
    arrayFilters.push(arrayObject);

 

    return arrayFilters;
}

function getReportObject_AdvertiserListByOwner() {
    var tempObject = new Object();

    var columnsToDisplay = new Array();
    columnsToDisplay.push("Agency");
    columnsToDisplay.push("Market");

    tempObject =
    {
        reportTitle: "Agency List by Owner",
        apiControllerAction: "/api/Agency/GetAgencyListByOwner",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['agency', 'xry'],
        approved: true
    }

    return tempObject;
}

function getReportFilterArray_AgencyListByOwner() {
    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['XRY'],
        objectName: "ddlMarket",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['XRY'],
        objectName: "ddlOwner",
        required: true
    }
    arrayFilters.push(arrayObject);


    arrayObject = {
        token: "MarketAdvertiserName",
        objectName: "txtMarketAdvertiserName",
        jsCall: null,
        required: false
    }
    arrayFilters.push(arrayObject);



    return arrayFilters;
}

function getReportObject_AgencyListByOwner() {
    var tempObject = new Object();

    var columnsToDisplay = new Array();
    columnsToDisplay.push("Advertiser");
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Industry");

    tempObject =
    {
        reportTitle: "Advertiser List by Owner",
        apiControllerAction: "/api/Advertiser/GetAdvertiserListByOwner",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['advertiser', 'xry'],
        approved: true
    }

    return tempObject;
}
 
function getReportFilterArray_UsersNotLoggedInAfterDateList() {
    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProductMarketMediaType",
        objectName: "ddlOwner",
        required: false,
        reloadBasedProduct: true,
        reloadBasedMediaType: true
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
        token: "FromDate",
        jsCall: null,
        objectName: "dtFromDate",
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

function getReportObject_UsersNotLoggedInAfterDateList()
{
    var tempObject = new Object();

    var columnsToDisplay = new Array();
 

    tempObject =
    {
        reportTitle: "Users Not Logged In Since Date List",
        apiControllerAction: "/api/PersonnelReport/GetUsersNotLoggedInSinceList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['personnel'],
        approved: true
    }

    return tempObject;
}

function getReportFilterArray_StandardInputList() {
    var arrayFilters = new Array();
    var arrayObject = new Object();
    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['XRY'],
        objectName: "ddlOwner",
        required: false
    }
    arrayFilters.push(arrayObject);
    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['XRY'],
        objectName: "ddlMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

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

    arrayObject = {
        token: "Station",
        jsCall: "getStationListByGeneralFilters",
        objectName: "ddlStation",
        reloadBasedMarket: true,
        reloadBasedOwner: true,
        reloadBasedProduct: false,
        required: false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_StandardInputList() {

    var tempObject = new Object();

    var columnsToDisplay = new Array();
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Owner");
    columnsToDisplay.push("Station");
    columnsToDisplay.push("Advertiser Raw");
    columnsToDisplay.push("Advertiser");
    columnsToDisplay.push("Agency Raw");
    columnsToDisplay.push("Agency");

    columnsToDisplay.push("Revenue");

    columnsToDisplay.push("Category");
    columnsToDisplay.push("Account Type");
    columnsToDisplay.push("Revenue Type");

    tempObject =
    {
        reportTitle: "Standard Input List",
        apiControllerAction: "/api/XrayReport/GetStandardInputList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['xry', 'advertiser', 'agency', 'xry imports']
    }

    return tempObject;
}
 
function getReportFilterArray_QueryMarketCounts()
{

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['XRY'],
        objectName: "ddlOwner",
        required: true
    }
    arrayFilters.push(arrayObject);
    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['XRY'],
        objectName: "ddlMarket",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "StartDate",
        jsCall: null,
        objectName: "dtStartDate",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "EndDate",
        jsCall: null,
        objectName: "dtEndDate",
        required: true
    }
    arrayFilters.push(arrayObject);

 

    return arrayFilters;
}
function getReportObject_QueryMarketCounts() {

    var tempObject = new Object();

    var columnsToDisplay = new Array();

    tempObject =
    {
        reportTitle: "XRAY Query Market Counts",
        apiControllerAction: "/api/XrayReport/GetQueryMarketCounts",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['xry']
    }

    return tempObject;
}

function getReportFilterArray_QueryUserCounts() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Product",
        jsCall: "getProductListHidden",
        jsCallParameters: ['XRY', true],
        objectName: "ddlProduct",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['XRY'],
        objectName: "ddlOwner",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProductOwner",
        jsCallParameters: ['XRY'],
        objectName: "ddlMarket",
        reloadBasedProduct: true,
        reloadBasedOwner: true,
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "StartDate",
        jsCall: null,
        objectName: "dtStartDate",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "EndDate",
        jsCall: null,
        objectName: "dtEndDate",
        required: true
    }
    arrayFilters.push(arrayObject);
    
    return arrayFilters;
}
function getReportObject_QueryUserCounts() {

    var tempObject = new Object();

    var columnsToDisplay = new Array();

    tempObject =
    {
        reportTitle: "XRAY Query User Counts",
        apiControllerAction: "/api/XrayReport/GetQueryUserCounts",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['xry']
    }

    return tempObject;
}

function getReportFilterArray_QueryCountsByOwnerMarket() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['XRY'],
        objectName: "ddlOwner",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['XRY'],
        objectName: "ddlMarket",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "StartDate",
        jsCall: null,
        objectName: "dtStartDate",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "EndDate",
        jsCall: null,
        objectName: "dtEndDate",
        required: true
    }
    arrayFilters.push(arrayObject);



    return arrayFilters;
}
function getReportObject_QueryCountsByOwnerMarket() {

    var tempObject = new Object();

    var columnsToDisplay = new Array();

    tempObject =
    {
        reportTitle: "XRAY Query Market Counts by Market/Owner",
        apiControllerAction: "/api/XrayReport/GetQueryCountsByOwnerMarket",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['xry']
    }

    return tempObject;
}

function getReportFilterArray_QueryDetailByOwnerMarket() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['XRY'],
        objectName: "ddlOwner",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['XRY'],
        objectName: "ddlMarket",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "StartDate",
        jsCall: null,
        objectName: "dtStartDate",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "EndDate",
        jsCall: null,
        objectName: "dtEndDate",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_QueryDetailByOwnerMarket() {

    var tempObject = new Object();

    var columnsToDisplay = new Array();

    tempObject =
    {
        reportTitle: "XRAY Query Details by Market/Owner",
        apiControllerAction: "/api/XrayReport/GetQueryDetailByOwnerMarket",

        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['xry']
    }

    return tempObject;
}

 
function getReportFilterArray_ImportScriptListByOwner() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['XRY'],
        objectName: "ddlOwner",
        required: true
    }
    arrayFilters.push(arrayObject);

 

    return arrayFilters;
}
function getReportObject_ImportScriptListByOwner() {

    var tempObject = new Object();

    var columnsToDisplay = new Array();

    tempObject =
    {
        reportTitle: "Import Script List by Owner",
        apiControllerAction: "/api/XrayReport/GetImportScriptListByOwner",

        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['xry', 'xry imports'],
        approved: true
    }

    return tempObject;
}

function getReportFilterArray_StandardInputNotIncludedList() {
    var arrayFilters = new Array();
    var arrayObject = new Object();
    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['XRY'],
        objectName: "ddlOwner",
        required: false
    }
    arrayFilters.push(arrayObject);
    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['XRY'],
        objectName: "ddlMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

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

    arrayObject = {
        token: "Station",
        jsCall: "getStationListByGeneralFilters",
        objectName: "ddlStation",
        reloadBasedMarket: true,
        reloadBasedOwner: true,
        reloadBasedProduct: false,
        required: false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_StandardInputNotIncludedList() {

    var tempObject = new Object();

    var columnsToDisplay = new Array();
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Owner");
    columnsToDisplay.push("Station");
    columnsToDisplay.push("Advertiser Raw");
    columnsToDisplay.push("Advertiser");
    columnsToDisplay.push("Agency Raw");
    columnsToDisplay.push("Agency");

    columnsToDisplay.push("Revenue");

    columnsToDisplay.push("Category");
    columnsToDisplay.push("Account Type");
    columnsToDisplay.push("Revenue Type");

    tempObject =
    {
        reportTitle: "Standard Input Not Included List",
        apiControllerAction: "/api/XrayReport/GetStandardInputNotIncludedList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['xry', 'advertiser', 'agency', 'xry imports']
    }

    return tempObject;
}
function getReportFilterArray_MRRUserListing() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Product",
        jsCall: "getProductListHidden",
        jsCallParameters: ['MRR', true],
        objectName: "ddlProduct",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProductMediaType",
        jsCallParameters: ['MRR'],
        objectName: "ddlMarket",
        reloadBasedProduct: true,
        reloadBasedMediaType: true,
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProductMarketMediaType",
        jsCallParameters: ['MRR'],
        reloadBasedProduct: true,
        reloadBasedMarket: true,
        reloadBasedMediaType: true,
        objectName: "ddlOwner",
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

 
    arrayObject = {
        token: "Position",
        jsCall: "getPositionList",
        objectName: "ddlPosition",
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
function getReportObject_MRRUserListing() {

    var tempObject = new Object();

    //columnsToDisplay = new Array();
    //columnsToDisplay.push("Access Level");
    //columnsToDisplay.push("User")
    //columnsToDisplay.push("Email");
    //columnsToDisplay.push("Phone");
    //columnsToDisplay.push("Position");
    //columnsToDisplay.push("Market");
    //columnsToDisplay.push("Owner");

    tempObject =
    {
        // id: rptUserListing,
        reportTitle: "MRR User Listing",
        apiControllerAction: "/api/MRRReport/GetMRRUserListing",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['personnel', 'mrr'],
        approved : true
    }

    return tempObject;

}
//
function getReportFilterArray_CategoryGrowthByMarket() {

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

function getReportObject_CategoryGrowthByMarket() {

    var tempObject = new Object();

    var columnsToDisplay = new Array();
    columnsToDisplay.push("Industry");
    columnsToDisplay.push("Sub Industry");
    columnsToDisplay.push("This Period");
    columnsToDisplay.push("Last Period");
    columnsToDisplay.push("Growth");


    tempObject =
    {
        reportTitle: "Category Growth by Market",
        apiControllerAction: "/api/XrayReport/GetCategoryGrowthByMarket",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['xry', 'XRY Data Review'],
        approved: true
    }

    return tempObject;
}
function getReportFilterArray_TimeSalesVsAllRepBillingStations() {

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
        jsCallParameters: ['all', 'quarter'],
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
function getReportObject_TimeSalesVsAllRepBillingStations() {

    var tempObject = new Object();

    var columnsToDisplay = new Array();

    tempObject =
    {
        reportTitle: "Time Sales vs ALL Rep Billing Stations",
        apiControllerAction: "/api/TVBReport/GetTimeSalesVersusRepBillingAllRepBillingStations",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['tvb', 'TVB Data Review', 'old admin'],
        sortable: true

    }

    return tempObject;
}

function getReportFilterArray_PersonnelGroupList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = new Object();
    arrayObject = {
        token: "RelationshipOwners",
        jsCall: "getCreatorList",
        objectName: "ddlRelationshipOwner",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "PersonnelGroups",
        objectName: "ddlPersonnelGroups",
        jsCall: "getPersonnelGroups",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_PersonnelGroupList() {

    var tempObject = new Object();

    var columnsToDisplay = new Array();
    columnsToDisplay.push("User");
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Owner");
    columnsToDisplay.push("Phone");
    columnsToDisplay.push("Title");

    tempObject =
    {
        reportTitle: "MKA User Group Member List",
        apiControllerAction: "/api/Relationship/GetRelationshipListMembers",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['personnel'],
        sortable: true

    }

    return tempObject;
}

function getReportFilterArray_AdvertiserByCategory()
{
    var arrayFilters = new Array();
    var arrayObject = new Object();

    //market required
    arrayObject = {
        token: "Market",
        jsCall: "getXRYMarketList",
        objectName: "ddlMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

    //station
    arrayObject = {
        token: "Station",
        jsCall: "getStationListByGeneralFilters",
        objectName: "ddlStation",
        reloadBasedMarket: true,
        reloadBasedOwner: false,
        reloadBasedProduct: false,
        required: false
    }
    arrayFilters.push(arrayObject);

    //arrayObject = {
    //    token: "Station",
    //    jsCall: "getXrayStationList",
    //    objectName: "ddlStation",
    //    required: false
    //}
    //arrayFilters.push(arrayObject);
   

    //market advertiser name
    arrayObject = {
        token: "MarketAdvertiserName",
        jsCall: null,
        objectName: "txtMarketAdvertiserName",
        required: false
    }
    arrayFilters.push(arrayObject);

    //industry/category required
    arrayObject = {
        token: "Industry",
        jsCall: "getIndustryList",
        objectName: "ddlIndustry",
        required: true
    }
    arrayFilters.push(arrayObject);

    //sub industry/sub category
    arrayObject = {
        token: "SubIndustry",
        jsCall: "getSubIndustryList",
        objectName: "ddlSubIndustry",
        reloadBasedIndustry: true,
        required: false
    }
    arrayFilters.push(arrayObject);

    //owner update based on market
    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerList",
        objectName: "ddlOwner",
        reloadBasedMarket: true,
        required: false
    }
    arrayFilters.push(arrayObject);

    //yyyymm from period required
    arrayObject = {
        token: "FromYearPeriod",
        jsCall: "getPeriodList_YYYYMM",
        objectName: "ddlFromYYYYMM",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_AdvertiserByCategory() {

    var tempObject = new Object();

    var columnsToDisplay = new Array();
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Station");
    columnsToDisplay.push("Advertiser");
    columnsToDisplay.push("Agency");
    columnsToDisplay.push("Industry");
    columnsToDisplay.push("Revenue");

    tempObject =
    {
        reportTitle: "Advertisers By Category Summary",
        apiControllerAction: "/api/XRAYRevenue/GetAdvertiserByCategorySummary",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['xry', 'advertiser', 'XRY Data Review'],
        sortable: true,
        reportPath: "/Products/XRY/reports/xrygenericreport.html",
        approved: true

    }

    return tempObject;
}
 
function getReportFilterArray_TVBInvalidStationList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    return arrayFilters;
}

function getReportObject_TVBInvalidStationList() {

    var tempObject = new Object();

    var columnsToDisplay = new Array();
 

    tempObject =
    {
        reportTitle: "TVB Invalid Station List",
        apiControllerAction: "/api/TVBReport/GetInvalidStationList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['tvb'],
        sortable: true 

    }

    return tempObject;
}

function getReportFilterArray_MRRCategoryYTDList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();
 


    arrayObject = {
        token: "MediaType",
        jsCall: "getMediaTypeList",
        jsCallParameters: ['true'],
        objectName: "ddlMediaType",
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
        token: "ToPeriod",
        jsCall: "getPeriodList",
        jsCallParameters: ['all'],
        objectName: "ddlToPeriod",
        required: true
    }
    arrayFilters.push(arrayObject);


    return arrayFilters;
}

function getReportObject_MRRCategoryYTDList() {

    var tempObject = new Object();

    var columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "MRR Category YTD Report",
        apiControllerAction: "/api/MRRReport/GetMarketTotalsByCategoryAllMarkets",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['MRR'],
        sortable: false,
        approved: true

    }

    return tempObject;
}

function getReportFilterArray_XrayDeleteStationRevenueLogList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();



    arrayObject = new Object();
    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['XRY'],
        objectName: "ddlMarket",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProduct",
        jsCallParameters: ['XRY'],
        objectName: "ddlOwner",
        required: false
    }
    arrayFilters.push(arrayObject);
    
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
        jsCall: "getPeriodList",
        jsCallParameters: ['all'],
        objectName: "ddlPeriod",
        required: true
    }
    arrayFilters.push(arrayObject);


    return arrayFilters;
}

function getReportObject_XrayDeleteStationRevenueLogList() {

    var tempObject = new Object();

    var columnsToDisplay = new Array();


    tempObject =
    {
        reportTitle: "XRay Deleted Station Revenue Log",
        apiControllerAction: "/api/XRAYReport/GetXrayDeleteStationRevenueLogList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['xry', 'XRY Data Review'],
        sortable: true

    }

    return tempObject;
}

function getReportFilterArray_MarketInfo() {
    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProductMediaType",
        objectName: "ddlMarket",
        required: false,
        reloadBasedMediaType: true
}
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "MediaType",
        jsCall: "getMediaTypeList",
        objectName: "ddlMediaType",
        required: false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_MarketInfo() {
    var tempObject = new Object();
    var columnsToDisplay = new Array();

    tempObject = {
        reportTitle: "Market Information",
        apiControllerAction: '/api/Market/GetMarketInfo',
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['market'],
        sortable: true,
        approved: true
    }

    return tempObject;
}

function getReportFilterArray_InternalUserFavorites() {
    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "PersonnelList",
        jsCall: "getInternalPersonnelList",
        objectName: "ddlPersonnelList",
        required: true
    }
    arrayFilters.push(arrayObject);
    return arrayFilters;

}

function getReportObject_InternalUserFavorites() {
    var tempObject = new Object();
    var columnsToDisplay = new Array();

    columnsToDisplay.push("User");
    columnsToDisplay.push("Title");

    columnsToDisplay.push({
        "action": "edit",
        "title": "URL",
        "mRender": function(data, type, row)
        {
            var action = "<div><a href='" +
                row.URL +
                "'><i>" +
                row.URL +
                "</i></a></div>";
            return action;
        },
        "orderable": true,
        "searchable": true,
        "className": "textAlignLeft"
    });


    tempObject = {
        reportTitle: "Internal User Favorites",
        apiControllerAction: '/api/InternalFavorite/GetInternalFavoriteListByUser',
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['personnel'],
        sortable: true
    }

    return tempObject;
}
 
function getReportFilterArray_AsyncStatusIncompleteList() {
    var arrayFilters = new Array();
    var arrayObject = new Object();
 
    return arrayFilters;

}

function getReportObject_AsyncStatusIncompleteList() {
    var tempObject = new Object();
    var columnsToDisplay = new Array();

    tempObject = {
        reportTitle: "Async Incomplete Status List",
        apiControllerAction: '/api/Async/GetAsyncJobIncompleteStatusList',
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['tech'],
        sortable: true,
        autoUpdate: true
    }

    return tempObject;
}
 
function getReportFilterArray_MisMatchedParentAdvertiserIndustrySubIndustryList() {
    var arrayFilters = new Array();
    var arrayObject = new Object();

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

function getReportObject_MisMatchedParentAdvertiserIndustrySubIndustryList() {
    var tempObject = new Object();
    var columnsToDisplay = new Array();

    tempObject = {
        reportTitle: "Mis-matched Parent Advertiser Industry / Sub List",
        apiControllerAction: '/api/xrayreport/getmismatchedparentadvertiserindustrysubindustrylist',
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['xry'],
        sortable: true,
        approved: false
    }

    return tempObject;
}

function getReportFilterArray_MRROwnerGroupMarketAnalysis() {
    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "OwnerGroup",
        jsCall: "getOwnerGroupListByProduct",
        jsCallParameters: ['MRR'],
        objectName: "ddlOwnerGroup",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Product",
        jsCall: "getProductList",
        jsCallParameters: ['MRR'],
        objectName: "ddlProduct",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_MRROwnerGroupMarketAnalysis() {
    var tempObject = new Object();
    var columnsToDisplay = new Array();

    tempObject = {
        reportTitle: "MRR Owner Group Market Analysis",
        apiControllerAction: '/api/ownergroupreport/GetOwnerGroupAnalysis',
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['mrr', 'owner group'],
        sortable: true,
        approved: false
    }

    return tempObject;
}
function getReportFilterArray_XRYOwnerGroupMarketAnalysis() {
    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "OwnerGroup",
        jsCall: "getOwnerGroupListByProduct",
        jsCallParameters: ['XRY'],
        objectName: "ddlOwnerGroup",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Product",
        jsCall: "getProductList",
        jsCallParameters: ['XRY'],
        objectName: "ddlProduct",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_XRYOwnerGroupMarketAnalysis() {
    var tempObject = new Object();
    var columnsToDisplay = new Array();

    tempObject = {
        reportTitle: "XRY Owner Group Market Analysis",
        apiControllerAction: '/api/ownergroupreport/GetOwnerGroupAnalysis',
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['XRY', 'owner group'],
        sortable: true,
        approved: false
    }

    return tempObject;
}
 
function getReportFilterArray_TVBReportingMarketStatus()
{
    var arrayFilters = new Array();
    var arrayObject = new Object();

    return arrayFilters;
}

function getReportObject_TVBReportingMarketStatus()
{
    var tempObject = new Object();
    var columnsToDisplay = new Array();

    tempObject = {
        reportTitle: "TVB Reporting Market Status",
        apiControllerAction: '/api/TvbReport/GetReportingMarketStatus',
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['tvb'],
        sortable: true,
        approved: false
    }

    return tempObject;
}

function getReportFilterArray_TVBStationIssueList() {
    var arrayFilters = new Array();
    var arrayObject = new Object();

    return arrayFilters;
}

function getReportObject_TVBStationIssueList() {
    var tempObject = new Object();
    var columnsToDisplay = new Array();

    tempObject = {
        reportTitle: "TVB Station Issue List",
        apiControllerAction: '/api/TvbReport/GetTVBStationIssueList',
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['tvb'],
        sortable: true,
        approved: false
    }

    return tempObject;
}
function getReportFilterArray_GetParentHistoryAndMarketStatusByParentMarket() {
    var arrayFilters = new Array();
    var arrayObject = new Object();


    arrayObject = {
        token: "ParentMarket",
        jsCall: "getParentMarketList",
        jsCallParameters: ['DMX'],
        objectName: "ddlParentMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_GetParentHistoryAndMarketStatusByParentMarket()
{
    var tempObject = new Object();
    var columnsToDisplay = new Array();
    columnsToDisplay.push('Parent Market');
    columnsToDisplay.push('Market');
    columnsToDisplay.push('Period');
    columnsToDisplay.push('Revision');
    columnsToDisplay.push('Review Date');
    columnsToDisplay.push('Review Operator');
    columnsToDisplay.push('Complete');
    columnsToDisplay.push('Rank Date');
    columnsToDisplay.push('Rank Operator');
    columnsToDisplay.push('Release Date');
    columnsToDisplay.push('Release Operator');
    columnsToDisplay.push('Revision Date');
    columnsToDisplay.push('Comment');

    tempObject = {
        reportTitle: "DMX Parent History Summary",
        apiControllerAction: '/api/DMXReport/GetParentHistoryAndMarketStatusByParentMarket',
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['dmx'],
        sortable: false,
        approved: false
    }

    return tempObject;
}

 
function getReportFilterArray_GetParentAdvertiserSetupStatusList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "ParentMarket",
        jsCall: "getParentMarketList",
        jsCallParameters: ['DMX'],
        objectName: "ddlParentMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_GetParentAdvertiserSetupStatusList() {

    var tempObject = new Object();
    var columnsToDisplay = new Array();

    tempObject = {
        reportTitle: "Parent Advertiser Setup Status List",
        apiControllerAction: '/api/ParentAdvertiser/GetParentAdvertiserSetupStatusList',
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['dmx', 'parent advertiser'],
        sortable: false,
        approved: false
    }

    return tempObject;
}
function getReportFilterArray_GetParentAgencySetupStatusList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "ParentMarket",
        jsCall: "getParentMarketList",
        jsCallParameters: ['DMX'],
        objectName: "ddlParentMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_GetParentAgencySetupStatusList() {

    var tempObject = new Object();
    var columnsToDisplay = new Array();

    tempObject = {
        reportTitle: "Parent Agency Setup Status List",
        apiControllerAction: '/api/ParentAgency/GetParentAgencySetupStatusList',
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['dmx', 'parent agency'],
        sortable: false,
        approved: false
    }

    return tempObject;
}



function getReportFilterArray_DMXXRYRevenueReviewByParentMarket() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "ParentMarket",
        jsCall: "getParentMarketList",
        jsCallParameters: ['DMX'],
        objectName: "ddlParentMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

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
        jsCallParameters: ['months'],
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_DMXXRYRevenueReviewByParentMarket() {

    var tempObject = new Object();
    var columnsToDisplay = new Array();

    columnsToDisplay.push("Industry");
    columnsToDisplay.push("DMX Revenue");
    columnsToDisplay.push("XRY Revenue");
    columnsToDisplay.push("Revenue Diff");
    columnsToDisplay.push({
        "action": "edit",
        "mRender": function (data, type, row) {

            return buildReportLink(row, "rptDMXXRYRevenueReviewByMarket");
         },
        "orderable": false,
        "searchable": false,
        "className": "text-align-right"
    });

    tempObject = {
        reportTitle: "DMX/XRY Compare by Parent Market",
        apiControllerAction: '/api/DMXReport/GetDMXXRYRevenueReviewByParentMarket',
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['dmx'],
        sortable: true,
        approved: false
    }

    return tempObject;
}

function getReportFilterArray_DMXXRYRevenueReviewByMarket() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "ParentMarket",
        jsCall: "getParentMarketList",
        jsCallParameters: ['DMX'],
        objectName: "ddlParentMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

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
        jsCallParameters: ['months'],
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Industry",
        objectName: "ddlIndustry",
        jsCall: "getIndustryListForReports",
        required: true
    }
    arrayFilters.push(arrayObject);
 
    return arrayFilters;
}
function getReportObject_DMXXRYRevenueReviewByMarket() {

    var tempObject = new Object();
    var columnsToDisplay = new Array();

    columnsToDisplay.push("Market");
    columnsToDisplay.push("Industry");
    columnsToDisplay.push("DMX Revenue");
    columnsToDisplay.push("XRY Revenue");
    columnsToDisplay.push("Revenue Diff");
    columnsToDisplay.push({
        "action": "edit",
        "mRender": function (data, type, row) {
            return buildReportLink(row, "rptDMXXRYRevenueReviewByStation") + "<br>" + buildReportLink(row, "rptDMXXRYRevenueReviewByParentMarket");
        },
        "orderable": false,
        "searchable": false,
        "className": "text-align-right"
    });

    tempObject = {
        reportTitle: "DMX/XRY Compare by Market",
        apiControllerAction: '/api/DMXReport/GetDMXXRYRevenueReviewByMarket',
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['dmx'],
        sortable: true,
        approved: false,
        visible : false
    }

    return tempObject;
}

function getReportFilterArray_DMXXRYRevenueReviewByStation() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "ParentMarket",
        jsCall: "getParentMarketList",
        jsCallParameters: ['DMX'],
        objectName: "ddlParentMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['DMX'],
        objectName: "ddlMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

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
        jsCallParameters: ['months'],
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Industry",
        objectName: "ddlIndustry",
        jsCall: "getIndustryListForReports",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_DMXXRYRevenueReviewByStation() {

    var tempObject = new Object();
    var columnsToDisplay = new Array();

    columnsToDisplay.push("Market");
    columnsToDisplay.push("Industry");
    columnsToDisplay.push("Station");

    columnsToDisplay.push("DMX Revenue");
    columnsToDisplay.push("XRY Revenue");
    columnsToDisplay.push("Revenue Diff");
    columnsToDisplay.push({
        "action": "edit",
        "mRender": function (data, type, row) {

            return buildReportLink(row, "rptDMXXRYRevenueReviewByParentAdvertiser")  + "<br>" + buildReportLink(row, "rptDMXXRYRevenueReviewByMarket");

        },
        "orderable": false,
        "searchable": false,
        "className": "text-align-right"
    });

    tempObject = {
        reportTitle: "DMX/XRY Compare by Station",
        apiControllerAction: '/api/DMXReport/GetDMXXRYRevenueReviewByStation',
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['dmx'],
        sortable: true,
        approved: false,
        visible: false
    }

    return tempObject;
}

function getReportFilterArray_DMXXRYRevenueReviewByParentAdvertiser() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "ParentMarket",
        jsCall: "getParentMarketList",
        jsCallParameters: ['DMX'],
        objectName: "ddlParentMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['DMX'],
        objectName: "ddlMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

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
        jsCallParameters: ['months'],
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Industry",
        objectName: "ddlIndustry",
        jsCall: "getIndustryListForReports",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Station",
        jsCall: "getStationListByGeneralFilters",
        objectName: "ddlStation",
        reloadBasedMarket: true,
        reloadBasedOwner: true,
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_DMXXRYRevenueReviewByParentAdvertiser() {

    var tempObject = new Object();
    var columnsToDisplay = new Array();

    columnsToDisplay.push("Market");
    columnsToDisplay.push("Industry");
    columnsToDisplay.push("Station");
    columnsToDisplay.push("Parent Advertiser");

    columnsToDisplay.push("DMX Revenue");
    columnsToDisplay.push("XRY Revenue");
    columnsToDisplay.push("Revenue Diff");
    columnsToDisplay.push({
        "action": "edit",
        "mRender": function (data, type, row) {

            return buildReportLink(row, "rptDMXXRYRevenueReviewByParentAgency")  + "<br>" + buildReportLink(row, "rptDMXXRYRevenueReviewByAdvertiser");

        },
        "orderable": false,
        "searchable": false,
        "className": "text-align-right"
    });

    tempObject = {
        reportTitle: "DMX/XRY Compare by Parent Advertiser",
        apiControllerAction: '/api/DMXReport/GetDMXXRYRevenueReviewByParentAdvertiser',
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['dmx'],
        sortable: true,
        approved: false,
        visible: false
    }

    return tempObject;
}

function getReportFilterArray_DMXXRYRevenueReviewByParentAgency() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "ParentMarket",
        jsCall: "getParentMarketList",
        jsCallParameters: ['DMX'],
        objectName: "ddlParentMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['DMX'],
        objectName: "ddlMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

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
        jsCallParameters: ['months'],
        required: true
    }
    arrayFilters.push(arrayObject);

    //arrayObject = new Object();
    //arrayObject = {
    //    token: "Industry",
    //    objectName: "ddlIndustry",
    //    jsCall: "getIndustryListForReports",
    //    required: true
    //}
    //arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Station",
        jsCall: "getStationListByGeneralFilters",
        objectName: "ddlStation",
        reloadBasedMarket: true,
        reloadBasedOwner: true,
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "ParentAdvertiserHidden",
        jsCall: null,
        objectName: "hidParentAdvertiser",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_DMXXRYRevenueReviewByParentAgency() {

    var tempObject = new Object();
    var columnsToDisplay = new Array();

    columnsToDisplay.push("Market");
    columnsToDisplay.push("Industry");
    columnsToDisplay.push("Station");
    columnsToDisplay.push("Parent Advertiser");
    columnsToDisplay.push("Parent Agency");

    columnsToDisplay.push("DMX Revenue");
    columnsToDisplay.push("XRY Revenue");
    columnsToDisplay.push("Revenue Diff");
  
    columnsToDisplay.push({
        "action": "edit",
        "mRender": function (data, type, row) {

            return buildReportLink(row, "rptDMXXRYRevenueReviewByAgencyFromParent") + "<br>" + buildReportLink(row, "rptDMXXRYRevenueReviewByParentAdvertiser");
         },
        "orderable": false,
        "searchable": false,
        "className": "text-align-right"
    });

    tempObject = {
        reportTitle: "DMX/XRY Compare by Parent Agency",
        apiControllerAction: '/api/DMXReport/GetDMXXRYRevenueReviewByParentAgency',
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['dmx'],
        sortable: true,
        approved: false,
        visible: false
    }

    return tempObject;
}

function getReportFilterArray_DMXXRYRevenueReviewByAdvertiser() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "ParentMarket",
        jsCall: "getParentMarketList",
        jsCallParameters: ['DMX'],
        objectName: "ddlParentMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['DMX'],
        objectName: "ddlMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

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
        jsCallParameters: ['months'],
        required: true
    }
    arrayFilters.push(arrayObject);

    //arrayObject = new Object();
    //arrayObject = {
    //    token: "Industry",
    //    objectName: "ddlIndustry",
    //    jsCall: "getIndustryListForReports",
    //    required: true
    //}
    //arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Station",
        jsCall: "getStationListByGeneralFilters",
        objectName: "ddlStation",
        reloadBasedMarket: true,
        reloadBasedOwner: true,
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "ParentAdvertiserHidden",
        jsCall: null,
        objectName: "hidParentAdvertiser",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_DMXXRYRevenueReviewByAdvertiser() {

    var tempObject = new Object();
    var columnsToDisplay = new Array();

    columnsToDisplay.push("Market");
    columnsToDisplay.push("Industry");
    columnsToDisplay.push("Station");
    columnsToDisplay.push("Parent Advertiser");
    columnsToDisplay.push("Advertiser");
    columnsToDisplay.push("DMX Revenue");
    columnsToDisplay.push("XRY Revenue");
    columnsToDisplay.push("Revenue Diff");
 
    columnsToDisplay.push({
        "action": "edit",
        "mRender": function (data, type, row) {

            return buildReportLink(row, "rptDMXXRYRevenueReviewByAgencyFromAdvertiser") + '<br>' + buildReportLink(row, "rptDMXXRYRevenueReviewByParentAdvertiser");
        },
        "orderable": false,
        "searchable": false,
        "className": "text-align-right"
    });

    tempObject = {
        reportTitle: "DMX/XRY Compare by Advertiser",
        apiControllerAction: '/api/DMXReport/GetDMXXRYRevenueReviewByAdvertiser',
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['dmx'],
        sortable: true,
        approved: false,
        visible: false
    }

    return tempObject;
}

function getReportFilterArray_DMXXRYRevenueReviewByAgency() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "ParentMarket",
        jsCall: "getParentMarketList",
        jsCallParameters: ['DMX'],
        objectName: "ddlParentMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['DMX'],
        objectName: "ddlMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

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
        jsCallParameters: ['months'],
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Industry",
        objectName: "ddlIndustry",
        jsCall: "getIndustryListForReports",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "Station",
        jsCall: "getStationListByGeneralFilters",
        objectName: "ddlStation",
        reloadBasedMarket: true,
        reloadBasedOwner: true,
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "ParentAgencyHidden",
        jsCall: null,
        objectName: "hidParentAgency",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "ParentAdvertiserHidden",
        jsCall: null,
        objectName: "hidParentAdvertiser",
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = new Object();
    arrayObject = {
        token: "AdvertiserHidden",
        jsCall: null,
        objectName: "hidAdvertiser",
        required: false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_DMXXRYRevenueReviewByAgency() {

    var tempObject = new Object();
    var columnsToDisplay = new Array();

    columnsToDisplay.push("Market");
    columnsToDisplay.push("Industry");
    columnsToDisplay.push("Station");
    columnsToDisplay.push("Parent Agency");
    columnsToDisplay.push("Agency");
    columnsToDisplay.push("Advertiser");

    columnsToDisplay.push("Advertiser Revenue");
    columnsToDisplay.push("Agency Revenue");

    columnsToDisplay.push("DMX Revenue");
    columnsToDisplay.push("XRY Revenue");
    columnsToDisplay.push("Revenue Diff");
    columnsToDisplay.push({
        "action": "edit",
        "mRender": function (data, type, row) {

            return buildReportLink(row, "rptDMXXRYRevenueReviewByParentAgency") + "<br>" + buildReportLink(row, "rptDMXXRYRevenueReviewByAdvertiser");
         },
        "orderable": false,
        "searchable": false,
        "className": "text-align-right"
    });

    tempObject = {
        reportTitle: "DMX/XRY Compare by Agency",
        apiControllerAction: '/api/DMXReport/GetDMXXRYRevenueReviewByAgency',
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['dmx'],
        sortable: true,
        approved: false,
        visible: false
    }

    return tempObject;
}

function getReportFilterArray_DMAParentMarketAssignedCategoryTemplate() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "ParentMarket",
        jsCall: "getParentMarketList",
        jsCallParameters: ['DMA'],
        objectName: "ddlParentMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_DMAParentMarketAssignedCategoryTemplate() {

    var tempObject = new Object();
    var columnsToDisplay = new Array();
 

    tempObject = {
        reportTitle: "DMA Parent Market Category Template",
        apiControllerAction: '/api/DMAReport/GetParentMarketAssignedCategoryTemplate',
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['dma'],
        sortable: true,
        approved: false,
        visible: true
    }

    return tempObject;
}

function getReportFilterArray_MRRStationRevenueYTDByMediaType() {
    var arrayFilters = new Array();
    var arrayObject = new Object();

    //create new method to shrink to just tv and radio maybe??
    arrayObject = {
        token: "MediaType",
        jsCall: "getMRRMediaTypeList",
        objectName: "ddlMediaType",
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

    arrayObject = {
        token: "IncludeMarketsOnHold",
        objectName: "chkIncludeMarketsOnHold",
        jsCall: null,
        required: false
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "IncludeInactiveStations",
        objectName: "chkIncludeInactiveStations",
        jsCall: null,
        required: false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getReportObject_MRRStationRevenueYTDByMediaType() {
    var tempObject = new Object();
    var columnsToDisplay = new Array();

    tempObject =
    {
        reportTitle: "MRR Station Revenue YTD By Media Type",
        apiControllerAction: "/api/MRRReport/GetStationRevenueYTDByMediaType",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['mrr', 'corporate'],
        sortable: true,
        approved: false,
        visible: true
    }

    return tempObject;
}

function getReportFilterArray_DMXParentMarketExclusivitySettings() {

    var arrayFilters = new Array();
    var arrayObject = new Object();
    return arrayFilters;
}

function getReportObject_DMXParentMarketExclusivitySettings() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    columnsToDisplay.push("Parent Market Name");
    columnsToDisplay.push("Minimum Participants");
    columnsToDisplay.push("Exclusivity Method");

    tempObject =
    {

        reportTitle: "DMX Parent Market Exclusivity Settings",
        apiControllerAction: "/api/DMX/GetParentMarketDMXList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['dmx', 'advertiser', 'agency'],
        approved: false
    }

    return tempObject;

}

function getReportFilterArray_MarketHoldList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();
    return arrayFilters;
}

function getReportObject_MarketHoldList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
 
    tempObject =
    {

        reportTitle: "Market's on Hold List",
        apiControllerAction: "/api/MarketReport/GetMarketHoldList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['market'],
        approved: false
    }

    return tempObject;

}
 
function getReportFilterArray_StationParticipationDMA() {

    var arrayFilters = new Array();
    var arrayObject = new Object();
    arrayObject = {
        token: "Product",
        jsCall: "getProductList",
        jsCallParameters: ['DMA'],
        objectName: "ddlProduct",
        required: true
    }
    arrayFilters.push(arrayObject);
    arrayObject = {
        token: "ParentMarket",
        jsCall: "getParentMarketList",
        jsCallParameters: ['DMA'],
        objectName: "ddlParentMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_StationParticipationDMA() {

    var tempObject = new Object();
    var columnsToDisplay = new Array();

    tempObject = {
        reportTitle: "DMA Station Participation",
        apiControllerAction: '/api/ProductReport/GetStationParticipationByProduct',
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['dma', 'station'],
        sortable: true,
        approved: false,
        visible: true
    }

    return tempObject;
}

function getReportFilterArray_StationParticipationDMX() {

    var arrayFilters = new Array();
    var arrayObject = new Object();
    arrayObject = {
        token: "Product",
        jsCall: "getProductList",
        jsCallParameters: ['DMX'],
        objectName: "ddlProduct",
        required: true
    }
    arrayFilters.push(arrayObject);
    arrayObject = {
        token: "ParentMarket",
        jsCall: "getParentMarketList",
        jsCallParameters: ['DMX'],
        objectName: "ddlParentMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_StationParticipationDMX() {

    var tempObject = new Object();
    var columnsToDisplay = new Array();

    tempObject = {
        reportTitle: "DMX Station Participation",
        apiControllerAction: '/api/ProductReport/GetStationParticipationByProduct',
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['dmx', 'station'],
        sortable: true,
        approved: false,
        visible: true
    }

    return tempObject;
}

function getReportFilterArray_StationParticipationXRY() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Product",
        jsCall: "getProductList",
        jsCallParameters: ['XRY'],
        objectName: "ddlProduct",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['XRY'],
        objectName: "ddlMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_StationParticipationXRY()
{

    var tempObject = new Object();
    var columnsToDisplay = new Array();

    tempObject = {
        reportTitle: "XRY Station Participation",
        apiControllerAction: '/api/ProductReport/GetStationParticipationByProduct',
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['XRY', 'station'],
        sortable: true,
        approved: false,
        visible: true
    }

    return tempObject;
}

function getReportFilterArray_StationParticipationMRR() {

    var arrayFilters = new Array();
    var arrayObject = new Object();
 
    arrayObject = {
        token: "Product",
        jsCall: "getProductList",
        jsCallParameters: ['MRR'],
        objectName: "ddlProduct",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['MRR'],
        objectName: "ddlMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_StationParticipationMRR() {

    var tempObject = new Object();
    var columnsToDisplay = new Array();

    tempObject = {
        reportTitle: "MRR Station Participation",
        apiControllerAction: '/api/ProductReport/GetStationParticipationByProduct',
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['MRR', 'station'],
        sortable: true,
        approved: false,
        visible: true
    }

    return tempObject;
}
function getReportFilterArray_StationParticipationTVB() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Product",
        jsCall: "getProductList",
        jsCallParameters: ['TVB'],
        objectName: "ddlProduct",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProduct",
        jsCallParameters: ['TVB'],
        objectName: "ddlMarket",
        required: true
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_StationParticipationTVB() {

    var tempObject = new Object();
    var columnsToDisplay = new Array();

    tempObject = {
        reportTitle: "TVB Station Participation",
        apiControllerAction: '/api/ProductReport/GetStationParticipationByProduct',
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['TVB', 'station'],
        sortable: true,
        approved: false,
        visible: true
    }

    return tempObject;
}
function getReportFilterArray_MRRCategoryMissingDefinitionList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "MediaType",
        jsCall: "getMediaTypeList",
        jsCallParameters: ['MRR'],
        objectName: "ddlMediaType",
        required: false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_MRRCategoryMissingDefinitionList() {

    var tempObject = new Object();
    var columnsToDisplay = new Array();

    tempObject = {
        reportTitle: "MRR Category Missing Definition List",
        apiControllerAction: '/api/MRRReport/GetMRRCategoryMissingDefinitionList',
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['MRR'],
        sortable: true,
        approved: false,
        visible: true
    }

    return tempObject;
}
function getReportFilterArray_DMAUserListing() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Product",
        jsCall: "getProductListHidden",
        jsCallParameters: ['DMA', true],
        objectName: "ddlProduct",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProductMediaType",
        jsCallParameters: ['DMA'],
        objectName: "ddlMarket",
        reloadBasedProduct: true,
        reloadBasedMediaType: true,
        required: false

    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProductMarketMediaType",
        jsCallParameters: ['DMA'],
        objectName: "ddlOwner",
        reloadBasedProduct: true,
        reloadBasedMarket: true,
        reloadBasedMediaType: true,
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


    arrayObject = {
        token: "Position",
        jsCall: "getPositionList",
        objectName: "ddlPosition",
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
function getReportObject_DMAUserListing() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    //columnsToDisplay.push("Access Level");
    columnsToDisplay.push("User")
    columnsToDisplay.push("Email");
    columnsToDisplay.push("Phone");
    columnsToDisplay.push("Position");
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Owner");

    tempObject =
    {
        reportTitle: "DMA User Listing",
        apiControllerAction: "/api/DMAReport/GetDMAUserListing",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['personnel', 'dma'],
        approved: false
    }

    return tempObject;

}
function getReportFilterArray_DMXUserListing() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Product",
        jsCall: "getProductListHidden",
        jsCallParameters: ['DMX', true],
        objectName: "ddlProduct",
        required: true
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Market",
        jsCall: "getMarketListByProductMediaType",
        jsCallParameters: ['DMX'],
        objectName: "ddlMarket",
        reloadBasedProduct: true,
        reloadBasedMediaType: true,
        required: false

    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Owner",
        jsCall: "getOwnerListByProductMarketMediaType",
        jsCallParameters: ['DMX'],
        objectName: "ddlOwner",
        reloadBasedProduct: true,
        reloadBasedMarket: true,
        reloadBasedMediaType: true,
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


    arrayObject = {
        token: "Position",
        jsCall: "getPositionList",
        objectName: "ddlPosition",
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
function getReportObject_DMXUserListing() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    //columnsToDisplay.push("Access Level");
    columnsToDisplay.push("User")
    columnsToDisplay.push("Email");
    columnsToDisplay.push("Phone");
    columnsToDisplay.push("Position");
    columnsToDisplay.push("Market");
    columnsToDisplay.push("Owner");

    tempObject =
    {
        reportTitle: "DMX User Listing",
        apiControllerAction: "/api/DMXReport/GetDMXUserListing",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: ['personnel', 'DMX'],
        approved: false
    }

    return tempObject;

}