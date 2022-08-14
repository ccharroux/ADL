const gMediaTypeRadio = "RADIO";
const gMediaTypeTelevision = "TELEVISION";
const gMediaTypeNewspapers = "NEWSPAPERS";
const gMediaTypeOutOfHome = "OUT OF HOME";
const gMediaTypeNetwork = "NETWORK";
const gMediaTypeSurvey = "SURVEY";

const cSystemAdminText = "systemadmin";
const cOwnerText = "owner";
const cManagerText = "manager";
const cCaregiverText = "caregiver";
const cPatientText = "patient";

const cSystemAdmin = "1";
const cOwner = "2";
const cManager = "3";
const cCaregiver = "4";
const cPatient = "5";

 

var startLocation = "";

if (window.location.toString().toLowerCase().indexOf("pixxsports") > -1)
{
    startLocation = "http://www.pixxsports.com/";
}

function functionalityNotAvailable ()
{
    bootbox.alert('Functionality coming soon!!!', function () {}); 
}
 
const gChosenParams = {
    allowSearchContains: true,
    allowSplitWordSearch: false
}
var gShowHeader = true;
var gAJAXError = false;
const companyName = "ADL System";

var dateOfCode = new Date();

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
        // return;
        $('body').prepend('<div id="fh5co-offcanvas" />');
        $('#fh5co-offcanvas').prepend('<ul id="fh5co-side-links">');
        $('body').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle"><i></i></a>');
        $('#fh5co-offcanvas').append($('#fh5co-header nav').clone());

    };


    var burgerMenu = function () {

        $('body').on('click', '.js-fh5co-nav-toggle', function (event) {
            var $this = $(this);
            //return;
            
            $('body').toggleClass('fh5co-overflow offcanvas-visible');
            $this.toggleClass('active');
            event.preventDefault();

        });

        $(window).resize(function () {
            //return;

            if ($('body').hasClass('offcanvas-visible')) {
                $('body').removeClass('offcanvas-visible');
                $('.js-fh5co-nav-toggle').removeClass('active');
            }
        });

        $(window).scroll(function () {
            // return;
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
var gDataTableDefaultRows = 10;
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

    $("#fh5co-page").find('a').text(companyName);
    $("title").text(companyName);
    //$(document).ajaxStart(function ( ) {


    //});

    $(document).ajaxSuccess(function () {
        gAJAXError = false;
    });

    $(document).ajaxError(function (event, jqxhr, inSettings, thrownError)
    {
        window.localStorage.setItem("AJAXErrorURL", inSettings.url);


        if (!inSettings.data == false)
        {
            if (inSettings.data.toString().indexOf("Password") > -1) {
                AJAXErrorData = new Object();
            }

            window.localStorage.setItem("AJAXErrorData", inSettings.data);
        }
 
        gAJAXError = true;
    });

    //setTimeout(resetHeaderBackButton, 1500);

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

    //var bResetHeaderBackButtonAlreadyRun = false;

    $(document).ajaxStop(function () {
        //alert(1);
        resetHeaderBackButton();
        bResetHeaderBackButtonAlreadyRun = true;
    });

    function resetHeaderBackButton()
    {
        return;

        if (bResetHeaderBackButtonAlreadyRun == false && apiToken != "")
        {
 
 
            if (unblockHandle != null  )
            {
                $.blockUI();
            }

            gShowHeader = showHeader();

 
            if (unblockHandle != null) {
                setTimeout("$.unblockUI();", 1000);
            }
                //$.unblockUI();
                //setThisQueryToRunLongNoAutoUnBlock();
 
        }
    }
 
    $(document).ajaxStart(function () {

    });

    // build a generic back button...

    var nonLoggedInPages = new Array();
    nonLoggedInPages.push('/admin/password/reset.html');
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
        unblockHandle = null;
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

/*     $(window).on("beforeunload", function (e) {
        if (gExcludeFromBackButton == false) {
            buildBackButton();
        }

        gExcludeFromBackButton = false;
    }); */

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

        setTimeout(instantiatePopupComponent, 1000);
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
    //    <link rel="stylesheet" href="../..//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
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

    link.href = 'https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css';

    // Append link element to HTML head 
 
    head.appendChild(link);

    return;

    // favorites only
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
    //$("body").append('&nbsp;<div class="workArea"><input id="enableWorkArea" type="button"  value="Work Area" onclick="enableWorkArea();"/></div>');

    getFavoritesForQuickList();
    setTimeout(buildFavoritesDialog, 250);

    buildPopupComponent();

}
function getFavoritesForQuickList() {

    return;
    $("#favoritesQuickList").append('<li class="display-block"><a href="../../admin/login/dashboard.html">Favorites Page</a></li>');

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
                GeneralErrorMessageRtn(data.response.errorMessage[0]);
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
    // var environment = "&nbsp;PRODUCTION as of " + release['PRODUCTION'];

    // var loc = window.location.toString().toLocaleLowerCase();


    // if (loc.indexOf("devmediainternal.millerkaplan.com") > -1) {
    //     environment = "&nbsp;DEV as of " + release["DEV"];;
    // }

    // if (loc.indexOf("localhost") > -1) {
    //     environment = "&nbsp;LOCAL as of " + release["DEV"];
    // }

    // if (loc.indexOf("stagingmediainternal.millerkaplan.com") > -1) {
    //     environment = "&nbsp;STAGING as of " + release["STAGING"];
    // }

    // if (loc.indexOf("demomediainternal.millerkaplan.com") > -1) {
    //     environment = "&nbsp;DEMO as of " + release["DEMO"];
    // }

    return "&nbsp;";

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

    var locationToRedirect = "../../admin/login/login.html";
 
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
function ADLErrorMessage(message, url)
{
    bootbox.alert('Process Failed.\n\r\n\r' + message, function () {

        if(message.toLowerCase().indexOf("token expired") > -1 )
        {
            goTo("../../admin/login/login.html");
        }
        else
        {
            if (!url == false)
            {
                goTo(url);
            }
        }

     });
}

function GeneralErrorMessageRtn(message, preCallback, postCallback) {
    
    ADLErrorMessage(message);
    return;


    var newMessage = "";

    var AJAXErrorURL = window.localStorage.getItem("AJAXErrorURL");
    var AJAXErrorData = window.localStorage.getItem("AJAXErrorData");


    if (!AJAXErrorData == false)
    {
        if (AJAXErrorData.toString().indexOf("Password") > -1)
        {
            AJAXErrorData = new Object();
        }
    }
    
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

    if (!AJAXErrorData == false)
    {
        if (AJAXErrorData.toString().indexOf("Password") > -1)
        {
            AJAXErrorData = new Object();
        }
    }

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

        bootbox.alert('Process Failed.\n\r\n\r' + message, function () {

                if (!postCallback == false) {
                    postCallback();
                }
            });

        setTimeout(function () { sendErrorEmail(message, AJAXErrorURL, AJAXErrorData) }, 1000);

    }

}

function sendErrorEmail(message, AJAXErrorURL, AJAXErrorData)
{

    if (!AJAXErrorData == false)
    {
        if (AJAXErrorData.toString().indexOf("Password") > -1)
        {
            AJAXErrorData = new Object();
        }
    }
 
    if (AJAXErrorURL == null)
    {
        return;
    }

    /*
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
    */

}
function buildDashboard()
{
    setLocalStorage("currentFacility", $("#ddlFacilityAccess").val());

    var facilityText = $("#ddlFacilityAccess").val().toString();
    var facilityArray = facilityText.split("|");

    setLocalStorage("currentRole", facilityArray[1]);

    buildMainMenu("");
    
    getFacilityDashboardDataByDay();
    getFacilityADLLogByDay();
 
}

function buildMainMenu(selectedItem) {

    var menuItems = '';
    var menuItemsLeft = '';

    menuItemsLeft += '<h1><a href="../../admin/login/dashboard.html?MenuItem=true">' + companyName + '</a></h1>';
    //menuItemsLeft += '<div style="top: 55px;position: fixed;margin-bottom:20px">';
    //menuItemsLeft += '<span style="color: white;">' + getLocalStorage("firstName") + ' ' + getLocalStorage("lastName");
    //menuItemsLeft += '</span>';
    
    // create masterlist of facilies
    // only show it on the dashboard
    
    var currentPage = window.location.toString().toLowerCase();
    var currentRole = getLocalStorage("currentRole");
  

    // build access list only if you are 
    // on the dashboard page
    if (currentPage.indexOf("dashboard.html") > -1)
    {
        var accessHTML = "";
        //menuItemsLeft += '<div style="padding-top:12px"><select id="ddlFacilityAccess" onchange="buildDashboard();">';
        var access = JSON.parse(getLocalStorage("fa"));
        var ctr = 0;
        var str = "";
        var key = "";
        $.each(access, function (index) 
        {
            ctr++;
            key = access[index].FacilityId + '|' + access[index].Role;
            accessHTML += '<option ';
            if (key == getLocalStorage("currentFacility"))
            {
                accessHTML += " SELECTED ";
            }
            accessHTML += 'value="' + access[index].FacilityId + '|' + access[index].Role +'">' + access[index].Facility + ' - ' + access[index].Role + ' </option>';
        });
        // menuItemsLeft += '</select></div>'; 
        $("#ddlFacilityAccess").html(accessHTML);
    }

    menuItemsLeft += '</div>'; 
    
    // now start the menu items

    menuItems += '<nav role="navigation" style="margin-top:20px">';

    

    menuItems += '<ul>';
    menuItems += buildGenericReportsLink(selectedItem);
 

    
    // daily work area
    menuItems += '        <li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "ADL") + '">Patients <span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '              <ul class="dropdown-menu" role="menu">';
    menuItems += '                  <li style="display:block"><a href="../../admin/adl care/list.html?MenuItem=true">Care</a></li>';
    
    // Patient Maintenance
    if (currentRole == cSystemAdminText || 
        currentRole == cOwnerText || 
        currentRole == cManagerText)
    {
        menuItems += '                  <li style="display:block"><a href="../../admin/users/list.html?MenuItem=true&patientsOnly=true">Maintenance</a></li>';
    }
    // patient scheduling
    if (currentRole == cSystemAdminText || 
        currentRole == cOwnerText )
    {
        menuItems += '                  <li style="display:block"><a href="../../admin/patient scheduling/list.html?MenuItem=true">Scheduling</a></li>';
    }    
    menuItems += '              </ul>';
    menuItems += '        </li>';
 

 
    // SYSTEM SETTINGS
    menuItems += '        <li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Admin") + ' role="button" aria-expanded="false">System Settings <span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '              <ul class="dropdown-menu" role="menu">';

    // facility maintenance
    if (currentRole == cSystemAdminText )
    {    
        menuItems += '                  <li style="display:block;"><a href="../../admin/facility/list.html?MenuItem=true">Facility Maintenance</a></li>';
    }
    if (currentRole == cOwnerText )
    {    
        menuItems += '                  <li style="display:block;"><a href="../../admin/facility/item.html?facilityId=';
        menuItems += getLocalStorage("currentFacility").split('|')[0];
        menuItems += '">Facility Maintenance</a></li>';
    }
    // adl maintenance
    if (currentRole == cSystemAdminText)
    {
        menuItems += '                  <li style="display:block;"><a href="../../admin/adl system/list.html?MenuItem=true">ADL Maintenance</a></li>';
    }
    // form maintenance
    if (currentRole == cSystemAdminText)
    {
        menuItems += '                  <li style="display:block;"><a href="../../admin/form system/list.html?MenuItem=true">Form Maintenance</a></li>';
    }

    // adl facility assignment
    if (currentRole == cSystemAdminText || 
        currentRole == cOwnerText )
    {    
        menuItems += '                  <li style="display:block;"><a href="../../admin/adl facility assignment/list.html?MenuItem=true">ADL Facility Assignment</a></li>';
    }

    // form facility assignment
    if (currentRole == cSystemAdminText || 
        currentRole == cOwnerText )
    {    
        menuItems += '                  <li style="display:block;"><a href="../../admin/form facility assignment/list.html?MenuItem=true">Form Facility Assignment</a></li>';
    }

    // user maintenance
    if (currentRole == cSystemAdminText || 
        currentRole == cOwnerText || 
        currentRole == cManagerText)
    { 
           menuItems += '                  <li style="display:block;"><a href="../../admin/users/list.html?Admin=true&MenuItem=true">User Maintenance</a></li>';
    }
 
 
    menuItems += '                  <li style="display:block;"><a href="../../admin/users/item.html?userId='+ getLocalStorage("userId") +'&MenuItem=true">Profile</a></li>';
    menuItems += '              </ul>';
    menuItems += '        </li>';
 
    // NEW logout

    menuItems += '        <li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "User") + ' role="button" aria-expanded="false">' + getLocalStorage("firstName") + ' ' + getLocalStorage("lastName") + ' <span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '              <ul class="dropdown-menu" role="menu">';
    menuItems += '                  <li style="display:block;"><a href="../../admin/users/item.html?profileMaintenance=true&userId='+ getLocalStorage("userId") +'&MenuItem=true">Profile</a></li>';
    menuItems += '                  <li style="display:block;"><a ' + getSelectedItemClass(selectedItem, "Logout") + 'href="#" onclick="logout()">Logout</a></li>';
    menuItems += '              </ul>';
    menuItems += '        </li>';

    // logout
    
    menuItems += '    </ul>';
    menuItems += '</nav>';

    $("#menu").html(menuItemsLeft + menuItems);
    $("#fh5co-side-links").html(menuItems);
}


function buildCancelMenu(selectedItem)
{
    var menuItems = '';

    menuItems += '<h1><a href="../../admin/login/dashboard.html?MenuItem=true">ADL System</a></h1>';
    menuItems += '<nav role="navigation" style="margin-top:20px">';
    menuItems += '<ul>';

    menuItems += '        <li><a ' + getSelectedItemClass(selectedItem, "Cancel") + 'href="#" onclick="updatedGoBack()">Cancel</a></li>';

    menuItems += '</ul>';
    menuItems += '</nav>';

    $("#menu").html(menuItems);
}


function buildGenericReportsLink(selectedItem) {
    var strOut = '';
    var style = '';

    strOut = '<a ' + getSelectedItemClass(selectedItem, "Reports") + ' href="../../utilities/genericreport/genericReportList.html?MenuItem=true">Reports</a>';

    return '<li style="' + style + '">' + strOut + '</li>';
}
function buildGenericReportsLink2(selectedItem) {
    var strOut = '';
    var style = '';

    strOut = '<a ' + getSelectedItemClass(selectedItem, "Reports") + ' href="../../utilities/genericreport/genericReportList.html?MenuItem=true">All Reports</a>';

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

 

function populateDataTable(tableName, data) {
 
    var tableJson;

    //if (data.response.status.toUpperCase() === "SUCCESS") {
        //data = JSON.stringify(data.report.rows);
        console.log(data);

        tableJson = data.rows; 
        //$.parseJSON(data);

    //} else {
//
  //      GeneralErrorMessageRtn(data.response.errorMessage[0]);
    //    tableJson = data;
    //}

    var table = $("#" + tableName).DataTable();

    table.clear().draw();

    table.rows.add(tableJson).draw();
     
    table.columns.adjust().draw();
    $.unblockUI();
 
}

//ajax error function
function genericAjaxError(jqXhr, textStatus, errorThrown) {

    GeneralErrorMessageRtn(errorThrown);

}

function addZero(n) {
    return n < 10 ? '0' + n : '' + n;
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

    for (var i = thisYear; i > (thisYear - 20) ; i--) {

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
    if (!inData)
    {
        return "";
    }

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
function buildIndustryWrapper(inData) {

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
                ret = "<a href='#' onclick='window.location=\"/Admin/industry/industry.html?IndustryId=" + ID + "\"'>";
                ret = ret + inData
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
function buildParentAgencyWrapper(inData) {

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
                ret = "<a href='#' onclick='window.location=\"/Admin/parentagency/parentagency.html?ParentAgencyID=" + ID + "\"'>";
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

    //create same code for Parent Agency
    if (objectName == "Parent Agency") {
        column = {
            "title": objectName,
            "visible": true,
            "mRender": function (data, type, row) {
                if (row["Parent Agency"] != null) {
                    return buildParentAgencyWrapper(row["Parent Agency"]);
                } else {
                    return '';
                }
            },
            "orderable": bSortable,
            "className": className
        };
        return column;
    }

    //create same code for Industry
    if (objectName == "Industry") {
        column = {
            "title": objectName,
            "visible": true,
            "mRender": function (data, type, row) {
                if (row["Industry"] != null) {
                    return buildIndustryWrapper(row["Industry"]);
                } else {
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
            var adjustedData = "";

            if (row[objectName] != null && row[objectName] != "")
            {
                adjustedData = replaceAll(row[objectName].toString(), "<br>", "");
                adjustedData = replaceAll(row[objectName].toString(), "<br/>", "");
                adjustedData = replaceAll(row[objectName].toString(), "<b>", "");
                adjustedData = replaceAll(row[objectName].toString(), "</b>", "");
                adjustedData = replaceAll(row[objectName].toString(), "$", "");
                adjustedData = replaceAll(row[objectName].toString(), ",", "");
            }
            adjustedData = adjustedData.replace("$", "");

             if (row[objectName] != null &&
                row[objectName] != "" &&
                isNaN(adjustedData) == false)
            {
                if (row[objectName].toString().indexOf("-") > -1)
                {
                    textClassName = "redText";
                }
            }
             //console.log(adjustedData);
            // negative %
            if (row[objectName] != null &&
                row[objectName] != "" //&&
               // isNaN(adjustedData) == false
                // isNaN(row[objectName].toString().replace("<b>", "").replace("</b>", "").replace("%", "").replace(new RegExp('\,'), '')) == false
            )
            {
                if (row[objectName].toString().indexOf("%") > -1)
                {
                    if (row[objectName].toString().indexOf("-") > -1)
                    {
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






function loadReportParameters() {

 

}

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
                GeneralErrorMessageRtn(data.response.errorMessage[0]);
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
                GeneralErrorMessageRtn(data.response.errorMessage[0]);
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
                GeneralErrorMessageRtn(data.response.errorMessage[0]);
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
    return;

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
                GeneralErrorMessageRtn(data.response.errorMessage[0]);
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
    unblockHandle = null;
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
    return true;

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
                    GeneralErrorMessageRtn(data.response.errorMessage[0]);
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

function productScheduleValidation(inProductId, inReportingPeriodId, inSubmittingPeriodId) {

    var sErrorMessage = "";

    //valid dates ReportingPeriodId,SubmittingPeriodId
    //MRR, 1,1 -one month at a time
    //MRR, 1,2 -three months at a time
    //MRR, 2,2 -one quarter at a time
    //MRR, 2,3 -two quarters at a time
    //XRY, 1,1 -one month at a time
    //TVB, 1,1 -one month at a time


    switch (inProductId.toUpperCase()) {
        //case MRR:
        //Currently MRR Market Product on page: mrrmarketproduct.html loads only the
        //Reporting/Submitting period that is allowed in the Report Period dropdown.
        //No validation needed.
        case "XRY":
            if (inReportingPeriodId != "1") {
                sErrorMessage = "Invalid Reporting Frequency selected for product - XRY. Valid Reporting Frequency for this product include: Monthly";
                break;
            }

            if (inSubmittingPeriodId != "1") {
                sErrorMessage = "Invalid Submitting Frequency selected for product - XRY. Valid Submitting Frequency for this product include: Monthly";
                break;
            }

            break;
        default:
            sErrorMessage = "Invalid product passed for Reporting/Submitting market product validation for product - " + inProductId;
            break;
        //case MSS:
        //Currently code on page mssmarketproduct.html
        //defaults Reporting/Submitting period to -One month at a time
        //when updating/enabling MSS product.
        //case TVB:
        //Currently code on page: tvbmarketproduct.html
        //defaults Reporting/Submitting period to -One month at a time
        //when updating/enabling TVB product.
        //case DMA/DMX
        //Currently code on page dmamarketproduct.html and dmxmarketproduct.html
        //defaults Reporting/Submitting period to -One month at a time
        //when updating/enabling DMA/DMX

    }

    if (sErrorMessage != "") {
        bootbox.alert(sErrorMessage, function () {
        });
        return false;
    }

    return true;

}

// ADL NEW
function currentDate() {
    var d = new Date();
    var currentMonth = d.getMonth() + 1;
    var currentDay = d.getDate(); // getDay() = day of week
    var currentYear = d.getFullYear();
    return currentMonth + "/" + currentDay + "/" + currentYear;
}

function loadPatients(control)
{
    console.log("loading patients");
    $("#"+control).html("");

    var str = "<option value='" + 1 + "'>" + "Alino, Alex"   + "</option>";
    str = str +  "<option selected='selected' value='" + 1 + "'>" + "Charroux, Carl"   + "</option>";
    str = str + "<option value='" + 1 + "'>" + "Dones, Noel"   + "</option>";

    $("#"+control).append(str);
 
}

function getPatientListByFacility(sourceControl, destinationControl, bLoadADLS)
{
    if (!bLoadADLS == false)
    {
        bLoadADLS = true;
    }

    var inURL = ServicePrefix + "/usermember/ListByFacility/" + getTokenInput();
    inURL = inURL + "&infacilityid=" + getFacilityFromControl(sourceControl);
    inURL = inURL + "&inroleid=" + cPatient;

    var str = "";

    $.ajax({
        url: inURL,
        dataType: 'json',
        type: 'get',
        contentType: 'application/json',
        processData: false,
        success: function (data, textStatus, jQxhr) {

            if (data.response.status != "SUCCESS") {
                GeneralErrorMessageRtn(data.response.errorMessage[0]);
            }
            else 
            {
                $.each(data.rows, function (index) 
                {
                    str += '<option value="' + data.rows[index].UserId +'">' + data.rows[index].UserName + '</option>';
                });
            }
            $("#" + destinationControl).html(str);
            
            if (bLoadADLS == true)
            {            
                getPatientADLS();
            }
        },
        error: function (jqXhr, textStatus, errorThrown) {
            genericAjaxError(jqXhr, textStatus, errorThrown);
        }
    });


}

function loadFacilities(control, bAddAll, callback)
{

    if (!bAddAll)
    {
        bAddAll = false;
    }
    
    $("#"+control).html("");

    var accessRaw = getLocalStorage("fa");

    var ctr = 0;
    var str = "";
    var key = "";

    // note this is loaded from memory
    // any lookups from this data should be checked on the backend
    // empty memory should be sent to login

    if (accessRaw == null)
    {
        bootbox.alert('Logon expired.', function () {logout();}); 
    }
    var access = JSON.parse(accessRaw);


    if (bAddAll == true)
    {
        str += '<option ';

        str += ' value="-1|N/A">All</option>';       
    }

    $.each(access, function (index) 
    {
        ctr++;
        key = access[index].FacilityId + '|' + access[index].Role
        str += '<option ';

        if (key == getLocalStorage("currentFacility"))
        {
            str += " SELECTED ";
        }

        str += ' value="' + access[index].FacilityId + '|' + access[index].Role +'">' + access[index].Facility + '</option>';
     });   

    $("#"+control).append(str);

    if (!callback == false)
    {
        callback();
    }

   

}

function inThisList(id, controlToCheck)
{

    var bReturn = false;
    $("#" + controlToCheck + " > option").each(function() {
        if (id == this.value)
        {
            bReturn = true;
            return;
        }
    });
    console.log(bReturn);

    return bReturn;
}
function setTitle(title) {
    $("#pageTitle").text(title);
}
function setPatient(patient)
{
    $("#patient").text(patient);
}

function setCurrentFacility()
{
    setLocalStorage("currentFacility", $("#ddlFacilities").val());
}

function getTokenInput()
{
    return "?inapitoken=" + getLocalStorage("APIToken");
}

// UI Stuff
function getFacilityFromControl(control)
{
    var val = $("#" + control).val();

    // includes role...
    if (val.indexOf('|') > -1)
    {
        var arr = val.split("|");
        console.log(val);
        return arr[0];
    }
    else
    {
        return val;
    }
}

function getRolesList(control, filter)
{

    if (!filter)
    {
        filter = "";
    }

    var inURL = ServicePrefix + '/role/list' + getTokenInput();
    
    $.ajax({
        url: inURL,
        dataType: 'json',
        type: 'get',
        contentType: 'application/json',
        processData: false,
        success: function (data, textStatus, jQxhr) {
 
            if (data.response.status != "SUCCESS") {
                GeneralErrorMessageRtn(data.response.errorMessage[0]);
            }
            else {

                var str = '';

                if (filter == "")
                {
                    str = '<option value="0">All</option>';
                }

                $.each(data.rows, function (index) {

                    if (filter == "" || data.rows[index].RoleId == filter)
                    {
                        str = str + '<option value="' + data.rows[index].RoleId + '">' + data.rows[index].Role + '</option>';
                    }
                });

                $("#"+control).html(str);

                //convertToChosenSelect(control, gChosenParams.allowSearchContains, gChosenParams.allowSplitWordSearch);

            }


        },
        error: function (jqXhr, textStatus, errorThrown) {
            genericAjaxError(jqXhr, textStatus, errorThrown);
        }
    });


}
function getStateList(control) 
{

    var url = ServicePrefix + '/state/list/' + getTokenInput();;

    var settings = {
        dataType: 'json',
        type: 'GET',
        contentType: 'application/json',
        procssData: false,
        success: function (data, textStatus, jQxhr) {
            console.log(data);
            getStateListSuccess(data, textStatus, jQxhr, control);
        },
        error: function (jQxhr, textStatus, errorThrown) {
            genericAjaxError(jQxhr, textStatus, errorThrown);
        }
    }
    $.ajax(url, settings);
}
function getStateListSuccess(data, textStatus, jQxhr, control) 
{

    if (data.response.status != "SUCCESS") {
        bootbox.alert('Process Failed.\n\r\n\r' + data.response.errorMessage[0], function () {
        });
    } 
    else {
        var str = '';
        str = '<option value="-1">-- Select a State</option>';
        $.each(data.rows, function (index) 
        {
            str = str + '<option value="' + data.rows[index].StateId + '">' + data.rows[index].State + '</option>';
        });
        $("#" + control).html(str);
        //convertToChosenSelect("ddlState", gChosenParams.allowSearchContains, gChosenParams.allowSplitWordSearch);
    }
    //getPositionList();
}
function getFacility(id) 
{

    var url = ServicePrefix + '/facility/' + getTokenInput() + "&inFacilityId=" + id;

    var settings = {
        dataType: 'json',
        type: 'GET',
        contentType: 'application/json',
        procssData: false,
        success: function (data, textStatus, jQxhr) {
            console.log(data);
            // function should be in the calling page
            getFacilitySuccess(data, textStatus, jQxhr);
        },
        error: function (jQxhr, textStatus, errorThrown) {
            genericAjaxError(jQxhr, textStatus, errorThrown);
        }
    }
    $.ajax(url, settings);
}
function getFacilityAddress(id) 
{

    var url = ServicePrefix + '/facility/address/' + getTokenInput() + "&inFacilityId=" + id;

    var settings = {
        dataType: 'json',
        type: 'GET',
        contentType: 'application/json',
        procssData: false,
        success: function (data, textStatus, jQxhr) {
            console.log(data);
            // function should be in the calling page
            getFacilityAddressSuccess(data, textStatus, jQxhr);
        },
        error: function (jQxhr, textStatus, errorThrown) {
            genericAjaxError(jQxhr, textStatus, errorThrown);
        }
    }
    $.ajax(url, settings);
}
function getAddress(id) 
{

    var url = ServicePrefix + '/address/' + getTokenInput() + "&inAddressId=" + id;

    var settings = {
        dataType: 'json',
        type: 'GET',
        contentType: 'application/json',
        procssData: false,
        success: function (data, textStatus, jQxhr) {
            console.log(data);
            // function should be in the calling page
            getAddressSuccess(data, textStatus, jQxhr);
        },
        error: function (jQxhr, textStatus, errorThrown) {
            genericAjaxError(jQxhr, textStatus, errorThrown);
        }
    }
    $.ajax(url, settings);
}
function isEmail() {

    var email = $("#txtEmailAddress").val().trim()
    var regex = /^([a-zA-Z0-9_.+'-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);

}
function validationPassed() 
{

    var loopBreak = true;

    $(".dataIsRequired").each(function (index, el) 
    {

        var eID = "#" + $(el).attr("id");
        var errorMessage = $(el).attr("errorMessage");

        if ($(eID).prop('tagName').toLowerCase() == "input") 
        {
            if ($(eID).val().trim() == "") 
            {
                bootbox.alert(errorMessage, function () { });
                loopBreak = false;
                return false;
            }

        }

        if ($(eID).prop('tagName').toLowerCase() == "select") {
            if ($(eID).val() == "-1") 
            {
                bootbox.alert(errorMessage, function () { });
                loopBreak = false;
                return false;
            }
        }

    });

    return loopBreak;
}
function updateAddressAPICall(updateData, addressId) 
{
    // set url
    var url = ServicePrefix + '/Address';

    //set method
    var methodForCall = "";
    if (addressId == 0)
    {
        methodForCall = "POST";
    }
    else
    {
        methodForCall = "PUT";
    }

    var settings = {
        dataType: 'json',
        type: methodForCall,
        contentType: 'application/json',
        data:   updateData,
        success: function (data, textStatus, jQxhr) {
            updateAddressSuccess(data, textStatus, jQxhr);
        },
        error: function (jQxhr, textStatus, errorThrown) {
            genericAjaxError(jQxhr, textStatus, errorThrown);
        }
    };

    $.ajax(url, settings);

}
function getUserAccessListAPICall(userId) 
{

    var inURL = ServicePrefix + "/usermember/AccessList/" + getTokenInput();
    inURL = inURL + "&inUserId=" + userId;

    $.ajax({
        url: inURL,
        dataType: 'json',
        type: 'get',
        contentType: 'application/json',
        processData: false,
        success: function (data, textStatus, jQxhr) {
            getUserListSuccess(data);
        },
        error: function (jqXhr, textStatus, errorThrown) {
            genericAjaxError(jqXhr, textStatus, errorThrown);
        }
    });

}
function getUserListAPICall(facilityId, roleId) 
{

    var inURL = ServicePrefix + "/usermember/ListByFacility/" + getTokenInput();
    inURL = inURL + "&infacilityid=" + facilityId;
    inURL = inURL + "&inroleid=" + roleId;

    $.ajax({
        url: inURL,
        dataType: 'json',
        type: 'get',
        contentType: 'application/json',
        processData: false,
        success: function (data, textStatus, jQxhr) {
            getUserListSuccess(data);
        },
        error: function (jqXhr, textStatus, errorThrown) {
            genericAjaxError(jqXhr, textStatus, errorThrown);
        }
    });
}

function getPatientADLListByDayAPICall(patientId, transactionDate) 
{

    var inURL = ServicePrefix + "/patient/ADLListByDay/" + getTokenInput();
    inURL = inURL + "&inPatientId=" + patientId;
    inURL = inURL + "&inTransactionDate=" + transactionDate;

    $.ajax({
        url: inURL,
        dataType: 'json',
        type: 'get',
        contentType: 'application/json',
        processData: false,
        success: function (data, textStatus, jQxhr) {
            getPatientADLListByDaySuccess(data);
        },
        error: function (jqXhr, textStatus, errorThrown) {
            genericAjaxError(jqXhr, textStatus, errorThrown);
        }
    });
}

function getPatientFormListAPICall(patientId) 
{

    var inURL = ServicePrefix + "/patient/FormListByDay/" + getTokenInput();
    inURL = inURL + "&inPatientId=" + patientId;

    $.ajax({
        url: inURL,
        dataType: 'json',
        type: 'get',
        contentType: 'application/json',
        processData: false,
        success: function (data, textStatus, jQxhr) {
            getPatientFormListSuccess(data);
        },
        error: function (jqXhr, textStatus, errorThrown) {
            genericAjaxError(jqXhr, textStatus, errorThrown);
        }
    });
}


function getUser(id) 
{

    var url = ServicePrefix + '/usermember/' + getTokenInput() + "&inUserId=" + id;

    var settings = {
        dataType: 'json',
        type: 'GET',
        contentType: 'application/json',
        procssData: false,
        success: function (data, textStatus, jQxhr) {
            console.log(data);
            // function should be in the calling page
            getUserSuccess(data, textStatus, jQxhr);
        },
        error: function (jQxhr, textStatus, errorThrown) {
            genericAjaxError(jQxhr, textStatus, errorThrown);
        }
    }
    $.ajax(url, settings);
}
function getUserAddress(id) 
{

    var url = ServicePrefix + '/usermember/address/' + getTokenInput() + "&inUserId=" + id;

    var settings = {
        dataType: 'json',
        type: 'get',
        contentType: 'application/json',
        processData: false,
        success: function (data, textStatus, jQxhr) {
            console.log(data);
            // function should be in the calling page
            getUserAddressSuccess(data, textStatus, jQxhr);
        },
        error: function (jQxhr, textStatus, errorThrown) {
            genericAjaxError(jQxhr, textStatus, errorThrown);
        }
    }
    $.ajax(url, settings);
}
function insertUserAccessAPICall(updateData) 
{
    // set url
    var url = ServicePrefix + '/UserMember/Access';

    //set method
    var methodForCall = "POST";

    var settings = {
        dataType: 'json',
        type: methodForCall,
        contentType: 'application/json',
        data:   updateData,
        success: function (data, textStatus, jQxhr) {
            insertUserAccessSuccess(data, textStatus, jQxhr);
        },
        error: function (jQxhr, textStatus, errorThrown) {
            genericAjaxError(jQxhr, textStatus, errorThrown);
        }
    };

    $.ajax(url, settings);

}
function updateUserAccessAPICall(updateData) 
{
    // set url
    var url = ServicePrefix + '/UserMember/Access';

    //set method
    var methodForCall = "PUT";
 
    var settings = {
        dataType: 'json',
        type: methodForCall,
        contentType: 'application/json',
        data:   updateData,
        success: function (data, textStatus, jQxhr) {
            updateUserAccessSuccess(data, textStatus, jQxhr);
        },
        error: function (jQxhr, textStatus, errorThrown) {
            genericAjaxError(jQxhr, textStatus, errorThrown);
        }
    };

    $.ajax(url, settings);

}
function getSystemADL(id) 
{

    var url = ServicePrefix + '/adl/' + getTokenInput() + "&inSystemADLId=" + id;

    var settings = {
        dataType: 'json',
        type: 'GET',
        contentType: 'application/json',
        procssData: false,
        success: function (data, textStatus, jQxhr) {
            console.log(data);
            // function should be in the calling page
            getSystemADLSuccess(data, textStatus, jQxhr);
        },
        error: function (jQxhr, textStatus, errorThrown) {
            genericAjaxError(jQxhr, textStatus, errorThrown);
        }
    }
    $.ajax(url, settings);
}
function getSystemForm(id) 
{

    var url = ServicePrefix + '/form/' + getTokenInput() + "&inSystemFormId=" + id;

    var settings = {
        dataType: 'json',
        type: 'GET',
        contentType: 'application/json',
        procssData: false,
        success: function (data, textStatus, jQxhr) {
            console.log(data);
            // function should be in the calling page
            getSystemFormSuccess(data, textStatus, jQxhr);
        },
        error: function (jQxhr, textStatus, errorThrown) {
            genericAjaxError(jQxhr, textStatus, errorThrown);
        }
    }
    $.ajax(url, settings);
}
function updateADLPatientAPICall(updateData) 
{
    // set url
    var url = ServicePrefix + '/Patient/ADL';

    //set method
    var methodForCall = "PUT";
 
    var settings = {
        dataType: 'json',
        type: methodForCall,
        contentType: 'application/json',
        data:   updateData,
        success: function (data, textStatus, jQxhr) {
            updateADLPatientSuccess(data, textStatus, jQxhr);
        },
        error: function (jQxhr, textStatus, errorThrown) {
            genericAjaxError(jQxhr, textStatus, errorThrown);
        }
    };

    $.ajax(url, settings);

}
// UI Stuff - Dialogs
function buildUIDialogs(inControl, inTitle, inWidth, inHeight) 
{

    $(function () {
        $("#" + inControl).dialog({
            autoOpen: false,
            resizable: false,
            width: inWidth,
            height: inHeight,
            modal: true,
            title: inTitle,
            create: function (event, ui) {
                $(event.target).parent().css('position', 'fixed');
            }
        });
    });
    
    
}

function goTo(url)
{
    window.location = url;

}
function getPatientADLItemAPICall(id, patientId) 
{
 
    var url = ServicePrefix + '/patient/ADLItem/';
    url = url + getTokenInput();
    url = url + "&inPatientId=" + patientId;
    url = url + "&inSystemADLId=" + id;
 
    var settings = {
        dataType: 'json',
        type: 'get',
        contentType: 'application/json',
        processData: false,
        success: function (data, textStatus, jQxhr) {
            console.log(data);
            // function should be in the calling page
            getPatientADLItemSuccess(data, textStatus, jQxhr);
        },
        error: function (jQxhr, textStatus, errorThrown) {
            genericAjaxError(jQxhr, textStatus, errorThrown);
        }
    }
    $.ajax(url, settings);
}

function insertPatientADLLogAPICall(updateData) 
{
    // set url
    var url = ServicePrefix + '/Patient/ADLLog';

    //set method
    var methodForCall = "POST";

    var settings = {
        dataType: 'json',
        type: methodForCall,
        contentType: 'application/json',
        data:   updateData,
        success: function (data, textStatus, jQxhr) {
            insertPatientADLLogSuccess(data, textStatus, jQxhr);
        },
        error: function (jQxhr, textStatus, errorThrown) {
            genericAjaxError(jQxhr, textStatus, errorThrown);
        }
    };

    $.ajax(url, settings);

}
function insertPatientFormLogAPICall(updateData) 
{
    // set url
    var url = ServicePrefix + '/Patient/FormLog';

    //set method
    var methodForCall = "POST";

    var settings = {
        dataType: 'json',
        type: methodForCall,
        contentType: 'application/json',
        data:   updateData,
        success: function (data, textStatus, jQxhr) {
            insertPatientFormLogSuccess(data, textStatus, jQxhr);
        },
        error: function (jQxhr, textStatus, errorThrown) {
            genericAjaxError(jQxhr, textStatus, errorThrown);
        }
    };

    $.ajax(url, settings);

}

function getFacilityDashboardDataByDayAPICall(facilityId, transactionDate) 
{
 
    var url = ServicePrefix + '/facility/dashboard/';
    url = url + getTokenInput();
    url = url + "&infacilityId=" + facilityId;
    url = url + "&inTransactionDate=" + transactionDate;
 
    var settings = {
        dataType: 'json',
        type: 'get',
        contentType: 'application/json',
        processData: false,
        success: function (data, textStatus, jQxhr) {
            console.log(data);
            // function should be in the calling page
            getFacilityDashboardDataByDaySuccess(data, textStatus, jQxhr);
        },
        error: function (jQxhr, textStatus, errorThrown) {
            genericAjaxError(jQxhr, textStatus, errorThrown);
        }
    }
    $.ajax(url, settings);
}
function convertFromMilitaryToStandard(time, returnSeconds)
{
  
    time = time.split(':'); // convert to array

    // fetch
    var hours = Number(time[0]);
    var minutes = Number(time[1]);
    var seconds = Number(time[2]);

    // calculate
    var timeValue;

    if (hours > 0 && hours <= 12) 
    {
        timeValue= "" + hours;
    } 
    else if (hours > 12) 
    {
        timeValue= "" + (hours - 12);
    } else if (hours == 0) 
    {
        timeValue= "12";
    }
    if (timeValue.length == 1)
    {
        timeValue = '&nbsp;' + timeValue;
    }
    
    timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
    
    if (returnSeconds == true)
    {
        timeValue += (seconds < 10) ? ":0" + seconds : ":" + seconds;  // get seconds
    }

    timeValue += (hours >= 12) ? " PM" : " AM";  // get AM/PM

    return timeValue;
}
function getFacilityADLLogByDayAPICall(facilityId, transactionDate) {

    
    var url = ServicePrefix + "/facility/ADLLogByDay/";
    url = url + getTokenInput();
    url = url + "&inFacilityId=" + facilityId;
    url = url + "&inTransactionDate=" + transactionDate;
    
    $.ajax({
        url: url,
        dataType: 'json',
        type: 'get',

        contentType: 'application/json',
        processData: false,
        success: function (data, textStatus, jQxhr) {
            getFacilityADLLogByDaySuccess(data, textStatus, jQxhr);
        },
        error: function (jqXhr, textStatus, errorThrown) {
            genericAjaxError(jqXhr, textStatus, errorThrown);
        }
    });
}
function deleteADDLEntry(control, valToDelete)
{
    $("#" + control + " > option").each(function() {
        if (this.value == valToDelete)
        {
            this.remove();
        }
    });
}
function findFacilityByFacilityId(control, val)
{
    var valToReturn = "";

    $("#" + control + " > option").each(function() 
    {
        
        var arr = this.value.split('|');
        
        if (arr[0] == val)
        {
            valToReturn = this.value;
        }
    });

    return valToReturn;

}

function getUserNameFromMemory()
{
    var str = "";
    str = getLocalStorage("firstName");
    str = str + trim(" " + getLocalStorage("middleName"));
    str = str + trim(" " + getLocalStorage("lastName"));


    return str;
}

function getPatientFormStatusAPICall(patientId) {

    
    var url = ServicePrefix + "/patient/FormStatus/";
    url = url + getTokenInput();
    url = url + "&inPatientId=" + patientId;
    
    $.ajax({
        url: url,
        dataType: 'json',
        type: 'get',

        contentType: 'application/json',
        processData: false,
        success: function (data, textStatus, jQxhr) {
            getPatientFormStatusSuccess(data, textStatus, jQxhr);
        },
        error: function (jqXhr, textStatus, errorThrown) {
            genericAjaxError(jqXhr, textStatus, errorThrown);
        }
    });
}