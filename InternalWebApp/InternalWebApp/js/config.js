var gTimeToExpire = 6000; // seconds
var ServicePrefix = "https://devservices.millerkaplan.com";

var bNonProd = true;
if (window.location.toString().toLowerCase().indexOf("devmediainternal.millerkaplan.com") > -1) {
    ServicePrefix = "https://devservices.millerkaplan.com/";
    bNonProd = true;
}
else if (window.location.toString().toLowerCase().indexOf("stagingmediainternal.millerkaplan.com") > -1) {
    ServicePrefix = "https://stagingservices.millerkaplan.com/";
    bNonProd = true;
}
else if (window.location.toString().toLowerCase().indexOf("mediainternal.millerkaplan.com") > -1) {
    ServicePrefix = "https://services.millerkaplan.com/";
    bNonProd = false;
}

var currentPage = window.location.toString().toLocaleLowerCase();
 
    if (currentPage.indexOf("http:") > -1)
{
    // not secure...
    // and not prod
    if (bNonProd)
    {
          ServicePrefix = ServicePrefix.replace("https:", "http:");
    }
}



