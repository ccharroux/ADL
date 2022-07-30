var gTimeToExpire = 6000; // seconds
var ServicePrefix = "";
var bForceDR = false;
var bIsDemo = false;
var bNonProd = true;

ServicePrefix = "https://localhost:44398";

 if (window.location.toString().toLowerCase().indexOf("pixxsports") > -1) {
     ServicePrefix = "http://www.pixxsports.com/services";

 }

// else if (window.location.toString().toLowerCase().indexOf("stagingmediainternal.millerkaplan.com") > -1) {
//     ServicePrefix = "https://stagingservices.millerkaplan.com/";
//     bNonProd = true;
// }
// else if (window.location.toString().toLowerCase().indexOf("demomediainternal.millerkaplan.com") > -1) {
//     ServicePrefix = "https://demoservicesinternal.millerkaplan.com/";
//     bNonProd = false;
//     bIsDemo = true;
// }
// else if (window.location.toString().toLowerCase().indexOf("mediainternal.millerkaplan.com") > -1) {
//     ServicePrefix = "https://servicesinternal.millerkaplan.com/";
//     bNonProd = false;
// }

// if (bForceDR == true)
// {
//     ServicePrefix = "https://drservicesinternal.millerkaplan.com/";
//     bNonProd = false;
// }


var currentPage = window.location.toString().toLocaleLowerCase();

if (currentPage.indexOf("http:") > -1)
{
    // not secure...
    // and not prod
    //if (bNonProd)
    //{
          ServicePrefix = ServicePrefix.replace("https:", "http:");
    //}
}

