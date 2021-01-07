
$( document ).ready(function() {
function test(){
  var pattern = [],
    tone;
  pattern.push(Math.floor(Math.random() * 10));
  tone = "#sound" + pattern[0];

  $(tone)[0].play();          
}

$("#button").click(test);

})