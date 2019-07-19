
const gMediaTypeRadio = "RADIO";
const gMediaTypeTelevision = "TELEVISION";
const gMediaTypeNewspapers = "NEWSPAPERS";
const gMediaTypeOutOfHome = "OUT OF HOME";
const gMediaTypeNetwork = "NETWORK";
const gMediaTypeSurvey = "SURVEY";

; (function () {
	
	'use strict';



	
	

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}

	};


	var centerBlock = function() {
		$('.fh5co-section-with-image .fh5co-box').css('margin-top', -($('.fh5co-section-with-image .fh5co-box').outerHeight()/2));
	  	$(window).resize(function(){
	  		$('.fh5co-section-with-image .fh5co-box').css('margin-top', -($('.fh5co-section-with-image .fh5co-box').outerHeight()/2));
	  	});
	};

	var responseHeight = function() {
		setTimeout(function(){
			$('.js-responsive > .v-align').css('height', $('.js-responsive > img').height());
		}, 1);
		
		$(window).resize(function(){
			setTimeout(function(){
				$('.js-responsive > .v-align').css('height', $('.js-responsive > img').height());
			}, 1);
		})
	};


	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas-visible') ) {

    			$('body').removeClass('offcanvas-visible');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};


	var offcanvasMenu = function() {
		$('body').prepend('<div id="fh5co-offcanvas" />');
		$('#fh5co-offcanvas').prepend('<ul id="fh5co-side-links">');
		$('body').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle"><i></i></a>');
		$('#fh5co-offcanvas').append($('#fh5co-header nav').clone());
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = $(this);

			$('body').toggleClass('fh5co-overflow offcanvas-visible');
			$this.toggleClass('active');
			event.preventDefault();

		});

		$(window).resize(function() {
			if ( $('body').hasClass('offcanvas-visible') ) {
		   	$('body').removeClass('offcanvas-visible');
		   	$('.js-fh5co-nav-toggle').removeClass('active');
		   }
		});

		$(window).scroll(function(){
			if ( $('body').hasClass('offcanvas-visible') ) {
		   	$('body').removeClass('offcanvas-visible');
		   	$('.js-fh5co-nav-toggle').removeClass('active');
		   }
		});

	};


	var toggleBtnColor = function() {
		if ( $('#fh5co-hero').length > 0 ) {	
			$('#fh5co-hero').waypoint( function( direction ) {
				if( direction === 'down' ) {
					$('.fh5co-nav-toggle').addClass('dark');
				}
			} , { offset: - $('#fh5co-hero').height() } );

			$('#fh5co-hero').waypoint( function( direction ) {
				if( direction === 'up' ) {
					$('.fh5co-nav-toggle').removeClass('dark');
				}
			} , { 
				offset:  function() { return -$(this.element).height() + 0; }
			} );
		}
	};



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated');
							} else {
								el.addClass('fadeInUp animated');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};

	

	
	$(function(){
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


//function processSuccessResult(data, successMessage)
//{
//    if (data.response.status != "SUCCESS") 
//    {
//        bootbox.alert('Process Failed.\n\r\n\r' + data.report.rows[0].ErrorNumber + " - " + data.report.rows[0].ErrorMessage + '.\n\r\n\rDevelopment has been notified and is looking into this issue.', function () 
//        {
//            return false;
//            //window.location = "preprocess.html";
//        });
//    }
//    else 
//    {
//        if (data.report.rows[0].Status == -1)
//        {
//            bootbox.alert('Process Failed.\n\r\n\r' + data.report.rows[0].ErrorNumber + " - " + data.report.rows[0].ErrorMessage + '.\n\r\n\rDevelopment has been notified and is looking into this issue.', function () 
//            {
//                return false;
//                //window.location = "preprocess.html";
//            });
//        }
//        else
//        {
//            if (successMessage != null && successMessage.length > 0)
//            {
//                bootbox.alert(successMessage, function () 
//                {
//                    console.log('return now');
//                    return true;
//                });
//            }
//            else
//            {
//                return true;
//            }
                    	
//        }
//    }
//}
var delayForLastPage = 1 * 1000;
var maxHoldEntries = 10;
var bLongQuery = false;
var environment = "";
var gDataTableDefaultRows = 50;
var gSearchTextPlaceholder = "Enter search text here...";
var navTool = {
    buildNavComponent: function(parentContainer, parentElement, functionToRun, bAllowAllSelection) { 
        
        var para = document.createElement("div");
        para.setAttribute("style", "text-align:center");
        var node = document.createElement("a");
        node.setAttribute("href", "javascript:navTool.goWhere('" + parentElement + "', -1, '" + functionToRun + "'," + bAllowAllSelection + ")");
        node.innerHTML = "<<";
        para.appendChild(node);

        node = document.createElement("span");
        node.innerHTML = "&nbsp;Navigation&nbsp;";
        para.appendChild(node);


        node = document.createElement("a");
        node.setAttribute("href", "javascript:navTool.goWhere('" + parentElement + "', 1, '" + functionToRun + "'," + bAllowAllSelection + ")");
        node.innerHTML = ">>";
        para.appendChild(node);

        var newElement = para;
        var oldElement = document.getElementById(parentElement);
        document.getElementById(parentContainer).appendChild(newElement);
        
    },
    goWhere: function (obj, direction, functionToRun, allowAllSelection)
    {
        var e = document.getElementById(obj);

        if (direction == -1) {

            if (e.selectedIndex == 1)
            {
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

$( document ).ready(function() 
{
    environment = getEnvironment();

    if (environment.length > 0) {
        $("#fh5co-header").prepend("<div class='container' style='color:white; background:red; padding-top: 3px; font-weight:600;border-radius:15px; text-align: center;'>" + environment + "</div>");
    }

    var nonLoggedInPages = new Array();
    nonLoggedInPages.push('login.html');
    nonLoggedInPages.push('splash.html');
    nonLoggedInPages.push('index.html');


    // Block UI Stuff
    $.blockUI.defaults.css.paddingTop='25px';
	$.blockUI.defaults.fadeOut = 500;
	$.blockUI.defaults.message ='<h4>Just a moment...</h4>';
	

	if (bLongQuery == false) {
	    // Force unblock after 10 seconds
	    //console.log("force stop of block ui");
	    unblockHandle = setInterval("$.unblockUI();", 10000);
	}

    // Set Ajax
	$(document).ajaxStart($.blockUI).ajaxStop($.unblockUI);

	var apiToken = "";
	var bDoLoginCheck = true;

	for (var i=0; i < nonLoggedInPages.length; i++)
	{
	    if (window.location.toString().toLowerCase().indexOf(nonLoggedInPages[i].toLowerCase()) > -1 )
	    {
	        bDoLoginCheck = false;
	        break;
	    }
	}

	if (bDoLoginCheck == true)
    {
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



	if (bDoLoginCheck == true)
	{
	    // add favorites
	    addDialogComponents();
	}

	setTimeout(getLastPage, delayForLastPage);


});

function showFavoriteDialog()
{

    $("#favId").val("0");
    $("#favURL").val(window.location.toString());
    $("#favTitle").val($("h2:first").html());
    $("#favoritesDialog").dialog("open");

}
function addDialogComponents()
{
    //    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    //    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

    // JAVASCRIPT FIRST
    var imported = document.createElement('script');
    imported.src = 'https://code.jquery.com/ui/1.12.1/jquery-ui.js';
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

    var d = '<div id="favoritesDialog" style="display:none" title="Favorite">';
    d = d + '<div style="margin-top:5px;margin-bottom:5px">Add this page as one of your favorites</div>';
    d = d + '<input type="hidden" id="favId" value="">';

    d = d + '   <label>Title</label><input type="text" class="favText" id="favTitle" placeholder="Enter Name..." /><br>';
    d = d + '   <label>URL</label> <input type="text" class="favText" readonly="readonly" id="favURL" /><hr />';
    d = d + '<center>';
    d = d + '   <div style="margin-top:5px;margin-bottom:5px">';
    d = d + '       <input type="button" id="btnProcess" value="Save" onclick="saveFavorite()" \>';
    d = d + '   </div>';
    d = d + '<div style="margin-top:5px;margin-bottom:5px">';
    d = d + '    <input type="button" id="btnCancel" value="Cancel" onclick="cancelFavorite()" \>';
    d = d + '        </div>';
    d = d + '</center>';
    d = d + '</div>';

    d = d + '<div style="position:absolute;top:5px; right:10px;z-index:1000"><input type="button"  value="Add as Favorite" onclick="showFavoriteDialog();"/>';
    d = d + '&nbsp;<input type="button" value="My Favorites" onclick="window.location=\'/dashboard.html\'"/></div>';

    $("body").append(d)

    setTimeout(buildFavoritesDialog, 250);

}
function cancelFavorite()
{
    $("#favoritesDialog").dialog("close");
}
function saveFavorite()
{

    var bPassedTest = true;

    if ($("#favURL").val().trim() == "") {
        bPassedTest = false;
        bootbox.alert('You must enter a url for your Favorite', function () { });
        return;
    }

    if ($("#favTitle").val().trim() == "") {
        bPassedTest = false;
        bootbox.alert('You must enter a title for your Favorite', function () { });
        return;
    }


    if (bPassedTest == true)
    {
        updateFavorite($("#favId").val());
    }

}
function updateFavorite(id)
{
    //filling out url for ajax call
    var url = ServicePrefix + '/api/InternalFavorite/InsertInternalFavorite';

    if (id > 0)
    {
        url = ServicePrefix + '/api/InternalFavorite/UpdateInternalFavorite';
    }

    //filling out settings for ajax call
    var settings = {
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify({
            "inApiToken": getLocalStorage("APIToken"),
            "inInternalFavoriteId": id,
            "inTitle": $("#favTitle").val().trim(),
            "inURL": $("#favURL").val().trim().replace("localhost:51116", "devmediainternal.millerkaplan.com")
        }),
        processData: false,
        success: function (data, textStatus, jQxhr)
        {
            $("#favoritesDialog").dialog("close");
            bootbox.alert('Favorite has been ' + (id == 0 ? 'saved' : 'updated') + '.', function () {
                if ((id > 0) || ($("#favURL").val().trim().toLowerCase().indexOf('dashboard.html') > -1)) {
                    window.location = "dashboard.html";
                }
            });



        },
        error: function (jqXhr, textStatus, errorThrown) {
            genericAjaxError(jqXhr, textStatus, errorThrown);
        }
    };

 
    //ajax call
    $.ajax(url, settings);
}
function editFavorite(title, url, id)
{

    $("#favId").val(id);
    $("#favURL").val(url);
    $("#favTitle").val(title);
    $("#favoritesDialog").dialog("open");

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
                    bootbox.alert('Favorite has been deleted.', function () {window.location = "dashboard.html"; });
                    

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

function buildFavoritesDialog()
{

        $("#favoritesDialog").dialog({
            autoOpen: false,
            resizable: false,
            width: 600,
            height: 300,
            modal: true
        });
 
}

function getEnvironment()
{
    var environment = "";

    var loc = window.location.toString().toLocaleLowerCase();


    if (loc.indexOf("devmediainternal.millerkaplan.com") > -1) {
        environment = "&nbsp;DEV";
    }

    if (loc.indexOf("localhost") > -1) {
        environment = "&nbsp;LOCAL";
    }

    if (loc.indexOf("stagingmediainternal.millerkaplan.com") > -1) {
        environment = "&nbsp;STAGING";
    }
    if (loc.indexOf("demomediainternal.millerkaplan.com") > -1) {
        environment = "&nbsp;DEMO";
    }

    return environment;

}
function getLastPage()
{
    var lastPage = new Object();
    

    var bFoundTitle = false;

    lastPage.url = window.location.href;

    $('h2').each(function ()
    {
        if (bFoundTitle == false) {
            lastPage.PageTitle =  $(this).text();
            bFoundTitle = true;
        }
    });

    if (bFoundTitle)
    {

        var lastPageList = getLocalStorage("latestRequestArray");
        //console.log(lastPageList);

        if (lastPageList.length > 0)
        {

            var lastPageArray = JSON.parse(lastPageList);
            if (duplicateURL(lastPageArray, lastPage.url) == true)
            {
 
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
function duplicateURL(lastPageArray, url)
{
    var bRet = false;

    for (var i = 0; i < lastPageArray.length; i++)
    {
        if (lastPageArray[i].url == url)
        {
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
function checkTokenTime()
{

    if (getLocalStorage("APITokenTime") == "")
    {
        return true;
    }

    var d = new Date();
    var n = d.getTime();
    var timeWithoutAction = parseInt((n / 1000) - (parseInt(getLocalStorage("APITokenTime") / 1000)));

    //console.log(timeWithoutAction);

    if (timeWithoutAction > gTimeToExpire)
    {
        return true;
    }
    else
    {
        return false;
    }
}
function updateTokenTime()
{
    var d = new Date();
    var n = d.getTime();
    setLocalStorage("APITokenTime", n.toString());
}
function setLocalStorage(key, value)
{
    window.localStorage.setItem(key, (value == null ? "" : value));
}
function getLocalStorage(key)
{
    try 
    {
        return (window.localStorage.getItem(key) == null ? "" : window.localStorage.getItem(key).toString());
    }
    catch (err)
    {
        return "";
    }
}
function removeLocalStorage(key)
{
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

    if (bSaveLinks)
    {
        setLocalStorage("latestRequestArray", JSON.stringify(lastPageArray));

    }
    var whereAreYou = window.location.toString();

   // var counter = whereAreYou.replace("//", "/").split('/').length - 1;

    var locationToRedirect = "/login.html";

    window.location = locationToRedirect;
}

// Miscellaneous 
// not sure if we will use these

function generateRpt(auditID)
{
	window.open(ServicePrefix + '/api/Report/GetFile?inApiToken=' + window.localStorage.getItem("APIToken") +'&inAuditID=' + auditID);
}
function show(div)
{
	$("#" + div).show();
}
function hide(div)
{
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

    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function extractDateOnly(inDate)
{
    var arrDate = inDate.split('T');

    if (arrDate.length > 0)
    {
        return arrDate[0];
    }
    else
    {
        return (inDate == null ? "&nbsp;" : inDate);
    }
}
function goBackToDashboard() {

    var search = getLocalStorage("search");
    var searchPage = getLocalStorage("searchPage");

    if (searchPage.length > 0)
    {
        var cleanPage = searchPage.split('?');
        if (cleanPage.length > 0) {
            window.location = cleanPage[0] + (search.length > 0 ? "?search=" + search : "");
            return;
        }
    }

    // Fall thru
    window.location = "dashboard.html";
}

function MKAErrorMessageRtn(message, url)
{

    var newMessage = "";
    if (message.toLowerCase().indexOf('token is invalid') > -1)
    {
        newMessage = "Your Token has expired - Please login again";
        bootbox.alert(newMessage, function ()
        {
            
        });
        window.location = "/login.html";
    }
    else if (message.toLowerCase().indexOf('authentication failed') > -1)
    {
        newMessage = "Authentication Failed";
        console.log(message);
        bootbox.alert(newMessage, function () {});
    }
    else
    {
        bootbox.alert('Process Failed.\n\r\n\r' + message + '.\n\r\n\rDevelopment has been notified and is looking into this issue.', function () { });
    }
}

function buildMainMenu(selectedItem) {

    var menuItems = '';

    menuItems += '<h1><a href="/dashboard.html">MKA Internal Media Site</a></h1>';
    menuItems += '<nav role="navigation" style="margin-top:20px">'

    menuItems += '<ul>';
    menuItems += buildGenericReportsLink(selectedItem);
    menuItems += '       <li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Products") + ' role="button" aria-expanded="false">Products<span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '              <ul class="dropdown-menu" role="menu">';
    menuItems += productDashboard('mrr');
    //menuItems += '                  <li style="display:block;"><a href="/dashboardmrr.html">MRR</a></li>';
    //menuItems += '                  <li style="display:block;"><a href="/dashboardxray.html">XRY</a></li>';
    menuItems += productDashboard('xry');
    menuItems += productDashboard('tvb');
    //menuItems += '                  <li style="display:block;"><a href="/dashboardtvb.html">TVB</a></li>';
    //menuItems += '                  <li style="display:block;"><a href="/dashboardmss.html">MSS</a></li>';
    menuItems += productDashboard('mss');

    //menuItems += '                  <li style="display:block;"><a href="/dashboarddma.html">DMA</a></li>';
    menuItems += productDashboard('dma');

    menuItems += '              </ul>';
    menuItems += '        </li>';
    menuItems += '        <li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Personnel") + '">Personnel <span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '              <ul class="dropdown-menu" role="menu">';
    menuItems += '                  <li style="display:block"><a href="/personnellist.html">Personnel</a></li>';
    menuItems += '                  <li style="display:block"><a href="/webnotification.html">Web Notifications</a></li>';
    menuItems += '              </ul>';
    menuItems += '        </li>';
    menuItems += '        <li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Stations") + ' role="button" aria-expended="false">Station Menu<span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '              <ul class="dropdown-menu" role="menu">';
    menuItems += '                  <li style="display:block"><a href="/stationlist.html">Stations</a></li>';
    menuItems += '                  <li style="display:block"><a href="">MRR/X-Ray Link</a></li>';
    menuItems += '              </ul>';
    menuItems += '        </li>';
    menuItems += '        <li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Markets") + '">Market Menu<span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '              <ul class="dropdown-menu" role="menu">';
    menuItems += '                  <li style="display:block"><a href="/marketlist.html" role="button" aria-expanded="false">Markets </a></li>';
    menuItems += '                  <li style="display:block;"><a href="/marketlist.html?NonPrimaryOnly=true">Complimentary</a></li>';
    menuItems += '                  <li style="display:block;"><a href="/parentmarketlist.html">Parent</a></li>';
    menuItems += '              </ul>';
    menuItems += '        </li>';
    menuItems += '        <li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Ownerships") + '">Ownership Menu<span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '              <ul class="dropdown-menu" role="menu">';
    menuItems += '                  <li style="display:block;"><a href="/ownershiplist.html" role="button" aria-expanded="false">Ownerships </a>';
    menuItems += '                  <li style="display:block;"><a href="/ownershipgrouplist.html">Groups</a></li>';
    menuItems += '                  <li style="display:block;"><a href="/parentownershiplist.html">Parents</a></li>';
    menuItems += '              </ul>';  
    menuItems += '        <li><a ' + getSelectedItemClass(selectedItem, "Virtual Groups") + 'href="/dashboard.html">Virtual Groups</a></li>';
    menuItems += '        <li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Settings") + ' role="button" aria-expanded="false">Settings <span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '              <ul class="dropdown-menu" role="menu">';
    menuItems += '                  <li style="display:block;"><a href="/formatlist.html">Formats</a></li>';
    menuItems += '                  <li style="display:block;"><a href="/marketsizelist.html">Market Sizes</a></li>';
    menuItems += '                  <li style="display:block;"><a href="/positionlist.html">Positions</a></li>';
    menuItems += '                  <li style="display:block;"><a href="/regionlist.html">Regions</a></li>';
    menuItems += '                  <li style="display:block;"><a href="/revenuecategorieslist.html">Revenue Categories</a></li>';
    menuItems += '                  <li style="display:block;"><a href="/dashboardtech.html">Tech Tools</a></li>';
    menuItems += '              </ul>';
    menuItems += '        </li>';
    menuItems += '        <li><a ' + getSelectedItemClass(selectedItem, "Logout") + 'href="#" onclick="logout()">Logout</a></li>';
    menuItems += '    </ul>';
    menuItems += '</nav>';

    $("#menu").html(menuItems);
}

function buildXRYMenu(selectedItem) {
    
    var menuItems = '';

    menuItems += '<h1><a href="/dashboard.html">MKA Internal Media Site</a></h1>';
    menuItems += '<nav role="navigation" style="margin-top:20px">';

    menuItems += '<ul>';

    menuItems += buildGenericReportsLink2(selectedItem);
    menuItems += '       <li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Products") + ' href="" role="button" aria-expanded="false">Products <span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '              <ul class="dropdown-menu" role="menu">';
    menuItems += productDashboard('mrr');
    menuItems += productDashboard('xry');
    menuItems += productDashboard('tvb');
    menuItems += productDashboard('mss');
    menuItems += productDashboard('dma');
    menuItems += '              </ul>';
    menuItems += '        </li>';
    //menuItems += '              <ul class="dropdown-menu" role="menu">';
    //menuItems += '                  <li style="display:block;"><a href="/stationagencylist.html">Station Agency</a></li>';
    //menuItems += '                  <li style="display:block;"><a href="/parentagencylist.html">Parent Agency</a></li>';
    //menuItems += '              </ul>';
    menuItems += '        </li>';

    menuItems += '<li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Revenue") + ' href="" role="button" aria-expanded="false">Revenue <span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '<ul class="dropdown-menu" role="menu">';
    menuItems += '        <li style="display:block"><a href="releasexry.html">Release</a></li>';
    menuItems += '        <li style="display:block"><a href="remindersxry.html">Reminders</a></li>';
    menuItems += '</ul>';
    menuItems += '</li>';

    menuItems += '       <li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "XRay Reports") + ' href="/products/xry/xrygenericreport.html" role="button" aria-expanded="false">XRay Reports </span></a>';


    //menuItems += '       <li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Advertiser") + ' href="/advertiserlist.html" role="button" aria-expanded="false">Advertiser <span style="margin-right:10px;" class="caret"></span></a>';
    //menuItems += '              <ul class="dropdown-menu" role="menu">';
    //menuItems += '                  <li style="display:block;"><a href="/stationadvertiserlist.html">Station Advertiser</a></li>';
    //menuItems += '                  <li style="display:block;"><a href="/mediaadvertiserlist.html">Media Advertiser</a></li>';
    //menuItems += '                  <li style="display:block;"><a href="/parentadvertiserlist.html">Parent Advertiser</a></li>';
    //menuItems += '              </ul>';
    //menuItems += '        </li>';
    //menuItems += '       <li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Agency") + ' href="/agencylist.html" role="button" aria-expanded="false">Agency <span style="margin-right:10px;" class="caret"></span></a>';
    //menuItems += '              <ul class="dropdown-menu" role="menu">';
    //menuItems += '                  <li style="display:block;"><a href="/stationagencylist.html">Station Agency</a></li>';
    //menuItems += '                  <li style="display:block;"><a href="/parentagencylist.html">Parent Agency</a></li>';
    //menuItems += '              </ul>';
    //menuItems += '        </li>';

    menuItems += '       <li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Utility") + ' href="" role="button" aria-expanded="false">Utility <span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '              <ul class="dropdown-menu" role="menu">';
    menuItems += '                  <li style="display:block;"><a href="/advertiserlist.html" role="button" aria-expanded="false">Advertiser</a></li>'; 
    menuItems += '                  <li style="display:block;"><a href="/stationadvertiserlist.html">&nbsp;Station Advertiser</a></li>';
    menuItems += '                  <li style="display:block;"><a href="/mediaadvertiserlist.html">&nbsp;Media Advertiser</a></li>';
    menuItems += '                  <li style="display:block;"><a href="/parentadvertiserlist.html">&nbsp;Parent Advertiser</a></li>';

    menuItems += '                  <li style="display:block;"><a href="/agencylist.html" role="button" aria-expanded="false">Agency</a></li>';
 
    menuItems += '                  <li style="display:block;"><a href="/stationagencylist.html">&nbsp;Station Agency</a></li>';
    menuItems += '                  <li style="display:block;"><a href="/parentagencylist.html">&nbsp;Parent Agency</a></li>';
 
    

    menuItems += '                  <li style="display:block;"><a href="/industrylist.html">Industry</a></li>';
    menuItems += '                  <li style="display:block;"><a href="/subindustrylist.html">Sub Industry</a></li>';
    menuItems += '                  <li style="display:block;"><a href="/nielsenmarketnamelist.html">Nielson Market</a></li>';
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

    menuItems += '<h1><a href="/dashboard.html">MKA Internal Media Site</a></h1>';
    menuItems += '<nav role="navigation" style="margin-top:20px">'

    menuItems += '<ul>';
    menuItems += buildGenericReportsLink(selectedItem);

    menuItems += '<li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Products") + ' href="" role="button" aria-expanded="false">Products <span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '<ul class="dropdown-menu" role="menu">';
    menuItems += productDashboard('mrr');
    menuItems += productDashboard('xry');
    menuItems += productDashboard('tvb');
    menuItems += productDashboard('mss');
    menuItems += productDashboard('dma');
    menuItems += '</ul>';
    menuItems += '</li>';
    menuItems += '<li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Revenue") + ' href="" role="button" aria-expanded="false">Revenue <span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '<ul class="dropdown-menu" role="menu">';
    menuItems += '        <li style="display:block"><a href="releasemrr.html">Release</a></li>';
    menuItems += '        <li style="display:block"><a href="remindersmrr.html">Reminders</a></li>';
    menuItems += '        <li style="display:block"><a href="revenuedetailmrr.html">Revenue Detail</a></li>';
    menuItems += '        <li style="display:block"><a href="mrrsnapshot.html">Snapshot</a></li>';
    menuItems += '</ul>';
    menuItems += '</li>';
    menuItems += '       <li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Utility") + ' href="" role="button" aria-expanded="false">Utility <span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '              <ul class="dropdown-menu" role="menu">';
    menuItems += '                  <li style="display:block;"><a href="/mrrmarketcategorydefinitionlist.html" role="button" aria-expanded="false">Market Categories</a></li>';
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

    menuItems += '<h1><a href="/dashboard.html">MKA Internal Media Site</a></h1>';
    menuItems += '<nav role="navigation" style="margin-top:20px">'

    menuItems += '<ul>';
    menuItems += buildGenericReportsLink(selectedItem);
    menuItems += '       <li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Products") + ' href="" role="button" aria-expanded="false">Products <span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '              <ul class="dropdown-menu" role="menu">';
    menuItems += productDashboard('mrr');
    menuItems += productDashboard('xry');
    menuItems += productDashboard('tvb');
    menuItems += productDashboard('mss');
    menuItems += productDashboard('dma');
    menuItems += '              </ul>';
    menuItems += '        </li>';
    menuItems += '<li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Revenue") + ' href="" role="button" aria-expanded="false">Revenue <span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '<ul class="dropdown-menu" role="menu">';

    menuItems += '        <li style="display:block"><a href="reminderstvb.html">Reminders</a></li>';
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

    menuItems += '<h1><a href="/dashboard.html">MKA Internal Media Site</a></h1>';
    menuItems += '<nav role="navigation" style="margin-top:20px">';

    menuItems += '<ul>';
    menuItems += buildGenericReportsLink(selectedItem);
    menuItems += '       <li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Products") + ' href="" role="button" aria-expanded="false">Products <span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '              <ul class="dropdown-menu" role="menu">';
    menuItems += productDashboard('mrr');
    menuItems += productDashboard('xry');
    menuItems += productDashboard('tvb');
    menuItems += productDashboard('mss');
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

    menuItems += '<h1><a href="/dashboard.html">MKA Internal Media Site</a></h1>';
    menuItems += '<nav role="navigation" style="margin-top:20px">';

    menuItems += '<ul>';

//    menuItems += '        <li><a ' + getSelectedItemClass(selectedItem, "Release") + 'href="/Products/DMA/dmarelease.html">Release</a></li>';
    menuItems += buildGenericReportsLink2(selectedItem);
    menuItems += '       <li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Products") + ' href="" role="button" aria-expanded="false">Products <span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '              <ul class="dropdown-menu" role="menu">';
    menuItems += productDashboard('mrr');
    menuItems += productDashboard('xry');
    menuItems += productDashboard('tvb');
    menuItems += productDashboard('mss');
    menuItems += productDashboard('dma');
    menuItems += '              </ul>';
    menuItems += '        </li>';


    menuItems += '<li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "Revenue") + ' href="" role="button" aria-expanded="false">Revenue <span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '<ul class="dropdown-menu" role="menu">';

    menuItems += '        <li style="display:block"><a href="/Products/DMA/dmarelease.html">Release</a></li>';
    menuItems += '</ul>';
    menuItems += '</li>';
    menuItems += '       <li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "DMA Reports") + ' href="/Products/DMA/dmagenericreportlist.html" role="button" aria-expanded="false">DMA Reports </span></a>';
    menuItems += '       </li>';

    menuItems += productDashboard('');
    menuItems += '        <li><a ' + getSelectedItemClass(selectedItem, "Logout") + 'href="#" onclick="logout()">Logout</a></li>';
    menuItems += '    </ul>';
    menuItems += '</nav>';

    $("#menu").html(menuItems);


}

function productDashboard(productId)
{
    var strOut = '';
    var style = '';

    switch(productId.toLowerCase()) 
    {
        case '':
            strOut = '<a href="/dashboard.html">Dashboard</a>';
            break;
        case 'mrr':
            style = 'display:block;';
            strOut = '<a href="/dashboardmrr.html">MRR</a>';
            break;
        case 'xry':
            style = 'display:block;';
            strOut = '<a href="/dashboardxray.html">XRY</a>';
            break;
        case 'tvb':
            style = 'display:block;';
            strOut = '<a href="/dashboardtvb.html">TVB</a>';
            break;
        case 'mss':
            style = 'display:block;';
            strOut = '<a href="/dashboardmss.html">MSS</a>';
            break;
        case 'dma':
            style = 'display:block;';
            strOut = '<a href="/Products/DMA/dmadashboard.html">DMA</a>';
            break;
    }

    return '<li style="' + style +'">' + strOut + '</li>';
}
function buildGenericReportsLink(selectedItem)
{
    var strOut = '';
    var style = '';

    strOut = '<a ' + getSelectedItemClass(selectedItem, "Reports") +' href="/genericReportList.html">Reports</a>';

    return '<li style="' + style + '">' + strOut + '</li>';
}
function buildGenericReportsLink2(selectedItem) {
    var strOut = '';
    var style = '';

    strOut = '<a ' + getSelectedItemClass(selectedItem, "Reports") + ' href="/genericReportList.html">All Reports</a>';

    return '<li style="' + style + '">' + strOut + '</li>';
}
function getSelectedItemClass(selectedItem, item)
{
    if (selectedItem.toLowerCase() == item.toLowerCase()) {
        return 'class="active"';
    }
    else {
        return '';
    }
}

function returnExportColumnHeadingTitle(tableName, data, columnIndex) {

    if ($("#" + tableName + " th").eq(columnIndex).data("export-title") != null
            &&
        $("#" + tableName + " th").eq(columnIndex).data("export-title").length > 0)
    {

        return $("#" + tableName + " th").eq(columnIndex).data("export-title");
    } else {

        return data;
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

    menuItems += '<h1><a href="/dashboard.html">MKA Internal Media Site</a></h1>';
    menuItems += '<nav role="navigation" style="margin-top:20px">';
    menuItems += '<ul>';
    menuItems += '        <li class="dropdown"><a ' + getSelectedItemClass(selectedItem, "TechTools") + ' role="button" aria-expanded="false">Tools <span style="margin-right:10px;" class="caret"></span></a>';
    menuItems += '              <ul class="dropdown-menu" role="menu">';
    menuItems += '                  <li style="display:block;"><a href="/dashboardtech.html">Tech Tools</a></li>';
    menuItems += '                  <li style="display:block;"><a href="/encryptdecrypt.html">Encryption/Decryption Tool</a></li>';
    menuItems += '                  <li style="display:block;"><a href="/products/mrr/mrrarchiverollover.html">MRR Rollover</a></li>';
    menuItems += '                  <li style="display:block;"><a href="/products/mrr/mrrmarkethistorydatamatrix.html">MRR Market History Maintenance</a></li>';
    menuItems += '                  <li style="display:block;"><a href="/products/mrr/mrrstationownerchanged.html">MRR Station Ownership Change</a></li>';
    menuItems += '                  <li style="display:block;"><a href="/products/xry/xrymarkethistorydatamatrix.html">XRY Market History Maintenance</a></li>';
    menuItems += '                  <li style="display:block;"><a href="/products/xry/xrystationownerchanged.html">XRY Station Ownership Change</a></li>';
    menuItems += '                  <li style="display:block;"><a href="/products/tvb/tvbMarketHistoryDataMatrix.html">TVB Market History Maintenance</a></li>';

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
    str = '<option value="">-- Select a Year --</option>';

    var thisYear = (new Date()).getFullYear();

    for (var i = thisYear; i > (thisYear - 10) ; i--) {

        str = str + '<option ';
        if (i == thisYear) {
            str = str + " selected ";
        }
        str = str + ' value="' + i + '">' + i + '</option>';
    }

    $("#ddlYear").html(str);


    convertToChosenSelect("ddlYear", false, false);

    if (typeof paramRevenueYear == 'undefined')
    {
        return;
    }
 
    if (paramRevenueYear.length > 0) {
        $("#ddlYear").val(paramRevenueYear).trigger('chosen:updated');
    }
 

}
function getPeriodList(inType)
{

  

    if (!inType) {
        inType = 'all';
    }

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var thisMonth = (new Date()).getMonth();

    var str = '';
    str = '<option value="">-- Select a Period --</option>';

    if (inType == 'months' || inType == 'all') {
        for (var i = 1; i <= 12; i++) {

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

    if (inType == 'quarters' || inType == 'all') {
        for (var i = 1; i <= 4; i++) {

            str = str + '<option value="Q' + i.toString() + '">Quarter - ' + i.toString() + '</option>';
        }
    }

    $("#ddlPeriod").html(str);
 
    convertToChosenSelect("ddlPeriod", false, false);

    if (typeof paramRevenuePeriod == "undefined")
    {
        return;
    }

    if (paramRevenuePeriod.length > 0) {
        $("#ddlPeriod").val(paramRevenuePeriod).trigger('chosen:updated');
    }

}

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

function scrollToAnchor(aid) {
    var aTag = $("a[name='" + aid + "']");
    $('html,body').animate({ scrollTop: aTag.offset().top }, 'slow');
}