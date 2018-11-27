

var reportObjectArray = new Array();
var reportFilterObjectArray = new Array();

var ctr = 1
const rptMRRMarketSummary = ctr

ctr++;
var rptXRAYUsage = ctr
ctr++;
var rptMRRUsage = ctr;
ctr++;
var rptTVBUsage = ctr;
ctr++;
var rptMarketRevenueHourlyActivity = ctr;
ctr++;
var rptUserActivity = ctr;
ctr++;
var rptUserActivityDetail = ctr;
ctr++;
var rptUserQuerySummary = ctr;
ctr++;
var rptUserQuerySummaryByOwner = ctr;
ctr++;
var rptUserListing = ctr;
ctr++;
var rptTraining = ctr;
ctr++;
var rptAEStatus = ctr;
ctr++;
var rptNationwideRecipients = ctr;
ctr++;
var rptNewUserListing = ctr;
ctr++;
var rptStationChangeHistory = ctr;
ctr++;
var rptMarketRevenueXRay = ctr;
ctr++;
var rptStationListing = ctr;
ctr++;
var rptMarketDelivery = ctr;
ctr++;
var rptTVBUserListing = ctr;

// -- Parent Ownership
ctr++;
var rptParentOwnershipList = ctr;

// -- Ownership
ctr++;
var rptOwnershipList = ctr;

// -- Stations
ctr++;
var rptActiveStationList = ctr;
ctr++;
var rptDisabledStationList = ctr;
ctr++;
var rptStationChanges = ctr;

ctr++;
var rptMRREstimatedStationList = ctr;


function buildReportArray()
{
    var reportCounter = 1
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
            reportCounter++
        }
    }
    while (success == true);

    return reportArray;
}

