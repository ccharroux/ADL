var gTimeToExpire = 6000; // seconds
var ServicePrefix = "http://devservices.millerkaplan.com";


if (window.location.toString().toLowerCase().indexOf("devmediainternal.millerkaplan.com") > -1) {
    ServicePrefix = "https://devservices.millerkaplan.com/";
}
else if (window.location.toString().toLowerCase().indexOf("stagingmediainternal.millerkaplan.com") > -1) {
    ServicePrefix = "https://stagingservices.millerkaplan.com/";
}
else if (window.location.toString().toLowerCase().indexOf("mediainternal.millerkaplan.com") > -1) {
    ServicePrefix = "https://services.millerkaplan.com/";
}



