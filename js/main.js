$(document).ready(function() {
    
  
    $("#category-toggle").click(function(){
        
        
        
        if($(".category").css("opacity") == 0 ) {
            $(".category").css("opacity","1");
            $(".category").css("right","0");

        }
        else {
            $(".category").css("opacity","0"); 
            $(".category").css("right","10px");
        }
    });
});