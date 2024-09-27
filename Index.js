// Example code to initialize Shery.js and use a cool effect.

window.addEventListener('load', function() {
  if (window.location.hash) {
Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });


  Shery.imageMasker(".img" /* Element to target.*/, {
    mouseFollower: true,
    text: "Welcome",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.5,
    y:10
  });
   window.location.href = '/'
}
});
