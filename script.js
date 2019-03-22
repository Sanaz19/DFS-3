var string = "hello";
var number = 5;
var circle = $ (".circle");
var word = $ (".word");
console.log(word);
console.log (circle);
 
$(document).on('mousemove', function (event){
  var pageX = event.pageX;
  var pageY = event.pageY;
  //console.log(pageX + ":" + pageY);
  circle.css({
    "opacity":  (pageX/window.innerWidth),
    "left": -pageX+"px",
    "right": -pageY+"px",
  });
  
   word.css({
   "left": pageX+ "px",
   "top": pageY+ "px",
   });
  
}); 