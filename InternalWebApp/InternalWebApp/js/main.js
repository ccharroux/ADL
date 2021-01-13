const gMediaTypeRadio = "RADIO";
const gMediaTypeTelevision = "TELEVISION";
const gMediaTypeNewspapers = "NEWSPAPERS";
const gMediaTypeOutOfHome = "OUT OF HOME";
const gMediaTypeNetwork = "NETWORK";
const gMediaTypeSurvey = "SURVEY";

const gEmailTokenUsernameChange = "USERNAMECHANGE";
const gEmailTokenPassAndUsernameChange = "PASSWORDANDUSERNAMECHANGE";
const gEmailTokenPasswordChange = "PASSWORDCHANGE";

const gChosenParams = {
    allowSearchContains: true,
    allowSplitWordSearch: false
}
var gShowHeader = true;
var gAJAXError = false;

var release =
{
    "DEV": "N/A",
    "STAGING": "11/13/2020",
    "PRODUCTION": "11/13/2020",
    "DEMO": "11/13/2020"
}
var dateOfCode = new Date();
release["DEV"] = (dateOfCode.getMonth() + 1) + '-' + dateOfCode.getDate() + '-' + dateOfCode.getFullYear();

const gMonths = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

//back button functionality
const gDefaultBackPage = "/admin/login/dashboard.html";
var gExcludeFromBackButton = false;
const gBackButtonArrayLimit = 5;

const gMinimumSearchCharacters = 2;
const gYearsToGoBack = 5;

; (function () {

    'use strict';

    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    var fullHeight = function () {

        if (!isMobile.any()) {
            $('.js-fullheight').css('height', $(window).height());
            $(window).resize(function () {
                $('.js-fullheight').css('height', $(window).height());
            });
        }

    };


    var centerBlock = function () {
        $('.fh5co-section-with-image .fh5co-box').css('margin-top', -($('.fh5co-section-with-image .fh5co-box').outerHeight() / 2));
        $(window).resize(function () {
            $('.fh5co-section-with-image .fh5co-box').css('margin-top', -($('.fh5co-section-with-image .fh5co-box').outerHeight() / 2));
        });
    };

    var responseHeight = function () {
        setTimeout(function () {
            $('.js-responsive > .v-align').css('height', $('.js-responsive > img').height());
        }, 1);

        $(window).resize(function () {
            setTimeout(function () {
                $('.js-responsive > .v-align').css('height', $('.js-responsive > img').height());
            }, 1);
        })
    };


    var mobileMenuOutsideClick = function () {

        $(document).click(function (e) {
            var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {

                if ($('body').hasClass('offcanvas-visible')) {

                    $('body').removeClass('offcanvas-visible');
                    $('.js-fh5co-nav-toggle').removeClass('active');

                }


            }
        });

    };


    var offcanvasMenu = function () {
        $('body').prepend('<div id="fh5co-offcanvas" />');
        $('#fh5co-offcanvas').prepend('<ul id="fh5co-side-links">');
        $('body').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle"><i></i></a>');
        $('#fh5co-offcanvas').append($('#fh5co-header nav').clone());
    };


    var burgerMenu = function () {

        $('body').on('click', '.js-fh5co-nav-toggle', function (event) {
            var $this = $(this);

            $('body').toggleClass('fh5co-overflow offcanvas-visible');
            $this.toggleClass('active');
            event.preventDefault();

        });

        $(window).resize(function () {
            if ($('body').hasClass('offcanvas-visible')) {
                $('body').removeClass('offcanvas-visible');
                $('.js-fh5co-nav-toggle').removeClass('active');
            }
        });

        $(window).scroll(function () {
            if ($('body').hasClass('offcanvas-visible')) {
                $('body').removeClass('offcanvas-visible');
                $('.js-fh5co-nav-toggle').removeClass('active');
            }
        });

    };


    var toggleBtnColor = function () {
        if ($('#fh5co-hero').length > 0) {
            $('#fh5co-hero').waypoint(function (direction) {
                if (direction === 'down') {
                    $('.fh5co-nav-toggle').addClass('dark');
                }
            }, { offset: -$('#fh5co-hero').height() });

            $('#fh5co-hero').waypoint(function (direction) {
                if (direction === 'up') {
                    $('.fh5co-nav-toggle').removeClass('dark');
                }
            }, {
                offset: function () { return -$(this.element).height() + 0; }
            });
        }
    };



    var contentWayPoint = function () {
        var i = 0;
        $('.animate-box').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('animated')) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function () {

                    $('body .animate-box.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn animated');
                            } else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated');
                            } else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated');
                            } else {
                                el.addClass('fadeInUp animated');
                            }

                            el.removeClass('item-animate');
                        }, k * 200, 'easeInOutExpo');
                    });

                }, 100);

            }

        }, { offset: '85%' });
    };




    $(function () {
        fullHeight();
        centerBlock();
        responseHeight()
        mobileMenuOutsideClick();
        offcanvasMenu();
        burgerMenu();
        toggleBtnColor();
        contentWayPoint();
    });


}());
var unblockHandle;


var delayForLastPage = 1 * 1000;
var maxHoldEntries = 10;
var bLongQuery = false;
var environment = "";
var gDataTableDefaultRows = 50;
var gSearchTextPlaceholder = "Enter search text here...";
var navTool = {
    buildNavComponent: function (parentContainer, parentElement, functionToRun, bAllowAllSelection) {

        var para = document.createElement("div");
        para.setAttribute("style", "text-align:center");

        var node = document.createElement("a");
        var increment = -1; // starting 
        if (parentElement.toLowerCase() == "ddlyear")
        {
            increment = 1;
        }
        node.setAttribute("href", "javascript:navTool.goWhere('" + parentElement + "'," +  increment + ",'" + functionToRun + "'," + bAllowAllSelection + ")");
        node.innerHTML = "<<";
        para.appendChild(node);

        node = document.createElement("span");
        node.innerHTML = "&nbsp;Navigation&nbsp;";
        para.appendChild(node);

        node = document.createElement("a");
        increment = 1;
        if (parentElement.toLowerCase() == "ddlyear") {
            increment =  -1;
        }
        node.setAttribute("href", "javascript:navTool.goWhere('" + parentElement + "'," +  increment + ",'" + functionToRun + "'," + bAllowAllSelection + ")");

        //node.setAttribute("href", "javascript:navTool.goWhere('" + parentElement + "', 1, '" + functionToRun + "'," + bAllowAllSelection + ")");
        node.innerHTML = ">>";
        para.appendChild(node);

        var newElement = para;
        var oldElement = document.getElementById(parentElement);
        document.getElementById(parentContainer).appendChild(newElement);

    },
    goWhere: function (obj, direction, functionToRun, allowAllSelection) {
        var e = document.getElementById(obj);

        if (direction == -1) {

            if (e.selectedIndex == 1) {
                e.selectedIndex = (allowAllSelection ? 0 : e.length - 1);
            }
            else {
                if (e.selectedIndex == 0) {
                    e.selectedIndex = e.length - 1;
                }
                else {
                    e.selectedIndex = e.selectedIndex + direction;
                }
            }

        }
        else {
            if (e.selectedIndex == e.length - 1) {
                e.selectedIndex = (allowAllSelection ? 0 : 1);
            }
            else {
                e.selectedIndex = e.selectedIndex + direction;

            }

        }

        // Create a new 'change' event
        var event = new Event('change');
        e.dispatchEvent(event);
        window[functionToRun]();
    }
}
//---------------------------------
// Internal Admin Section
//---------------------------------


$(document).ready(function ()
{
    //$(document).ajaxStart(function ( ) {


    //});

    $(document).ajaxSuccess(function () {
        gAJAXError = false;
    });

    $(document).ajaxError(function (event, jqxhr, inSettings, thrownError)
    {
        window.localStorage.setItem("AJAXErrorURL", inSettings.url);

        if (!inSettings.data == false) {
            window.localStorage.setItem("AJAXErrorData", inSettings.data);
        }

        gAJAXError = true;
    });

    setTimeout(resetHeaderBackButton, 1500);

    environment = getEnvironment();

    var environmentClass = "environment";

    if (environment.length > 0) {

        if ((environment.indexOf("DEV") > -1) || (environment.indexOf("LOCAL") > -1)) {
            environmentClass = environmentClass + "DEV";
        }
        if (environment.indexOf("STAGING") > -1) {
            environmentClass = environmentClass + "STAGING";
        }
        if (environment.indexOf("DEMO") > -1) {
            environmentClass = environmentClass + "DEMO";
        }
        if (environment.indexOf("PRODUCTION") > -1) {
            environmentClass = environmentClass + "PRODUCTION";
        }

        $("#fh5co-header").prepend("<div class='environment " + environmentClass + "'>" + environment + "</div>");
    }

    var bResetHeaderBackButtonAlreadyRun = false;

    $(document).ajaxStop(function () {

        resetHeaderBackButton();
        bResetHeaderBackButtonAlreadyRun = true;
    });

    function resetHeaderBackButton() {
        if (bResetHeaderBackButtonAlreadyRun == false && apiToken != "") {
            $.blockUI();
            gShowHeader = showHeader();
            buildBackButtonGeneric();
            unblockHandle = setInterval("$.unblockUI();", 1000);
        }
    }

    $(document).ajaxStart(function () {

    });

    // build a generic back button...

    var nonLoggedInPages = new Array();
    nonLoggedInPages.push('/admin/login/login.html');
    nonLoggedInPages.push('index.html');


    // Block UI Stuff
    $.blockUI.defaults.css.paddingTop = '25px';
    $.blockUI.defaults.fadeOut = 500;
    $.blockUI.defaults.message = '<h4>Just a moment...</h4>';


    if (bLongQuery == false) {
        // Force unblock after 10 seconds

        unblockHandle = setInterval("$.unblockUI();", 10000);
    }
    else
    {
        clearTimeout(unblockHandle);
    }
    // Set Ajax
    $(document).ajaxStart($.blockUI).ajaxStop($.unblockUI);

    var apiToken = "";
    var bDoLoginCheck = true;

    for (var i = 0; i < nonLoggedInPages.length; i++) {
        if (window.location.toString().toLowerCase().indexOf(nonLoggedInPages[i].toLowerCase()) > -1) {
            bDoLoginCheck = false;
            break;
        }
    }

    if (bDoLoginCheck == true) {
        var apiToken = window.localStorage.getItem("APIToken");

        if (apiToken == null || apiToken.length == 0) {
            logout();
        }
        else {
            // Check Time goes here
            var bTimedOut = false;
            bTimedOut = checkTokenTime();

            if (bTimedOut == true) {
                logout();
            }
            else {
                updateTokenTime();
            }
        }

    }

    if (bDoLoginCheck == true) {
        // add favorites
        addDialogComponents();
    }

    setTimeout(getLastPage, delayForLastPage);

    $(window).on("beforeunload", function (e) {
        if (gExcludeFromBackButton == false) {
            buildBackButton();
        }

        gExcludeFromBackButton = false;
    });

    //DEV-6732
    //added functionality to look for internal messages on page ready
    //need to exclude admin/login/login.html since api wouldn't have personnelid
    var sPage = window.location.pathname;
    var bIsLoginPage = sPage.indexOf("login.html") > -1 ? true : false;
    if (!bIsLoginPage) {
        getInternalMatchedNotification();
    }
});


function showHeader() {
    var hideHeader = getParameterByName("hideHeader");
    var returnVal = false;

    if (!hideHeader == false && hideHeader.toLowerCase() == "true") {
        $("#fh5co-page").css("marginTop", "20px");
        $("#fh5co-header").hide();
        $("#divQuickReport").hide();
        $(".favoriteButtonClass").hide();
        $("#reportTitleRow").hide();
        gDataTableDefaultRows = 10;
        returnVal = false;
    }
    else {
        $("#fh5co-header").show();
        returnVal = true;
    }

    $("body").show();

    return returnVal;
}
function showComponentDialog(url, title) {

    $("#componentDialog").dialog("close");
    $("#componentIFrame").attr("src", url);
    $("#componentDialog").dialog("open");
    $("#componentDialog").dialog({ "title": title });

}
function buildPopupComponent() {
    var hideHeader = getParameterByName("hideHeader");

    if (!hideHeader) {

        var str = '<div id="componentDialog" class="componentDialogClass" title="cc" display="none">';
        str = str + '<center>';
        str = str + '<iframe id="componentIFrame" src="" width="100%" height="500">';
        str = str + '     Sorry your browser does not support inline frames.';
        str = str + '  </iframe>';
        str = str + '</center>';
        str = str + '</div>';
        $("body").append(str);

        setTimeout(instantiatePopupComponent, 250);
    }
}
function instantiatePopupComponent() {

    var wWidth = $(window).width();
    var dWidth = wWidth * 0.95;
    var wHeight = $(window).height();
    var dHeight = (wHeight * 0.5) + 50;
    var dTop = $(window).height() - dHeight;

    $("#componentDialog").dialog({
        autoOpen: false,
        resizable: true,
        width: dWidth,
        height:600,
        top: dHeight,
        modal: false,
        dialogClass: 'componentDialogClass'
    });

}

