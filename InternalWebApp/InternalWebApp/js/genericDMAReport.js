var autoRerunInterval = 120 * 1000; // 

var dmaReportObjectArray = new Array();
var dmaReportFilterObjectArray = new Array();

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
        // console.log(module);
        arrayObject = window[("getDMAReportObject_" + module)]();
        arrayObject.filters = window[("getDMAReportFilterArray_" + module)]();

        dmaReportObjectArray.push(arrayObject);

    }

}

function getDMAReportObject(inReportId) {

    return dmaReportObjectArray[inReportId];

}

function getDMAReportObject_RevenueComparisonMarket() {

}

function getDMAReportFilterArray_RevenueComparisonMarket() {

}
