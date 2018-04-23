/*
   one = 100, one = 300 => 함수:300, 글로벌:300
   var one = 100, one = 300 => 함수:300, 글로벌:300
   one = 100, var one = 300 => 함수:300, 글로벌:100
   var one = 100, var one = 300 => 함수:300, 글로벌:100
*/

//"use strict";

one = 100;
//var one = 100;
function get(){
    one = 300;
//    var one = 300;
    console.log("함수:", one);
}
get();
console.log("글로벌:", one);