function showFavoriteDialog() {

    setLocalStorage("gFavoritesInformation", "");

    var favoriteCriteriaObj = {
        "favoriteId": "0",
        "favoriteTitle": $("h2:first").html(),
        "favoriteUrl": window.location.toString(),
        "favoritePreviousPage": window.location.toString()
    }

    setLocalStorage("gFavoritesInformation", JSON.stringify(favoriteCriteriaObj));

    window.location = "/utilities/addFavorite.html";
}
function addDialogComponents() {
    //    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    //    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

    // JAVASCRIPT FIRST
    var imported = document.createElement('script');
    imported.src = 'https://code.jquery.com/ui/1.12.1/jquery-ui.js';
    imported.async = false; // optionally
    document.head.appendChild(imported);

    // NOW THE CSS
    // Get HTML head element 
    var head = document.getElementsByTagName('HEAD')[0];

    // Create new link Element 
    var link = document.createElement('link');

    // set the attributes for link element  
    link.rel = 'stylesheet';

    link.type = 'text/css';

    link.href = '//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css';

    // Append link element to HTML head 
 
    head.appendChild(link);

    var d = '';

    d = d + '<div class="favoriteButtonClass" style="position:absolute;top:5px; right:10px;z-index:1000">';
    d = d + '<div class="dropdown inline-block linkdropdown">';
    d = d + '           &nbsp;&nbsp;&nbsp;<a style="padding-left:10px!important;padding-right:10px!important" class="favoritesButtonFromLink" role="button" aria=expanded="false">Favorites</a>&nbsp;&nbsp;</a>';
    d = d + '          <ul id="favoritesQuickList" class="dropdown-menu linkdropdown-menu" role="menu">';


    d = d + '          </ul>';
    d = d + '      </div>';
    d = d + '&nbsp;<span><input id="btnAddAsFavorite" type="button"  value="Add as Favorite" onclick="showFavoriteDialog();"/></span>';
   
    d = d + '</div>';
    //d = d + '&nbsp;<input class="favoriteButtonClass" type="button" value="My Favorites" onclick="window.location=\'/admin/login/dashboard.html\'"/>';
    $("body").append(d);
    $("body").append('&nbsp;<div class="workArea"><input id="enableWorkArea" type="button"  value="Work Area" onclick="enableWorkArea();"/></div>');

    getFavoritesForQuickList();
    setTimeout(buildFavoritesDialog, 250);

    buildPopupComponent();

}
function getFavoritesForQuickList() {

    $("#favoritesQuickList").append('<li class="display-block"><a href="/admin/login/dashboard.html">Favorites Page</a></li>');

    $.ajax({
        url: ServicePrefix + '/api/InternalFavorite/GetInternalFavoriteList',
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify({
            "inApiToken": getLocalStorage("APIToken")
        }),
        processData: false,
        success: function (data, textStatus, jQxhr) {

            if (data.response.status != "SUCCESS") {
                MKAErrorMessageRtn(data.response.errorMessage[0]);
            }
            else {

                $.each(data.report.rows, function (index) {
                    var title = data.report.rows[index].Title;
                    var url = data.report.rows[index].URL;
                    $("#favoritesQuickList").append('<li class="display-block"><a href="' + url + '">' + title + '</a></li>');
                });

            }

        },
        error: function (jqXhr, textStatus, errorThrown) {
            genericAjaxError(jqXhr, textStatus, errorThrown);
        }
    });

}

function editFavorite(title, url, id) {

    setLocalStorage("gFavoritesInformation", "");

    var favoriteCriteriaObj = {
        "favoriteId": id,
        "favoriteTitle": title,
        "favoriteUrl": url,
        "favoritePreviousPage": window.location.toString()
    }

    setLocalStorage("gFavoritesInformation", JSON.stringify(favoriteCriteriaObj));

    window.location = "/utilities/addFavorite.html";

}
function deleteFavorite(id) {


    bootbox.confirm("Are you sure you want to delete this Favorite ?", function (result) {

        if (result == true) {

            //filling out url for ajax call
            var url = ServicePrefix + '/api/InternalFavorite/DeleteInternalFavorite';


            //filling out settings for ajax call
            var settings = {
                dataType: 'json',
                type: 'post',
                contentType: 'application/json',
                data: JSON.stringify({
                    "inApiToken": getLocalStorage("APIToken"),
                    "inInternalFavoriteId": id
                }),
                processData: false,
                success: function (data, textStatus, jQxhr) {
                    $("#favoritesDialog").dialog("close");
                    //bootbox.alert('Favorite has been deleted.', function () {
                    window.location = "/admin/login/dashboard.html";
                    //});


                },
                error: function (jqXhr, textStatus, errorThrown) {
                    genericAjaxError(jqXhr, textStatus, errorThrown);
                }
            };


            //ajax call
            $.ajax(url, settings);

        } else {
            return;
        }
    });

}
//function sleepForRetry()
//{
//    console.log("Retrying");
//    return;
//}

function clearTimeoutIfAny() {
    if (timeoutObject != null) {
        clearTimeout(timeoutObject);
        timeoutObject = null;
    }
}
function buildFavoritesDialog() {
    var count = 0;
    var maxTries = 10;

    while (true) {
        try {
            $("#favoritesDialog").dialog({
                autoOpen: false,
                resizable: false,
                width: 600,
                height: 300,
                modal: true
            });
            break;
            // break out of loop, or return, on success
        } catch (e) {
            // handle exception
            // console.log(e);
            if (++count == maxTries) {
                $("#btnAddAsFavorite").hide();
                break;
            }
        }
    }



}

function getEnvironment() {
    var environment = "&nbsp;PRODUCTION as of " + release['PRODUCTION'];

    var loc = window.location.toString().toLocaleLowerCase();


    if (loc.indexOf("devmediainternal.millerkaplan.com") > -1) {
        environment = "&nbsp;DEV as of " + release["DEV"];;
    }

    if (loc.indexOf("localhost") > -1) {
        environment = "&nbsp;LOCAL as of " + release["DEV"];
    }

    if (loc.indexOf("stagingmediainternal.millerkaplan.com") > -1) {
        environment = "&nbsp;STAGING as of " + release["STAGING"];
    }

    if (loc.indexOf("demomediainternal.millerkaplan.com") > -1) {
        environment = "&nbsp;DEMO as of " + release["DEMO"];
    }

    return environment;

}
function getLastPage() {
    var lastPage = new Object();


    var bFoundTitle = false;

    lastPage.url = window.location.href;

    $('h2').each(function () {
        if (bFoundTitle == false) {
            lastPage.PageTitle = $(this).text();
            bFoundTitle = true;
        }
    });

    if (bFoundTitle) {

        var lastPageList = getLocalStorage("latestRequestArray");


        if (lastPageList.length > 0) {

            var lastPageArray = JSON.parse(lastPageList);
            if (duplicateURL(lastPageArray, lastPage.url) == true) {

                return;
            }

            if (!lastPageArray.length == false) {

                if (lastPageArray.length >= maxHoldEntries) {
                    lastPageArray.shift();
                }

                lastPageArray.push(lastPage);

                setLocalStorage("latestRequestArray", JSON.stringify(lastPageArray));

                lastPageArray = JSON.parse(getLocalStorage("latestRequestArray"));

            }
        }
        else {
            lastPageArray = new Array();
            lastPageArray.push(lastPage);
            setLocalStorage("latestRequestArray", JSON.stringify(lastPageArray));
            lastPageArray = JSON.parse(getLocalStorage("latestRequestArray"));
        }
    }

}
function duplicateURL(lastPageArray, url) {
    var bRet = false;

    for (var i = 0; i < lastPageArray.length; i++) {
        if (lastPageArray[i].url == url) {
            return true;
        }
    }


}
function isThisProduction() {

    var bRet = true;

    if ((environment.indexOf("DEV") > -1) ||
       (environment.indexOf("LOCAL") > -1) ||
       (environment.indexOf("STAGING") > -1)) {
        bRet = false
    }

    return bRet;
}
function checkTokenTime() {

    if (getLocalStorage("APITokenTime") == "") {
        return true;
    }

    var d = new Date();
    var n = d.getTime();
    var timeWithoutAction = parseInt((n / 1000) - (parseInt(getLocalStorage("APITokenTime") / 1000)));

    //console.log(timeWithoutAction);

    if (timeWithoutAction > gTimeToExpire) {
        return true;
    }
    else {
        return false;
    }
}
function updateTokenTime() {
    var d = new Date();
    var n = d.getTime();
    setLocalStorage("APITokenTime", n.toString());
}
function setLocalStorage(key, value) {
    window.localStorage.setItem(key, (value == null ? "" : value));
}
function getLocalStorage(key) {
    try {
        return (window.localStorage.getItem(key) == null ? "" : window.localStorage.getItem(key).toString());
    }
    catch (err) {
        return "";
    }
}
function removeLocalStorage(key) {
    try {
        window.localStorage.removeItem(key);
    }
    catch (err) {
        return "";
    }
}

function logout() {

    var bSaveLinks = false;
    var lastPageList = getLocalStorage("latestRequestArray");

    if (lastPageList.length > 0) {
        var lastPageArray = JSON.parse(lastPageList);
        if (!lastPageArray.length == false) {
            bSaveLinks = true;
        }
    }

    window.localStorage.clear();

    if (bSaveLinks) {
        setLocalStorage("latestRequestArray", JSON.stringify(lastPageArray));

    }
    var whereAreYou = window.location.toString();

    // var counter = whereAreYou.replace("//", "/").split('/').length - 1;

    var locationToRedirect = "/admin/login/login.html";

    window.location = locationToRedirect;
}

// Miscellaneous 
// not sure if we will use these

function generateRpt(auditID) {
    window.open(ServicePrefix + '/api/Report/GetFile?inApiToken=' + window.localStorage.getItem("APIToken") + '&inAuditID=' + auditID);
}
function show(div) {
    $("#" + div).show();
}
function hide(div) {
    $("#" + div).hide();
}

function getParameterByName(name, url) {


    if (!url) {
        url = window.location.href.toLowerCase();
    }

    name = name.replace(/[\[\]]/g, "\\$&").toLowerCase();

    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);

    if (!results) {
        return null;
    }

    if (!results[2]) {
        return '';
    }

    return replaceAll(decodeURIComponent(results[2].replace(/\+/g, " ")), "script", "");
}

function extractDateOnly(inDate) {
    var arrDate = inDate.split('T');

    if (arrDate.length > 0) {
        return arrDate[0];
    }
    else {
        return (inDate == null ? "&nbsp;" : inDate);
    }
}
function goBackToDashboard() {

    var search = getLocalStorage("search");
    var searchPage = getLocalStorage("searchPage");

    if (searchPage.length > 0) {
        var cleanPage = searchPage.split('?');
        if (cleanPage.length > 0) {
            window.location = cleanPage[0] + (search.length > 0 ? "?search=" + search : "");
            return;
        }
    }

    // Fall thru
    window.location = "/admin/login/dashboard.html";
}

function MKAErrorMessageRtn(message, preCallback, postCallback) {

    var newMessage = "";

    var AJAXErrorURL = window.localStorage.getItem("AJAXErrorURL");
    var AJAXErrorData = window.localStorage.getItem("AJAXErrorData");

    if (!message)
    {
        message = "";
    }

    if (!preCallback == false)
    {
        const promise = new Promise((resolve, reject) => {

            preCallback();
            resolve("OK");
        });

        promise.then
        (
                    (data) => {

                        MKAErrorMessageDeliveryRtn(message, postCallback);
                        setTimeout(function () { sendErrorEmail(message, AJAXErrorURL, AJAXErrorData) }, 1000);
                    },
                    (error) => {
                        bootbox.alert(error, function () { return; });
                    }
        );
    }
    else
    {
        MKAErrorMessageDeliveryRtn(message, postCallback);
    }

}

