var DonationCloseButtonCompany = document.getElementsByClassName("company-results_donation-close");

DonationCloseButtonCompany[0].addEventListener("click", function( event ) {
  var DonationBannerCompany = document.getElementsByClassName("company-results_donation");
  DonationBannerCompany[0].className += " company-results_donation-hidden";
  console.log("hide");
}, false);
