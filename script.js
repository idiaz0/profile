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
	
	$("[class*='projectsClass']").animate({
	  fontSize: '50px',
      opacity: '0.7',
	  top: '150px',
    }, 1000);
	
	
	
	function isScrolledIntoView(elem) {
    var 
	docViewTop = $(window).scrollTop(), 
	docViewBottom = docViewTop + $(window).height(), 
	elemTop = $(elem).offset().top;
	
    return ((elemTop <= docViewBottom));
}

	$(window).scroll(function(){
		isScrolledIntoView("[class*='card1']") ? $("[class*='card1']").addClass('animated fadeInDown') : $("[class*='card1']").removeClass('animated fadeInDown')
		isScrolledIntoView("[class*='card2']") ? $("[class*='card2']").addClass('animated fadeInUp') : $("[class*='card2']").removeClass('animated fadeInUp')
		isScrolledIntoView("[class*='card3']") ? $("[class*='card3']").addClass('animated fadeInLeft') : $("[class*='card3']").removeClass('animated fadeInLeft')
		isScrolledIntoView("[class*='card4']") ? $("[class*='card4']").addClass('animated flipInY') : $("[class*='card4']").removeClass('animated flipInY')
		isScrolledIntoView("[class*='card5']") ? $("[class*='card5']").addClass('animated flipInY') : $("[class*='card5']").removeClass('animated flipInY')
	});

});	