function MKAErrorMessageDeliveryRtn(message, postCallback) {

    var AJAXErrorURL = window.localStorage.getItem("AJAXErrorURL");
    var AJAXErrorData = window.localStorage.getItem("AJAXErrorData");

    if (message.toString().toLowerCase().indexOf('token is invalid') > -1) {
        newMessage = "Your Token has expired - Please login again";
        bootbox.alert(newMessage, function () {
 
        });
        window.location = "/admin/login/login.html";
    }
    else if (message.toString().toLowerCase().indexOf('authentication failed') > -1) {
        newMessage = "Authentication Failed";
        $("#password").val('');
        bootbox.alert(newMessage, function () {
 
        });
    }
    else {

        bootbox.alert('Process Failed.\n\r\n\r' + message + '.' +
            (gAJAXError == true ? '\n\r\n\rDevelopment has been notified and is looking into this issue.' : ''), function () {

                if (!postCallback == false) {
                    postCallback();
                }
            });

        setTimeout(function () { sendErrorEmail(message, AJAXErrorURL, AJAXErrorData) }, 1000);

    }

}

function sendErrorEmail(message, AJAXErrorURL, AJAXErrorData)
{
    //console.log('ERROR');
    //console.log(message);
    //console.log(AJAXErrorURL);
    //console.log(AJAXErrorData);
    if (AJAXErrorURL == null)
    {
        return;
    }


    $.ajax({
        url: ServicePrefix + '/api/Email/EmailAPIError',
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify({
            "inApiToken": getLocalStorage("APIToken"),
            "inBody": "ERROR: " + message + "<br>" + "URL: " + AJAXErrorURL.replace("{}", "") + (AJAXErrorData == null ? "" : "<br>DATA: " + AJAXErrorData)
        }),
        processData: false,
        success: function (data, textStatus, jQxhr) {

            //if (data.response.status != "SUCCESS") {
            //    alert(errorThrown);
            //}
            //else {
                return;
            //}
        },
        error: function (jqXhr, textStatus, errorThrown) {
            //alert(errorThrown);
        }
    });
}

function buildMainMenu(selectedItem) {

    var menuItems = '';

    menuItems += '<h1><a href="/admin/login/dashboard.html?MenuItem=true">MKA Internal Media Site</a></h1>';
    menuItems += '<nav role="navigation" style="margin-top:20px">';

    menuItems += '<ul>';
    menuItems += buildGenericReportsLink(selectedItem);
    menuItems += '       <li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Products") + ' role="button" aria-expanded="false">Products<span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '              <ul class="dropdown-menu" role="menu">';
    menuItems += productDashboard('mrr');
    menuItems += productDashboard('xry');
    menuItems += productDashboard('tvb');
    //menuItems += productDashboard('mss');
    menuItems += productDashboard('dma');

    menuItems += '              </ul>';
    menuItems += '        </li>';
    menuItems += '        <li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Personnel") + '">Personnel <span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '              <ul class="dropdown-menu" role="menu">';
    menuItems += '                  <li style="display:block"><a href="/admin/personnel/personnellist.html?MenuItem=true">Personnel</a></li>';
    menuItems += '                  <li style="display:block"><a href="/admin/webnotification/webnotification.html?MenuItem=true">Web Notifications</a></li>';
    //menuItems += '                  <li style="display:block"><a href="/admin/relationship/relationshiplists.html?MenuItem=true">Group Maintenacne</a></li>';
    menuItems += '              </ul>';
    menuItems += '        </li>';
    menuItems += '        <li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Stations") + ' role="button" aria-expended="false">Stations<span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '              <ul class="dropdown-menu" role="menu">';
    menuItems += '                  <li style="display:block"><a href="/admin/station/stationlist.html?MenuItem=true" class="approved">Stations</a></li>';
    menuItems += '                  <li style="display:block"><a href="">MRR/X-Ray Link</a></li>';
    menuItems += '              </ul>';
    menuItems += '        </li>';
    menuItems += '        <li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Markets") + '">Markets<span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '              <ul class="dropdown-menu" role="menu">';
    menuItems += '                  <li style="display:block"><a href="/admin/market/marketlist.html?MenuItem=true" role="button" aria-expanded="false" class="approved">Primary</a></li>';
    menuItems += '                  <li style="display:block;"><a href="/admin/market/marketlist.html?NonPrimaryOnly=true&MenuItem=true">Complimentary</a></li>';
    menuItems += '                  <li style="display:block;"><a href="/admin/parentmarket/parentmarketlist.html?MenuItem=true">Parent</a></li>';
    menuItems += '              </ul>';
    menuItems += '        </li>';
    menuItems += '        <li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Ownerships") + '">Ownerships<span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '              <ul class="dropdown-menu" role="menu">';
    menuItems += '                  <li style="display:block;"><a href="/admin/ownership/ownershiplist.html?MenuItem=true" role="button" aria-expanded="false" class="approved">Ownerships </a>';
    menuItems += '                  <li style="display:block;"><a href="/admin/ownershipgroup/ownershipgrouplist.html?MenuItem=true">Groups</a></li>';
    menuItems += '                  <li style="display:block;"><a href="/admin/parentownership/parentownershiplist.html?MenuItem=true">Parents</a></li>';
    menuItems += '              </ul>';
    menuItems += '        <li><a ' + getSelectedItemClass(selectedItem, "Virtual Groups") + 'href="/admin/login/dashboard.html?MenuItem=true">Virtual Groups</a></li>';
    menuItems += '        <li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Settings") + ' role="button" aria-expanded="false">Settings <span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '              <ul class="dropdown-menu" role="menu">';
    menuItems += '                  <li style="display:block;"><a href="/admin/news/newslist.html?MenuItem=true">News</a></li>';
    menuItems += '                  <li style="display:block;"><a href="/admin/training/traininglist.html?MenuItem=true">Training</a></li>';
    menuItems += '                  <li style="display:block;"><a href="/admin/customersupport/customersupportlist.html?MenuItem=true">Customer Support</a></li>';
    menuItems += '                  <li style="display:block;"><a href="/admin/relationship/relationshiplists.html?MenuItem=true">MKA User Groups</a></li>';

    if (bIsDemo == false) {
        menuItems += '                  <li class="dropdown" style="display:block"><a href="#" role="button" aria-expanded="true">Demo Maintenance <span style="margin-right:10px;" class="caret"></span></a>'
        menuItems += '                      <ul class="dropdown-menu" style="margin-left:60px;" role="menu">';
        menuItems += '                          <li style="display:block;"><a href="/admin/demo/demomarketlist.html?MenuItem=true">Demo Markets</a></li>';
        menuItems += '                          <li style="display:block;"><a href="/admin/demo/demohybridmarketstationlist.html?MenuItem=true">Demo Hybrids</a></li>';
        menuItems += '                      </ul>';
        menuItems += '                  </li>';
    }

    menuItems += '                  <li style="display:block;"><a href="/admin/techtools/techtoolsdashboard.html?MenuItem=true">Tech Tools</a></li>';
    menuItems += '                  <li style="display:block;text-align:center;">----------------------</li>';
    menuItems += '                  <li style="display:block;"><a href="/admin/format/formatlist.html?MenuItem=true">Formats</a></li>';
    menuItems += '                  <li style="display:block;"><a href="/admin/marketsize/marketsizelist.html?MenuItem=true">Market Sizes</a></li>';
    menuItems += '                  <li style="display:block;"><a href="/admin/position/positionlist.html?MenuItem=true">Positions</a></li>';
    menuItems += '                  <li style="display:block;"><a href="/admin/region/regionlist.html?MenuItem=true">Regions</a></li>';
    menuItems += '                  <li style="display:block;"><a href="/admin/keyword/keywordlist.html?MenuItem=true">Keywords</a></li>';
    menuItems += '              </ul>';
    menuItems += '        </li>';
    menuItems += '        <li><a ' + getSelectedItemClass(selectedItem, "Logout") + 'href="#" onclick="logout()">Logout</a></li>';
    menuItems += '    </ul>';
    menuItems += '</nav>';

    $("#menu").html(menuItems);
}

