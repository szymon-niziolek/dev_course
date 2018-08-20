var czas_opoznienia;
function delay(){
	czas_opoznienia = setTimeout(showPage,2000)


	window_size = $(window).height();
	$('section.one').css("height",window_size);
}


function showPage(){
	document.getElementById('preloader').style.display = "none";
	document.getElementById('wrapper').style.display = "block";

	window.dispatchEvent(new Event('resize'));
}

window.onload = delay;





var header = document.getElementById('header');
var position_header_before = 30;

// przylepiony header

window.onscroll = function(){
	sticky_head();
}



function sticky_head(){
	if (window.pageYOffset >= position_header_before) {
		header.classList.add('fixed-top');
	}else{
		header.classList.remove('fixed-top');
	}
}

var elementy_listy =
$('section#tabs > div > .tabs_container > #pills-tab > li.nav-item'); 
elementy_listy.click(function(){

	elementy_listy.removeClass('active_tab');
	$(this).addClass('active_tab');
});