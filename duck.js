$( document ).ready(function() {
    console.log( "ready!" );
$(".slide-bar").hide();

$("#button").click(function() {
  $(".slide-bar").toggle( 'explode', 500 );
});


// 'blind'
$('input[name=personality]').click(function(){
  console.log($('input[name=personality]:checked').val());
})



});
