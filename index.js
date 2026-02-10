
/*................................................................Details section...................*/

var Size = document.getElementById("SizePage");
var Details = document.getElementById("DetailsPage");
function openPage2(){
  SizePage.style.display = "block";
  DetailsPage.style.display = "none";
  ReviewPage.style.display = "none";
}

var Size = document.getElementById("SizePage");
var Details = document.getElementById("DetailsPage");
function openPage1(){
  SizePage.style.display = "none";
  DetailsPage.style.display = "block";
  ReviewPage.style.display = "none";
}

var Reviews = document.getElementById("ReviewPage");
function openPage3(){
  SizePage.style.display = "none";
  DetailsPage.style.display = "none"; 
  ReviewPage.style.display = "block";
}

// ......Function to show profile features
var profileFeatures = document.getElementById("profileFeatures");
var chevronDown = document.getElementById("chevronDown");
function displayProfileFeatures() {
  profileFeatures.style.display = "block";
  chevronDown.style.rotate = "180deg";
}
// ......Function to hide profile features
var profileFeatures = document.getElementById("profileFeatures");
function hideProfileFeatures() {
  profileFeatures.style.display = "none";
  chevronDown.style.rotate = "360deg";
}


  /*............................................Login / Create Account Forms ........................................*/
  var loginForm = document.getElementById("loginForm");
  var signupForm = document.getElementById("signupForm");
  var createAccount = document.getElementById("createAccount");
  var loginButton1 = document.getElementById("loginButton1");
  var loginButton2 = document.getElementById("loginButton2");
  
  if (createAccount) {
    createAccount.onclick = function(){
      if (loginForm) loginForm.style.transform = "translateY(-120%)";
      if (signupForm) signupForm.style.transform = "translateY(-111%)";
    }
  }
  
  if (loginButton2) {
    loginButton2.onclick = function(){
      if (signupForm) signupForm.style.transform = "translateY(120%)";
      if (loginForm) loginForm.style.transform = "translateY(0%)";
    }
  }
  
  /*.....................................................................Shopping Cart..................................*/
  var Cart = document.getElementById("shoppingCart");
  var closeButton = document.getElementById("shoppingCart");
  var shoppingCart = document.getElementById("shoppingCart");
  var MenuLinks = document.getElementById("MenuLinks");

  function openCart(){
    if (shoppingCart) {
      shoppingCart.style.transform = "translateY(0%)";
      shoppingCart.style.display = "block";
    }
    if (MenuLinks) MenuLinks.style.display = "none";
  }
  
  function closeCart(){
    if (shoppingCart) {
      shoppingCart.style.transform = "translateY(-200%)";
      shoppingCart.style.display = "none";
    }
  }
  /*...............................show password........................................*/

const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
if (checkbox && password) {
  checkbox.onchange = function (e) {
    password.type = checkbox.checked ? "text" : "password";
  };
}

const password2 = document.getElementById("password2");
const checkbox2 = document.getElementById("checkbox2");
if (checkbox2 && password2) {
  checkbox2.onchange = function (e) {
    password2.type = checkbox2.checked ? "text" : "password";
  };
}

 /*...............................Menu........................................*/
 var Menu = document.getElementById("MenuLinks");
 var Main = document.getElementById("main");
 var siteInfo = document.getElementById("site-info");
 var Contents = document.getElementById("Contents");
 
 function openMenu(){
  if (MenuLinks) MenuLinks.style.display = "block";
  if (Main) Main.style.display = "none";
  if (siteInfo) siteInfo.style.display = "none";
  if (Contents) Contents.style.display = "none";
  if (shoppingCart) shoppingCart.style.display = "none";
 }
 
 function closeMenu(){
  if (MenuLinks) MenuLinks.style.display = "none";
  if (Main) Main.style.display = "block";
  if (siteInfo) siteInfo.style.display = "block";
 }


   /*...............................Product image displays ON/OFF........................................*/
function displayImage(imageNumber) {
  var largeImage = document.getElementById("image1");
  var smallImage = document.getElementById("image" + imageNumber);
  largeImage.src = smallImage.src; // Update large image source
}

//....code to manupulate company logos.......................
var logoSlide = document.querySelector(".logo-slide");
var companyLogos = document.querySelector(".company-logos");
if (logoSlide && companyLogos) {
  var copy = logoSlide.cloneNode(true);
  companyLogos.appendChild(copy);
}

//...................checkout proccess.....................................................................
function checkout(){
  alert("Checkout process will be implemented Here!");
  shoppingCart.style.display = "none";
}
/*--..................checkout process with stripe gateway.................
// Import Stripe key from environment variables
// import { stripePublicKey } from './firebase-config.js';

// var stripe = Stripe(stripePublicKey); // Using env variable instead of hardcoded key

const checkoutButton = document.getElementById("checkoutButton");
if (checkoutButton) {
  checkoutButton.addEventListener("click", function(){
    // stripe.redirectToCheckout({
    //   lineItems: [
    //     {
    //       price: "https://buy.stripe.com/test_bIYaI325CbPXbtK4gg" // Update with your actual Stripe price ID
    //     }
    //   ]
    // })
  });
}
});....*/

