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
                loadSearchResults(data);
            }
        },
        error: function (jqXhr, textStatus, errorThrown) {
            genericAjaxError(jqXhr, textStatus, errorThrown);
        }
    });
}

function loadSearchResults(data) {
    console.log(data);

    //build columns json
    //var cols = [
    //{ "mDataProp": "Field1", sTitle: "Date", sType : "date"},
    //{ "mDataProp": "Field2", sTitle: "Number", sType : "numeric"},
    //{ "mDataProp": "Field3" , "sTitle": "FName", sType : "string"},
    //{ "mDataProp": "Field4" ,  sTitle: "LName", sType : "string"}
    //];
    //data.report.rows

    var results = data["report"]["rows"];
    //console.log(results);

    var cols = [];

    if (results.length > 0) {
        var columnsIn = results[0];
        for (var key in columnsIn) {
            //console.log(key); // here is your column name you are looking for
            var col = new tableColumn(key);
            cols.push(col);
        }
    }

   // var colJson = JSON.stringify(cols);

    var searchTable = $("#dtSearchResults").dataTable({
        "aaData": results,
        "aoColumns": cols
    });


}

function tableColumn(fieldTitle) {
    this.mDataProp = fieldTitle;
    this.sTitle = fieldTitle;
}