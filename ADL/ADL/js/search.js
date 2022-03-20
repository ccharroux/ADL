﻿var api = "";
var apiParameters = "";
var apiToken = getLocalStorage("APIToken");
var searchText = "";
var columns = [];
var gResults = null;
var gSilentSearch;
var gNumericMediaTypeId = 0;
var gMarketId = 0;

function getSearchData(searchCriteria, bSilentSearch) {
    //get session object
    //switch statement on token
    //make api call can return the data
    //turn into json that the datatable can understand
    //console.log(searchCriteria);

    if (bSilentSearch == undefined)
    {
        gSilentSearch = true;
    } else
    {
        gSilentSearch = bSilentSearch;
    }

    switch (searchCriteria["searchToken"].toUpperCase()) {
        case "STATIONMARKET":
        case "MEDIAMARKET":
            buildAdvertiserSearch(searchCriteria);
            break;
        case "STATIONAGENCY":
        case "LINKAGENCY":
            buildAgencySearch(searchCriteria);
            break;
        case "PARENTADV":
            buildParentAdvertiserSearch(searchCriteria);
            break;
        case "PARENTAGENCY":
            buildParentAgencySearch(searchCriteria);
            break;
        case "LINKADV":
            //should allow cross market search
            buildLinkAdvertiserSearch(searchCriteria);
            break;
        case "PERSONNEL":
            buildPersonnelSearch(searchCriteria);
            break;
        case "PARENTADVAUDIT":
            buildParentAdvertiserAuditSearch(searchCriteria);
            break;
        case "PARENTAGENCYAUDIT":
            buildParentAgencyAuditSearch(searchCriteria);
            break;
        case "BULKADV":
            buildAdvertiserAuditSearch(searchCriteria);
            break;
        case "BULKAGENCY":
            buildAgencyAuditSearch(searchCriteria);
            break;
        default:
    }

    //DEV-7085 
    //added validation to make sure there is search text
    //regardless of the type of search
    if ($('.search-text:visible').val().trim().length == 0 && gSilentSearch == false)
    {
        bootbox.alert('Please enter search text.', function () {
        });

        $('.search-text:visible').val("");

        return;

    } else if (searchText.length == 0 && gSilentSearch == true)
    {
        return;
    }
   

    //make api call and return data
    //this occurs regardless of the token
    //the url is based on what was assigned in the previous switch statement
    //data is assigned the api parameters also created in the switch statement
    //when call is successful it will call loadSearchResults
    gResults = $.ajax({
        url: ServicePrefix + api,
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify(apiParameters),
        processData: false,
        success: function (data, textStatus, jQxhr) {
            if (data.response.status.toUpperCase() === "SUCCESS") {
                loadSearchResults(data, columns);
            }
        },
        error: function (jqXhr, textStatus, errorThrown) {
            genericAjaxError(jqXhr, textStatus, errorThrown);
        }
    });



}

function loadSearchResults(data, columns) {
    //data is the data from the ajax call
    //columns is the array that was built previously

    //assigns the data from the ajax call
    var results = data["report"]["rows"];

    //creating a variable that will used for datatable functions later
    var searchTable;

    //if the datatable already exists need to destroy it before building it
    //again with new results from the search.
    //if you try to destroy before it is a datatable, an error will occur.
    //this code will only destroy it if the table is a datatable.
    if ($.fn.DataTable.isDataTable('#dtSearchResults')) {
        searchTable = $('#dtSearchResults').DataTable();
        searchTable.destroy();
    }


    //this code rebuilds the datatable with the updated data from the search 
    //or initial load.
    searchTable = $("#dtSearchResults").DataTable({
        "data": results,
        "columns": columns,
        "select": true,
        language: {
            search: "Filter Results:"
        }
    });

}

function cancelSearch() {

    //loops through the search criteria that was initially sent 
    //to the search page. This reloads it into a json object and
    //loads it into local storage.
    //the page that the window location is sent to will load this data from local storage.
    var searchResults = {};

    for (var key in searchCriteria) {
        searchResults[key] = searchCriteria[key];
    }

    setLocalStorage("gSearchResults", JSON.stringify(searchResults));

    if (!searchCriteria) {
        window.location = "/admin/login/dashboard.html";
    }
    else {
        //sends user back to page that called the search page
        var searchPage = searchCriteria["searchPage"]["href"];
        window.location = searchPage;
    }
}

function linkAdvertiserByLink(advertiserId, marketId) {

    if (marketId != searchCriteria["marketID"]) {
        var errorMessage = "You cannot link to an advertiser from another market.";
        bootbox.alert(errorMessage, function () { });
        return;
    }
    //finds the datatable rowid
    var rowId = $('#dtSearchResults').dataTable()
        .fnFindCellRowIndexes(advertiserId, 0);

    //this will select the row that the link was clicked
    var table = $('#dtSearchResults').DataTable();
    table.row(rowId).select();

    linkAdvertiser();
}

function linkAdvertiser() {

    //leaving this code here in case need to add the link button back in
    var searchTable = $('#dtSearchResults').DataTable();
    if (searchTable.rows('.selected').any() === false) {
        bootbox.alert('Select an advertiser to link.', function () {
        });
        return;
    }

    //get the data for the selected row
    var rowData = searchTable.rows('.selected').data();
    var searchResults = {};

    //loops through the search criteria that was initially sent 
    //to the search page. This reloads it into a json object and
    //loads it into local storage.
    //the page that the window location is sent to will load this data from local storage.
    for (var key in searchCriteria) {
        searchResults[key] = searchCriteria[key];
    }

    searchResults['marketAdvertiserId'] = rowData[0].advertiserId;
    searchResults['marketAdvertiserName'] = rowData[0].advertiser;

    setLocalStorage("gSearchResults", JSON.stringify(searchResults));

    //sends user back to page that called the search page
    var searchPage = searchCriteria["searchPage"]["href"];
    window.location = searchPage;

}

