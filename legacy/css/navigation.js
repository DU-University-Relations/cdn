$(function(){
	$('#sub-menu ul li a').each(function(i){
		if($(this).attr('href') == OUC.path){
			$(this).parent().addClass('active');
		}
	});

	var firstSection = "/" + OUC.path.split('/')[1] + "/";

	$('#main-menu > ul > li > a').each(function(i){
		var href = $(this).attr('href');

		if(href == firstSection || href == (firstSection + 'index.html')){
			$(this).parent().addClass('active');
		}
	});
});