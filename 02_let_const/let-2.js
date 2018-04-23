/*
    1. 같은 스코프에서 같은 이름의 let 변수를 선언할수 없음.
    2. 콤마로 구분하여 let 변수를 선언할 때 첫 번째 변수에만 let 키워드를 작성. 중복 작성 시 SyntaxError
    3. 콤마로 구분하여 변수를 선언할 때 let과 var 키워드를 같이 사용할 수 없음.
 */
"use strict";

let book;
let sports = "축구";
sports = "농구";

//let sports = "배구";  //Duplicate declaration
let one = 1, two = 2, three;
//let four = 4, let five = 5; //Unresolved variable or type five
//let six = 6, var seven = 7; //Unresolved variable or type seven