function fixAdvertiser() {
    bootbox.alert('This functionality is still under development.', function () {
    });
}

function linkAgencyByLink(agencyId, marketId) {

    if (marketId != searchCriteria["marketID"]) {
        var errorMessage = "You cannot link to an agency from another market.";
        bootbox.alert(errorMessage, function () { });
        return;
    }

    var rowId = $('#dtSearchResults').dataTable()
        .fnFindCellRowIndexes(agencyId, 0);

    var table = $('#dtSearchResults').DataTable();
    table.row(rowId).select();

    linkAgency();

}

function linkAgency() {

    //leaving this code here in case need to add the link button back in
    var searchTable = $('#dtSearchResults').DataTable();
    if (searchTable.rows('.selected').any() === false) {
        bootbox.alert('Select an agency to link.', function () {
        });
        return;
    }

    var rowData = searchTable.rows('.selected').data();
    var searchResults = {};

    //loops through the search criteria that was initially sent 
    //to the search page. This reloads it into a json object and
    //loads it into local storage.
    //the page that the window location is sent to will load this data from local storage.
    for (var key in searchCriteria) {
        searchResults[key] = searchCriteria[key];
    }

    searchResults['searchAgencyId'] = rowData[0].agencyId;
    searchResults['searchAgencyName'] = rowData[0].agencyName;

    setLocalStorage("gSearchResults", JSON.stringify(searchResults));

    //sends user back to page that called the search page
    var searchPage = searchCriteria["searchPage"]["href"];
    window.location = searchPage;

}

function fixAgency() {
    bootbox.alert('This functionality is still under development.', function () {
    });
}

function linkParentAdvertiserByLink(parentAdvertiserId, industryId, subIndustryId, replacingParent)
{

    if (replacingParent == false && (((parentIndustryId).toUpperCase().trim() != industryId.toUpperCase().trim()) ||
        ((parentSubIndustryId).toUpperCase().trim() != subIndustryId.toUpperCase().trim()))
       )
    {
        var msg = "";

        msg = "<u>Parent Advertiser</u><br>Industry: <b>";
        msg = msg +  (parentIndustryId) + "</b>,";
        msg = msg + " Sub-Industry: <b>" + (parentSubIndustryId) + "</b><br>";
        msg = msg + "<center><font color='red'>DOES NOT MATCH</font></center><u>Market Advertiser</u><br>Industry: <b>";
        msg = msg + (industryId) + "</b>,";
        msg = msg + " Sub-Industry: <b>" + (subIndustryId) + "</b><br><br>Assignment not allowed!";

        bootbox.alert(msg, function () { });
        return;
    }

    var rowId = $('#dtSearchResults').dataTable().fnFindCellRowIndexes(parentAdvertiserId, 0);

    var table = $('#dtSearchResults').DataTable();
    table.row(rowId).select();

    setTimeout(linkParentAdvertiser(), 500);

}

function assignParentAdvertiserAuditByLink(parentAdvertiserId) {

    //added the column holding the parentadvertiserid finding the row. 
    var rowId = $('#dtSearchResults').dataTable().fnFindCellRowIndexes(parentAdvertiserId, 1);

    var table = $('#dtSearchResults').DataTable();
    table.row(rowId).select();

    setTimeout(assignParentAdvertiserAudit(), 500);

}

function assignParentAgencyAuditByLink(parentAgencyId) {

    //added the column holding the parentagencyid finding the row. 
    var rowId = $('#dtSearchResults').dataTable().fnFindCellRowIndexes(parentAgencyId, 1);

    var table = $('#dtSearchResults').DataTable();
    table.row(rowId).select();

    setTimeout(assignParentAgencyAudit(), 500);
}

function linkPersonnelByLink(personnelId) {

    var rowId = $('#dtSearchResults').dataTable().fnFindCellRowIndexes(personnelId, 0);

    var table = $('#dtSearchResults').DataTable();
    table.row(rowId).select();

    setTimeout(linkPersonnel, 500);
}

function linkParentAdvertiser() {

    var searchTable = $('#dtSearchResults').DataTable();
    if (searchTable.rows('.selected').any() === false) {
        bootbox.alert('Select a parent advertiser to assign.', function () {
        });
        return;
    }

    var rowData = searchTable.rows('.selected').data();
    var searchResults = {};

    for (var key in searchCriteria) {
        searchResults[key] = searchCriteria[key];
    }

    searchResults["linkParentAdvertiserID"] = rowData[0].parentAdvertiserId;
    searchResults["linkParentAdvertiserName"] = rowData[0].parentAdvertiserName;

    setLocalStorage("gSearchResults", JSON.stringify(searchResults));

    //sends user back to page that called the search page
    var searchPage = searchCriteria["searchPage"]["href"];
    window.location = searchPage;

}

function assignParentAdvertiserAudit() {
    var searchTable = $('#dtSearchResults').DataTable();
    if (searchTable.rows('.selected').any() === false) {
        bootbox.alert('Select a parent advertiser to assign.', function () {
        });
        return;
    }

    var rowData = searchTable.rows('.selected').data();
    var searchResults = {};

    for (var key in searchCriteria) {
        searchResults[key] = searchCriteria[key];
    }

    searchResults["hidParentAdvertiser"] = rowData[0].parentAdvertiserId;
    searchResults["txtParentAdvertiser"] = rowData[0].parentAdvertiserName;

    setLocalStorage("gSearchResults", JSON.stringify(searchResults));

    //sends user back to page that called the search page
    var searchPage = searchCriteria["searchPage"]["href"];
    window.location = searchPage;
}