//---------------------------
// Generic Report Wrapper Routines
//---------------------------
function getReportObject(inReportId)
{

    var arrayObject = new Object();

    //switch (inReportId)
    //{
    
    if (inReportId == rptMRRMarketSummary)
    {
        arrayObject = getReportObject_MRRMarketSummary();
        //
    }

    if (inReportId == rptXRAYUsage)
    {
        arrayObject = getReportObject_XRAYUsage();
        //
    }

    if (inReportId ==  rptMRRUsage)
    {
        arrayObject = getReportObject_MRRUsage(); 
        //
    }

    if (inReportId ==  rptTVBUsage)
    {
        arrayObject = getReportObject_TVBUsage(); 
        //
    }

    if (inReportId ==  rptMarketRevenueHourlyActivity)
    {
        arrayObject = getReportObject_MarketRevenueHourlyActivity();
        //
    }

    if (inReportId ==  rptUserActivity)
    {
        arrayObject = getReportObject_UserActivity();
        //
    }

    if (inReportId ==  rptUserActivityDetail)
    {
        arrayObject = getReportObject_UserActivityDetail();
        //
    }

    if (inReportId ==  rptUserQuerySummary)
    {
        arrayObject = getReportObject_UserQuerySummary();
        //
    }

    if (inReportId ==  rptUserQuerySummaryByOwner)
    {
        arrayObject = getReportObject_UserQuerySummaryByOwner();
        //
    }

    if (inReportId ==  rptUserListing)
    {
        arrayObject = getReportObject_UserListing();
        //
    }

    if (inReportId ==  rptTraining)
    {
        arrayObject = getReportObject_Training();
        //
    }

    if (inReportId ==  rptAEStatus)
    {
        arrayObject = getReportObject_AEStatus();
        //
    }

    if (inReportId ==  rptNationwideRecipients)
    {
        arrayObject = getReportObject_NationwideRecipients();
        //
    }

    if (inReportId ==  rptNewUserListing)
    {
        arrayObject = getReportObject_NewUserListing();
        //
    }

    if (inReportId ==  rptStationChangeHistory)
    {
        arrayObject = getReportObject_StationChangeHistory();
        //
    }

    if (inReportId ==  rptMarketRevenueXRay)
    {
        arrayObject = getReportObject_MarketRevenueXRay();
        //
    }

    if (inReportId ==  rptStationListing)
    {
        arrayObject = getReportObject_StationListing();
        //
    }

    if (inReportId ==  rptMarketDelivery)
    {
        arrayObject = getReportObject_MarketDelivery();
        //
    }

    if (inReportId ==  rptTVBUserListing)
    {
        arrayObject = getReportObject_TVBUserListing();
        //
    }

    if (inReportId == rptOwnershipList)
    {
        arrayObject = getReportObject_OwnershipList();
        //
    }

    if (inReportId == rptParentOwnershipList)
    {
        arrayObject = getReportObject_ParentOwnershipList();
        //
    }

    if (inReportId == rptActiveStationList) {
        arrayObject = getReportObject_ActiveStationList();
    }

    if (inReportId == rptDisabledStationList) {
        arrayObject = getReportObject_DisabledStationList();
    }

    if (inReportId == rptStationChanges) {
        arrayObject = getReportObject_StationChanges();
    }

    if (inReportId == rptMRREstimatedStationList) {
        arrayObject = getReportObject_MRREstimatedStationList();
    }
    // }

    return arrayObject;
}
function getReportFilterArray(inReportId) 
{

    var arrayFilters = new Array();

    //switch (inReportId)
    //{
        if (inReportId ==  rptMRRMarketSummary)
        {
            arrayFilters = getReportFilterArray_MRRMarketSummary();
            
        }

        if (inReportId ==   rptXRAYUsage)
        {
            arrayFilters = getReportFilterArray_XRAYUsage();
            

        }

        if (inReportId ==   rptMRRUsage) 
        {
            arrayFilters = getReportFilterArray_MRRUsage();
            
        }

        if (inReportId ==   rptTVBUsage) 
        {
            arrayFilters = getReportFilterArray_TVBUsage();
            
        }

        if (inReportId ==   rptMarketRevenueHourlyActivity)
        {
            arrayFilters = getReportFilterArray_MarketRevenueHourlyActivity();
            
        }

        if (inReportId ==   rptUserActivity) 
        {
            arrayFilters = getReportFilterArray_UserActivity();
            
        }

        if (inReportId ==   rptUserActivityDetail)
        {
            arrayFilters = getReportFilterArray_UserActivityDetail();
            
        }

        if (inReportId ==   rptUserQuerySummary)
        {
            arrayFilters = getReportFilterArray_UserQuerySummary();
            
        }


        if (inReportId ==  rptUserQuerySummaryByOwner)
        {
            arrayFilters = getReportFilterArray_UserQuerySummaryByOwner();
            
        }

        if (inReportId ==  rptUserListing)
        {
            arrayFilters = getReportFilterArray_UserListing();
            
        }

        if (inReportId ==  rptTraining)
        {
            arrayFilters = getReportFilterArray_Training();
            
        }

        if (inReportId ==  rptAEStatus)
        {
            arrayFilters = getReportFilterArray_AEStatus();
            
        }

        if (inReportId ==  rptNationwideRecipients)
        {
            arrayFilters = getReportFilterArray_NationwideRecipients();
            
        }

        if (inReportId ==  rptNewUserListing)
        {
            arrayFilters = getReportFilterArray_NewUserListing();
            
        }

        if (inReportId ==  rptStationChangeHistory)
        {
            arrayFilters = getReportFilterArray_StationChangeHistory();
            
        }

        if (inReportId ==  rptMarketRevenueXRay)
        {
            arrayFilters = getReportFilterArray_MarketRevenueXRay();
            
        }

        if (inReportId ==  rptStationListing)
        {
            arrayFilters = getReportFilterArray_StationListing();
            
        }

        if (inReportId ==  rptMarketDelivery)
        {
            arrayFilters = getReportFilterArray_MarketDelivery();
            
        }

        if (inReportId ==  rptTVBUserListing)
        {
            arrayFilters = getReportFilterArray_TVBUserListing();
            
        }

        if (inReportId ==  rptParentOwnershipList)
        {
            arrayFilters = getReportFilterArray_ParentOwnershipList();
            
        }

        if (inReportId ==  rptOwnershipList)
        {
            arrayFilters = getReportFilterArray_OwnershipList();
            
        }

        if (inReportId == rptActiveStationList)
        {
            arrayFilters = getReportFilterArray_ActiveStationList();
        }

        if (inReportId == rptDisabledStationList)
        {
            arrayFilters = getReportFilterArray_DisabledStationList();
        }

        if (inReportId == rptStationChanges) {
            arrayFilters = getReportFilterArray_StationChanges();
        }

        if (inReportId == rptMRREstimatedStationList) {
            arrayFilters = getReportFilterArray_MRREstimatedStationList();
        }

    //}

    return arrayFilters;
}