function buildXRYMenu(selectedItem) {

    var menuItems = '';

    menuItems += '<h1><a href="/admin/login/dashboard.html?MenuItem=true">MKA Internal Media Site</a></h1>';
    menuItems += '<nav role="navigation" style="margin-top:20px">';

    menuItems += '<ul>';

    menuItems += buildGenericReportsLink2(selectedItem);
    menuItems += '       <li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Products") + ' href="" role="button" aria-expanded="false">Products <span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '              <ul class="dropdown-menu" role="menu">';
    menuItems += productDashboard('mrr');
    menuItems += productDashboard('xry');
    menuItems += productDashboard('tvb');
    //menuItems += productDashboard('mss');
    menuItems += productDashboard('dma');
    menuItems += '              </ul>';
    menuItems += '        </li>';
    menuItems += '        </li>';

    menuItems += '<li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Revenue") + ' href="" role="button" aria-expanded="false">Revenue <span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '<ul class="dropdown-menu" role="menu">';
    menuItems += '        <li style="display:block;"><a href="/products/xry/revenue/xryreportstatus.html?MenuItem=true">Report Status</a></li>';
    menuItems += '        <li style="display:block"><a href="/products/xry/xryrelease.html?MenuItem=true">Release</a></li>';
    menuItems += '        <li style="display:block"><a href="/products/xry/xryreminders.html?MenuItem=true">Reminders</a></li>';
    menuItems += '        <li style="display:block;"><a href="/products/xry/xryownershipmappinglist.html?MenuItem=true">Ownership Mapping</a></li>';
    menuItems += '        <li style="display:block;"><a href="/products/xry/revenue/xrydatacollection.html?MenuItem=true">Data Collection</a></li>';
    menuItems += '        <li style="display:block;"><a href="/products/xry/revenue/xrydelivery.html?MenuItem=true">Delivery</a></li>';

    menuItems += '                  <li class="dropdown" style="display:block"><a href="#" role="button" aria-expanded="true">Matching <span style="margin-right:10px;" class="caret"></span></a>'
    menuItems += '                      <ul class="dropdown-menu" style="margin-left:60px;" role="menu">';
    menuItems += '                          <li style="display:block;"><a href="/products/xry/revenue/xrymatch.html?MatchPage=adv&MenuItem=true">Advertiser Matching</a></li>';
    menuItems += '                          <li style="display:block;"><a href="/products/xry/revenue/xrymatch.html?MatchPage=agy&MenuItem=true">Agency Matching</a></li>';
    menuItems += '                          <li style="display:block;"><a href="/products/xry/revenue/xrymatch.html?MatchPage=media&MenuItem=true">Media Matching</a></li>';
    menuItems += '                      </ul>';
    menuItems += '                  </li>';


    menuItems += '</ul>';
    menuItems += '</li>';

    menuItems += '       <li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "XRay Reports") + ' href="" role="button" aria-expanded="false"> XRay Reports <span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '              <ul class="dropdown-menu" role="menu">';
    menuItems += '                  <li style="display:block;"><a href="/utilities/genericreport/genericreportlist.html?tag=XRY Data Review&MenuItem=true" role="button" aria-expanded="false">XRY Data Review Reports </a></li>';

    menuItems += '                  <li style="display:block;"><a href="/utilities/genericreport/genericreportlist.html?tag=xry&MenuItem=true" role="button" aria-expanded="false">XRay Reports </a></li>';
    menuItems += '                  <li style="display:block;"><a href="/utilities/genericreport/genericreportlist.html?tag=corporate&MenuItem=true" role="button" aria-expanded="false">Corporate Reports </a></li>';
    menuItems += '              </ul>';
    menuItems += '       </li>';

    menuItems += '       <li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Utility") + ' href="" role="button" aria-expanded="false">Utility <span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '              <ul class="dropdown-menu" role="menu">';
    menuItems += '                  <li class="dropdown" style="display:block"><a href="#" role="button" aria-expanded="true">Advertiser <span style="margin-right:10px;" class="caret"></span></a>'
    menuItems += '                      <ul class="dropdown-menu" style="margin-left:60px;" role="menu">';
    menuItems += '                          <li style="display:block;"><a href="/admin/advertiser/advertiserlist.html?MenuItem=true" role="button" aria-expanded="false">Market Advertiser</a></li>';
    menuItems += '                          <li style="display:block;"><a href="/admin/stationadvertiser/stationadvertiserlist.html?MenuItem=true">Station Advertiser</a></li>';
    menuItems += '                          <li style="display:block;"><a href="/admin/mediaadvertiser/mediaadvertiserlist.html?MenuItem=true">Media Advertiser</a></li>';
    menuItems += '                          <li style="display:block;"><a href="/admin/parentadvertiser/parentadvertiserlist.html?MenuItem=true">Parent Advertiser</a></li>';
    menuItems += '                      </ul>';
    menuItems += '                  </li>';

 
    menuItems += '                  <li class="dropdown" style="display:block"><a href="#" role="button" aria-expanded="true">Agency <span style="margin-right:10px;" class="caret"></span></a>'
    menuItems += '                      <ul class="dropdown-menu" style="margin-left:60px;" role="menu">';
    menuItems += '                          <li style="display:block;"><a href="/admin/agency/agencylist.html?MenuItem=true" role="button" aria-expanded="false">Market Agency</a></li>';
    menuItems += '                          <li style="display:block;"><a href="/admin/stationagency/stationagencylist.html?MenuItem=true">Station Agency</a></li>';
    menuItems += '                          <li style="display:block;"><a href="/admin/parentagency/parentagencylist.html?MenuItem=true">Parent Agency</a></li>';
    menuItems += '                      </ul>';
    menuItems += '                  </li>';

    menuItems += '                  <li class="dropdown" style="display:block"><a href="#" role="button" aria-expanded="true">Imports <span style="margin-right:10px;" class="caret"></span></a>'
    menuItems += '                      <ul class="dropdown-menu" style="margin-left:60px;" role="menu">';
    menuItems += '                          <li style="display:block;"><a href="/products/xry/import/xryimportdatainputlist.html?MenuItem=true">Data Import Scripts</a></li>';
    menuItems += '                          <li style="display:block;"><a href="/products/xry/import/xryimportacctrevvalidationtypelist.html?MenuItem=true">Import Setup</a></li>';
    menuItems += '                          <li style="display:block;"><a href="/products/xry/import/xryimportdatamappingrulelist.html?MenuItem=true">Data Mapping</a></li>';
    menuItems += '                          <li style="display:block;"><a href="/products/xry/import/xryimportmappingcolumnrulelist.html?MenuItem=true" role="button" aria-expanded="false">Column Mapping</a></li>';
    menuItems += '                      </ul>';
    menuItems += '                  </li>';



    menuItems += '                  <li style="display:block;"><a href="/admin/industry/industrylist.html?MenuItem=true">Industry</a></li>';
    menuItems += '                  <li style="display:block;"><a href="/admin/subindustry/subindustrylist.html?MenuItem=true">Sub Industry</a></li>';
    menuItems += '                  <li style="display:block;"><a href="/admin/nielsenmarketname/nielsenmarketnamelist.html?MenuItem=true">Nielsen Market</a></li>';
    menuItems += '              </ul>';
    menuItems += '        </li>';

    menuItems += '       <li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Audit") + ' href="" role="button" aria-expanded="false">Audit <span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '              <ul class="dropdown-menu" role="menu">';

    menuItems += '                  <li class="dropdown" style="display:block"><a href="#" role="button" aria-expanded="true">Advertiser <span style="margin-right:10px;" class="caret"></span></a>'
    menuItems += '                      <ul class="dropdown-menu" style="margin-left:60px;" role="menu">';

    menuItems += '                          <li style="display:block;"><a href="/products/xry/bulkupdates/xrymarketadvertiserbulkupdate.html?MenuItem=true">Market Advertiser Audit</a></li>';
    menuItems += '                          <li style="display:block;"><a href="/products/xry/bulkupdates/xrystationadvertiserbulkupdate.html?MenuItem=true">Station Advertiser Audit</a></li>';
    menuItems += '                          <li style="display:block;"><a href="/products/xry/bulkupdates/xrymediaadvertiserbulkupdate.html?MenuItem=true">Media Advertiser Audit</a></li>';
    menuItems += '                          <li style="display:block;"><a href="/products/xry/bulkupdates/xryadvertiserrevenuebulkupdate.html?MenuItem=true">Advertiser Revenue Research Audit</a></li>';
    menuItems += '                          <li style="display:block;"><a href="/products/xry/bulkupdates/xrymediarevenuebulkupdate.html?MenuItem=true">Media Revenue Research Audit</a></li>';
    menuItems += '                      </ul>';
    menuItems += '                  </li>';

    menuItems += '                  <li class="dropdown" style="display:block"><a href="#" role="button" aria-expanded="true">Agency <span style="margin-right:10px;" class="caret"></span></a>'
    menuItems += '                      <ul class="dropdown-menu" style="margin-left:60px;" role="menu">';
    menuItems += '                          <li style="display:block;"><a href="/products/xry/bulkupdates/xrymarketagencybulkupdate.html?MenuItem=true">Market Agency Audit</a></li>';
    menuItems += '                          <li style="display:block;"><a href="/products/xry/bulkupdates/xrystationagencybulkupdate.html?MenuItem=true">Station Agency Audit</a></li>';
    menuItems += '                      </ul>';
    menuItems += '                  </li>';

    menuItems += '              </ul>';
    menuItems += '        </li>';

    menuItems += productDashboard('');
    menuItems += '        <li><a ' + getSelectedItemClass(selectedItem, "Logout") + 'href="#" onclick="logout()">Logout</a></li>';
    menuItems += '    </ul>';
    menuItems += '</nav>';

    $("#menu").html(menuItems);

}

function buildMRRMenu(selectedItem) {

    var menuItems = '';

    menuItems += '<h1><a href="/admin/login/dashboard.html?MenuItem=true">MKA Internal Media Site</a></h1>';
    menuItems += '<nav role="navigation" style="margin-top:20px">';

    menuItems += '<ul>';
    menuItems += buildGenericReportsLink(selectedItem);

    menuItems += '<li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Products") + ' href="" role="button" aria-expanded="false">Products <span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '<ul class="dropdown-menu" role="menu">';
    menuItems += productDashboard('mrr');
    menuItems += productDashboard('xry');
    menuItems += productDashboard('tvb');
    //menuItems += productDashboard('mss');
    menuItems += productDashboard('dma');
    menuItems += '</ul>';
    menuItems += '</li>';
    menuItems += '       <li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "MRR Reports") + ' href="" role="button" aria-expanded="false">MRR Reports <span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '              <ul class="dropdown-menu" role="menu">';
    menuItems += '                  <li style="display:block;"><a href="/utilities/genericreport/genericreportlist.html?tag=MRR Data Review&MenuItem=true" role="button" aria-expanded="false">MRR Data Review</a></li>';

    menuItems += '                  <li style="display:block;"><a href="/utilities/genericreport/genericreportlist.html?tag=MRR Security and Analysis&MenuItem=true" role="button" aria-expanded="false">MRR Security and Analysis</a></li>';
    menuItems += '                  <li style="display:block;"><a href="/utilities/genericreport/genericreportlist.html?tag=MRR Setup Info&MenuItem=true" role="button" aria-expanded="false">MRR Setup Info</a></li>';
    menuItems += '              </ul>';
    menuItems += '       </li>';
    menuItems += '<li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Revenue") + ' href="" role="button" aria-expanded="false">Revenue <span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '<ul class="dropdown-menu" role="menu">';
    menuItems += '        <li style="display:block"><a href="/products/mrr/mrrrelease.html?MenuItem=true">Release</a></li>';
    menuItems += '        <li style="display:block"><a href="/products/mrr/mrrreminders.html?MenuItem=true">Reminders</a></li>';
    menuItems += '        <li style="display:block"><a href="/products/mrr/mrrrevenuedetail.html?MenuItem=true">Revenue Detail</a></li>';
    menuItems += '        <li style="display:block"><a href="/products/mrr/mrrmarketdelivery.html?MenuItem=true">Report Delivery</a></li>';
    menuItems += '        <li style="display:block"><a href="/products/mrr/mrrsnapshot.html?MenuItem=true">Snapshot</a></li>';
    menuItems += '</ul>';
    menuItems += '</li>';
    menuItems += '       <li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Utility") + ' href="" role="button" aria-expanded="false">Utility <span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '              <ul class="dropdown-menu" role="menu">';
    menuItems += '                  <li style="display:block;"><a href="/admin/revenuecategory/revenuecategorylist.html?MenuItem=true">Revenue Categories</a></li>';

    menuItems += '                  <li style="display:block;"><a href="/products/mrr/mrrmarketcategorydefinitionlist.html?MenuItem=true" role="button" aria-expanded="false">Market Categories</a></li>';
    menuItems += '              </ul>';
    menuItems += '        </li>';
    menuItems += productDashboard('');
    menuItems += '        <li><a ' + getSelectedItemClass(selectedItem, "Logout") + 'href="#" onclick="logout()">Logout</a></li>';
    menuItems += '    </ul>';
    menuItems += '</nav>';

    $("#menu").html(menuItems);


}

function buildTVBMenu(selectedItem) {

    var menuItems = '';

    menuItems += '<h1><a href="/admin/login/dashboard.html?MenuItem=true">MKA Internal Media Site</a></h1>';
    menuItems += '<nav role="navigation" style="margin-top:20px">';

    menuItems += '<ul>';
    menuItems += buildGenericReportsLink(selectedItem);
    menuItems += '       <li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Products") + ' href="" role="button" aria-expanded="false">Products <span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '              <ul class="dropdown-menu" role="menu">';
    menuItems += productDashboard('mrr');
    menuItems += productDashboard('xry');
    menuItems += productDashboard('tvb');
 //   menuItems += productDashboard('mss');
    menuItems += productDashboard('dma');
    menuItems += '              </ul>';
    menuItems += '        </li>';
    menuItems += '<li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Revenue") + ' href="" role="button" aria-expanded="false">Revenue <span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '<ul class="dropdown-menu" role="menu">';

    menuItems += '        <li style="display:block"><a href="/products/tvb/tvbreminders.html?MenuItem=true">Reminders</a></li>';
    menuItems += '        <li style="display:block"><a href="/products/tvb/tvbreportstatus.html?MenuItem=true" class="approved">Report Status</a></li>';
    menuItems += '        <li style="display:block"><a href="/products/tvb/tvbmarketdelivery.html?MenuItem=true">Report Delivery</a></li>';
    menuItems += '        <li style="display:block"><a href="/products/tvb/tvbrevenuedetailrepbilling.html?MenuItem=true">Edit Rep Billing</a></li>';
    menuItems += '        <li style="display:block"><a href="/products/tvb/tvbrevenuedetail.html?MenuItem=true" class="approved">Edit Time Sales</a></li>';
    menuItems += '        <li style="display:block"><a href="/products/tvb/tvbestimates.html?MenuItem=true" class="approved">TS Estimates</a></li>';
 
    menuItems += '        <li style="display:block"><a href="/products/tvb/tvbrepfirmstationmappinglist.html?MenuItem=true">Rep Station Mapping</a></li>';
    menuItems += '</ul>';
    menuItems += '</li>';
    menuItems += '<li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Confirm") + ' href="" role="button" aria-expanded="false">Confirm <span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '<ul class="dropdown-menu" role="menu">';
    menuItems += '        <li style="display:block"><a href="/products/tvb/tvbconfirm.html?MenuItem=true" class="approved">Time Sales</a></li>';
    menuItems += '        <li style="display:block"><a href="/products/tvb/tvbconfirmrepfirm.html?MenuItem=true" class="approved">Rep Firm</a></li>';
    menuItems += '        <li style="display:block"><a href="/products/tvb/tvbconfirmrepbillingestimate.html?MenuItem=true">Estimate (Kantar)</a></li>';
 
    menuItems += '</ul>';
    menuItems += '</li>';
    menuItems += productDashboard('');
    menuItems += '        <li><a ' + getSelectedItemClass(selectedItem, "Logout") + 'href="#" onclick="logout()">Logout</a></li>';
    menuItems += '    </ul>';
    menuItems += '</nav>';

    $("#menu").html(menuItems);
    //console.log(menuItems);
}

function buildMSSMenu(selectedItem) {
    var menuItems = '';

    menuItems += '<h1><a href="/admin/login/dashboard.html?MenuItem=true">MKA Internal Media Site</a></h1>';
    menuItems += '<nav role="navigation" style="margin-top:20px">';

    menuItems += '<ul>';
    menuItems += buildGenericReportsLink(selectedItem);
    menuItems += '       <li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Products") + ' href="" role="button" aria-expanded="false">Products <span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '              <ul class="dropdown-menu" role="menu">';
    menuItems += productDashboard('mrr');
    menuItems += productDashboard('xry');
    menuItems += productDashboard('tvb');
    //menuItems += productDashboard('mss');
    menuItems += productDashboard('dma');
    menuItems += '              </ul>';
    menuItems += '        </li>';
    menuItems += productDashboard('');
    menuItems += '        <li><a ' + getSelectedItemClass(selectedItem, "Logout") + 'href="#" onclick="logout()">Logout</a></li>';
    menuItems += '    </ul>';
    menuItems += '</nav>';

    $("#menu").html(menuItems);

}

