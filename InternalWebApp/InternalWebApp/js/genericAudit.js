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
//agencies
auditName.push("auditAgencies");
auditName.push("auditStationAgencies");
//revenue research
auditName.push("auditAdvertisersRevenueResearch");
auditName.push("auditMediaRevenueResearch");



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
        window.location = "/utilities/genericAudit.html?reportId=" + reportId;
    }
}


//-------------------------
// REPORT AREA
//-------------------------

function getAuditObject_Advertisers() {
    var tempObject = new Object();

    var columnsToDisplay = new Array();

    columnsToDisplay.push("marketId");
    columnsToDisplay.push("marketName");
    columnsToDisplay.push("advertiserId");
    columnsToDisplay.push("advertiserName");
    columnsToDisplay.push("industryId");
    columnsToDisplay.push("industryDescription");
    columnsToDisplay.push("subIndustryId");
    columnsToDisplay.push("subIndustryDescription");
    columnsToDisplay.push("parentAdvertiserId");
    columnsToDisplay.push("parentAdvertiserName");

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
            if ($("#ddlIndustry").val() == "-1") {

                $("#ddlSubIndustry").empty();
                getDefaultSubIndustry();
                return;
            }

            $.ajax({
                url: ServicePrefix + '/api/SubIndustry/GetSubIndustryList',
                dataType: 'json',
                type: 'post',
                contentType: 'application/json',
                data: JSON.stringify({
                    "inApiToken": getLocalStorage("APIToken"),
                    "inIndustryId": $("#ddlIndustry").val()
                }),
                processData: false,
                success: function (data, textStatus, jQxhr) {

                    if (data.response.status != "SUCCESS") {
                        MKAErrorMessageRtn(data.response.errorMessage[0]);
                    }
                    else {

                        var str = '';
                        str = '<option value="-1">-- Select a Sub Industry --</option>';
                        $.each(data.report.rows, function (index) {

                            str = str + '<option value="' + data.report.rows[index].subIndustryId + '">' + data.report.rows[index].subIndustryName + '</option>';

                        });

                        $("#ddlSubIndustry").html(str);
                        saveLoadedControlSelection("ddlSubIndustry");

                    }


                },
                error: function (jqXhr, textStatus, errorThrown) {
                    genericAjaxError(jqXhr, textStatus, errorThrown);
                }
            });
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
        jsCall: "getParentAdvertiserList",
        objectName: "ddlParentAdvertiser",
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
    columnsToDisplay.push("marketId");
    columnsToDisplay.push("marketName");
    columnsToDisplay.push("mediaAdvertiserId");
    columnsToDisplay.push("mediaAdvertiserName");
    columnsToDisplay.push("mediaAdvertiserCode");
    columnsToDisplay.push("marketAdvertiserId");
    columnsToDisplay.push("marketAdvertiserName");
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
    columnsToDisplay.push("marketId");
    columnsToDisplay.push("marketName");
    columnsToDisplay.push("stationId");
    columnsToDisplay.push("stationName");
    columnsToDisplay.push("stationAdvertiserId");
    columnsToDisplay.push("stationAdvertiserName");
    columnsToDisplay.push("stationCode");
    columnsToDisplay.push("marketAdvertiserId");
    columnsToDisplay.push("marketAdvertiserName");
    columnsToDisplay.push("industryId");
    columnsToDisplay.push("industryName");
    columnsToDisplay.push("subIndustryId");
    columnsToDisplay.push("subIndustryName");

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

            if ($("#ddlMarket").val() == "") {

                $("#ddlOwner").empty();
                getDefaultOwner();
                return;
            }

            $.ajax({
                url: ServicePrefix + '/api/Owner/GetOwnerListByProductMarket',
                dataType: 'json',
                type: 'post',
                contentType: 'application/json',
                data: JSON.stringify({
                    "inApiToken": getLocalStorage("APIToken"),
                    "inProductId": "XRY",
                    "inMarketId": $("#ddlMarket").val()
                }),
                processData: false,
                success: function (data, textStatus, jQxhr) {

                    if (data.response.status != "SUCCESS") {
                        MKAErrorMessageRtn(data.response.errorMessage[0]);

                    }
                    else {

                        var str = '';

                        $("#ddlOwner").html("<option value='-1'> -- Select an Owner --</option>");

                        var holdOwnerID = "0";

                        $.each(data.report.rows, function (index) {
                            var obj = data.report.rows[index];
                            str = str + "<option value='" + obj.ownerid + "'>" + obj.ownername + "</option>";

                        });

                        $("#ddlOwner").append(str);
                        saveLoadedControlSelection("ddlOwner");
                    }

                },
                error: function (jqXhr, textStatus, errorThrown) {
                    genericAjaxError(jqXhr, textStatus, errorThrown);
                }
            });
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
        onchange: function() {
            if ($("#ddlIndustry").val() == "-1") {

                $("#ddlSubIndustry").empty();
                getDefaultSubIndustry();
                return;
            }

            $.ajax({
                url: ServicePrefix + '/api/SubIndustry/GetSubIndustryList',
                dataType: 'json',
                type: 'post',
                contentType: 'application/json',
                data: JSON.stringify({
                    "inApiToken": getLocalStorage("APIToken"),
                    "inIndustryId": $("#ddlIndustry").val()
                }),
                processData: false,
                success: function (data, textStatus, jQxhr) {

                    if (data.response.status != "SUCCESS") {
                        MKAErrorMessageRtn(data.response.errorMessage[0]);
                    }
                    else {

                        var str = '';
                        str = '<option value="-1">-- Select a Sub Industry --</option>';
                        $.each(data.report.rows, function (index) {

                            str = str + '<option value="' + data.report.rows[index].subIndustryId + '">' + data.report.rows[index].subIndustryName + '</option>';

                        });

                        $("#ddlSubIndustry").html(str);
                        saveLoadedControlSelection("ddlSubIndustry");

                    }

                },
                error: function (jqXhr, textStatus, errorThrown) {
                    genericAjaxError(jqXhr, textStatus, errorThrown);
                }
            });
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

function getAuditObject_Agencies() {
    var tempObject = new Object();

    var columnsToDisplay = new Array();
    columnsToDisplay.push("marketId");
    columnsToDisplay.push("marketName");
    columnsToDisplay.push("agencyId");
    columnsToDisplay.push("agencyName");
    columnsToDisplay.push("parentAgencyId");
    columnsToDisplay.push("parentAgencyName");
    columnsToDisplay.push("accountTypeId");
    columnsToDisplay.push("accountTypeName");
    
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
        jsCall: "getParentAgencyList",
        objectName: "ddlParentAgency",
        required: false
    }
    arrayFilters.push(arrayObject);

    return arrayFilters;
}

function getAuditObject_StationAgencies() {
    var tempObject = new Object();

    var columnsToDisplay = new Array();
    columnsToDisplay.push("marketId");
    columnsToDisplay.push("marketName");
    columnsToDisplay.push("stationId");
    columnsToDisplay.push("stationName");
    columnsToDisplay.push("stationAgencyId");
    columnsToDisplay.push("stationAgencyName");
    columnsToDisplay.push("stationAgencyCode");
    columnsToDisplay.push("marketAgencyId");
    columnsToDisplay.push("marketAgencyName");
    columnsToDisplay.push("accountTypeId");
    columnsToDisplay.push("accountTypeName");

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

            if ($("#ddlMarket").val() == "") {

                $("#ddlOwner").empty();
                getDefaultOwner();
                return;
            }

            $.ajax({
                url: ServicePrefix + '/api/Owner/GetOwnerListByProductMarket',
                dataType: 'json',
                type: 'post',
                contentType: 'application/json',
                data: JSON.stringify({
                    "inApiToken": getLocalStorage("APIToken"),
                    "inProductId": "XRY",
                    "inMarketId": $("#ddlMarket").val()
                }),
                processData: false,
                success: function (data, textStatus, jQxhr) {

                    if (data.response.status != "SUCCESS") {
                        MKAErrorMessageRtn(data.response.errorMessage[0]);

                    }
                    else {

                        var str = '';

                        $("#ddlOwner").html("<option value='-1'> -- Select an Owner --</option>");

                        var holdOwnerID = "0";

                        $.each(data.report.rows, function (index) {
                            var obj = data.report.rows[index];
                            str = str + "<option value='" + obj.ownerid + "'>" + obj.ownername + "</option>";

                        });

                        $("#ddlOwner").append(str);
                        saveLoadedControlSelection("ddlOwner");
                    }

                },
                error: function (jqXhr, textStatus, errorThrown) {
                    genericAjaxError(jqXhr, textStatus, errorThrown);
                }
            });
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

function getAuditObject_AdvertisersRevenueResearch() {
    var tempObject = new Object();

    var columnsToDisplay = new Array();
    columnsToDisplay.push("marketId");
    columnsToDisplay.push("marketName");
    columnsToDisplay.push("advertiserId");
    columnsToDisplay.push("advertiserName");
    columnsToDisplay.push("stationName");
    columnsToDisplay.push("period");
    columnsToDisplay.push("revenue");
    columnsToDisplay.push("agencyId");
    columnsToDisplay.push("agencyName");
    columnsToDisplay.push("accountTypeName");
    columnsToDisplay.push("postedBy");
    columnsToDisplay.push("datePosted");

    //For the Revenue Research audits,
    //need to add a footerFormat property to allow for 
    //the totals to be created.
    //The footerCallback property creates a function that will
    //create the revenue totals for the page and entire datatable.
    tempObject =
    {
        auditTitle: "Advertiser Revenue Research",
        apiControllerAction: "/api/AdvertiserAudit/GetAdvertiserRevenueResearch",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'revresearch',
        footerFormat: '<tfoot class="rev-research-footer" style="display: none;"><tr><th class="" colspan="8" style=""></th><th class="" colspan="4" style=""></th></tr></tfoot>',
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
                .column(6)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            // Total over this page
            var pageTotal = api
                .column(6, { page: 'current' })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            // Update footer
            $(api.column(6).footer()).html(
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

            if ($("#ddlMarket").val() == "") {

                $("#ddlOwner").empty();
                getDefaultOwner();
                return;
            }

            $.ajax({
                url: ServicePrefix + '/api/Owner/GetOwnerListByProductMarket',
                dataType: 'json',
                type: 'post',
                contentType: 'application/json',
                data: JSON.stringify({
                    "inApiToken": getLocalStorage("APIToken"),
                    "inProductId": "XRY",
                    "inMarketId": $("#ddlMarket").val()
                }),
                processData: false,
                success: function (data, textStatus, jQxhr) {

                    if (data.response.status != "SUCCESS") {
                        MKAErrorMessageRtn(data.response.errorMessage[0]);

                    }
                    else {

                        var str = '';

                        $("#ddlOwner").html("<option value='-1'> -- Select an Owner --</option>");

                        var holdOwnerID = "0";

                        $.each(data.report.rows, function (index) {
                            var obj = data.report.rows[index];
                            str = str + "<option value='" + obj.ownerid + "'>" + obj.ownername + "</option>";

                        });

                        $("#ddlOwner").append(str);
                        saveLoadedControlSelection("ddlOwner");
                    }

                },
                error: function (jqXhr, textStatus, errorThrown) {
                    genericAjaxError(jqXhr, textStatus, errorThrown);
                }
            });
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
    columnsToDisplay.push("marketId");
    columnsToDisplay.push("marketName");
    columnsToDisplay.push("advertiserId");
    columnsToDisplay.push("advertiserName");
    columnsToDisplay.push("mediaCodeName");
    columnsToDisplay.push("period");
    columnsToDisplay.push("revenue");
    columnsToDisplay.push("postedBy");
    columnsToDisplay.push("datePosted");

    tempObject =
    {
        auditTitle: "Media Revenue Research",
        apiControllerAction: "/api/MediaAdvertiserAudit/GetMediaRevenueResearch",
        apiType: "get",
        columnsToDisplay: columnsToDisplay,
        product: 'revresearch',
        footerFormat: '<tfoot class="rev-research-footer" style="display: none;"><tr><th class="" colspan="8" style=""></th><th class="" colspan="1" style=""></th></tr></tfoot>',
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
                .column(6)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            // Total over this page
            var pageTotal = api
                .column(6, { page: 'current' })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            // Update footer
            $(api.column(6).footer()).html(
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

