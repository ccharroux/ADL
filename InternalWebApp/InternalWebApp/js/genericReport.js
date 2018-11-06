const rptMRRMarketSummary = 1

function getReportObject(inReportId)
{

    var arrayObject = new Object();

    if (inReportId == rptMRRMarketSummary) {

        arrayObject = getReportObject_MRRMarketSummary();
    }

    return arrayObject;
}
function getReportFilterArray(inReportId) {

    var arrayFilters = new Array();
 

    if (inReportId == rptMRRMarketSummary) {
         arrayFilters = getReportFilterArray_MRRMarketSummary();
    }

    return arrayFilters;
}
function getReportObject(inReportId)
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
        reportTitle: "Market Summary",
        apiControllerAction: "/api/MRRReport/GetMarketSummary",
        apiType: "get",
        columnsToDisplay: columnsToDisplay
    }

    return tempObject;
}

//-------------------------
// REPORT AREA
//-------------------------
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
        reportTitle: "Market Summary",
        apiControllerAction: "/api/MRRReport/GetMarketSummary",
        apiType: "get",
        columnsToDisplay: columnsToDisplay
    }

    return tempObject;
}