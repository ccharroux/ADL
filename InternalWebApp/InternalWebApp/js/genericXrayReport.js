var auditObjectArray = new Array();
var auditFilterObjectArray = new Array();

//this array contains the list of actions available for an audit item
var auditActionsArray = new Array();
auditActionsArray.push("edit");

var auditName = new Array();
//advertisers
auditName.push("auditAdvertisers");
auditName.push("auditMediaAdvertisers");
auditName.push("auditStationAdvertisers");
auditName.push("auditNewAdvertisers");
//agencies
auditName.push("auditAgencies");
auditName.push("auditStationAgencies");
auditName.push("auditNewAgencies");
//revenue research
auditName.push("auditAdvertisersRevenueResearch");
auditName.push("auditMediaRevenueResearch");
//account executive
auditName.push("auditAEStatusList");


function buildAuditArray() {
    var auditCounter = 1;
    var success = true;
    var auditArray = new Array();

    do {
        var outObject = getReportObject(auditCounter);

        if (outObject.apiControllerAction == null) {
            success = false;
        }
        else {
            auditArray.push(outObject);
            auditCounter++;
        }
    }
    while (success == true);

    return auditArray;
}

buildAuditObjectArray();

//---------------------------
// Generic Report Wrapper Routines
//---------------------------
function buildAuditObjectArray() {
    var arrayObject = new Object();

    for (var x = 0; x < auditName.length; x++) {
        var module = auditName[x].replace("audit", "");
        //console.log(module);
        arrayObject = window[("getAuditObject_" + module)]();
        arrayObject.filters = window[("getAuditFilterArray_" + module)]();
        auditObjectArray.push(arrayObject);

    }

}

function getAuditObject(inAuditId) {

    return auditObjectArray[inAuditId];

}

function buildQuickReports(rptType, control, container, postfix) {

    if (!control) {
        control = 'ddlQuickReport';
    }

    if (!control) {
        control = 'divQuickReport';
    }

    var rptHit = false;

    for (var i = 0; i < auditObjectArray.length; i++) {

        if (auditObjectArray[i].product.toLowerCase() == rptType.toLowerCase()) {

            rptHit = true;
            $("#" + control).append("<option value='" + i + "'>" + auditObjectArray[i].auditTitle + "</option>");
        }

    }

    if (rptHit == true) {
        $("#" + control).prepend("<option value='-1'>  -- Select an Audit --  </option>");
        $("#" + control).val("-1");
        $("#" + container).show();
    }
    else {
        $("#" + container).hide();
    }

}

function getQuickReport(reportId) {
    if (reportId > -1) {
        setLocalStorage("gSearchResults", "");
        window.location = "/utilities/genericXrayReport.html?reportId=" + reportId;
    }
}

function setUpBackButton() {
    setLocalStorage("search", "reportId=" + getParameterByName("reportId"));
    setLocalStorage("searchPage", window.location);
    setLocalStorage("quickReportQS", "ddlMarket|" + $("#ddlMarket").val());
}


//-------------------------
// REPORT AREA
//-------------------------

function getAuditObject_Advertisers() {
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
        "action":"edit",
        "mRender": function (data, type, row) {
            var action = "/advertiser.html?AdvertiserID=";
            return '<a href="#" onclick=\'loadActionPage("' + action + '",' + row.advertiserId + ')\'>Edit</a>';
        },
        "orderable": false,
        "searchable": false,
        "className": "text-align-right"
    });

    tempObject =
    {
        auditTitle: "Advertisers",
        apiControllerAction: "/api/AdvertiserAudit/GetAdvertiserAuditList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'advertisers'
    }

    return tempObject;
}

function getAuditFilterArray_Advertisers() {
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
        onchange: function() {

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

function getAuditObject_MediaAdvertisers() {
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
            var action = "/mediaadvertiser.html?MediaAdvertiserID=";
            return '<a href="#" onclick=\'loadActionPage("' + action + '",' + row.mediaAdvertiserId + ')\'>Edit</a>';
        },
        "orderable": false,
        "searchable": false,
        "className": "text-align-right"
    });

    tempObject =
    {
        auditTitle: "Media Advertisers",
        apiControllerAction: "/api/MediaAdvertiserAudit/GetMediaAdvertiserAuditList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'advertisers'
    }

    return tempObject;
}

function getAuditFilterArray_MediaAdvertisers() {
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

function getAuditObject_StationAdvertisers() {
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
            var action = "/stationadvertiser.html?StationAdvertiserID=";
            return '<a href="#" onclick=\'loadActionPage("' + action + '",' + row.stationAdvertiserId + ')\'>Edit</a>';
        },
        "orderable": false,
        "searchable": false,
        "className": "text-align-right"
    });

    tempObject =
    {
        auditTitle: "Station Advertisers",
        apiControllerAction: "/api/StationAdvertiserAudit/GetStationAdvertiserAuditList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'advertisers'
    }

    return tempObject;
}