function assignParentAgencyAudit() {
    var searchTable = $('#dtSearchResults').DataTable();
    if (searchTable.rows('.selected').any() === false) {
        bootbox.alert('Select a parent agency to assign.', function () {
        });
        return;
    }

    var rowData = searchTable.rows('.selected').data();
    var searchResults = {};

    for (var key in searchCriteria) {
        searchResults[key] = searchCriteria[key];
    }

    searchResults["hidParentAgency"] = rowData[0].parentAgencyId;
    searchResults["txtParentAgency"] = rowData[0].parentAgencyName;

    setLocalStorage("gSearchResults", JSON.stringify(searchResults));

    //sends user back to page that called the search page
    var searchPage = searchCriteria["searchPage"]["href"];
    window.location = searchPage;
}

function linkNewAdvertiserByLink(advertiserId, marketId) {

    if (marketId != searchCriteria["marketID"]) {
        var errorMessage = "You cannot link to an advertiser from another market.";
        bootbox.alert(errorMessage, function () { });
        return;
    }

    var rowId = $('#dtSearchResults').dataTable()
        .fnFindCellRowIndexes(advertiserId, 0);

    var table = $('#dtSearchResults').DataTable();
    table.row(rowId).select();

    linkNewAdvertiser();
}

function linkPersonnel() {
    var searchTable = $('#dtSearchResults').DataTable();

    if (searchTable.rows('.selected').any() === false) {
        bootbox.alert('Select an person.', function () { });
        return;
    }

    var rowData = searchTable.rows('.selected').data();
    var searchResults = {};

    for (var key in searchCriteria) {
        searchResults[key] = searchCriteria[key];
    }

    searchResults["hidPersonnelId"] = rowData[0].personnelId;
    searchResults["txtPersonnel"] = rowData[0].name;

    setLocalStorage("gSearchResults", JSON.stringify(searchResults));

    //sends user back to page that called the search page
    var searchPage = searchCriteria["searchPage"]["href"];
    window.location = searchPage;
}

function linkNewAdvertiser() {
    var searchTable = $('#dtSearchResults').DataTable();
    if (searchTable.rows('.selected').any() === false) {
        bootbox.alert('Select an advertiser to assign.', function () {
        });
        return;
    }

    var rowData = searchTable.rows('.selected').data();
    var searchResults = {};

    for (var key in searchCriteria) {
        searchResults[key] = searchCriteria[key];
    }

    searchResults["linkedAdvertiserID"] = rowData[0].advertiserId;
    searchResults["linkedAdvertiserName"] = rowData[0].advertiser;

    setLocalStorage("gSearchResults", JSON.stringify(searchResults));

    //sends user back to page that called the search page
    var searchPage = searchCriteria["searchPage"]["href"];
    window.location = searchPage;
}

function linkParentAgencyByLink(parentAgencyId) {

    var rowId = $('#dtSearchResults').dataTable().fnFindCellRowIndexes(parentAgencyId, 0);

    var table = $('#dtSearchResults').DataTable();
    table.row(rowId).select();

    setTimeout(linkParentAgency(), 500);

}

function linkParentAgency() {
    var searchTable = $('#dtSearchResults').DataTable();
    if (searchTable.rows('.selected').any() === false) {
        bootbox.alert('Select a parent agency to assign.', function () {
        });
        return;
    }

    var rowData = searchTable.rows('.selected').data();



    var searchResults = {};

    for (var key in searchCriteria) {
        searchResults[key] = searchCriteria[key];
    }

    searchResults["linkParentAgencyID"] = rowData[0].parentAgencyId;
    searchResults["linkParentAgencyName"] = rowData[0].parentAgencyName;

    setLocalStorage("gSearchResults", JSON.stringify(searchResults));

    //sends user back to page that called the search page
    var searchPage = searchCriteria["searchPage"]["href"];
    window.location = searchPage;
}

function buildAdvertiserSearch(searchCriteria) {

    if ($('.search-text:visible').val().length > 0) {
        searchText = $('.search-text:visible').val();
    }
    else {
        searchText = searchCriteria["marketAdvertiserName"].length > 0 ? searchCriteria["marketAdvertiserName"].substring(0,gMinimumSearchCharacters) : searchCriteria["advertiserName"].substring(0,gMinimumSearchCharacters);
    }

    if ($('.search-text:visible').val().length == 0 && gSilentSearch == true)
    {
        $('.search-text:visible').val(searchText);
    }

    gNumericMediaTypeId = searchCriteria["numericMediaTypeId"];
    gMarketId = searchCriteria["marketID"];

    //setup the parameters for the API

    apiParameters = {
        "inApiToken": apiToken,
        "inMarketId": $('.search-all-markets:visible').is(':checked') ? "-1" : searchCriteria["marketID"],
        "inAdvertiserName": searchText,
        "inShowDisabled": false
    }
    api = "/api/Advertiser/GetAdvertiserList";

    columns = [];
    //setup the columns to be used in the datatable
    //title sets the column name
    //visible determines if the column will show in the datatable or not
    //data links the column to the data that comes back in the results
    //orderable determines if the column can be sorted or not
    //see https://datatables.net/reference/option/columns
    columns.push({
        "title": "AdvertiserID",
        "visible": false,
        "data": "advertiserId",
        "orderable": false
    });

    columns.push({
        "title": "Advertiser",
        "data": "advertiser",
        "orderable": true
    });

    columns.push({
        "title": "MarketID",
        "visible": false,
        "data": "marketId",
        "orderable": false
    });

    columns.push({
        "title": "Market",
        "data": "market",
        "orderable": true
    });

    columns.push({
        "title": "Industry",
        "data": "industry",
        "orderable": true
    });

    columns.push({
        "title": "Sub Industry",
        "data": "subIndustry",
        "orderable": true
    });


    columns.push({
        "mRender": function (data, type, row) {
            var str = '<a href="#" onclick="EditMarketAdvertiser(' + row.advertiserId + ')">Edit</a>&nbsp;&nbsp;';
            if (row.marketId == gMarketId)
            {
                str = str +
                    '<a href="#" onclick="linkAdvertiserByLink(' +
                    row.advertiserId +
                    ',' +
                    row.marketId +
                    ')">Link Advertiser</a>';
            } else
            {
                //will need the stored procedure to return the industry and sub-industry ids.
                //build the add link need to pass name, industry, subindustry and market to build in
                str = str + '<a href="#" onclick="createNewMarketAdvertiserFromLink(0,\''+row.advertiser+'\',' + row.industryId + ',' + row.subIndustryId +')">Add</a>';
            }
            return str;
        },
        "orderable": false,
        "searchable": false,
        "className": "text-align-right"
    });

    $("#previousPage").html(searchCriteria["advertiserName"]);

}

