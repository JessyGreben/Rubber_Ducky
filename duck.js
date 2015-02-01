$( document ).ready(function() {
    console.log( "ready!" );
	$(".slide-bar-personality").hide();
	$(".slide-bar-clothes").hide();
	$(".slide-bar-accessories").hide();
	//$(".maracas_img").hide();

	$("#button").click(function() {
  	$(".slide-bar-personality").toggle();
	});

	//Personalities
  $("#latino").click(function () {
    $('#classic_duck').attr('src', 'imgs/latino_duck.png');
  });

  //Accessories 

  $('#maracas_button').click(function () {
  	console.log("test");
  	$('.maracas_img').show();
  });

//trying to change the personality div with the clothing div when you click the 'next' button
// $("#next_two").click(function() {
// 	var accessories = document.getElementById("accessories").innerHTML;
// 	console.log("test");
// 	document.getElementById("personality").innerHTML = accessories; 
// });

$("#next").click(function() {
	var accessories = document.getElementById("accessories").innerHTML;
//	var clothing = document.getElementById("clothing").innerHTML;
	document.getElementById("personality").innerHTML = accessories; 
});

$("#next_three").click(function() {
	var clothing = $("#clothing").html();
	$(this).closest("div").html(clothing);

// 	var clothing = document.getElementById("clothing").innerHTML;
// 	document.getElementById("personality").innerHTML = clothing; 
});












$(function() {
    $( "#maracas" ).draggable();
  });

  // $("#next").click(function () {
  //   $('slide-bar-personality').attr('div', 'slide-bar-clothes');
  // });

// click next button change slide-bar to clothing slide-bar
// 	$('#next').click(function () {
// 		$(".slide-bar-clothes").toggle();	
// 	});

// 	$('#next_two').click(function () {
// 		$(".slide-bar-accessories").toggle();	
// 	});
            
      
//'blind'
// $('input[name=personality]').click(function(){
//   console.log($('input[name=personality]:checked').val());
// })


});
