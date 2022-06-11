function getPartnerAssignmentsByMarketForViewing(inMarketId) {
    //figure out passing in the market on the other pages
    //display table
    //just have ok button to close
    var url = ServicePrefix + '/api/Partner/GetProductPartnerListByMarket';
    url += '?inApiToken=' + getLocalStorage("APIToken");
    url += '&inMarketId=' + inMarketId;

    $.ajax({
        url: url,
        dataType: 'json',
        type: 'get',
        contentType: 'application/json',
        processData: false,
        success: function (data, textStatus, jQxhr) {
            getPartnerAssignmentsByMarketForViewingSuccess(data, textStatus, jQxhr);
        },
        error: function (jqXhr, textStatus, errorThrown) {
            genericAjaxError(jqXhr, textStatus, errorThrown);
        }
    });

}

function getPartnerAssignmentsByMarketForViewingSuccess(data, textStatus, jQxhr) {
    if (data.response.status != "SUCCESS") {
        GeneralErrorMessageRtn(data.response.errorMessage[0]);
    } else {
        //var sMsg = "";
        //build the table tags
        var table = '<div style="display: flex; justify-content: center;"><table style="align-self: center; width: 90%;" class="table-striped" id="tblParticipants"> ';
        // add headers here
        table += '<tr style="border-bottom: 1px solid black;"><th>Product</th><th>Partner</th><th>Product Status</th></tr> ';
        $.each(data.report.rows, function (index) {
            var obj = data.report.rows[index];
            //build the table rows
            var tr = '<tr> ';
            tr += '<td class="col-md-5 text-align-left"> ';
            tr += '<label> ' + obj.Product + '</label> </td> ';
            tr += '<td class="col-md-4 text-align-left"> ';
            tr += '<label>' + obj.Partner + '</label> </td> ';
            tr += '<td class="col-md-3 text-align-left"> ';
            tr += '<label> ' + obj["Product Status"] + '</label> </td> ';
            tr += '</tr> ';
            table += tr;
        });
        table += "</table></div>";
        //build the table end tags
        //build bootbox message
        var dialog = bootbox.dialog({
            title: "Product Partner Assignments",
            message: table,
            size: 'large',
            buttons: {
                yes: {
                    label: "Ok",
                    className: 'btn-primary',
                    callback: function () {
                        return;
                    }
                }
            },
            onEscape: function () {
                dialog.modal("hide");
                return;
            }
        });
    }
}

function getPartnersListForUpdating(marketId) {

    var url = ServicePrefix + '/api/Partner/GetPartnerList';

    var settings = {
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify({
            "inApiToken": getLocalStorage("APIToken")
        }),
        processData: false,
        success: function (data, textStatus, jQxhr) {
            getPartnersListSuccess(data, textStatus, jQxhr, marketId);
        },
        error: function (jQxhr, textStatus, errorThrown) {
            genericAjaxError(jQxhr, textStatus, errorThrown);
        }
    };

    $.ajax(url, settings);
}

function getPartnersListSuccess(data, textStatus, jQxhr, marketId) {

    if (data.response.status != "SUCCESS") {
        GeneralErrorMessageRtn(data.response.errorMessage[0]);

    } else {
        var str = '<div id="rwErrorMessage" class="row" style="display: none;"><div class="col-md-12 text-align-center" style="color: red;">&nbsp;*&nbsp;<span id="spErrorMessage"></span></div></div>';
        str = str + '<div class="row" style="margin-bottom: 10px;"><div class="col-md-3">&nbsp;</div>';
        str = str + '<div class="col-md-2"><label for="ddlUpdatePartnerList">Partners</label></div><div class="col-md-7 text-align-left">';
        str = str + '<select id="ddlUpdatePartnerList" class="mkaRequired field-width-325" value="0" errorMessage="You must select a Partner.">';

        str = str + '<option value="-1">-- Select a Partner</option>';
        $.each(data.report.rows, function (index) {
            str = str + '<option value="' + data.report.rows[index].partnerId + '">' + data.report.rows[index].partnerName + '</option>';
        });

        str = str + '</select></div></div>';

        getPartnerAssignmentsByMarketForUpdating(marketId, str);
    }
}

function getPartnerAssignmentsByMarketForUpdating(inMarketId, partnerList) {
    //get partner list
    //create dropdown
    //get assignment list
    //create table with checkboxed
    //based on update flag display
    //display update button and checkboxes in the table
    //have label for update message
    //figure out passing in the market on the other pages
    //display table
    //just have ok button to close
    var url = ServicePrefix + '/api/Partner/GetProductPartnerListByMarket';
    url += '?inApiToken=' + getLocalStorage("APIToken");
    url += '&inMarketId=' + inMarketId;

    $.ajax({
        url: url,
        dataType: 'json',
        type: 'get',
        contentType: 'application/json',
        processData: false,
        success: function (data, textStatus, jQxhr) {
            getPartnerAssignmentsByMarketForUpdatingSuccess(data, textStatus, jQxhr, inMarketId, partnerList);
        },
        error: function (jqXhr, textStatus, errorThrown) {
            genericAjaxError(jqXhr, textStatus, errorThrown);
        }
    });

}

