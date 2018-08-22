function getSearchData(searchCriteria) {
    //get session object
    //switch statement on token
    //make api call can return the data
    //turn into json that the datatable can understand
    var api = "";
    var apiParameters="";
    var apiToken = getLocalStorage("APIToken");
    var keepColumns = [];
    var hideColumns = [];

    switch (searchCriteria["searchToken"].toUpperCase()) {
        case "STATIONMARKET":
//            console.log("search js: " + searchCriteria["searchToken"]);
            apiParameters = {
                "inApiToken": apiToken,
                "inMarketId": searchCriteria["marketID"],
                "inAdvertiserName": searchCriteria["advertiserName"],
                "inShowDisabled": false
            }
            api = "/api/Advertiser/GetAdvertiserList";
           
            hideColumns.push("advertiserId");
            hideColumns.push("marketId");

            keepColumns.push("advertiserId");
            keepColumns.push("advertiserName");
            keepColumns.push("marketId");
            keepColumns.push("marketName");
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
                loadSearchResults(data,keepColumns,hideColumns);
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

    //console.log(keepColumns);

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
    }

    //var colJson = JSON.stringify(cols);

    var searchTable = $("#dtSearchResults").DataTable({
        "aaData": results,
        "aoColumns": cols,
        language: {
            //this changes search box label from Search: to Filter Results:
            search: "Filter Results:"
        }
    });


}

function tableColumn(fieldTitle, visible) {
    this.mDataProp = fieldTitle;
    this.sTitle = fieldTitle;
    this.bVisible = visible;
}