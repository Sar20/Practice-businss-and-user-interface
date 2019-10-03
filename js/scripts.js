function reverseString(str) {
    return str.split("").reverse().join("");
    if reverseString(str) === str {
      return true;
    }
}


$(document).ready(function() {
  $('form#leap-year').submit(function(event){
    var word = $('input#letter').val();
    var result = reverseString(word);

    $('#result').show();
    $('.answer').text(result);

    event.preventDefault();
  });
});







// var palindrome = function(letter) {
//   if (letter === 0)
//   {
//     return 1;
//   }
//   return letter * factorial(letter - 1)
// }
//
// // 6! = 6 * 5 * 4 * 3 * 1
// $(document).ready(function() {
//   $('form#leap-year').submit(function(event){
//     var number = parseInt($('input#number').val());
//     var result = factorial(letter);
//
//
//     $('.answer').text(result);
//     $('#result').show();
//
//
//     event.preventDefault();
//   });
// });
//
//
// // $(document).ready(function() {
// //   $("form#leap-year").submit(function(event) {
// //     event.preventDefault();
// //     var number = parseInt($("input#number").val());
// //     var result = leapYear(year);
// //
// //     $(".year").text(year);
// //
// //      if (!result) {                 // same as writing if (result === false)
// //        $(".not").text("not");
// //      } else {
// //        $(".not").text("");
// //      }
// //
// //      $("#result").show();
// //   });
// // });
