$(document).ready(
function (){
	var isAnimated = false;

	$(".header_nav_link_text").hover(
	function(){
		$(this).css("color", "black");
		$(this).parent().css("background", "#D7B037");
	},
	function(){
		$(this).css("color", "#D7B037");
		$(this).parent().css("background", "transparent");
	}
	);

	$(".scroll_left").click(
	function(){
		if (isAnimated == false) {
			if ($("#scroll_01").css("background-color") == "rgb(215, 176, 55)"){
				$("#scroll_01").css("background-color", "transparent");
				$("#scroll_03").css("background-color", "rgb(215, 176, 55)");
			}
			else if ($("#scroll_02").css("background-color") == "rgb(215, 176, 55)"){
				$("#scroll_02").css("background-color", "transparent");
				$("#scroll_01").css("background-color", "rgb(215, 176, 55)");
			}
			else if ($("#scroll_03").css("background-color") == "rgb(215, 176, 55)"){
				$("#scroll_03").css("background-color", "transparent");
				$("#scroll_02").css("background-color", "rgb(215, 176, 55)");
			}
			Scroll();
		}
	}
	);
	$("#scroll_01").click(
	function(){
		if (isAnimated == false) {
			$(this).css("background", "rgb(215, 176, 55)");
			$("#scroll_02").css("background", "transparent");
			$("#scroll_03").css("background", "transparent");
			Scroll();
		}
	}
	);
	$("#scroll_02").click(
	function(){
		if (isAnimated == false) {
			$("#scroll_01").css("background", "transparent");
			$(this).css("background", "rgb(215, 176, 55)");
			$("#scroll_03").css("background", "transparent");
			Scroll();
		}
	}
	);
	$("#scroll_03").click(
	function(){
		if (isAnimated == false) {
			$("#scroll_01").css("background", "transparent");
			$("#scroll_02").css("background", "transparent");
			$(this).css("background", "rgb(215, 176, 55)");
			Scroll();
		}
	}
	);
	$(".scroll_right").click(
	function(){
		if (isAnimated == false) {
			if ($("#scroll_01").css("background-color") == "rgb(215, 176, 55)"){
				$("#scroll_01").css("background-color", "transparent");
				$("#scroll_02").css("background-color", "rgb(215, 176, 55)");
			}
			else if ($("#scroll_02").css("background-color") == "rgb(215, 176, 55)"){
				$("#scroll_02").css("background-color", "transparent");
				$("#scroll_03").css("background-color", "rgb(215, 176, 55)");
			}
			else if ($("#scroll_03").css("background-color") == "rgb(215, 176, 55)"){
				$("#scroll_03").css("background-color", "transparent");
				$("#scroll_01").css("background-color", "rgb(215, 176, 55)");
			}
			Scroll();
		}
	}
	);

	function Scroll() {
		if (isAnimated == false) {
			isAnimated = true;
			$("#left_page").addClass("left_page_scroll_animation");
	  		$("#right_page").addClass("right_page_scroll_animation");
			$("#right_page").one("animationend", function(event) {
				/**/
				$("#left_page").addClass("left_page_scroll_back_animation");
				$("#right_page").addClass("right_page_scroll_back_animation");

				if ($("#scroll_01").css("background-color") == "rgb(215, 176, 55)"){
					$("#right_page").css("background", "url(assets/images/chiken.png) center no-repeat");
					$("#right_page").css("background-position-y", "-30px");
					$("#left_page").css("background", "url(assets/images/pork.png) center no-repeat");
					$("#left_page").css("background-position-y", "-30px");
				}
				else if ($("#scroll_02").css("background-color") == "rgb(215, 176, 55)"){
					$("#right_page").css("background", "url(assets/images/pork.png) center no-repeat");
					$("#right_page").css("background-position-y", "-30px");
					$("#left_page").css("background", "url(assets/images/beef.png) center no-repeat");
					$("#left_page").css("background-position-y", "-30px");
				}
				else if ($("#scroll_03").css("background-color") == "rgb(215, 176, 55)"){
					$("#right_page").css("background", "url(assets/images/beef.png) center no-repeat");
					$("#right_page").css("background-position-y", "-30px");
					$("#left_page").css("background", "url(assets/images/chiken.png) center no-repeat");
					$("#left_page").css("background-position-y", "-30px");
				}
				$("#right_page").one("animationend", function(event) {
					/**/
					$("#left_page").removeClass("left_page_scroll_back_animation");
	    			$("#right_page").removeClass("right_page_scroll_back_animation");
		  			isAnimated = false;
					/**/
		  		});
		  		$("#left_page").removeClass("left_page_scroll_animation");
		  		$("#right_page").removeClass("right_page_scroll_animation");
		  		/**/
	  		});
		}
	}

	$(".footer_link").hover(
	function(){
		$(this).css("color", "black");
		$(this).css("background", "#D7B037");
	},
	function(){
		$(this).css("color", "white");
		$(this).css("background", "transparent");
	}
	);
}
);