function buildDMAMenu(selectedItem) {

    var menuItems = '';

    menuItems += '<h1><a href="/admin/login/dashboard.html?MenuItem=true">MKA Internal Media Site</a></h1>';
    menuItems += '<nav role="navigation" style="margin-top:20px">';

    menuItems += '<ul>';

    //    menuItems += '        <li><a ' + getSelectedItemClass(selectedItem, "Release") + 'href="/Products/DMA/dmarelease.html">Release</a></li>';
    menuItems += buildGenericReportsLink2(selectedItem);
    menuItems += '       <li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Products") + ' href="" role="button" aria-expanded="false">Products <span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '              <ul class="dropdown-menu" role="menu">';
    menuItems += productDashboard('mrr');
    menuItems += productDashboard('xry');
    menuItems += productDashboard('tvb');
    //menuItems += productDashboard('mss');
    menuItems += productDashboard('dma');
    menuItems += '              </ul>';
    menuItems += '        </li>';


    menuItems += '<li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Revenue") + ' href="" role="button" aria-expanded="false">Revenue <span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '<ul class="dropdown-menu" role="menu">';

    menuItems += '        <li style="display:block"><a href="/Products/DMA/dmarelease.html?MenuItem=true">Release</a></li>';
    menuItems += '</ul>';
    menuItems += '</li>';
    menuItems += '       <li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "DMA Reports") + ' href="/utilities/genericreport/genericreportlist.html?tag=dma&MenuItem=true" role="button" aria-expanded="false">DMA Reports </span></a>';
    menuItems += '       </li>';

    menuItems += productDashboard('');
    menuItems += '        <li><a ' + getSelectedItemClass(selectedItem, "Logout") + 'href="#" onclick="logout()">Logout</a></li>';
    menuItems += '    </ul>';
    menuItems += '</nav>';

    $("#menu").html(menuItems);


}

function buildCancelMenu(selectedItem)
{
    var menuItems = '';

    menuItems += '<h1><a href="/admin/login/dashboard.html?MenuItem=true">MKA Internal Media Site</a></h1>';
    menuItems += '<nav role="navigation" style="margin-top:20px">';
    menuItems += '<ul>';

    menuItems += '        <li><a ' + getSelectedItemClass(selectedItem, "Cancel") + 'href="#" onclick="updatedGoBack()">Cancel</a></li>';

    menuItems += '</ul>';
    menuItems += '</nav>';

    $("#menu").html(menuItems);
}

function productDashboard(productId) {
    var strOut = '';
    var style = '';

    switch (productId.toLowerCase()) {
        case '':
            strOut = '<a href="/admin/login/dashboard.html?MenuItem=true">Dashboard</a>';
            break;
        case 'mrr':
            style = 'display:block;';
            strOut = '<a href="/products/mrr/mrrdashboard.html?MenuItem=true">MRR</a>';
            break;
        case 'xry':
            style = 'display:block;';
            strOut = '<a href="/products/xry/xrydashboard.html?MenuItem=true">XRY</a>';
            break;
        case 'tvb':
            style = 'display:block;';
            strOut = '<a href="/products/tvb/tvbdashboard.html?MenuItem=true">TVB</a>';
            break;
        case 'mss':
            style = 'display:block;';
            strOut = '<a href="/products/mss/mssdashboard.html?MenuItem=true">MSS</a>';
            break;
        case 'dma':
            style = 'display:block;';
            strOut = '<a href="/Products/DMA/dmadashboard.html?MenuItem=true">DMA</a>';
            break;
    }

    return '<li style="' + style + '">' + strOut + '</li>';
}
function buildGenericReportsLink(selectedItem) {
    var strOut = '';
    var style = '';

    strOut = '<a ' + getSelectedItemClass(selectedItem, "Reports") + ' href="/utilities/genericreport/genericReportList.html?MenuItem=true">Reports</a>';

    return '<li style="' + style + '">' + strOut + '</li>';
}
function buildGenericReportsLink2(selectedItem) {
    var strOut = '';
    var style = '';

    strOut = '<a ' + getSelectedItemClass(selectedItem, "Reports") + ' href="/utilities/genericreport/genericReportList.html?MenuItem=true">All Reports</a>';

    return '<li style="' + style + '">' + strOut + '</li>';
}
function getSelectedItemClass(selectedItem, item) {
    if (selectedItem.toLowerCase() == item.toLowerCase()) {
        return 'class="active"';
    }
    else {
        return '';
    }
}

function returnExportColumnHeadingTitle(tableName, data, columnIndex) {

    if ($("#" + tableName + " th").eq(columnIndex).data("export-title") != null &&
        $("#" + tableName + " th").eq(columnIndex).data("export-title").length > 0) {
        return $("#" + tableName + " th").eq(columnIndex).data("export-title");
    }
    else {
        return replaceAll(data, "<br>", " ");
    }
}

function returnTableColumnsByClass(tableName, className) {
    var arrExportColumn = [];

    $('#' + tableName + ' .' + className).each(function () {
        arrExportColumn.push($(this).index());
    });

    return arrExportColumn;
}

function returnProductListLinks(row) {
    var productList = "";

    productList += row.MRR.trim().length > 0 ? '<a href="#" onclick="editProduct(\'' + row.MRR.toUpperCase() + '\')">' + row.MRR.toUpperCase() + '</a>&nbsp;' : '';
    productList += row.XRY.trim().length > 0 ? '<a href="#" onclick="editProduct(\'' + row.XRY.toUpperCase() + '\')">' + row.XRY.toUpperCase() + '</a>&nbsp;' : '';
    productList += row.MSS.trim().length > 0 ? '<a href="#" onclick="editProduct(\'' + row.MSS.toUpperCase() + '\')">' + row.MSS.toUpperCase() + '</a>&nbsp;' : '';
    productList += row.TVB.trim().length > 0 ? '<a href="#" onclick="editProduct(\'' + row.TVB.toUpperCase() + '\')">' + row.TVB.toUpperCase() + '</a>&nbsp;' : '';
    productList += row.DMA.trim().length > 0 ? '<a href="#" onclick="editProduct(\'' + row.DMA.toUpperCase() + '\')">' + row.DMA.toUpperCase() + '</a>&nbsp;' : '';
    productList += row.DMX.trim().length > 0 ? '<a href="#" onclick="editProduct(\'' + row.DMX.toUpperCase() + '\')">' + row.DMX.toUpperCase() + '</a>&nbsp;' : '';

    return productList;
}

function returnProductMarketLinks(row) {
    
    var productList = "";

    if (row.MRR.trim().length > 0)
    {
        productList = productList + '<a href="#" onclick="goTo(';
        productList = productList + "'/products/mrr/mrrmarketproduct.html?marketId=" + row.marketId;
        productList = productList + "')";
        productList = productList + ';">' + row.MRR.toUpperCase() + "</a>&nbsp;";
    }

    if (row.XRY.trim().length > 0) {
        productList = productList + '<a href="#" onclick="goTo(';
        productList = productList + "'/products/xry/xrymarketproduct.html?marketId=" + row.marketId;
        productList = productList + "')";
        productList = productList + ';">' + row.XRY.toUpperCase() + "</a>&nbsp;";
    }

    if (row.TVB.trim().length > 0) {
        productList = productList + '<a href="#" onclick="goTo(';
        productList = productList + "'/products/tvb/tvbmarketproduct.html?marketId=" + row.marketId;
        productList = productList + "')";
        productList = productList + ';">' + row.TVB.toUpperCase() + "</a>&nbsp;";
    }

    if (row.DMA.trim().length > 0) {
        productList = productList + '<a href="#" onclick="goTo(';
        productList = productList + "'/products/DMA/DMAmarketproduct.html?marketId=" + row.marketId;
        productList = productList + "')";
        productList = productList + ';">' + row.DMA.toUpperCase() + "</a>&nbsp;";
    }

    if (row.DMX.trim().length > 0) {
        productList = productList + '<a href="#" onclick="goTo(';
        productList = productList + "'/products/DMX/DMXmarketproduct.html?marketId=" + row.marketId;
        productList = productList + "')";
        productList = productList + ';">' + row.DMX.toUpperCase() + "</a>&nbsp;";
    }

    if (row.MSS.trim().length > 0) {
        productList = productList + '<a href="#" onclick="goTo(';
        productList = productList + "'/products/mss/mssmarketproduct.html?marketId=" + row.marketId;
        productList = productList + "')";
        productList = productList + ';">' + row.MSS.toUpperCase() + "</a>&nbsp;";
    }

    //productList += row.MSS.trim().length > 0 ? row.MSS.toUpperCase() + '&nbsp;' : '';
    //productList += row.DMA.trim().length > 0 ? row.DMA.toUpperCase() + '&nbsp;' : '';
    //productList += row.DMX.trim().length > 0 ? row.DMX.toUpperCase() + '&nbsp;' : '';

    return productList;
}


function populateDataTable(tableName, data) {
    var tableJson;

    if (data.response.status.toUpperCase() === "SUCCESS") {
        data = JSON.stringify(data.report.rows);

        tableJson = $.parseJSON(data);

    } else {

        MKAErrorMessageRtn(data.response.errorMessage[0]);
        tableJson = data;
    }

    var table = $("#" + tableName).DataTable();

    table.clear().draw();

    table.rows.add(tableJson).draw();
     
    table.columns.adjust().draw();
    $.unblockUI();
}

//ajax error function
function genericAjaxError(jqXhr, textStatus, errorThrown) {

    MKAErrorMessageRtn(errorThrown);

}

function addZero(n) {
    return n < 10 ? '0' + n : '' + n;
}

function buildTechMenu(selectedItem) {

    var menuItems = '';

    menuItems += '<h1><a href="/admin/login/dashboard.html?MenuItem=true">MKA Internal Media Site</a></h1>';
    menuItems += '<nav role="navigation" style="margin-top:20px">';

    menuItems += '<ul>';
    menuItems += buildGenericReportsLink2(selectedItem);
    menuItems += '       <li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Products") + ' href="" role="button" aria-expanded="false">Products <span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '              <ul class="dropdown-menu" role="menu">';
    menuItems += productDashboard('mrr');
    menuItems += productDashboard('xry');
    menuItems += productDashboard('tvb');
    //menuItems += productDashboard('mss');
    menuItems += productDashboard('dma');
    menuItems += '              </ul>';
    menuItems += '        </li>';
    menuItems += '        <li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "TechTools") + ' role="button" aria-expanded="false">Tools <span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '              <ul class="dropdown-menu" role="menu">';
    menuItems += '                  <li style="display:block;"><a href="/admin/techtools/techtoolsdashboard.html?MenuItem=true">Tech Tools</a></li>';
    menuItems += '                  <li style="display:block;"><a href="/admin/email/emaillist.html?MenuItem=true">Email Tool</a></li>';
    menuItems += '                  <li style="display:block;"><a href="/admin/news/newslist.html?MenuItem=true">News Tool</a></li>';
    menuItems += '                  <li style="display:block;"><a href="/admin/techtools/matchednotification/matchednotificationlist.html?MenuItem=true">Matched Notification Tool</a></li>';

    menuItems += '                  <li class="dropdown" style="display:block"><a href="#" role="button" aria-expanded="true">MRR <span style="margin-right:10px;" class="caret"></span></a>'
    menuItems += '                      <ul class="dropdown-menu" style="margin-left:60px;" role="menu">';
    menuItems += '                          <li style="display:block;"><a href="/products/mrr/mrrarchiverollover.html?MenuItem=true">MRR Rollover</a></li>';
    menuItems += '                          <li style="display:block;"><a href="/products/mrr/mrrmarkethistorydatamatrix.html?MenuItem=true">MRR Market History Maintenance</a></li>';
    menuItems += '                          <li style="display:block;"><a href="/products/mrr/mrrstationownerchanged.html?MenuItem=true">MRR Station Ownership Change</a></li>';
    menuItems += '                      </ul>';
    menuItems += '                  </li>';

    menuItems += '                  <li class="dropdown" style="display:block"><a href="#" role="button" aria-expanded="true">XRY <span style="margin-right:10px;" class="caret"></span></a>'
    menuItems += '                      <ul class="dropdown-menu" style="margin-left:60px;" role="menu">';
    menuItems += '                          <li style="display:block;"><a href="/products/xry/xrymarkethistorydatamatrix.html?MenuItem=true">XRY Market History Maintenance</a></li>';
    menuItems += '                          <li style="display:block;"><a href="/products/xry/xrystationownerchanged.html?MenuItem=true">XRY Station Ownership Change</a></li>';
    menuItems += '                      </ul>';
    menuItems += '                  </li>';

    menuItems += '                  <li class="dropdown" style="display:block"><a href="#" role="button" aria-expanded="true">TVB <span style="margin-right:10px;" class="caret"></span></a>'
    menuItems += '                      <ul class="dropdown-menu" style="margin-left:60px;" role="menu">';
    menuItems += '                          <li style="display:block;"><a href="/products/tvb/tvbMarketHistoryDataMatrix.html?MenuItem=true">TVB Market History Maintenance</a></li>';
    menuItems += '                      </ul>';
    menuItems += '                  </li>';

    //menuItems += '                  <li style="display:block;"><a href="/Admin/FAQ/faqlist.html?MenuItem=true">Media FAQ</a></li>';

    menuItems += '                  <li style="display:block;"><a href="/Admin/TOTP/totpdevicelist.html?MenuItem=true">Admin Device Management</a></li>';
    menuItems += '                  <li style="display:block;"><a href="/Admin/LoadProfile/loadprofile.html?MenuItem=true">Admin Load Profile</a></li>';
    menuItems += '                  <li style="display:block;"><a href="/Admin/TechTools/passedQAList.html?MenuItem=true">Passed QA List</a></li>';
    menuItems += '                  <li style="display:block;"><a href="/admin/techtools/encryptdecrypt.html?MenuItem=true">Encryption/Decryption Tool</a></li>';

    menuItems += '              </ul>';
    menuItems += '        </li>';
    menuItems += productDashboard('');
    menuItems += '        <li><a ' + getSelectedItemClass(selectedItem, "Logout") + 'href="#" onclick="logout()">Logout</a></li>';
    menuItems += '    </ul>';
    menuItems += '</nav>';

    $("#menu").html(menuItems);

}