function buildAgencySearch(searchCriteria) {

    //figure out change for station agency page
    if ($('.search-text:visible').val().length > 0) {
        searchText = $('.search-text:visible').val();
    } else {
        searchText = searchCriteria["searchAgencyName"].length > 0 ? searchCriteria["searchAgencyName"].substring(0, gMinimumSearchCharacters) : searchCriteria["agencyName"].substring(0, gMinimumSearchCharacters);
    }

    if ($('.search-text:visible').val().length == 0 && gSilentSearch == true) {
        $('.search-text:visible').val(searchText);
    }

    gMarketId = searchCriteria["marketID"];

    apiParameters = {
        "inApiToken": apiToken,
        "inMarketId": $('.search-all-markets:visible').is(':checked') ? "-1" : searchCriteria["marketID"],
        "inAgencyName": searchText,
        "inShowDisabled": false
    }
    api = "/api/Agency/GetAgencyList";

    columns = [];

    columns.push({
        "sTitle": "AgencyID",
        "bVisible": false,
        "mData": "agencyId",
        "bSortable": false
    });

    columns.push({
        "sTitle": "Agency Name",
        "mData": "agencyName",
        "bSortable": true
    });

    columns.push({
        "sTitle": "MarketID",
        "bVisible": false,
        "mData": "marketId",
        "bSortable": false
    });

    columns.push({
        "sTitle": "Market Name",
        "mData": "marketName",
        "bSortable": true
    });

    columns.push({
        "mRender": function (data, type, row) {
            var str = '<a href="#" onclick="EditMarketAgency(' + row.agencyId + ')">Edit</a>&nbsp;&nbsp;';
            if (gMarketId == row.marketId)
            {
                str = str +
                    '<a href="#" onclick="linkAgencyByLink(' +
                    row.agencyId +
                    ',' +
                    row.marketId +
                    ')">Link Agency</a>';
            } else
            {
                str = str + '<a href="#" onclick="createNewMarketAgencyFromLink(0,\'' + row.agencyName + '\',' + row.accountTypeId + ')">Add</a>';
            }
            
            return str;
        },
        "bSortable": false,
        "searchable": false,
        "className": "text-align-right"
    });


    //may need to add account type to the api to be returned
    $("#previousPage").html(searchCriteria["agencyName"]);

}

function buildParentAdvertiserSearch(searchCriteria) {
 
    //alert(searchCriteria);

    parentIndustryId = searchCriteria["industryID"].trim();
    parentSubIndustryId = searchCriteria["subIndustryID"].trim();

    //console.log(parentIndustryId);
    //console.log(parentSubIndustryId);

    var replacingParent = false;

    if (searchCriteria["deactivatingParent"] != undefined)
    {
        replacingParent = searchCriteria["deactivatingParent"];
    }

    $(".search-check-box").hide();

    if ($('.search-text:visible').val().length > 0) {
        searchText = $('.search-text:visible').val();
    } else {
        if (searchCriteria["linkParentAdvertiserName"].length > 0)
        {
            searchText = searchCriteria["linkParentAdvertiserName"].substring(0, gMinimumSearchCharacters);
        } else if (searchCriteria["advertiserName"] != undefined)
        {
            searchText = searchCriteria["advertiserName"].substring(0, gMinimumSearchCharacters);
        } else if (searchCriteria["parentAdvertiserName"] != undefined)
        {
            searchText = searchCriteria["parentAdvertiserName"].substring(0, gMinimumSearchCharacters);
        }
    }

    if ($('.search-text:visible').val().length == 0 && gSilentSearch == true) {
        $('.search-text:visible').val(searchText);
    }
    
    apiParameters = {
        "inApiToken": apiToken,
        "inParentAdvertiserName": searchText,
        "inShowDisabled": false
    }
    api = "/api/ParentAdvertiser/GetParentAdvertiserList";

    columns = [];

    columns.push({
        "title": "ParentAdvertiserID",
        "visible": false,
        "mData": "parentAdvertiserId",
        "orderable": false
    });

    columns.push({
        "title": "Parent Advertiser Name",
        "mData": "parentAdvertiserName",
        "orderable": true
    });

    columns.push({
        "title": "Industry",
        "visible": true,
        "mData": "IN_ShortDescription",
        "orderable": true
    });

    columns.push({
        "title": "SubIndustry Name",
        "mData": "SI_Description",
        "orderable": true
    });

    columns.push({
        "mRender": function (data, type, row) {
            return '<a href="#" onclick="linkParentAdvertiserByLink(' + row.parentAdvertiserId +
                ",'" + row.industryId +
                "', '" + row.subIndustryId + "'" +
                ", " + replacingParent +
                ')">Assign Parent Advertiser</a>';
        },
        "orderable": false,
        "searchable": false,
        "className": "text-align-right"
    });

    if (searchCriteria["linkParentAdvertiserName"] != undefined &&
        searchCriteria["linkParentAdvertiserName"].length > 0)
    {
        $("#previousPage").html(searchCriteria["linkParentAdvertiserName"] + '  (<i><font size="2">' + searchCriteria["industryName"] + '  /  ' + searchCriteria["subIndustryName"] + '</font></i>)');
    }

    if (searchCriteria["advertiserName"] != undefined && searchCriteria["advertiserName"].length > 0)
    {
        //need to document this more
        $("#previousPage").html(searchCriteria["advertiserName"] + '  (<i><font size="2">' + searchCriteria["industryName"] + '  /  ' + searchCriteria["subIndustryName"] + '</font></i>)');
    }
    
    if (searchCriteria["parentAdvertiserName"] != undefined && searchCriteria["parentAdvertiserName"].length > 0) {
        $("#previousPage").html(searchCriteria["parentAdvertiserName"] + '  (<i><font size="2">' + searchCriteria["industryName"] + '  /  ' + searchCriteria["subIndustryName"] + '</font></i>)');
    }
}

