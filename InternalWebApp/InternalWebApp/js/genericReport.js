const rptMRRMarketSummary = 1
const rptXRAYUsage = 2
const rptMRRUsage = 3
const rptTVBUsage = 4


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

    if (inReportId == rptMRRMarketSummary) {

        arrayObject = getReportObject_MRRMarketSummary();
    }

    if (inReportId == rptXRAYUsage)
    {
        arrayObject = getReportObject_XRAYUsage();

    }

    if (inReportId == rptMRRUsage) {
        arrayObject = getReportObject_MRRUsage();
    }

    if (inReportId == rptTVBUsage) {
        arrayObject = getReportObject_TVBUsage();
    }

    return arrayObject;
}
function getReportFilterArray(inReportId) {

    var arrayFilters = new Array();

    if (inReportId == rptMRRMarketSummary) {
        arrayFilters = getReportFilterArray_MRRMarketSummary();
    }

    if (inReportId == rptXRAYUsage)
    {
        arrayFilters = getReportFilterArray_XRAYUsage();

    }

    if (inReportId == rptMRRUsage) {
        arrayFilters = getReportFilterArray_MRRUsage();

    }

    if (inReportId == rptTVBUsage) {
        arrayFilters = getReportFilterArray_TVBUsage();

    }



    return arrayFilters;
}

//-------------------------
// REPORT AREA
//-------------------------

// MRR Market Summary
function getReportFilterArray_MRRMarketSummary()
{

    var arrayFilters = new Array();
    var arrayObject = new Object();

    arrayObject = {
        token: "Market",
        jsCall: "getMarketList",
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
        id: 1,
        reportTitle: "Market Summary",
        apiControllerAction: "/api/MRRReport/GetMarketSummary",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'mrr'
    }

    return tempObject;
}

// XRAY Usage
function getReportFilterArray_XRAYUsage() {

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
        jsCall: "getMarketList",
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
        id: 2,
        reportTitle: "XRay Usage Report",
        apiControllerAction: "/api/XRAYReport/GetXRayUsage",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'xry'
    }

    return tempObject;
}


// MRR Usage
function getReportFilterArray_MRRUsage() {

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
        jsCall: "getMarketList",
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
        id: 1,
        reportTitle: "MRR Usage Report",
        apiControllerAction: "/api/MRRReport/GetMRRUsage",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'mrr'
    }

    return tempObject;
}


// TVB Usage
function getReportFilterArray_TVBUsage() {

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
        jsCall: "getMarketList",
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
        id: 4,
        reportTitle: "TVB Usage Report",
        apiControllerAction: "/api/TVBReport/GetTVBUsage",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'tvb'
    }

    return tempObject;

}