function removeCharacter(object, charToRemove) {

    RegExp.escape = function (s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    };

    var reg = new RegExp(RegExp.escape(charToRemove), "g");

    var sValue = object.replace(reg, "");

    return sValue;

}
function getYearList() {

    var str = '';
    str = '<option value="">-- Select a Year</option>';

    var thisYear = (new Date()).getFullYear();

    for (var i = thisYear; i > (thisYear - 10) ; i--) {

        str = str + '<option ';
        if (i == thisYear) {
            str = str + " selected ";
        }
        str = str + ' value="' + i + '">' + i + '</option>';
    }

    $("#ddlYear").html(str);

    try {
        convertToChosenSelect("ddlYear", gChosenParams.allowSearchContains, gChosenParams.allowSplitWordSearch);
    }
    catch (err) {
        console.log("This page is not converted to use Chosen selects yet.");
    }

    if (typeof paramRevenueYear == 'undefined' || paramRevenueYear == null) {
        return;
    }

    if (paramRevenueYear.length > 0) {
        $("#ddlYear").val(paramRevenueYear);
    }


}
function getPeriodList(inType, inDefaultSelect) {

    if (!inType) {
        inType = 'all';
    }

    if (!inDefaultSelect) {
        inDefaultSelect = "";
    }

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var thisMonth = (new Date()).getMonth();

    if (inDefaultSelect.toLowerCase() == "priorperiod")
    {
        thisMonth = thisMonth - 1;
        if (thisMonth == -1)
        {
            thisMonth = 11; //priorperiod
            var newYear = $("#ddlYear option:selected").index() + 1;
            $("#ddlYear")[0].selectedIndex = newYear;
        }
    }

    var str = '';
    str = '<option value="">-- Select a Period</option>';

    if (inType == 'months' || inType == 'all') {
        for (var i = 1; i <= 12; i++)
        {

            str = str + '<option ';

            if (i - 1 == thisMonth) {
                str = str + " selected ";
            }

            str = str + ' value="' + (i < 10 ? '0' + i.toString() : i.toString()) + '">' + monthNames[i - 1] + '</option>';
        }
    }

    if (inType == 'all') {
        str = str + '<option value="">-----------</option>';
    }

    var thisQuarter = -1;
    if (inDefaultSelect.toLowerCase() == 'quarter') {
        if (thisMonth == 0 || thisMonth == 1 || thisMonth == 2) {
            thisQuarter = 1;
        }

        if (thisMonth == 3 || thisMonth == 4 || thisMonth == 5) {
            thisQuarter = 2;
        }

        if (thisMonth == 6 || thisMonth == 7 || thisMonth == 8) {
            thisQuarter = 3;
        }

        if (thisMonth == 9 || thisMonth == 10 || thisMonth == 11) {
            thisQuarter = 4;
        }
    }

    if (inType == 'quarters' || inType == 'all') {
        for (var i = 1; i <= 4; i++) {
            str = str + '<option value="Q' + i.toString();

            if (thisQuarter == i) {
                str = str + " selected ";
            }

            str = str + '">Quarter - ' + i.toString() + '</option>';
        }
    }

    $("#ddlPeriod").html(str);


    try {
        convertToChosenSelect("ddlPeriod", gChosenParams.allowSearchContains, gChosenParams.allowSplitWordSearch);
    }
    catch (err) {
        console.log("This page is not converted to use Chosen selects yet.");
    }


    if (typeof paramRevenuePeriod == "undefined" || paramRevenuePeriod == null) {
        return;
    }

    if (paramRevenuePeriod.length > 0) {
        $("#ddlPeriod").val(paramRevenuePeriod);
    }


}

//This will trigger the chosen:update event when "val(new_val)" called
//only if the object has a chosen version of the object.
(function ($) {
    var originalVal = $.fn.val;
    $.fn.val = function () {

        var prev;

        if (arguments.length > 0) {
            prev = originalVal.apply(this, []);
        }

        var result = originalVal.apply(this, arguments);

        if ($(this).selector != undefined && $(this).selector.length > 0) {
            var chosenExists = checkIfChosenExistsForSelector($(this).selector);
            if (chosenExists) {
                $(this.selector).trigger('chosen:updated');
            }
        }

        return result;

    };
})(jQuery);

function convertToChosenSelect(selectName, allowSearchContains, allowSplitWordSearch) {

    //This sets up up the properties for the Chosen dropdown.
    //All of the other properties are set to default values.
    $("#" + selectName).chosen({
        inherit_select_classes: true,
        //This defaults to false for allowing contains searches. 
        //Passing in the parameter in case we decide to allow contains searches.
        search_contains: allowSearchContains,
        //This allows for searching on word breaks. 
        //This is different from a contains search since it only looks at the beginning of words.
        //This defaults to true. Passing the value in because we only want it to start with 
        //beginning of the first word. We can pass true to turn on the feature.
        enable_split_word_search: allowSplitWordSearch
    });

    //This code reloads the dropdown to pick up new values.
    $("#" + selectName).trigger("chosen:updated");

}

function checkIfChosenObjectExists(object) {

    try {
        if ($("#" + object.id + "_chosen").length > 0) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        return false;
    }

}

function determineLocationOfDMAReport(url, title) {


    if (!gHideHeader == false && gHideHeader == "true" && url.toLowerCase().indexOf("direct=true") == -1) {
        url += "&hideHeader=true";
        window.location = url;
        $("#componentDialog").dialog({ "title": title });
    }
    else {
        window.location = url;
    }
}

function checkIfChosenExistsForSelector(selector) {

    try {

        if ($(selector + "_chosen").length > 0) {
            return true;
        } else {
            return false;
        }
    }
    catch (err) {
        return false;
    }
}

function scrollToAnchor(aid) {
    var aTag = $("a[name='" + aid + "']");
    $('html,body').animate({ scrollTop: aTag.offset().top }, 'slow');
}

function resetDataTableDOM(tableToDestroyId, divOfTableId, classOfTable) {

    if (!classOfTable) {
        classOfTable = "stripe";
    }

    //If you want to repopulate the datatable with new columns and data,
    //you need to remove the datatable from the DOM. 
    //The .remove function will remove it.
    $("#" + tableToDestroyId).remove();

    //Once you remove the datatable from the DOM, you need add the HTML back to the page.
    //I added a name to the DIV that has the table html. I used the datatable name plus added "Holder".
    //The following coding adds the table back.
    $("#" + divOfTableId).html('<table id="' + tableToDestroyId + '" class="' + classOfTable + '"></table>');

}

//added this function to add captions to a datatable
//did not like the looks because the datatable put the caption under 
//the search filter and # of items per page.
//leaving the code here in case want to use in the future
function resetDataTableDOMWithCaption(tableToDestroyId, divOfTableId, classOfTable, caption) {

    if (!classOfTable) {
        classOfTable = "stripe";
    }

    //If you want to repopulate the datatable with new columns and data,
    //you need to remove the datatable from the DOM. 
    //The .remove function will remove it.
    $("#" + tableToDestroyId).remove();

    //Once you remove the datatable from the DOM, you need add the HTML back to the page.
    //I added a name to the DIV that has the table html. I used the datatable name plus added "Holder".
    //The following coding adds the table back.
    $("#" + divOfTableId).html('<table id="' + tableToDestroyId + '" class="' + classOfTable + '"><caption style="text-align: center; display: table-caption; caption-side: top; font-size: 1.5em;">'+caption+'</caption></table>');

}

function removeID(inData)
{

        if (!inData) {
            return "";
        }

        var ret = inData;

        // find parens
        var bIDIncluded = false;

        if ((inData.lastIndexOf("(") > -1) && (inData.lastIndexOf(")") > -1)) {
            bIDIncluded = true;
        }

        if (bIDIncluded == true)
        {
            var init = inData.lastIndexOf('(');
            ret = inData.substr(0, init);
        }

        return ret;
}
function getIDFromString(inData)
{
    var init = inData.lastIndexOf('(');
    var fin = inData.lastIndexOf(')');

    ID = inData.substr(init + 1, fin - init - 1);
    return ID;
}
function buildMarketWrapper(inData) {

    if (!inData)
    {
        return "";
    }

    var ret = inData;

    // find parens
    var bIDIncluded = false;

    if (!inData == false) {
        if ((inData.lastIndexOf("(") > -1) &&
            (inData.lastIndexOf(")") > -1)) {
            bIDIncluded = true;
        }
    }

    if (bIDIncluded == true) {
        var ID = '';

        var init = inData.lastIndexOf('(');
        var fin = inData.lastIndexOf(')');

        ID = inData.substr(init + 1, fin - init - 1);

        if (ID.length > 0) {
            if (isNaN(ID) == false) {
                ret = "<a href='#' onclick='window.location=\"/admin/market/marketview.html?marketId=" + ID + "\"'>";
                ret = ret + inData
                ret = ret + "</a>";
            }
        }

    }

    return ret;
}
function buildUserWrapper(inData) {

    if (!inData) {
        return "";
    }

    var bIDIncluded = false;

    var ret = inData;

    // find parens
    var bIDIncluded = false;

    if ((inData.lastIndexOf("(") > -1) &&
        (inData.lastIndexOf(")") > -1)) {
        bIDIncluded = true;
    }

    if (bIDIncluded == true) {
        var ID = '';

        var init = inData.lastIndexOf('(');
        var fin = inData.lastIndexOf(')');

        ID = inData.substr(init + 1, fin - init - 1);

        if (ID.length > 0) {
            if (isNaN(ID) == false) {
                ret = "<a href='#' onclick='window.location=\"/admin/personnel/personnelview.html?personnelID=" + ID + "\"'>";
                ret = ret + inData
                ret = ret + "</a>";
            }
        }

    }

    return ret;
}
function buildStationWrapper(inData) {

    if (!inData)
    {
        return "";
    }

    var ret = inData;

    // find parens
    var bIDIncluded = false;

    if ((inData.lastIndexOf("(") > -1) &&
        (inData.lastIndexOf(")") > -1)) {
        bIDIncluded = true;
    }

    if (bIDIncluded == true) {
        var ID = '';
        inData = inData.replace("REID ", "")
        var init = inData.lastIndexOf('(');
        var fin = inData.lastIndexOf(')');

        ID = inData.substr(init + 1, fin - init - 1);

        if (ID.length > 0) {
            if (isNaN(ID) == false) {
                ret = "<a href='#' onclick='window.location=\"/admin/station/stationview.html?stationId=" + ID + "\"'>";
                ret = ret + inData
                ret = ret + "</a>";
            }
        }

    }

    return ret;
}
function buildOwnerWrapper(inData) {

    if (!inData)
    {
        return "";
    }

    var ret = inData;

    // find parens
    var bIDIncluded = false;

    if ((inData.lastIndexOf("(") > -1) &&
        (inData.lastIndexOf(")") > -1)) {
        bIDIncluded = true;
    }

    if (bIDIncluded == true) {
        var ID = '';

        var init = inData.lastIndexOf('(');
        var fin = inData.lastIndexOf(')');

        ID = inData.substr(init + 1, fin - init - 1);

        if (ID.length > 0) {
            if (isNaN(ID) == false) {
                ret = "<a href='#' onclick='window.location=\"/admin/ownership/ownership.html?ownerId=" + ID + "\"'>";
                ret = ret + inData;
                ret = ret + "</a>";
            }
        }

    }

    return ret;
}
function buildAgencyWrapper(inData) {

    if (!inData)
    {
        return "";
    }

    var ret = inData;

    // find parens
    var bIDIncluded = false;

    if ((inData.lastIndexOf("(") > -1) &&
        (inData.lastIndexOf(")") > -1)) {
        bIDIncluded = true;
    }

    if (bIDIncluded == true) {
        var ID = '';

        var init = inData.lastIndexOf('(');
        var fin = inData.lastIndexOf(')');

        ID = inData.substr(init + 1, fin - init - 1);

        if (ID.length > 0) {
            if (isNaN(ID) == false) {
                ret = "<a href='#' onclick='window.location=\"/Admin/agency/agency.html?AgencyID=" + ID + "\"'>";
                ret = ret + inData
                ret = ret + "</a>";
            }
        }

    }

    return ret;
}
function buildAdvertiserWrapper(inData) {

    if (!inData) {
        return "";
    }

    var ret = inData;

    // find parens
    var bIDIncluded = false;

    if ((inData.lastIndexOf("(") > -1) &&
        (inData.lastIndexOf(")") > -1)) {
        bIDIncluded = true;
    }

    if (bIDIncluded == true) {
        var ID = '';

        var init = inData.lastIndexOf('(');
        var fin = inData.lastIndexOf(')');

        ID = inData.substr(init + 1, fin - init - 1);

        if (ID.length > 0) {
            if (isNaN(ID) == false) {
                ret = "<a href='#' onclick='window.location=\"/Admin/advertiser/advertiser.html?AdvertiserID=" + ID + "\"'>";
                ret = ret + inData
                ret = ret + "</a>";
            }
        }

    }

    return ret;
}

