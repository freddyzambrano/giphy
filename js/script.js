// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
  $("#q2").click(function() { 
    $.ajax({
        url: custom_api_url,
        method: "GET",
        success: function(response) {
            // YOUR CODE GOES HERE
      

        }   
    }); 
    
});
  
  
});