function getPartnerAssignmentsByMarketForUpdatingSuccess(data, textStatus, jQxhr, inMarketId, partnerList) {
    if (data.response.status != "SUCCESS") {
        GeneralErrorMessageRtn(data.response.errorMessage[0]);
    } else {

        //build the table tags
        var table = partnerList + '<div style="display: flex; justify-content: center;"><table style="align-self: center; width: 90%;" class="table-striped" id="tblProductPartners"> ';
        // add headers here
        table += '<tr style="border-bottom: 1px solid black;">';
        table += '<th class="text-align-center"><input type="checkbox" id="chkUpdatePartnerSelectAll" onclick="updatePartnerSelectAllChecked(this);" style="margin-top: 10px;"></th>';
        table += '<th>Product</th><th>Partner</th><th>Product Status</th>';
        table += '</tr> ';

        $.each(data.report.rows, function (index) {
            var obj = data.report.rows[index];
            //build the table rows
            var tr = '<tr> ';
            tr += '<td class="col-md-2 text-align-center"> ';
            tr += obj["Active Flag"] == true ? '<input type="checkbox" id="updPartner' + obj.productId + '" name="productsPartner" value="' + obj.productId + '" onclick="checkOnAllPartnerProductBoxes();"> ' : '&#8212;';
            tr += '</td>';
            tr += '<td class="col-md-5 text-align-left"> ';
            tr += '<label> ' + obj.Product + '</label> </td> ';
            tr += '<td class="col-md-3 text-align-left"> ';
            tr += '<label>' + obj.Partner + '</label> </td> ';
            tr += '<td class="col-md-2 text-align-left"> ';
            tr += '<label> ' + obj["Product Status"] + '</label> </td> ';
            tr += '</tr> ';
            table += tr;
        });
        table += "</table></div>";
        
        var dialog = bootbox.dialog({
            title: "Product Partner Assignments",
            message: table,
            size: 'large',
            buttons: {
                yes: {
                    label: "Update",
                    className: 'btn-primary',
                    callback: function () {

                        $("#rwErrorMessage").hide();
                        $("#spErrorMessage").text("");

                        var productsSelected = [];
                        $.each($('input[name=productsPartner]'), function () {
                            if ($(this).is(':checked')) {
                                productsSelected.push($(this).val());
                            }
                        });

                        //add validation
                        //add message area for errors
                        //keep message box from closing if validation errors
                        //if validation fails return false
                        if (productsSelected.length == 0) {
                            $("#spErrorMessage").text("No products selected. Please select a product to update.");
                            $("#rwErrorMessage").show();
                            return false;
                        }

                        if ($("#ddlUpdatePartnerList").val() == -1) {
                            $("#spErrorMessage").text("No partner was selected. Please select a partner to assign.");
                            $("#rwErrorMessage").show();
                            return false;
                        }

                        var partnerId = $("#ddlUpdatePartnerList").val();
                        updatePartnerAssignmentsByMarket(productsSelected, inMarketId, partnerId);

                        return true;
                    }
                },
                cancel: {
                    label: "Cancel",
                    className: '',
                    callback: function () {
                        return;
                    }
                }
            },
            onEscape: function () {
                dialog.modal("hide");
                return;
            }
        });

        dialog.on('shown.bs.modal', function (e) {
            convertToChosenSelect("ddlUpdatePartnerList", gChosenParams.allowSearchContains, gChosenParams.allowSplitWordSearch);

            if ($("#ddlPartnerList").length > 0)
            {
                $("#ddlUpdatePartnerList").val($("#ddlPartnerList").val());
            }

        });
    }
}

function updatePartnerAssignmentsByMarket(updateProducts, marketId, partnerId) {

    var url = ServicePrefix + '/api/Partner/UpdatePartnerMarketProduct';

    var settings = {
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify({
            "inApiToken": getLocalStorage("APIToken"),
            "inMarketId": marketId,
            "inPartnerId": partnerId,
            "inProducts": updateProducts
        }),
        processData: false,
        success: function (data, textStatus, jQxhr) {
            updatePartnerAssignmentsByMarketSuccess(data, textStatus, jQxhr);
        },
        error: function (jqXhr, textStatus, errorThrown) {
            genericAjaxError(jqXhr, textStatus, errorThrown);
        }
    };

    $.ajax(url, settings);

}

function updatePartnerAssignmentsByMarketSuccess(data, textStatus, jQxhr) {

    if (data.response.status == "BLOCK") {
        bootbox.alert(data.response.errorMessage[0], function () { });
        return;
    }

    if (data.response.status != "SUCCESS") {
        GeneralErrorMessageRtn(data.response.errorMessage[0]);
        return;
    }

    bootbox.alert("The assigning of a partner to product(s) was successful.", function ()
    {
        var sLocation = location.href;
        window.location = sLocation.replace("&ProductNew=1", "");
    });

}

function updatePartnerSelectAllChecked(element) {
    if ($(element).is(':checked')) {
        $('input[name=productsPartner]').each(function () {
            this.checked = true;
        });
    } else {
        $('input[name=productsPartner]').each(function () {
            this.checked = false;
        });
    }
}

function checkOnAllPartnerProductBoxes() {

    if ($('input[name=productsPartner]:checked').length == $('input[name=productsPartner]').length) {
        $("#chkUpdatePartnerSelectAll").prop("checked", true);
    } else {
        $("#chkUpdatePartnerSelectAll").prop("checked", false);
    }
}
