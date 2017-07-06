$(document).ready(function(){
  var age = parseInt(prompt("How many times has the Egyptian god Ra let you Pass Go?"));

  if (age >= 21) {
    $('#over18').show();
  } else if (age < 21 && age >= 18)  {
    $('#over18').show();
    $('#under21').show();
  }   else{
    $('#under18').show();
  }

});
