// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
  var search = $("#search-term").val();
  console.log(search);
  var api = "https://api.giphy.com/v1/gifs/search?q="+search+ "&rating=pg&api_key=dc6zaTOxFJmzC";
  $.ajax({
      url : api,
      method: "GET",
      success: function(response){
          $(".gallery").html("");
         
          response.data.forEach(function(element) {
            var results = '<img src="' + element.images.original.url+ '"/>';
            $(".gallery").append(results);
          });
        
         
      }
    
  });

   $(document).keypress(function(event){
        console.log(event);
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
        console.log(response); 
        }
    });
});






