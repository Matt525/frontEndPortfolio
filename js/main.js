
let main =()=> {

document.onload(()=>{
  document.location.hostname = "Matthew Staton";
}
)

let navbar = document.getElementById('nav');


  if(scrollY > navbar.scrollTop){
    navbar.classList.add('stick'); 
  }
  else{
    navbar.classList.remove('sticky');
  }




(function() {
   'use strict';
   
  	$('a.page-scroll').click( ()=> {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          let target = $(this.hash);

          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

          if (target.length) {
            body.animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });











          // Skills charts using EASY PIE CHART >> 
          $(document).ready((e)=> {
          let windowBottom = $(window).height();
          let index=0;
          
          $(document).scroll(()=>{
            var top = $('#skills').height()-$(window).scrollTop();
            console.log(top)
            if(top<-300){
              if(index==0){	
              
                $('.chart').easyPieChart({

                  easing: 'easeOutBounce',
                  onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                    

					}
				});
          
				}
			
		}
	})

	});





















  	// Portfolio isotope filter
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
	
      
    




	
  	// Pretty Photo


}());


}
main();