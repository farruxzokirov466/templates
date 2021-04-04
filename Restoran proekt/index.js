let k=0;
$(document).ready(function(){
  $("#dropbtn1").click(function(){
    $("#drop-content").slideToggle(1000);
    k++;
    if(k%2===1){
     $("#brand_coffe").css("border" , " 1px solid yellow")
    } else {
    	$("#brand_coffe").css("border" , "none")
    }
    
  });
});
      
        $(document).ready(function(){

            function runIt() {
                $(".scrollbottom").animate({bottom:'+=10'},500);
                $(".scrollbottom").animate({bottom:'-=10'},500,runIt);
            }
            runIt();

        });

         
 $(document).ready(function(){
            $('.tushish').on('click',function (e) {
                e.preventDefault();

                var target = this.hash;
                var $target = $(target);

                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top
                }, 900, 'swing', function () {
                    window.location.hash = target;
                });
            });
        });


