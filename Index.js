// For Smooth Scrolling
const scroll = new LocomotiveScroll({
  el: document.querySelector(".container"),
  smooth: true,
});
gsap.registerPlugin(ScrollTrigger);
// Gsap Animation Here
gsap.from(".nav-link", {
  stagger: 0.3,
  y: 10,
  duration: 0.2,
  ease: Power3,
  opacity: 0,
});

//scrollheading02 me card
gsap.fromTo(".card", 
  { x: 20, opacity: 0 }, // Starting position
  { 
    x: 0, opacity: 1, duration: 1, 
    scrollTrigger: {
      trigger: ".scrollspyHeading2",
      start: "top 50%", // Start animation when image container is 80% from top
      end:"top 80%",
      toggleActions: "play none none none" // Animation plays once
    }
  }
);

// SHERY JS ANIMATION 
// For Mouse Hover 
Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.1,
});
 

//for button moment ke liye
Shery.imageMasker(".img" /* Element to target.*/, {
  mouseFollower: true,
  text: "Welcome",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.5,
  y:10
});


// Hover karne par Magnet ki Tarah Kam karta hai 
Shery.makeMagnet(".btn" , {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});


// Content me Jo H1 Hai use animate karne ke liye
Shery.textAnimate(".content h2", {
  stagger: 0.2,
  y: -10,
  duration: 0.1,
  ease: Power3,
  opacity: 0,
});

//About Image ko Animation ke liye
Shery.imageMasker(".img" /* Element to target.*/, {
  mouseFollower: true,
  text: "Welcome",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.5,
  y:10
});


// ---------Responsive-navbar-active-animation-----------
function test() {
  var tabsNewAnim = $("#navbarSupportedContent");
  var selectorNewAnim = $("#navbarSupportedContent").find("li").length;
  var activeItemNewAnim = tabsNewAnim.find(".active");
  var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
  var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
  var itemPosNewAnimTop = activeItemNewAnim.position();
  var itemPosNewAnimLeft = activeItemNewAnim.position();
  $(".hori-selector").css({
    top: itemPosNewAnimTop.top + "px",
    left: itemPosNewAnimLeft.left + "px",
    height: activeWidthNewAnimHeight + "px",
    width: activeWidthNewAnimWidth + "px",
  });
  $("#navbarSupportedContent").on("click", "li", function (e) {
    $("#navbarSupportedContent ul li").removeClass("active");
    $(this).addClass("active");
    var activeWidthNewAnimHeight = $(this).innerHeight();
    var activeWidthNewAnimWidth = $(this).innerWidth();
    var itemPosNewAnimTop = $(this).position();
    var itemPosNewAnimLeft = $(this).position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
  });
}
$(document).ready(function () {
  setTimeout(function () {
    test();
  });
});
$(window).on("resize", function () {
  setTimeout(function () {
    test();
  }, 500);
});
$(".navbar-toggler").click(function () {
  $(".navbar-collapse").slideToggle(300);
  setTimeout(function () {
    test();
  });
});

// --------------add active class-on another-page move----------
jQuery(document).ready(function ($) {
  // Get current path and find target link
  var path = window.location.pathname.split("/").pop();

  // Account for home page with empty path
  if (path == "") {
    path = "index.html";
  }

  var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
  // Add active class to target link
  target.parent().addClass("active");
});

//   $(window).on('load',function () {
//       var current = location.pathname;
//       console.log(current);
//       $('#navbarSupportedContent ul li a').each(function(){
//           var $this = $(this);
//           // if the current path is like this link, make it active
//           if($this.attr('href').indexOf(current) !== -1){
//               $this.parent().addClass('active');
//               $this.parents('.menu-submenu').addClass('show-dropdown');
//               $this.parents('.menu-submenu').parent().addClass('active');
//           }else{
//               $this.parent().removeClass('active');
//           }
//       })
//   });

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Optional: Add interactivity if needed
document.querySelector(".btn").addEventListener("click", function () {
  alert("Button clicked!");
});


// RESUME DOWNLOAD
document.getElementById("downloadBtn").onclick = function() {
  const link = document.createElement("a");
  link.href = 'resume.pdf';  // Ensure the file is in the same directory, or provide the full path
  link.setAttribute('download', 'My_Resume.pdf');  // Suggested name for the download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);  // Clean up
};