function buildParentAdvertiserAuditSearch(searchCriteria) {
    if ($('.search-all-markets:visible').is(':checked')) {
        bootbox.alert('Searching all markets functionality is under development but will still search the current market.', function () {
        });
    }

    if ($('.search-text:visible').val() !== undefined &&
        $('.search-text:visible').val().length > 0) {
        searchText = $('.search-text:visible').val();
    } else {
        searchText = searchCriteria["txtParentAdvertiser"].length > 0
            ? searchCriteria["txtParentAdvertiser"]
            : searchCriteria["txtAdvertiserName"];
    }

    apiParameters = {
        "inApiToken": apiToken,
        "inParentAdvertiserName": searchText,
        "inShowDisabled": false
    }
    api = "/api/ParentAdvertiser/GetParentAdvertiserAuditList";

    columns = [];


    columns.push({
        "title": "Parent Advertiser Name",
        "mData": "parentAdvertiserName",
        "orderable": true
    });

    columns.push({
        "title": "ParentAdvertiserID",
        "visible": false,
        "mData": "parentAdvertiserId",
        "orderable": false
    });

    columns.push({
        "title": "Industry",
        "visible": true,
        "mData": "industryDescription",
        "orderable": true
    });

    columns.push({
        "title": "SubIndustry Name",
        "mData": "subIndustryDescription",
        "orderable": true
    });

    columns.push({
        "mRender": function (data, type, row) {
            return '<a href="#" onclick="assignParentAdvertiserAuditByLink(' + row.parentAdvertiserId + ')">Assign Parent Advertiser</a>';
        },
        "orderable": false,
        "searchable": false,
        "className": "text-align-right"
    });

    //need to document this more
    $("#previousPage").html(searchText.length == 0 ? "Parent Advertiser" : searchText);
}

function buildParentAgencySearch(searchCriteria) {

    $(".search-check-box").hide();

    if ($('.search-text:visible').val().length > 0) {
        searchText = $('.search-text:visible').val();
    } else {
        if (searchCriteria["linkParentAgencyName"].length > 0)
        {
            searchText = searchCriteria["linkParentAgencyName"].substring(0, gMinimumSearchCharacters);
        } else if (searchCriteria["agencyName"] != undefined)
        {
            searchText = searchCriteria["agencyName"].substring(0, gMinimumSearchCharacters);
        } else if (searchCriteria["parentAgencyName"] != undefined) {
            searchText = searchCriteria["parentAgencyName"].substring(0, gMinimumSearchCharacters);
        }
        //searchText = searchCriteria["linkParentAgencyName"].length > 0 ? searchCriteria["linkParentAgencyName"].substring(0, gMinimumSearchCharacters) : searchCriteria["agencyName"].substring(0, gMinimumSearchCharacters);
    }

    if ($('.search-text:visible').val().length == 0 && gSilentSearch == true) {
        $('.search-text:visible').val(searchText);
    }

    apiParameters = {
        "inApiToken": apiToken,
        "inParentAgencyName": searchText,
        "inShowDisabled": false
    }
    api = "/api/ParentAgency/GetParentAgencyList";

    columns = [];

    //change these to parent agency
    columns.push({
        "title": "ParentAgencyID",
        "visible": false,
        "mData": "parentAgencyId",
        "orderable": false
    });

    columns.push({
        "title": "Parent Agency Name",
        "mData": "parentAgencyName",
        "orderable": true
    });

    columns.push({
        "mRender": function (data, type, row) {
            return '<a href="#" onclick="linkParentAgencyByLink(' + row.parentAgencyId + ')">Assign Parent Agency</a>';
        },
        "orderable": false,
        "searchable": false,
        "className": "text-align-right"
    });

    if (searchCriteria["linkParentAgencyName"].length > 0)
    {
        $("#previousPage").html(searchCriteria["linkParentAgencyName"]);
    }

    if (searchCriteria["agencyName"] != undefined && searchCriteria["agencyName"].length > 0)
    {
        $("#previousPage").html(searchCriteria["agencyName"]);
    }

    if (searchCriteria["parentAgencyName"] != undefined && searchCriteria["parentAgencyName"].length > 0) {
        $("#previousPage").html(searchCriteria["parentAgencyName"]);
    }


    //need to document this more
    //$("#previousPage").html(searchCriteria["linkParentAgencyName"].length > 0 ? searchCriteria["linkParentAgencyName"] : searchCriteria["agencyName"]);
}

