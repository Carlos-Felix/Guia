//$("#menu").acordeon();
$("#accordion > li > a").click(function(){

	if(false == $(this).next().is(':visible')) {
		$('#accordion ul').slideUp(300);
	}
	$(this).next().slideToggle(300);
});

$('#accordion ul:eq(0)').show();
/*
$("#modulo1 .modulo").bind("click",()=>{
    //$(".cont-submod").toggleClass('hide-sub');
    $("#modulo1 ul").toggleClass('hide-sub');
})

$("#modulo2 .modulo").bind("click",()=>{
    //$(".cont-submod").toggleClass('hide-sub');
    $("#modulo2 ul").toggleClass('hide-sub');
})
*/
