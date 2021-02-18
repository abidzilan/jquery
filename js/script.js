$(document).ready(function(){
	$('#alert').click(function(){
  	alert("HELLO SSB");
  });
 
  $('#hide').click(function(){
  	$('h2').hide("slow");
  });
  $('#show').click(function(){
  	$('h2').show("slow");
  });
   $('#toggle').click(function(){
  	$('h2').toggle("slow");
  });
   $('#fout').click(function(){
  	$('h2').fadeOut(2000);
  });
   $('#fin').click(function(){
  	$('h2').fadeIn(2000);
  });
   $('#ftoggle').click(function(){
  	$('h2').fadeToggle(2000);
  });
   $('#fto').click(function(){
  	$('h2').fadeTo(1000,0.5);
  });

   $('.panel').click(function(){
   	$('.content').slideToggle(1000);
   })

  $( "#accordion" ).accordion();

  $( "#menu" ).menu();

  $( "#datepicker" ).datepicker();

  $( "#tabs" ).tabs();

  $( "#slider" ).slider();
    

})