//-------------------------
// REPORT AREA
//-------------------------

// Parent Ownership
function getReportFilterArray_ParentOwnershipList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    //arrayObject = {
    //    token:  "Market",
    //    jsCall:  "getMRRMarketList",
    //    objectName:  "ddlMarket",
    //    required:  true
    //}
    //arrayFilters.push(arrayObject);

    //arrayObject = new Object();
    //arrayObject = {
    //    token:  "Year",
    //    jsCall:  "getYearList",
    //    objectName:  "ddlYear",
    //    required:  true
    //}
    //arrayFilters.push(arrayObject);

    //arrayObject = new Object();
    //arrayObject = {
    //    token:  "Period",
    //    objectName:  "ddlPeriod",
    //    jsCall:  "getPeriodList",
    //    required:  true
    //}
    //arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_ParentOwnershipList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    columnsToDisplay.push("parentOwnerID");
    columnsToDisplay.push("parentOwnerName");
    columnsToDisplay.push("parentOwnerActive");
    columnsToDisplay.push("ownerID");
    columnsToDisplay.push("ownerName");
    columnsToDisplay.push("ownerAbbreviation");
    columnsToDisplay.push("productID");
    columnsToDisplay.push("productActiveDate");
    columnsToDisplay.push("productDisableDate");

    tempObject =
    {
        id: rptParentOwnershipList,
        reportTitle: "Parent Ownership List",
        apiControllerAction: "/api/ParentOwnershipReport/GetParentOwnershipList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'misc'
    }

    return tempObject;
}