function buildParentAgencyAuditSearch(searchCriteria) {
    if ($('.search-all-markets:visible').is(':checked')) {
        bootbox.alert('Searching all markets functionality is under development but will still search the current market.', function () {
        });
    }

    if ($('.search-text:visible').val() !== undefined &&
        $('.search-text:visible').val().length > 0) {
        searchText = $('.search-text:visible').val();
    } else {
        searchText = searchCriteria["txtParentAgency"].length > 0
            ? searchCriteria["txtParentAgency"]
            : searchCriteria["txtAgencyName"];
    }


    apiParameters = {
        "inApiToken": apiToken,
        "inParentAgencyName": searchText,
        "inShowDisabled": false
    }
    api = "/api/ParentAgency/GetParentAgencyAuditList";

    columns = [];

    //change these to parent agency
    columns.push({
        "title": "Parent Agency Name",
        "mData": "parentAgencyName",
        "orderable": true
    });

    columns.push({
        "title": "ParentAgencyID",
        "visible": false,
        "mData": "parentAgencyId",
        "orderable": false
    });

    columns.push({
        "mRender": function (data, type, row) {
            return '<a href="#" onclick="assignParentAgencyAuditByLink(' + row.parentAgencyId + ')">Assign Parent Agency</a>';
        },
        "orderable": false,
        "searchable": false,
        "className": "text-align-right"
    });


    //need to document this more
    $("#previousPage").html(searchText.length == 0 ? "Parent Agency" : searchText);
}

function buildPersonnelSearch(searchCriteria) {

    if ($('.search-text:visible').val().length > 0) {
        searchText = $('.search-text:visible').val();
    }
    else {
        if (searchCriteria["hidPersonnel"] !== undefined) {
            searchText = searchCriteria["hidPersonnel"].length > 0 ? searchCriteria["hidPersonnel"] : "";
        } else if (searchCriteria["txtPersonnel"] !== undefined) {
            searchText = searchCriteria["txtPersonnel"].length > 0 ? searchCriteria["txtPersonnel"] : "";
        } else {
            searchText = "";
        }

    }

    var ownerId = -1;

    if ($('#ddlOwner').val() !== null && $('#ddlOwner').val().length > 0)
    {
        ownerId = $('#ddlOwner').val();
    } else {
        if (searchCriteria["ddlOwner"] !== undefined)
        {
            ownerId = searchCriteria["ddlOwner"] == "" || searchCriteria["ddlOwner"] == "-1" ? -1 : searchCriteria["ddlOwner"];
        }
    }

    //setup the parameters for the API

    apiParameters = {
        "inApiToken": apiToken,
        "inLastName": searchText,
        "inOwnerId": ownerId > 0 ? ownerId : null
    }
    api = "/api/Personnel/GetPersonnelListLastName";

    columns = [];

    columns.push({
        "title": "Name",
        "visible": true,
        "mData": "name",
        "orderable": false
    });

    columns.push({
        "title": "Email",
        "visible": true,
        "mData": "emailAddress",
        "orderable": false
    });

    columns.push({
        "title": "Personnel Id",
        "visible": true,
        "mData": "personnelId",
        "orderable": false
    });

    columns.push({
        "title": "Owner Name",
        "visible": true,
        "mData": "ownerName",
        "orderable": false
    });

    columns.push({
        "mRender": function (data, type, row) {
            return '<a href="#" onclick="linkPersonnelByLink(' + row.personnelId + ')">Select</a>';
        },
        "orderable": false,
        "searchable": false,
        "className": "text-align-right"
    });


    $("#previousPage").html(searchText.length == 0 ? "Person" : searchText);

}

function buildLinkAdvertiserSearch(searchCriteria) {
    //if ($('.search-all-markets:visible').is(':checked')) {
    //    bootbox.alert('Searching all markets functionality is under development but will still search the current market.', function () {
    //    });
    //}

    if ($('.search-text:visible').val().length > 0) {
        searchText = $('.search-text:visible').val();
    } else {
        searchText = searchCriteria["linkedAdvertiserName"].length > 0 ? searchCriteria["linkedAdvertiserName"].substring(0, gMinimumSearchCharacters) : searchCriteria["advertiserName"].substring(0, gMinimumSearchCharacters);
    }

    if ($('.search-text:visible').val().length == 0 && gSilentSearch == true) {
        $('.search-text:visible').val(searchText);
    }

    //setup the parameters for the API

    apiParameters = {
        "inApiToken": apiToken,
        "inMarketId": $('.search-all-markets:visible').is(':checked') ? "-1" : searchCriteria["marketID"],
        "inAdvertiserName": searchText,
        "inShowDisabled": false
    }
    api = "/api/Advertiser/GetAdvertiserList";

    //setup the columns to be used in the datatable
    //title sets the column name
    //visible determines if the column will show in the datatable or not
    //data links the column to the data that comes back in the results
    //orderable determines if the column can be sorted or not
    //see https://datatables.net/reference/option/columns
    columns = [];

    columns.push({
        "title": "AdvertiserID",
        "visible": false,
        "mData": "advertiserId",
        "orderable": false
    });

    columns.push({
        "title": "Advertiser",
        "mData": "advertiser",
        "orderable": true
    });

    columns.push({
        "title": "MarketID",
        "visible": false,
        "mData": "marketId",
        "orderable": false
    });

    columns.push({
        "title": "Market",
        "mData": "market",
        "orderable": true
    });

    columns.push({
        "title": "Industry",
        "data": "industry",
        "orderable": true
    })

    columns.push({
        "title": "Sub Industry",
        "data": "subIndustry",
        "orderable": true
    })

    columns.push({
        "mRender": function (data, type, row) {
            var str = '<a href="#" onclick="EditMarketAdvertiser(' + row.advertiserId + ')">Edit</a>&nbsp;&nbsp;';
            str = str + '<a href="#" onclick="linkNewAdvertiserByLink(' + row.advertiserId + ',' + row.marketId + ')">Link Advertiser</a>';
            return str;
        },
        "orderable": false,
        "searchable": false,
        "className": "text-align-right"
    });

    $("#previousPage").html(searchCriteria["advertiserName"]);

}
function EditMarketAdvertiser(id) {

    var marketUrl = '/admin/advertiser/advertiser.html?AdvertiserID=' + id;

    if (gMarketId != null && gMarketId > 0)
    {
        marketUrl = marketUrl + '&MarketId=' + gMarketId;
    }

    if (id == 0 && gNumericMediaTypeId != null && gNumericMediaTypeId > 0)
    {
        marketUrl = marketUrl + '&NumericMediaTypeId=' + gNumericMediaTypeId;
    }

    window.location = marketUrl;
}
function MatchingAdvertisers() {
    window.location = '/products/xry/revenue/xrymatch.html?MatchPage=adv&MenuItem=false';
}
function EditMarketAgency(id) {

    var agencyUrl = '/admin/agency/agency.html?AgencyID=' + id;

    if (gMarketId != null && gMarketId > 0)
    {
        agencyUrl = agencyUrl + '&MarketId=' + gMarketId;
    }

    window.location = agencyUrl;
}
function MatchingAgencies() {
    window.location = '/products/xry/revenue/xrymatch.html?MatchPage=agy&MenuItem=false';
}

