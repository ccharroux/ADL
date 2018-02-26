;(function () {
	
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


function processSuccessResult(data, successMessage)
{
    if (data.response.status != "SUCCESS") 
    {
        bootbox.alert('Process Failed.\n\r\n\r' + data.report.rows[0].ErrorNumber + " - " + data.report.rows[0].ErrorMessage + '.\n\r\n\rDevelopement has been notified and is looking into this issue.', function () 
        {
            return false;
            //window.location = "preprocess.html";
        });
    }
    else 
    {
        if (data.report.rows[0].Status == -1)
        {
            bootbox.alert('Process Failed.\n\r\n\r' + data.report.rows[0].ErrorNumber + " - " + data.report.rows[0].ErrorMessage + '.\n\r\n\rDevelopement has been notified and is looking into this issue.', function () 
            {
                return false;
                //window.location = "preprocess.html";
            });
        }
        else
        {
            if (successMessage != null && successMessage.length > 0)
            {
                bootbox.alert(successMessage, function () 
                {
                    console.log('return now');
                    return true;
                    //window.location = successRedirect;
                });
            }
            else
            {
                return true;
            }
                    	
        }
    }
}




//---------------------------------
// Internal Admin Section
//---------------------------------

$( document ).ready(function() 
{
    var nonLoggedInPages = new Array();
    nonLoggedInPages.push('login.html');
    nonLoggedInPages.push('splash.html');
    nonLoggedInPages.push('index.html');


    // Block UI Stuff
    $.blockUI.defaults.css.paddingTop='25px';
	$.blockUI.defaults.fadeOut = 2000;
	$.blockUI.defaults.message ='<h4>Just a moment...</h4>';
	

    // Force unblock after 10 seconds
	setInterval("$.unblockUI();", 10000);

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
});

function checkTokenTime()
{

    if (getLocalStorage("APITokenTime") == "")
    {
        return true;
    }

    var d = new Date();
    var n = d.getTime();
    var timeWithoutAction = parseInt((n / 1000) - (parseInt(getLocalStorage("APITokenTime") / 1000)));

    console.log(timeWithoutAction);

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

function logout() {
    window.localStorage.clear();
    window.location = "index.html";
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

