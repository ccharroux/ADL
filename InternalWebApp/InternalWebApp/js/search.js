function getSearchData(searchCriteria) {
    //get session object
    //switch statement on token
    //make api call can return the data
    //turn into json that the datatable can understand
    var api = "";
    var apiParameters = "";
    var apiToken = getLocalStorage("APIToken");
    var keepColumns = [];
    var hideColumns = [];
    var searchText = ";"
    //console.log(searchCriteria["searchToken"]);

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

            hideColumns.push("advertiserId");
            hideColumns.push("marketId");

            keepColumns.push("advertiserId");
            keepColumns.push("advertiserName");
            keepColumns.push("marketId");
            keepColumns.push("marketName");
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

            //hide columns
            hideColumns.push("agencyId");
            hideColumns.push("marketId");

            //keep columns
            keepColumns.push("agencyId");
            keepColumns.push("agencyName");
            keepColumns.push("marketId");
            keepColumns.push("marketName");
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
                loadSearchResults(data, keepColumns, hideColumns);
            }
        },
        error: function (jqXhr, textStatus, errorThrown) {
            genericAjaxError(jqXhr, textStatus, errorThrown);
        }
    });
}

function loadSearchResults(data, keepColumns, hideColumns) {

    var results = data["report"]["rows"];
    var cols = [];

    if (results.length > 0) {
        var columnsIn = results[0];
        for (var key in columnsIn) {

            if (keepColumns.indexOf(key) !== -1) {
                var visible = false;

                if (hideColumns.indexOf(key) !== -1) {
                    visible = false;
                } else {
                    visible = true;
                }

                var col = new tableColumn(key, visible);
                cols.push(col);
            }
        }
    } else {
        for (var i = 0; i < keepColumns.length; i++) {
            var visible = false;

            if (hideColumns.indexOf(keepColumns[i]) !== -1) {
                visible = false;
            } else {
                visible = true;
            }

            var col = new tableColumn(keepColumns[i], visible);
            cols.push(col);
        }
    }

    var searchTable;

    if ($.fn.DataTable.isDataTable('#dtSearchResults')) {
        searchTable = $('#dtSearchResults').DataTable();
        searchTable.destroy();
    }

    searchTable = $("#dtSearchResults").DataTable({
        "aaData": results,
        "aoColumns": cols,
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

function cancelSearch(searchCriteria) {

    var searchResults = {};

    for (var key in searchCriteria) {
        searchResults[key] = searchCriteria[key];
    }

    setLocalStorage("gSearchResults", JSON.stringify(searchResults));

    var searchPage = searchCriteria["searchPage"]["href"];
    window.location = searchPage;

}

function linkAdvertiser(searchCriteria) {
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

    //console.log(searchResults);
    //console.log(rowData);

    searchResults['marketAdvertiserId'] = rowData[0].advertiserId;
    searchResults['marketAdvertiserName'] = rowData[0].advertiserName;

    //console.log(searchResults);

    setLocalStorage("gSearchResults", JSON.stringify(searchResults));

    var searchPage = searchCriteria["searchPage"]["href"];
    window.location = searchPage;

}

function fixAdvertiser() {
    bootbox.alert('This functionality is still under development.', function () {
    });
}

function linkAgency(searchCriteria) {
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

    //console.log(searchResults);
    //console.log(rowData);

    searchResults['marketAgencyId'] = rowData[0].agencyId;
    searchResults['marketAgencyName'] = rowData[0].agencyName;

    //console.log(searchResults);

    setLocalStorage("gSearchResults", JSON.stringify(searchResults));

    var searchPage = searchCriteria["searchPage"]["href"];
    window.location = searchPage;

}

function fixAgency() {
    bootbox.alert('This functionality is still under development.', function () {
    });
}