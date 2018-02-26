var gTimeToExpire = 6000; // seconds
var ServicePrefix = "http://devservices.millerkaplan.com";


if (window.location.toString().toLowerCase().indexOf("dev") > -1) {
    ServicePrefix = "https://devservices.millerkaplan.com/";
}

