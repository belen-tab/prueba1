$(function(){
   
    $("a").click(function(event){
        if (this.hash !== "") {
          event.preventDefault();
    
          var gato = this.hash;
    
          $("html, body").animate({
            scrollTop: $(gato).offset().top
          }, 800, function(){
            window.location.hash = gato;
          });
        }
      });

      $(".imagen-trucha").mouseover(function(){
        $(".texto-trucha").show();
      })

      $(".imagen-trucha").mouseout(function(){
        $(".texto-trucha").hide();
      })

      $(".imagen-benat").mouseover(function(){
        $(".texto-benat").show();
      })

      $(".imagen-benat").mouseout(function(){
        $(".texto-benat").hide();
      })

      $(".imagen-cabezona").mouseover(function(){
        $(".texto-cabezona").show();
      })

      $(".imagen-cabezona").mouseout(function(){
        $(".texto-cabezona").hide();
      })

      $(".imagen-js").mouseover(function(){
        $(".texto-js").show();
      })

      $(".imagen-js").mouseout(function(){
        $(".texto-js").hide();
      })

      $(".imagen-met").mouseover(function(){
        $(".texto-met").show();
      })

      $(".imagen-met").mouseout(function(){
        $(".texto-met").hide();
      })

      $(".imagen-elcira").mouseover(function(){
        $(".texto-elcira").show();
      })

      $(".imagen-elcira").mouseout(function(){
        $(".texto-elcira").hide();
      });

      

      
});