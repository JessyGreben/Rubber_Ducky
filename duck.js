$(".slide-bar").hide();

// var toggleSlideBar = function() {
  // var slideBar = document.getElementById("slide-bar");
  // slideBar.style.display == "block" ? slideBar.style.display = "none" : slideBar.style.display = "block";

// }

// $("#button").click(function () {
//   $("slide-bar").show("slide", { direction: "right" }, 1000);
// });
$("#button").click(function() {
  $(".slide-bar").toggle( 'explode', 500 );
});


// 'blind'