;(function(){

			// Menu settings
			$('#menuToggle, .menu-close').on('click', function(){
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});


})(jQuery)




$(function(){
        $(".screen-typed").typed({
            strings: ["> Hello! ^1000 \n> I am Jin ^600 \n> I am a full stack web developer based in Sydney ^1000\n> I am looking for junior web development opportunities\n>// say something clever here...^1500 \n> I love to make /create things,\n> Web applications, paintings, photos and ^1200cocktails... \n> Start scrolling to learn more about me "],
            typeSpeed: 20
        })
    });



		$(document).ready(function() {

		$(".profilepic").mouseover(function(){

		      $(this).css({
		        "opacity": "0.5",
		        "width": "150px",
		        "height": "150px",
		      });
		});

		$(".profilepic").mouseout(function(){

		      $(this).css({
		        "opacity": "1",
		        "width": "120px",
		        "height": "120px",
		      });
		});


		$(".grid").mouseover(function(){

		      $(this).css( "opacity", "1");
		});

		$(".grid").mouseout(function(){

	      $(this).css( "opacity", "0.5");

		});

		});
