function getSearchData(searchCriteria) {
    //get session object
    //switch statement on token
    //make api call can return the data
    //turn into json that the datatable can understand
    var api = "";
    var apiParameters = "";
    var apiToken = getLocalStorage("APIToken");
    var searchText = "";
    var columns = [];

    switch (searchCriteria["searchToken"].toUpperCase()) {
        case "STATIONMARKET":
            if ($('.search-all-markets:visible').is(':checked')) {
                bootbox.alert('Searching all markets functionality is under development but will still search the current market.', function () {
                });
            }

            if ($('.search-text:visible').val().length > 0) {
                searchText = $('.search-text:visible').val();
            } else {
                searchText = searchCriteria["marketAdvertiserName"].length > 0 ? searchCriteria["marketAdvertiserName"] : searchCriteria["advertiserName"];
            }

            apiParameters = {
                "inApiToken": apiToken,
                "inMarketId": searchCriteria["marketID"],
                "inAdvertiserName": searchText,
                "inShowDisabled": false
            }
            api = "/api/Advertiser/GetAdvertiserList";

            columns.push({
                "sTitle": "AdvertiserID",
                "bVisible": false,
                "mData": "advertiserId",
                "bSortable": false
            });

            columns.push({
                "sTitle": "Advertiser Name",
                "mData": "advertiserName",
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
                "mRender": function(data, type, row) {
                    return '<a href="#" onclick="linkAdvertiserByLink(' + row.advertiserId +')">Link Advertiser</a>';
                },
                "bSortable": false,
                "searchable": false,
                "className": "text-align-right"
            });

            $("#previousPage").html(searchCriteria["advertiserName"]);
            break;
        case "STATIONAGENCY":
            if ($('.search-all-markets:visible').is(':checked')) {
                bootbox.alert('Searching all markets functionality is under development but will still search the current market.', function () {
                });
            }

            if ($('.search-text:visible').val().length > 0) {
                searchText = $('.search-text:visible').val();
            } else {
                searchText = searchCriteria["marketAgencyName"].length > 0 ? searchCriteria["marketAgencyName"] : searchCriteria["agencyName"];
            }

            apiParameters = {
                "inApiToken": apiToken,
                "inMarketId": searchCriteria["marketID"],
                "inAgencyName": searchText,
                "inShowDisabled": false
            }
            api = "/api/Agency/GetAgencyList";

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
                    return '<a href="#" onclick="linkAgencyByLink(' + row.agencyId + ')">Link Agency</a>';
                },
                "bSortable": false,
                "searchable": false,
                "className": "text-align-right"
            });


            //may need to add account type to the api to be returned
            $("#previousPage").html(searchCriteria["agencyName"]);
            break;
        default:
    }

    //make api call and return data
    $.ajax({
        url: ServicePrefix + api,
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify(apiParameters),
        processData: false,
        success: function (data, textStatus, jQxhr) {
            if (data.response.status.toUpperCase() === "SUCCESS") {
                //loadSearchResults(data, keepColumns, hideColumns, columns);
                loadSearchResults(data, columns);
            }
        },
        error: function (jqXhr, textStatus, errorThrown) {
            genericAjaxError(jqXhr, textStatus, errorThrown);
        }
    });
}

//function loadSearchResults(data, keepColumns, hideColumns, columns) {
function loadSearchResults(data, columns) {

    var results = data["report"]["rows"];
    
    var searchTable;

    if ($.fn.DataTable.isDataTable('#dtSearchResults')) {
        searchTable = $('#dtSearchResults').DataTable();
        searchTable.destroy();
    }

    searchTable = $("#dtSearchResults").DataTable({
        "aaData": results,
        "aoColumns": columns,
        "select": true,
        language: {
            search: "Filter Results:"
        }
    });


}

function tableColumn(fieldTitle, visible) {
    this.mDataProp = fieldTitle;
    this.sTitle = fieldTitle;
    this.bVisible = visible;
}

function cancelSearch() {

    //console.log(searchCriteria);

    var searchResults = {};

    for (var key in searchCriteria) {
        searchResults[key] = searchCriteria[key];
    }

    setLocalStorage("gSearchResults", JSON.stringify(searchResults));

    var searchPage = searchCriteria["searchPage"]["href"];
    window.location = searchPage;

}

function linkAdvertiserByLink(advertiserId) {

    var rowId = $('#dtSearchResults').dataTable()
        .fnFindCellRowIndexes(advertiserId, 0);

    var table = $('#dtSearchResults').DataTable();
    table.row(rowId).select();
    

    //searchCriteria is the global variable version
    linkAdvertiser();
}

function linkAdvertiser() {
    //will need to load local storage
    //will probably implement history -1
    //check if line is selected if not error

    var searchTable = $('#dtSearchResults').DataTable();
    if (searchTable.rows('.selected').any() === false) {
        bootbox.alert('Select an advertiser to link.', function () {
        });
        return;
    }

    var rowData = searchTable.rows('.selected').data();
    var searchResults = {};

    for (var key in searchCriteria) {
        searchResults[key] = searchCriteria[key];
    }

    searchResults['marketAdvertiserId'] = rowData[0].advertiserId;
    searchResults['marketAdvertiserName'] = rowData[0].advertiserName;

    setLocalStorage("gSearchResults", JSON.stringify(searchResults));

    var searchPage = searchCriteria["searchPage"]["href"];
    window.location = searchPage;

}

function fixAdvertiser() {
    bootbox.alert('This functionality is still under development.', function () {
    });
}

function linkAgencyByLink(agencyId) {

    var rowId = $('#dtSearchResults').dataTable()
        .fnFindCellRowIndexes(agencyId, 0);

    var table = $('#dtSearchResults').DataTable();
    table.row(rowId).select();


    //searchCriteria is the global variable version
    linkAgency();
}

function linkAgency() {
    //will need to load local storage
    //will probably implement history -1
    //check if line is selected if not error

    var searchTable = $('#dtSearchResults').DataTable();
    if (searchTable.rows('.selected').any() === false) {
        bootbox.alert('Select an agency to link.', function () {
        });
        return;
    }

    var rowData = searchTable.rows('.selected').data();
    var searchResults = {};

    for (var key in searchCriteria) {
        searchResults[key] = searchCriteria[key];
    }

    searchResults['marketAgencyId'] = rowData[0].agencyId;
    searchResults['marketAgencyName'] = rowData[0].agencyName;

    setLocalStorage("gSearchResults", JSON.stringify(searchResults));

    var searchPage = searchCriteria["searchPage"]["href"];
    window.location = searchPage;

}

function fixAgency() {
    bootbox.alert('This functionality is still under development.', function () {
    });
}