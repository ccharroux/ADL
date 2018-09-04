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

    console.log(searchCriteria);

    switch (searchCriteria["searchToken"].toUpperCase()) {
        case "STATIONMARKET":
        case "MEDIAMARKET":
            if ($('.search-all-markets:visible').is(':checked')) {
                bootbox.alert('Searching all markets functionality is under development but will still search the current market.', function () {
                });
            }

            if ($('.search-text:visible').val().length > 0) {
                searchText = $('.search-text:visible').val();
            } else {
                searchText = searchCriteria["marketAdvertiserName"].length > 0 ? searchCriteria["marketAdvertiserName"] : searchCriteria["advertiserName"];
            }

            //setup the parameters for the API
            apiParameters = {
                "inApiToken": apiToken,
                "inMarketId": searchCriteria["marketID"],
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
            columns.push({
                "title": "AdvertiserID",
                "visible": false,
                "data": "advertiserId",
                "orderable": false
            });

            columns.push({
                "title": "Advertiser Name",
                "data": "advertiserName",
                "orderable": true
            });

            columns.push({
                "title": "MarketID",
                "visible": false,
                "data": "marketId",
                "orderable": false
            });

            columns.push({
                "title": "Market Name",
                "data": "marketName",
                "orderable": true
            });

            columns.push({
                "mRender": function(data, type, row) {
                    return '<a href="#" onclick="linkAdvertiserByLink(' + row.advertiserId +')">Link Advertiser</a>';
                },
                "orderable": false,
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
    //this occurs regardless of the token
    //the url is based on what was assigned in the previous switch statement
    //data is assigned the apiparameters also created in the switch statement
    //when call is successful it will call loadSearchResults
    $.ajax({
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

    //sends user back to page that called the search page
    var searchPage = searchCriteria["searchPage"]["href"];
    window.location = searchPage;

}

function linkAdvertiserByLink(advertiserId) {

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
    searchResults['marketAdvertiserName'] = rowData[0].advertiserName;

    setLocalStorage("gSearchResults", JSON.stringify(searchResults));

    //sends user back to page that called the search page
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

    searchResults['marketAgencyId'] = rowData[0].agencyId;
    searchResults['marketAgencyName'] = rowData[0].agencyName;

    setLocalStorage("gSearchResults", JSON.stringify(searchResults));

    //sends user back to page that called the search page
    var searchPage = searchCriteria["searchPage"]["href"];
    window.location = searchPage;

}

function fixAgency() {
    bootbox.alert('This functionality is still under development.', function () {
    });
}