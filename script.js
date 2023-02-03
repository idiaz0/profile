$(document).ready(function(){
	
	$("[id='homeButton']").click(function(){
		$("[id='home']").css({'display': 'block'});
		$("[id='bio']").css({'display': 'none'});
		$("[id='projects']").css({'display': 'none'});
	});
	
	$("[id='bioButton']").click(function(){
		$("[id='home']").css({'display': 'none'});
		$("[id='bio']").css({'display': 'block'});
		$("[id='projects']").css({'display': 'none'});
	});
	
	$("[id='projectsButton']").click(function(){
		$("[id='home']").css({'display': 'none'});
		$("[id='bio']").css({'display': 'none'});
		$("[id='projects']").css({'display': 'block'});
	});
	
});