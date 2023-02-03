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
	
	var text = $("[id='testCount']").text();   
	var total = 0;
  
	for (var i = 0; i < text.length; i++) {
		var currentCharacter = text[i];
		if (currentCharacter == " ") {
			total += 1;
		}
	}
	total += 1;
	document.getElementById("iCount").innerHTML = total + " chars";
	
});