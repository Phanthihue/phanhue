$(function(){

     $("#acc").on("click",function(){
          $(".acc").show();
        $(".pro").hide();
          $(".war").hide();
            $(".fin").hide();

      });
      $("#pro").on("click",function(){
        $(".pro").show();
        $(".acc").hide();
         $(".war").hide();
         $(".fin").hide();        

      });
       $("#war").on("click",function(){
        $(".pro").hide();
        $(".acc").hide();
         $(".war").show();
            $(".fin").hide();
      });
         $("#fin").on("click",function(){
        $(".pro").hide();
        $(".acc").hide();
         $(".war").hide();
            $(".fin").show();
      });
     







    $("#ne").on("click",function(){


        if($('#userName-2').val() == ""){
            $('#userName-2').css("background-color","#FBE3E4") ;
            $('#span1').show();
        }
        else {
             $('#userName-2').css("background-color","white") ;
               $('#span1').hide();     
        }
          if($('#password-2').val() == ""){
            $('#password-2').css("background-color","#FBE3E4") ;
             $('#span2').show();
        }
        else {
             $('#password-2').css("background-color","white")
              $('#span2').hide();       
        }
          if($('#confirm-2').val() == ""){
            $('#confirm-2').css("background-color","#FBE3E4") ;
             $('#span3').show();
        }
        else {
             $('#confirm-2').css("background-color","white") ;
                $('#span3').hide();        
        }
        var a=$('#password-2').val();
        var b=$('#confirm-2').val();
        if (a!=b){
              $('#span4').show();
            }
        else {
            $('#span4').hide();
            
        }


        // -------------------------------------------

       
        if($('#name-2').val() == ""){
            $('#name-2').css("background-color","#FBE3E4") ;
            $('#span5').show();
        }
        else {
             $('#name-2').css("background-color","white") ;
               $('#span5').hide();     
        }

         if($('#surname-2').val() == ""){
            $('#surname-2').css("background-color","#FBE3E4") ;
            $('#span6').show();
        }
        else {
             $('#surname-2').css("background-color","white") ;
               $('#span6').hide();     
        }

         if($('#email-2').val() == ""){
            $('#email-2').css("background-color","#FBE3E4") ;
            $('#span7').show();
        }
        else {
             $('#email-2').css("background-color","white") ;
               $('#span7').hide();     
        }

          if($('#address-2').val() == ""){
            $('#address-2').css("background-color","#FBE3E4") ;
            $('#span8').show();
        }
        else {
             $('#address-2').css("background-color","white") ;
               $('#span8').hide();     
        }

         if($('#age-2').val() == ""){
            $('#age-2').css("background-color","#FBE3E4") ;
            $('#span9').show();
        }
        else {
             $('#age-2').css("background-color","white") ;
               $('#span9').hide();     
        }
    });
        });



