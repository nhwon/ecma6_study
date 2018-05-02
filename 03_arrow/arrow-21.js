/*
let total = (one, two) 
    => one + two;
//SyntaxError
*/
/*
let total = (one, two) => 
    one + two;
//정상실행
*/
/*
   함수 블록을 사용하지 않을 때는 return 생략
 */
let total = (one, two) => one + two;
let result = total(1, 2);
console.log(result);    //3