function buildParentAdvertiserWrapper(inData)
{
    if (!inData) {
        return "";
    }

    var ret = inData;

    // find parens
    var bIDIncluded = false;

    if ((inData.lastIndexOf("(") > -1) &&
        (inData.lastIndexOf(")") > -1)) {
        bIDIncluded = true;
    }

    if (bIDIncluded == true) {
        var ID = '';

        var init = inData.lastIndexOf('(');
        var fin = inData.lastIndexOf(')');

        ID = inData.substr(init + 1, fin - init - 1);

        if (ID.length > 0) {
            if (isNaN(ID) == false) {
                ret = "<a href='#' onclick='window.location=\"/Admin/parentadvertiser/parentadvertiser.html?ParentAdvertiserID=" + ID + "\"'>";
                ret = ret + inData;
                ret = ret + "</a>";
            }
        }

    }

    return ret;
}

function buildCustomLink(objectName, data, bSortable, className) {
    var column = new Object();

    var hideHeader = getParameterByName("hideHeader");

    if (!hideHeader == false && hideHeader.toLowerCase() == "true") {
        column = {
            "title": objectName,
            "visible": true,
            "mData": objectName,
            "orderable": bSortable,
            "className": className
        };
        return column;
    }

    if (objectName == "User") {
        column = {
            "title": objectName,
            "visible": true,
            "mRender": function (data, type, row) {
                if (row.User != null) {
                    return buildUserWrapper(row.User);
                } else {
                    return '';
                }
            },
            "orderable": bSortable,
            "className": className
        };
        return column;
    }

    if (objectName == "Contact") {
        column = {
            "title": objectName,
            "visible": true,
            "mRender": function (data, type, row) {
                if (row.Contact != null) {
                    return buildUserWrapper(row.Contact);
                } else {
                    return '';
                }
            },
            "orderable": bSortable,
            "className": className
        };
        return column;
    }

    if (objectName == "Market") {
        column = {
            "title": objectName,
            "visible": true,
            "mRender": function (data, type, row) {
                if (row.Market != null) {
                    return buildMarketWrapper(row.Market);
                } else {
                    return "";
                }
            },
            "orderable": bSortable,
            "className": className
        };
        return column;
    }

    if (objectName == "Owner") {
        column = {
            "title": objectName,
            "visible": true,
            "mRender": function (data, type, row) {
                if (row.Owner != null) {
                    return buildOwnerWrapper(row.Owner);
                } else {
                    return '';
                }
            },
            "orderable": bSortable,
            "className": className
        };
        return column;
    }

    if (objectName == "Station") {
        column = {
            "title": objectName,
            "visible": true,
            "mRender": function (data, type, row) {
                if (row.Station != null) {
                    return buildStationWrapper(row.Station);
                } else {
                    return '';
                }
            },
            "orderable": bSortable,
            "className": className
        };
        return column;
    }

    if (objectName == "Advertiser") {
        column = {
            "title": objectName,
            "visible": true,
            "mRender": function (data, type, row) {
                if (row.Advertiser != null) {
                    return buildAdvertiserWrapper(row.Advertiser);
                } else {
                    return '';
                }
            },
            "orderable": bSortable,
            "className": className
        };
        return column;
    }

    if (objectName == "Agency") {
        column = {
            "title": objectName,
            "visible": true,
            "mRender": function (data, type, row) {
                if (row.Agency != null) {
                    return buildAgencyWrapper(row.Agency);
                } else {
                    return '';
                }
            },
            "orderable": bSortable,
            "className": className
        };
        return column;
    }

    //create same code for Parent Advertiser
    if (objectName == "Parent Advertiser")
    {
        column = {
            "title": objectName,
            "visible": true,
            "mRender": function(data, type, row)
            {
                if (row["Parent Advertiser"] != null)
                {
                    return buildParentAdvertiserWrapper(row["Parent Advertiser"]);
                } else
                {
                    return '';
                }
            },
            "orderable": bSortable,
            "className": className
        };
        return column;
    }

    // standard column build
    column = {
        "title": objectName,
        "visible": true,
        "className": className,
        "mRender": function (data, type, row) {

            var textClassName = "";
            var ret = "";

            // negative numbers

            if (row[objectName] != null &&
                row[objectName] != "" &&
                isNaN(row[objectName].toString().replace("<b>", "").replace("</b>", "").replace("$", "").replace(new RegExp('\,'), '')
                ) == false) {
                if (row[objectName].toString().indexOf("-") > -1) {
                    textClassName = "redText";
                }
            }
            // negative %
            if (row[objectName] != null &&
                row[objectName] != "" &&
                isNaN(row[objectName].toString().replace("<b>", "").replace("</b>", "").replace("%", "").replace(new RegExp('\,'), '')) == false) {
                if (row[objectName].toString().indexOf("%") > -1) {
                    if (row[objectName].toString().indexOf("-") > -1) {
                        textClassName = "redText";
                    }
                }
            }

            ret = row[objectName];

            if (textClassName.length > 0) {
                ret = '<div class="' + textClassName + '">' + row[objectName] + "</div>";
            }

            return ret;
        },
        "orderable": bSortable

    };



    return column;
}

function getReportParameters() {
    //need to modify this to work with all pages including reports and lists
    var reportParams = {}

    $(".report-filter").each(function (index, value) {

        if (this.tagName.toLowerCase() == "select") {
            reportParams[this.id] = this.value;
        } else if (this.tagName.toLowerCase() == "input") {
            switch (this.type.toLowerCase()) {
                case "radio":
                    reportParams[this.id] = this.checked;
                    break;
                case "button":
                    break;
                default:
                    reportParams[this.id] = this.value;
                    break;
            }

        }
    });

    $(":input").each(function(index, value)
    {
        if (this.tagName.toLowerCase() == "select" &&
            $(this).hasClass("report-filter") == false &&
            this.id != "")
        {
            reportParams[this.id] = this.value;
        } else if (this.tagName.toLowerCase() == "input" &&
            $(this).hasClass("report-filter") == false &&
            this.id != "")
        {
            switch (this.type.toLowerCase())
            {
            case "radio":
                reportParams[this.id] = this.checked;
                break;
            case "button":
                break;
            default:
                if (this.id.length > 0)
                {
                    reportParams[this.id] = this.value;
                }
                break;
            }
        }
    });
  
    reportParams["previousPage"] = window.location.href;

    return reportParams;
}

// Back Button Stuff START

function hasBackButtonData() {

    if (getLocalStorage("backButtonData").length > 0) {
        return true;
    } else {
        return false;
    }

}

function buildBackButton() {
    var backButtonData = {};
    var currentPageData = getReportParameters();

    if (getLocalStorage("backButtonData").length > 0) {

        backButtonData = $.parseJSON(getLocalStorage("backButtonData"));
        backButtonData["drilldown"].push(currentPageData);

        if (backButtonData["drilldown"].length > gBackButtonArrayLimit) {
            backButtonData["drilldown"].splice(0, 1);
        }

        setLocalStorage("backButtonData", JSON.stringify(backButtonData));

    } else {

        backButtonData["startingPage"] = window.location.href;
        backButtonData["drilldown"] = new Array();
        backButtonData["drilldown"].push(currentPageData);
        setLocalStorage("backButtonData", JSON.stringify(backButtonData));

    }

}

function initializeBackButton() {
    setLocalStorage("backButtonData", "");
}

function removeBackButtonLastItem() {
    var backButtonData = {};
    if (getLocalStorage("backButtonData").length > 0) {
        backButtonData = $.parseJSON(getLocalStorage("backButtonData"));


        backButtonData["drilldown"].pop();

        if (backButtonData["drilldown"].length > 0) {
            setLocalStorage("backButtonData", JSON.stringify(backButtonData));
        } else {
            initializeBackButton();
        }
    }
}

function removeCurrentPageItem(pageName) {
    var backButtonData = {};
    if (getLocalStorage("backButtonData").length > 0) {
        backButtonData = $.parseJSON(getLocalStorage("backButtonData"));

        for (var i = 0; i < backButtonData["drilldown"].length; i++) {
            var index = backButtonData["drilldown"][i].previousPage.toLowerCase().indexOf(pageName.toLowerCase());
            if (index > -1) {
                backButtonData["drilldown"].splice(i, 1);
                break;
            }
        }

        if (backButtonData["drilldown"].length > 0) {
            setLocalStorage("backButtonData", JSON.stringify(backButtonData));
        }
        else {
            initializeBackButton();
        }

    }
}

function getBackButtonDataByPage(pageName) {

    var backButtonData = {};
    if (getLocalStorage("backButtonData").length > 0) {
        backButtonData = $.parseJSON(getLocalStorage("backButtonData"));


        for (var i = 0; i < backButtonData["drilldown"].length; i++) {
            var index = backButtonData["drilldown"][i].previousPage.indexOf(pageName);
            if (index > -1) {
                return backButtonData["drilldown"][i];
            }
        }

        return {};
    } else {
        return backButtonData;
    }
}

function getBackButtonLastItem() {
    var backButtonData = {};
    if (getLocalStorage("backButtonData").length > 0) {
        backButtonData = $.parseJSON(getLocalStorage("backButtonData"));

        return backButtonData["drilldown"][backButtonData["drilldown"].length - 1];

    } else {
        return backButtonData;
    }
}

function getBackButtonPage() {
    var backButtonData = {};
    var backButtonLink = "";

    if (getLocalStorage("backButtonData").length > 0) {
        backButtonData = $.parseJSON(getLocalStorage("backButtonData"));

        backButtonLink = backButtonData["drilldown"][backButtonData["drilldown"].length - 1].previousPage;

    }

    if (backButtonLink != null && backButtonLink.length > 0) {
        return backButtonLink;
    } else {
        return gDefaultBackPage;
    }
}

function updatedGoBack() {
 

    excludeFromBackButton();
    window.location = getBackButtonPage();
}

function excludeFromBackButton() {
    gExcludeFromBackButton = true;
}

function includeInBackButton()
{
    gExcludeFromBackButton = false;
}

function cleanupBackButton(pageName) {

    if (!pageName) {
        pageName = window.location.pathname;
    }

    var bMenuItem = getParameterByName("MenuItem") == null ? false : getParameterByName("MenuItem");

    removeCurrentPageItem(pageName);

    if (bMenuItem) {
        initializeBackButton();
    }
}

