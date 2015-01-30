$( document ).ready(function() {
    console.log( "ready!" );
	$(".slide-bar-personality").hide();
	$(".slide-bar-clothes").hide();
	$(".slide-bar-accessories").hide();

	$("#button").click(function() {
  	$(".slide-bar-personality").toggle();
	});

//when you click 'Latino' button on Personality list, the classic duck img src changes to latino_duck img
	//why does css change, when only changing the src
  $("#latino").click(function () {
    $('#classic_duck').attr('src', 'imgs/latino_duck.png');
  });

//click next button change slide-bar to clothing slide-bar
	$('#next').click(function () {
		$(".slide-bar-clothes").toggle();	
	});

	$('#next_two').click(function () {
		$(".slide-bar-accessories").toggle();	
	});
            
      
//'blind'
// $('input[name=personality]').click(function(){
//   console.log($('input[name=personality]:checked').val());
// })


});
