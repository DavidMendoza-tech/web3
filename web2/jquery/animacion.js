$(document).ready(function() {
	
$("#tarj").mouseover(function(){

	$("img").animate(
			{

				left:"35%",
				height:"410px"
			},500

		);
	
})
$("#tarj").mouseout(function(){

	$("img").animate(
			{

				left:"120px",
				height:"368px"
			},500

		);
	
})

//anmacion de contenido
$("#tarj").mouseover(function(){

	$("#cont").animate(
			{

				opacity:1,
				visibility:"visible",
				left:"45%"
			},500

		);
	
})

$("#tarj").mouseout(function(){

	$("#cont").animate(
			{

				opacity: 0,
				visibility:"hidden"
				
			},500

		);
	
})



});