function buildAdvertiserAuditSearch(searchCriteria) {
    $(".search-check-box").hide();

    //this should be the update advertiser name
    if ($('.search-text:visible').val().length > 0) {
        searchText = $('.search-text:visible').val();
    } else {
        searchText = searchCriteria["txtUpdateMarketAdvertiser"];
    }

    apiParameters = {
        "inApiToken": apiToken,
        "inMarketId": searchCriteria["ddlMarket"],
        "inAdvertiserName": searchText,
        "inShowDisabled": false
    }
    api = "/api/Advertiser/GetAdvertiserList";

    //setup the columns to be used in the datatable
    //title sets the column name
    //visible determines if the column will show in the datatable or not
    //data links the column to the data that comes back in the results
    //orderable determines if the column can be sorted or not
    //see https://datatables.net/reference/option/columns
    columns = [];

    columns.push({
        "title": "AdvertiserID",
        "visible": false,
        "mData": "advertiserId",
        "orderable": false
    });

    columns.push({
        "title": "Advertiser",
        "mData": "advertiser",
        "orderable": true
    });

    columns.push({
        "title": "MarketID",
        "visible": false,
        "mData": "marketId",
        "orderable": false
    });

    columns.push({
        "title": "Market",
        "mData": "market",
        "orderable": true
    });

    columns.push({
        "title": "Industry",
        "data": "industry",
        "orderable": true
    });

    columns.push({
        "title": "Sub Industry",
        "data": "subIndustry",
        "orderable": true
    });

    columns.push({
        "mRender": function (data, type, row) {
            var str = '<a href="#" onclick="EditMarketAdvertiser(' + row.advertiserId + ')">Edit</a>&nbsp;&nbsp;';
            str = str + '<a href="#" onclick="linkBulkAdvertiserByLink(' + row.advertiserId + ',' + row.marketId + ')">Link Advertiser</a>';
            return str;
        },
        "orderable": false,
        "searchable": false,
        "className": "text-align-right"
    });

    $("#previousPage").html(searchCriteria["txtUpdateMarketAdvertiser"]);

}

function linkBulkAdvertiserByLink(advertiserId, marketId) {
    if (marketId != searchCriteria["ddlMarket"]) {
        var errorMessage = "You cannot link to an advertiser from another market.";
        bootbox.alert(errorMessage, function () { });
        return;
    }

    var rowId = $('#dtSearchResults').dataTable()
        .fnFindCellRowIndexes(advertiserId, 0);

    var table = $('#dtSearchResults').DataTable();
    table.row(rowId).select();

    linkBulkAdvertiser();
}

function linkBulkAdvertiser() {
    var searchTable = $('#dtSearchResults').DataTable();
    if (searchTable.rows('.selected').any() === false) {
        bootbox.alert('Select an advertiser to assign.', function () {
        });
        return;
    }

    var rowData = searchTable.rows('.selected').data();
    var searchResults = {};

    for (var key in searchCriteria) {
        searchResults[key] = searchCriteria[key];
    }

    searchResults["txtUpdateMarketAdvertiserId"] = rowData[0].advertiserId;
    searchResults["txtUpdateMarketAdvertiser"] = rowData[0].advertiser;

    setLocalStorage("gSearchResults", JSON.stringify(searchResults));

    //sends user back to page that called the search page
    var searchPage = searchCriteria["searchPage"]["href"];
    window.location = searchPage;
}