function getAuditFilterArray_StationAdvertisers() {
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

function getAuditObject_NewAdvertisers() {
    var tempObject = new Object();

    var columnsToDisplay = new Array();

    columnsToDisplay.push("station advertiser name");
    columnsToDisplay.push("advertiser name");
    columnsToDisplay.push("industry name");
    columnsToDisplay.push("sub industry name");
    columnsToDisplay.push("media code id");
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

            var action = '<a href="#" onclick=\'setUpBackButton(); loadActionPage("/advertiser.html?AdvertiserID=",' + row.advertiserId + ')\'>Edit&nbsp;Advertiser</a>';
            var action2 = '';
            if (row.stationAdvertiserId != null) {
                action2 = '<a href="#" onclick=\'setUpBackButton(); loadActionPage("/stationadvertiser.html?StationAdvertiserID=",' + row.stationAdvertiserId + ')\'>Edit&nbsp;Station&nbsp;Advertiser</a>';
            } else {
                action2 = '<a href="#" onclick=\'setUpBackButton(); loadActionPage("/mediaadvertiser.html?MediaAdvertiserID=",' + row.mediaAdvertiserId + ')\'>Edit&nbsp;Media&nbsp;Advertiser</a>';
            }
            return action + '<br />' + action2;
        },
        "orderable": false,
        "searchable": false,
        "className": "text-align-right"
    });

    tempObject =
    {
        auditTitle: "New Advertisers",
        apiControllerAction: "/api/AdvertiserAudit/GetNewAdvertiserAuditList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'advertisers'
    }

    return tempObject;
}

function getAuditFilterArray_NewAdvertisers() {
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

function getAuditObject_Agencies() {
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
            var action = "/agency.html?AgencyID=";
            return '<a href="#" onclick=\'loadActionPage("' + action + '",' + row.agencyId + ')\'>Edit</a>';
        },
        "orderable": false,
        "searchable": false,
        "className": "text-align-right"
    });

    tempObject =
    {
        auditTitle: "Agencies",
        apiControllerAction: "/api/AgencyAudit/GetAgencyAuditList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'agencies'
    }

    return tempObject;
}

function getAuditFilterArray_Agencies() {
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

function getAuditObject_StationAgencies() {
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
            var action = "/stationagency.html?StationAgencyID=";
            return '<a href="#" onclick=\'loadActionPage("' + action + '",' + row.stationAgencyId + ')\'>Edit</a>';
        },
        "orderable": false,
        "searchable": false,
        "className": "text-align-right"
    });

    tempObject =
    {
        auditTitle: "Station Agencies",
        apiControllerAction: "/api/StationAgencyAudit/GetStationAgencyAuditList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'agencies'
    }

    return tempObject;
}

function getAuditFilterArray_StationAgencies() {
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

function getAuditObject_NewAgencies() {
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

            var action = '<a href="#" onclick=\'setUpBackButton(); loadActionPage("/agency.html?AgencyID=",' + row.agencyId + ')\'>Edit&nbsp;Agency</a>';
            var action2 = '<a href="#" onclick=\'setUpBackButton(); loadActionPage("/stationagency.html?StationAgencyID=",' + row.stationAgencyId + ')\'>Edit&nbsp;Station&nbsp;Agency</a>';
            return action + '<br />' + action2;
        },
        "orderable": false,
        "searchable": false,
        "className": "text-align-right"
    });

    tempObject =
    {
        auditTitle: "New Agencies",
        apiControllerAction: "/api/AgencyAudit/GetNewAgencyAuditList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'agencies'
    }

    return tempObject;
}

function getAuditFilterArray_NewAgencies() {
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

function getAuditObject_AdvertisersRevenueResearch() {
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
        auditTitle: "Advertiser Revenue Research",
        apiControllerAction: "/api/AdvertiserAudit/GetAdvertiserRevenueResearchList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'revresearch',
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
        footerCallback: function(row, data, start, end, display) {

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

function getAuditFilterArray_AdvertisersRevenueResearch() {
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


function getAuditObject_MediaRevenueResearch() {
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
        auditTitle: "Media Revenue Research",
        apiControllerAction: "/api/MediaAdvertiserAudit/GetMediaRevenueResearchList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'revresearch',
        footerFormat: '<tfoot class="rev-research-footer" style="display: none;"><tr>' +
            '<th></th>' +
            '<th></th>' +
            '<th></th>' +
            '<th></th>' +
            '<th></th>' +
            '<th></th>' +
            '<th></th>' +
            '</tr></tfoot>',
        footerCallback: function(row, data, start, end, display) {

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

function getAuditFilterArray_MediaRevenueResearch() {
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

function getAuditFilterArray_AEStatusList() {
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

function getAuditObject_AEStatusList() {
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
            var action = "/accountexecutivedetails.html?AccountExecutiveID=" + row.AEId +
                "&AEName=" +row.AE + "&Owner=" + row.Owner +
                "&Market=" + row.Market + "&LinkedUser=" +row["Linked User"] +
                "&ActiveDate=" + row["Active Date"] + "&DisableDate=" + row["Disable Date"];
            return '<a href="' + encodeURI(action) + '" >Details</a>';
        },
        "orderable": false,
        "searchable": false,
        "className": "text-align-right"
    });

    tempObject =
    {
        auditTitle: "Account Executive Status List",
        apiControllerAction: "/api/AccountExecutiveReport/GetAEStatusList",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'ae'
    }

    return tempObject;
}


