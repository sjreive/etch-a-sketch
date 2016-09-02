
$(document).ready(function () {

var $wrapperdiv= $("<div>", {id: "wrapper"});
$("body").append($wrapperdiv);

    $(".button").click(function(){
    $("div.square").remove();  
     


        var my_text = prompt('How big should the grid be? Pick a number between 4 and 50.');
        if (my_text > 50) {
           document.getElementById("value").innerHTML =
           "That's too big! Please try again.";
            }
        else { 
           var x= Math.pow(my_text, 2); 
           var h= 800/my_text;
           //document.getElementById("value").innerHTML =
          // "Your grid will have a total of " +  x + " squares. Squares will be " + h + " by " + h ;
            
           for (var i=1; i <= x; i++) {
            $('#wrapper').append($('<div/>', {id: 'r' + i, class:'square'}))
            $(".square").height(h);
            $(".square").width(h);
            
                //$("div.square").hover(
               // function() {
                //$(this).css("background-color", "yellow");
                //}, 
                //function(){
                //$(this).css("background-color","#f64d94");
                //});





            }
        }
  
        $("div.square").hover(
          function() {
                var value = parseFloat($(this).css("opacity"));
                if(value<1){
                  value += 0.1;
                  $(this).css("opacity", value);
                }
              });




    })
});




