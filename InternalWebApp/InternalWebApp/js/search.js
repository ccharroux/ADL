function getSearchData(searchCriteria) {
    //get session object
    //switch statement on token
    //make api call can return the data
    //turn into json that the datatable can understand
    var api = "";
    var apiParameters="";
    var apiToken = getLocalStorage("APIToken");


    switch (searchCriteria["searchToken"].toUpperCase()) {
        case "STATIONMARKET":
            console.log("search js: " + searchCriteria["searchToken"]);
            //inApiToken
            //inMarketId
            //inAdvertiserName
            //inShowDisabled
            apiParameters = {
                "inApiToken": apiToken,
                "inMarketId": searchCriteria["marketID"],
                "inAdvertiserName": searchCriteria["advertisterName"],
                "inShowDisabled": false
            }
            api = "/api/Advertiser/GetAdvertiserList";
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
                var jsonData = JSON.stringify(data.report.rows);
                loadSearchResults(jsonData);
            }
        },
        error: function (jqXhr, textStatus, errorThrown) {
            genericAjaxError(jqXhr, textStatus, errorThrown);
        }
    });
}

function loadSearchResults(data) {
    console.log(data);
}