// Ownership
function getReportFilterArray_OwnershipList() {

    var arrayFilters = new Array();
    var arrayObject = new Object();

    //arrayObject = {
    //    token:  "Market",
    //    jsCall:  "getMRRMarketList",
    //    objectName:  "ddlMarket",
    //    required:  true
    //}
    //arrayFilters.push(arrayObject);

    //arrayObject = new Object();
    //arrayObject = {
    //    token:  "Year",
    //    jsCall:  "getYearList",
    //    objectName:  "ddlYear",
    //    required:  true
    //}
    //arrayFilters.push(arrayObject);

    //arrayObject = new Object();
    //arrayObject = {
    //    token:  "Period",
    //    objectName:  "ddlPeriod",
    //    jsCall:  "getPeriodList",
    //    required:  true
    //}
    //arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_OwnershipList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    columnsToDisplay.push("ownerName");
    columnsToDisplay.push("ownerID");
    columnsToDisplay.push("ownerAbbreviation");
    columnsToDisplay.push("parentOwnerName");
    columnsToDisplay.push("productID");
    columnsToDisplay.push("productActiveDate");
    columnsToDisplay.push("productDisableDate");

    tempObject =
    {
        id: rptOwnershipList,
        reportTitle: "Ownership List",
        apiControllerAction: "/api/OwnerReport/GetOwnerList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'misc'
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
        jsCall: "getMRRMarketList",
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
        id: rptMRRMarketSummary,
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

    arrayObject = {
        token:  "Market",
        jsCall:  "getXRYMarketList",
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
        id: rptXRAYUsage,
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
        jsCall:  "getMRRMarketList",
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
        id: rptMRRUsage,
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
        jsCall:  "getTVBMarketList",
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
        id: rptTVBUsage,
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
        jsCall:  "getMRRMarketList",
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
        id: rptMarketRevenueHourlyActivity,
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
        jsCall:  "getXRYMarketList",
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
        id: rptUserActivity,
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
        jsCall:  "getXRYMarketList",
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
        id: rptUserActivityDetail,
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
        jsCall:  "getXRYMarketList",
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
function getReportObject_UserQuerySummary() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    columnsToDisplay.push("QueryName");
    columnsToDisplay.push("NumberRequests");

    tempObject =
    {
        id: rptUserQuerySummary,
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
        jsCall:  "getXRYMarketList",
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
        id: rptUserQuerySummaryByOwner,
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
        id: rptUserListing,
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
        jsCall:  "getXRYMarketList",
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
        id: rptAEStatus,
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
        token:  "Product",
        jsCall:  "getProductList",
        objectName:  "ddlProduct",
        required:  true
    }
    arrayFilters.push(arrayObject);
    return arrayFilters;
}
function getReportObject_MarketDelivery() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    ////columnsToDisplay.push("MarketID");
    ////columnsToDisplay.push("OwnerID");
    //columnsToDisplay.push("Period");
    columnsToDisplay.push("Revision");
    columnsToDisplay.push("MRRReleased");
    columnsToDisplay.push("XRYReleased");
    columnsToDisplay.push("MarketName");
    columnsToDisplay.push("OwnerName");
    columnsToDisplay.push("PeriodDisplay");

    tempObject =
    {
        id: rptMarketDelivery,
        reportTitle:  "Market Delivery",
        apiControllerAction:  "/api/MarketReport/GetMarketDelivery",
        apiType:  "get",
        columnsToDisplay:  columnsToDisplay,
        product:  ''
    }

    return tempObject;

}
// rptTVBUserListing
function getReportFilterArray_TVBUserListing() {

    var arrayFilters = new Array();
    var arrayObject = new Object();


    arrayObject = {
        token:  "Market",
        jsCall:  "getTVBMarketList",
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
        id: rptTVBUserListing,
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
        id: rptNewUserListing,
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
        id: rptStationListing,
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
        id: rptTraining,
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
        id: rptStationChangeHistory,
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
        id: rptNationwideRecipients,
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
        id: rptMarketRevenueXRay,
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
    columnsToDisplay.push("stationID");
    columnsToDisplay.push("stationName");
    columnsToDisplay.push("stationFullName");
    columnsToDisplay.push("formatName");
    columnsToDisplay.push("affiliationName");
    columnsToDisplay.push("ownerName");
    columnsToDisplay.push("marketName");
    columnsToDisplay.push("stationClientNumber");
    columnsToDisplay.push("stationNickname");
    columnsToDisplay.push("productID");
    columnsToDisplay.push("mrrManagerName");


    tempObject =
    {
        id: rptActiveStationList,
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
    columnsToDisplay.push("stationID");
    columnsToDisplay.push("stationName");
    columnsToDisplay.push("stationFullName");
    columnsToDisplay.push("formatName");
    columnsToDisplay.push("affiliationName");
    columnsToDisplay.push("ownerName");
    columnsToDisplay.push("marketName");
    columnsToDisplay.push("stationClientNumber");
    columnsToDisplay.push("stationNickname");
    columnsToDisplay.push("productID");
    columnsToDisplay.push("productDisableDate");

    tempObject =
    {
        id: rptDisabledStationList,
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
        token: "Product",
        jsCall: "getProductList",
        objectName: "ddlProduct",
        required: true 
    }
    arrayFilters.push(arrayObject);

    arrayObject = {
        token: "Station",
        jsCall: "getStationList",
        objectName: "ddlStation",
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
        id: rptStationChanges,
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
        token: "Station",
        jsCall: "getStationList",
        objectName: "ddlStation",
        required: false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}
function getReportObject_MRREstimatedStationList() {

    var tempObject = new Object();

    columnsToDisplay = new Array();
    columnsToDisplay.push("stationName");
    columnsToDisplay.push("formatName");
    columnsToDisplay.push("affiliationName");
    columnsToDisplay.push("ownerName");
    columnsToDisplay.push("mrrManagerName");
    columnsToDisplay.push("marketName");

    tempObject =
    {
        id: rptMRREstimatedStationList,
        reportTitle: "MRR Estimated Station List",
        apiControllerAction: "/api/MRRReport/GetMRREstimatedStationList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'mrr'
    }

    return tempObject;

}