function buildAgencyAuditSearch(searchCriteria) {
    $(".search-check-box").hide();

    //this should be the update agency name
    if ($('.search-text:visible').val().length > 0) {
        searchText = $('.search-text:visible').val();
    } else {
        searchText = searchCriteria["txtUpdateMarketAgency"];
    }

    apiParameters = {
        "inApiToken": apiToken,
        "inMarketId": searchCriteria["ddlMarket"],
        "inAgencyName": searchText,
        "inShowDisabled": false
    }
    api = "/api/Agency/GetAgencyList";

    columns = [];

    columns.push({
        "sTitle": "AgencyID",
        "bVisible": false,
        "mData": "agencyId",
        "bSortable": false
    });

    columns.push({
        "sTitle": "Agency Name",
        "mData": "agencyName",
        "bSortable": true
    });

    columns.push({
        "sTitle": "MarketID",
        "bVisible": false,
        "mData": "marketId",
        "bSortable": false
    });

    columns.push({
        "sTitle": "Market Name",
        "mData": "marketName",
        "bSortable": true
    });

    columns.push({
        "mRender": function (data, type, row) {
            var str = '<a href="#" onclick="EditMarketAgency(' + row.agencyId + ')">Edit</a>&nbsp;&nbsp;';
            str = str + '<a href="#" onclick="linkBulkAgencyByLink(' + row.agencyId + ',' + row.marketId + ')">Link Agency</a>';
            return str;
        },
        "bSortable": false,
        "searchable": false,
        "className": "text-align-right"
    });


    //may need to add account type to the api to be returned
    $("#previousPage").html(searchCriteria["txtUpdateMarketAgency"]);


}

function linkBulkAgencyByLink(agencyId, marketId) {
    if (marketId != searchCriteria["ddlMarket"]) {
        var errorMessage = "You cannot link to an agency from another market.";
        bootbox.alert(errorMessage, function () { });
        return;
    }

    var rowId = $('#dtSearchResults').dataTable()
        .fnFindCellRowIndexes(agencyId, 0);

    var table = $('#dtSearchResults').DataTable();
    table.row(rowId).select();

    linkBulkAgency();
}

function linkBulkAgency() {
    //leaving this code here in case need to add the link button back in
    var searchTable = $('#dtSearchResults').DataTable();
    if (searchTable.rows('.selected').any() === false) {
        bootbox.alert('Select an agency to link.', function () {
        });
        return;
    }

    var rowData = searchTable.rows('.selected').data();
    var searchResults = {};

    //loops through the search criteria that was initially sent 
    //to the search page. This reloads it into a json object and
    //loads it into local storage.
    //the page that the window location is sent to will load this data from local storage.
    for (var key in searchCriteria) {
        searchResults[key] = searchCriteria[key];
    }

    searchResults['txtUpdateMarketAgencyId'] = rowData[0].agencyId;
    searchResults['txtUpdateMarketAgency'] = rowData[0].agencyName;

    setLocalStorage("gSearchResults", JSON.stringify(searchResults));

    //sends user back to page that called the search page
    var searchPage = searchCriteria["searchPage"]["href"];
    window.location = searchPage;
}

function getOwnerList() {
    var url = ServicePrefix + '/api/Owner/GetOwnerListUnfiltered';

    var settings = {
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify({
            "inApiToken": getLocalStorage("APIToken"),
            "inOwnerName": "",
            "inActiveOnly": "1",
            "inAddDetails": "0"
        }),
        processData: false,
        success: function (data, textStatus, jQxhr) {
            getOwnerListSuccess(data, textStatus, jQxhr);
        },
        error: function (jQxhr, textStatus, errorThrown) {
            genericAjaxError(jQxhr, textStatus, errorThrown);
        }
    };

    $.ajax(url, settings);
}

function getOwnerListSuccess(data, textStauts, jQxhr) {

    if (data.response.status != "SUCCESS") {
        MKAErrorMessageRtn(data.response.errorMessage[0]);
    }

    else {

        var str = '';

        str = "<option value='-1'> -- Select an Owner </option>";

        $.each(data.report.rows, function (index) {
            str = str + "<option value='" + data.report.rows[index].OwnerID + "'>" + data.report.rows[index].OwnerName + "</option>";
        });

        $("#ddlOwner").append(str);

        convertToChosenSelect("ddlOwner", gChosenParams.allowSearchContains, gChosenParams.allowSplitWordSearch);

    }

}

function createNewMarketAdvertiserFromLink(id, advertiserName, industryId, subIndustryId)
{
    var marketUrl = '/admin/advertiser/advertiser.html?AdvertiserID=0' + id;

    if (gMarketId != null && gMarketId > 0) {
        marketUrl = marketUrl + '&MarketId=' + gMarketId;
    }

    if (id == 0 && gNumericMediaTypeId != null && gNumericMediaTypeId > 0) {
        marketUrl = marketUrl + '&NumericMediaTypeId=' + gNumericMediaTypeId;
    }

    //add name
    if (advertiserName != null && advertiserName.trim().length > 0)
    {
        marketUrl = marketUrl + '&MarketAdvertiserName=' + encodeURIComponent(advertiserName);
    }
    //add industry
    if (industryId != null && industryId > 0)
    {
        marketUrl = marketUrl + '&IndustryId=' + industryId;
    }
    //add subindustry
    if (subIndustryId != null && subIndustryId > -1)
    {
        marketUrl = marketUrl + '&SubIndustryId=' + subIndustryId;
    }

    window.location = marketUrl;
}

function createNewMarketAgencyFromLink(id, agencyName, accountTypeId)
{

    var agencyUrl = '/admin/agency/agency.html?AgencyID=' + id;

    if (gMarketId != null && gMarketId > 0) {
        agencyUrl = agencyUrl + '&MarketId=' + gMarketId;
    }

    if (agencyName != null && agencyName.trim().length > 0)
    {
        agencyUrl = agencyUrl + '&MarketAgencyName=' + encodeURIComponent(agencyName);
    }

    if (accountTypeId != null && accountTypeId > 0)
    {
        agencyUrl = agencyUrl + '&AccountTypeId=' + accountTypeId;
    }

    window.location = agencyUrl;

}