function loadReportParameters() {

    if (hasBackButtonData() == false) {
        return;
    }

    var reportParamData = getBackButtonDataByPage(window.location.pathname);

    for (var key in reportParamData) {

        if (key.indexOf("rdo") > -1) {
            $("#" + key).prop('checked', reportParamData[key]);
        } else {
            $("#" + key).val(reportParamData[key]);
        }

        if (key.indexOf("ddl") > -1) {
            $("#" + key).change();
        }

        if (key.indexOf("rdo") > -1 && reportParamData[key] == true) {
            $("#" + key).change();
        }
    }

    cleanupBackButton(window.location.pathname);

}

function buildBackButtonGeneric() {
    if (gShowHeader == false) {
        $("#btnBack").hide();
        return;
    }
    // cleanup can go here...
    var menuItem = getParameterByName("MenuItem");

    if (getLocalStorage("backButtonData").length > 0 && (!menuItem || menuItem.length == 0)) {
        if ($("#btnBack").length == 0) {
            var backButton = '<input type="button" id="btnBack" class="search-button" value="Back" onclick="updatedGoBack()">';
            $("#fh5co-contact-section").prepend("<div style='padding-right: 35px;float:right; margin-top:10px'>" + backButton + "</div>");
        }
    }
    else {
        $("#btnBack").hide();
    }

}
// Back Button Stuff END

function getReportIdByToken(inValue) {
    //get the item by the key with a value

    for (var i = 0; i < reportObjectArray.length; i++) {

        if (reportObjectArray[i]['reportTitle'].toLowerCase() === inValue.toLowerCase()) {
            return i;
        }
    }

    return null;

}

function getFeatureButtons(featureToken, featureValue, bIsInternalUser) {
    //loop through results to build the buttons
    //active will be remove
    //  will pass featureid and value
    //non-active will be add
    //  will pass featureid, conditionid, value

   
    if (!bIsInternalUser)
    {
        bIsInternalUser = false;
    }

    $.ajax({
        url: ServicePrefix + '/api/Feature/GetFeatureListByTokenValue',
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify({
            "inApiToken": getLocalStorage("APIToken"),
            "inFeatureToken": featureToken,
            "inFeatureValue": featureValue
        }),
        processData: false,
        success: function (data, textStatus, jQxhr) {

            if (data.response.status != "SUCCESS") {
                MKAErrorMessageRtn(data.response.errorMessage[0]);
            }
            else {

                var str = '';

                $.each(data.report.rows, function (index) {
                    var obj = data.report.rows[index];

                    //var parameters = "";
                    var btnValue = "";
                    var sStyle = "";

                    if (obj.Active == true || obj.Active == 1) {
                        btnValue = "Remove " + obj.Description;
                        sStyle = 'background-color:red;margin-bottom:5px;';
                    } else {
                        btnValue = "Add " + obj.Description;
                        sStyle = 'background-color:green;margin-bottom:5px;';
                    }

                    var sButton = '<div class="mka-tooltip"><' +
                        'input type="button" data-feature-active="' +
                        obj.Active +
                        '" data-feature-token="' +
                        featureToken +
                        '" data-feature-id="' +
                        obj.FeatureId +
                        '" data-feature-value="' +
                        featureValue +
                        '" data-feature-canbechanged="' +
                        obj.CanBeChanged +
                        '" data-feature-conditionid="' +
                        obj.ConditionId +
                        '" data-feature-description="' +
                        obj.Description +
                        '" class="feature-button" style="' +
                        sStyle +
                        '" value="' +
                        btnValue +
                        '" onclick="processFeature(this)"/><span class="mka-tooltiptext">' + obj.Tooltip + '</span></div><br/>';

                    //DEV-
                    if (obj["Internal Only"] == true && bIsInternalUser)
                    {
                        str += sButton;
                    } else if (obj["Internal Only"] == false)
                    {
                        str += sButton;
                    }

                });


                $(".featureButtons").html(str);

            }


        },
        error: function (jqXhr, textStatus, errorThrown) {
            genericAjaxError(jqXhr, textStatus, errorThrown);
        }
    });

}

function processFeature(objButton) {
    //check for allowed to be changed
    if ($(objButton).attr("data-feature-canbechanged") == false || $(objButton).attr("data-feature-canbechanged") == 0) {
        bootbox.alert('You are not allowed to modify feature assignments.', function () { });
        return;
    }

    var msg = "";
    var featureActive = false;
    featureActive = $(objButton).attr("data-feature-active");

    if (featureActive == false || featureActive == 0) {
        msg = "Are you sure that you want to add this feature - " + $(objButton).attr("data-feature-description") + "?";
    } else {
        msg = "Are you sure that you want to remove this feature - " + $(objButton).attr("data-feature-description") + "?";
    }

    bootbox.confirm(msg, function (result) {

        if (result) {
            if (featureActive == false || featureActive == 0) {
                //add
                addFeatureAssignment(objButton);
            } else {
                //remove
                deleteFeatureAssignment(objButton);
            }
        } else {
            return;
        }

    });

}

function addFeatureAssignment(objButton) {

    $.ajax({
        url: ServicePrefix + '/api/Feature/AddFeatureByFeatureConditionValue',
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify({
            "inApiToken": getLocalStorage("APIToken"),
            "inFeatureId": $(objButton).attr("data-feature-id"),
            "inConditionId": $(objButton).attr("data-feature-conditionid"),
            "inFeatureValue": $(objButton).attr("data-feature-value")
        }),
        processData: false,
        success: function (data, textStatus, jQxhr) {

            if (data.response.status != "SUCCESS") {
                MKAErrorMessageRtn(data.response.errorMessage[0]);
            }
            else {
                //set active to true
                $(objButton).attr("data-feature-active", "1");
                //update the button name
                $(objButton).prop("value", "Remove " + $(objButton).attr("data-feature-description"));
                //change the background color to red
                $(objButton).css('background-color', 'red');
            }


        },
        error: function (jqXhr, textStatus, errorThrown) {
            genericAjaxError(jqXhr, textStatus, errorThrown);
        }
    });
}

function deleteFeatureAssignment(objButton) {

    $.ajax({
        url: ServicePrefix + '/api/Feature/DeleteFeatureByFeatureValue',
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify({
            "inApiToken": getLocalStorage("APIToken"),
            "inFeatureId": $(objButton).attr("data-feature-id"),
            "inFeatureValue": $(objButton).attr("data-feature-value")
        }),
        processData: false,
        success: function (data, textStatus, jQxhr) {

            if (data.response.status != "SUCCESS") {
                MKAErrorMessageRtn(data.response.errorMessage[0]);
            }
            else {
                //set active to false
                $(objButton).attr("data-feature-active", "0");
                //update the button name
                $(objButton).prop("value", "Add " + $(objButton).attr("data-feature-description"));
                //change the background color to green
                $(objButton).css('background-color', 'green');
            }


        },
        error: function (jqXhr, textStatus, errorThrown) {
            genericAjaxError(jqXhr, textStatus, errorThrown);
        }
    });
}

function replaceAll(inString, inSubstitution, inReplacement) {
    return inString.replace(new RegExp(inSubstitution, "g"), inReplacement);
}

function getInternalMatchedNotification() {
    var url = "?inApiToken=" + getLocalStorage("APIToken");
    url += "&inInternalOnly=1";

    $.ajax({
        url: ServicePrefix + '/api/MatchedNotification/GetNextNotificationForUser' + url,
        dataType: 'json',
        type: 'get',
        contentType: 'application/json',

        processData: false,
        success: function (data, textStatus, jQxhr) {
            if (data.report.rows.length > 0) {
                //the API only returns 1 row. We only want to display 1 message
                var obj = data.report.rows[0];

                var sSubject = obj.Subject;

                if (sSubject != null && sSubject.length > 50) {
                    sSubject = sSubject.substring(0, 51) + "...";
                } else if (sSubject == undefined || sSubject == null) {
                    sSubject = "";
                }

                //this message contains the HTML for displaying the message
                //basically it creates a form with inputs ect to be used when updating the viewed date
                var sMessage =
                    '<form id="notification-form" class="form" role="form"><input type="hidden" id="hidNotificationId" value="' +
                        obj.MatchedNotificationPersonnelId + '"/><label id="lblMessage">' + obj.Message + '</label></form>';


                var modal = bootbox.dialog({
                    title: sSubject,
                    message: sMessage,
                    buttons: [
                        {
                            label: "Ok",
                            className: "btn btn-primary",
                            callback: function () {
                                var iReadNotificationId = modal.find('form #hidNotificationId').val();
                                setMatchedNotificationAsRead(iReadNotificationId);
                            }
                        }
                    ],
                    show: false,
                    onEscape: function () {
                        var iReadNotificationId = modal.find('form #hidNotificationId').val();
                        setMatchedNotificationAsRead(iReadNotificationId);
                        modal.modal("hide");
                    }
                });

                $(modal).find(".modal-body").css("max-height", "500px");
                $(modal).find(".modal-body").css("overflow-y", "auto");

                modal.modal("show");
            }
        },
        error: function (jqXhr, textStatus, errorThrown) {
            genericAjaxError(jqXhr, textStatus, errorThrown);
        }
    });

}

function setMatchedNotificationAsRead(inMatchedNotificationPersonnelId) {

    $.ajax({
        url: ServicePrefix + '/api/MatchedNotification/UpdateMatchedNotificationAsViewed',
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify({
            "inApiToken": getLocalStorage("APIToken"),
            "inMatchedNotificationPersonnelId": inMatchedNotificationPersonnelId
        }),
        processData: false,
        success: function (data, textStatus, jQxhr) {

            if (data.response.status != "SUCCESS") {
                MKAErrorMessageRtn(data.response.errorMessage[0]);
            }
            //else {
            //    //in theory the page should just be loaded already
            //    //shouldn't be anything to do here
            //}
        },
        error: function (jqXhr, textStatus, errorThrown) {
            genericAjaxError(jqXhr, textStatus, errorThrown);
        }
    });
}

function enableWorkArea()
{
    window.open('/admin/login/dashboard.html?MenuItem=true', '_blank', "height=800,width:800");
}
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function setThisQueryToRunLongNoAutoUnBlock()
{
    clearTimeout(unblockHandle);
    $(document).ajaxStart($.blockUI).ajaxStop($.unblockUI);
    //console.log(unblockHandle);
}

function extractParens(inString) {

    var regExp = /\(([^)]+)\)/;
    var matches = regExp.exec(inString);

    if (matches.length == 2)
    {
        return matches[1];
    }
    else
    {
        return inString;
    }

}

function doesUserHaveAccessToFeature(inToken)
{
 
        var url = ServicePrefix + '/api/Feature/GetPersonnelHasFeature';
        url += '?inApiToken=' + getLocalStorage("APIToken");
        url += '&inFeatureToken=' + inToken

        $.ajax({
            url: url,
            dataType: 'json',
            type: 'get',
            contentType: 'application/json',
            processData: false,
            success: function (data, textStatus, jQxhr) {


                if (data.response.status != "SUCCESS") {
                    MKAErrorMessageRtn(data.response.errorMessage[0]);
                }
                else {

                    var bIssue = true;

                    if ((!data.report.rows == true) ||  (data.report.rows.length == 0))
                    {
                        bIssue = true;
                    }

                    $.each(data.report.rows, function (index) {
                        if (data.report.rows[index].personnelHasFeature.toLowerCase() == "yes")
                        {
                            bIssue = false;
                        }
                        else
                        {
                            bIssue = true;
                        }
                    });

                    if (bIssue == true)
                    {
                        bootbox.alert('You do not have access to this area.', function () {
                            window.location = "/admin/login/dashboard.html";
                        });

                    }
                    else
                    {
                        return true;
                    }

                }
            },
            error: function (jqXhr, textStatus, errorThrown) {
                genericAjaxError(jqXhr, textStatus, errorThrown);
            }
        });
 
}
function widerReport()
{

 
    $('th').attr('style', 'font-size:12px !important');
 
 
}

function convertMontNumberToText(inMonth)
{
    var sInMonthText = String(inMonth);

    var monthText = "";

    switch(sInMonthText)
    {
        case "1":
            monthText = "January";
            break;
        case "2":
            monthText = "February";
            break;
        case "3":
            monthText = "March";
            break;
        case "4":
            monthText = "April";
            break;
        case "5":
            monthText = "May";
            break;
        case "6":
            monthText = "June";
            break;
        case "7":
            monthText = "July";
            break;
        case "8":
            monthText = "August";
            break;
        case "9":
            monthText = "September";
            break;
        case "10":
            monthText = "October";
            break;
        case "11":
            monthText = "November";
            break;
        case "12":
            monthText = "December";
            break;
        
    }

    return monthText;
}
