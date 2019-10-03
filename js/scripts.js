var factorial = function(number) {
  if (number === 0)
  {
    return 1;
  }
  return number * factorial(number - 1)
}

$(document).ready(function() {
  $('form#leap-year').submit(function(event){
    var number = parseInt($('input#number').val());
    var result = factorial(number);


    $('.answer').text(result);
    $('#result').show();


    event.preventDefault();
  });
});


// $(document).ready(function() {
//   $("form#leap-year").submit(function(event) {
//     event.preventDefault();
//     var number = parseInt($("input#number").val());
//     var result = leapYear(year);
//
//     $(".year").text(year);
//
//      if (!result) {                 // same as writing if (result === false)
//        $(".not").text("not");
//      } else {
//        $(".not").text("");
//      }
//
//      $("#result").show();
//   });
// });
