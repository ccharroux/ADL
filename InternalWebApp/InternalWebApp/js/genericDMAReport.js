var autoRerunInterval = 120 * 1000; // 

var dmaReportObjectArray = new Array();
var dmaReportFilterObjectArray = new Array();

var reportActionsArray = new Array();
reportActionsArray.push("edit");

var dmaReportName = new Array();
dmaReportName.push("dmaRevenueComparisonMarket");
dmaReportName.push("dmaRevenueComparisonStation");
dmaReportName.push("dmaRevenueComparisonStationDetail");

function buildDMAReportArray() {
    var reportCounter = 1;
    var success = true;
    var reportArray = new Array();

    do {
        var outObject = getReportObject(reportCounter);

        if (outObject.apiControllerAction == null) {
            success = false;
        }
        else {
            reportArray.push(outObject);
            reportCounter++;
        }
    }
    while (success == true);

    return reportArray;
}

buildDMAReportObjectArray();

function buildDMAReportObjectArray() {

    var arrayObject = new Object();

    for (var x = 0; x < dmaReportName.length; x++) {

        var module = dmaReportName[x].replace("dma", "");

        arrayObject = window[("getDMAReportObject_" + module)]();
        arrayObject.filters = window[("getDMAReportFilterArray_" + module)]();

        dmaReportObjectArray.push(arrayObject);

    }

}

function getDMAReportObject(inReportId) {

    return dmaReportObjectArray[inReportId];

}

function getDMAReportObjectByKeyValue(inKey, inValue) {
    //get the item by the key with a value

    for (var i = 0; i < dmaReportObjectArray.length; i++) {
        if (dmaReportObjectArray[i][inKey] === inValue) {
            dmaReportObjectArray[i].reportIndex = i;
            return dmaReportObjectArray[i];
        }
    }
    return null;

}

function getDMAReportObject_RevenueComparisonMarket() {

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
        "mRender": function (data, type, row) {
            var reportIndex = dmaReportName.indexOf("dmaRevenueComparisonStation");
            var action = "";

            var revenuePeriodParts = row["Revenue Period"].split("/");

            if (reportIndex > -1) {
                action = "/Products/DMA/reports/dmagenericreport.html?reportid=" + reportIndex +
                        "&parentmarketid=" + row["Parent Market ID"] +
                        "&marketid=" + row["Market Id"] +
                        "&revenueperiod=" + revenuePeriodParts[1] +
                        "&revenueyear=" + revenuePeriodParts[0] +
                        "&direct=false";
            }

            return '<a href="' + action + '">Stations</a>';
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
        product: 'dmarevenue',
        showBackNav: false,
        reportToken: "dmaMarket",
        reportIndex: ""
    }

    return tempObject;
}

function getDMAReportFilterArray_RevenueComparisonMarket() {

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

function getDMAReportObject_RevenueComparisonStation() {
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
        "mRender": function (data, type, row) {
            var reportIndex = dmaReportName.indexOf("dmaRevenueComparisonStationDetail");
            var action = "";

            var revenuePeriodParts = row["Revenue Period"].split("/");

            if (reportIndex > -1) {
                action = "/Products/DMA/reports/dmagenericreport.html?reportid=" + reportIndex +
                    "&parentmarketid=" + $("#ddlParentMarket").val() +
                    "&marketid=" + row["Market ID"] +
                    "&revenueperiod=" + revenuePeriodParts[1] +
                    "&revenueyear=" + revenuePeriodParts[0] +
                    "&stationid=" + row["Station Id"] +
                    "&direct=false";
            }

            return '<a href="' + action + '">Details</a>';
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
        product: 'dmarevenue',
        showBackNav: true,
        backNavButtons: arrButtons,
        reportToken: "dmaStation",
        reportIndex: ""
    }

    return tempObject;
}

function getDMAReportFilterArray_RevenueComparisonStation() {
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

function getDMAReportObject_RevenueComparisonStationDetail() {
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
        product: 'dmarevenue',
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

function getDMAReportFilterArray_RevenueComparisonStationDetail() {
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