$(function(){
		
	//---banner---//
	var oraz = setInterval(function(){orazFunc()},10000);
	var hays = 1;
		function orazFunc(){
			hays++;
				console.log(hays);
				//--fading text--//
				if(hays == 1){
					$(".banner-text").not("#real-text").fadeOut(1500);
					$("#real-text").fadeIn(1500);
				}else if(hays == 2){
					$(".banner-text").not("#invest-text").fadeOut(1500);
					$("#invest-text").fadeIn(1500);
				}else if(hays == 3){
					$(".banner-text").not("#finance-text").fadeOut(1500);
					$("#finance-text").fadeIn(1500);
				}else{
					$(".banner-text").not("#real-text").fadeOut(1500);
					$("#real-text").fadeIn(1500);

					hays = 1;
				}
				//--fading text end--//

			//--fading img--//
			var $active = $('#cycler .active');
	      	var $next = ($active.next().length > 0) ? $active.next() : $('#cycler img:first');
	      	$next.css('z-index',2);//move the next image up the pile
	      	$active.fadeOut(1500,function(){//fade out the top image
		  		$active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
	          	$next.css('z-index',3).addClass('active');//make the next image the top one
	      	}); 
	      	//--fading img end--//

		}
	//---banner end---//
	

	//---load index---//
	$('.logo-pic').click(function(){
		window.location.href = "index.php";
		// $('#content').load('content/main.php');
		// $('#menu li').css('border-bottom', '0px solid transparent');
	});
	//---load index end---//


	//--topnav na yow--//
		//topnav = document.getElementById("topnav");
	var scrollFuncPo = function () {
	    var y = window.scrollY;
	    if (y >= 5) {
	        //topnav.className = "topnav show"
	        $('#topnav').attr('class','topnav show');
	    } else {
	        //topnav.className = "topnav hide"
	        $('#topnav').attr('class','topnav hide');
	    }
	};
	window.addEventListener("scroll", scrollFuncPo);
	//--topnav na yow end--//


	$("#burgor").click(function(){
    	$(".menu").slideToggle();
	});

});


//---content load, highlight, toggle, scrolling--//
function mens(selectedmen){

	$('#content').load('content/'+selectedmen+'.php');
	$('.menu li').css('border-bottom', '0px solid transparent');
	$('.'+selectedmen).css('border-bottom', 'solid 1px white');

	//hide menu after click(for burgor)
	if(($("body").width()<755) || ($("body").width()>1017 && $("body").width()<1306)){
		$(".menu").slideToggle();
		$(this).hide();
	}

	//--animate scrolling coz window.location.href lol--//
	$('html,body').animate({
        scrollTop: $("#content").offset().top},
        'slow');

}
//---content load, highlight, toggle, scrolling--//


//---resizing window---//
$(function(){
	$(document).ready(function(){
		bodyfluid();
	});
	
	function bodyfluid(){
		if($("body").width()<1200){
			$("body").attr("id","size960");
			if($("body").width()<960){
				$("body").attr("id","size768");
				if($("body").width()<768){
					$("body").attr("id","size600");
					if($("body").width()<600){
						$("body").attr("id","size480");
						if($("body").width()<480){
							$("body").attr("id","size320");
						}
					}
				}
			}
			if($("body").width()>768){
				//sliders();
				
			}else{
				$("#sub_all").css({'width':'100%'});
				$(".contactpop").css({'display':'none'});
			}
		}else{
			$("body").attr("id","size1200");
				//sliders();
			}
		return false;
	}

});
//---end---//

