$(document).ready(function(){
	var i = 0;	
	$('.slide').each(function(){
		$(this).addClass('col-md-10 col-md-offset-1');
		$(this).attr('ng-show','slides[' + i + ']');
		i++;	
	});

    console.log($('.slide').length + ' number of slides ...');

	$('.listItem').each(function(){
		$(this).prepend('<div class="glyphicon glyphicon-chevron-right"></div> ');
	});
});
