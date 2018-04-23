/*
    1. 함수 안에 작성한 let 변수는 함수가 스코프.
 */

let sports = "축구", music = "재즈";    //Scope > Script

function get(){
    let music = "클래식";  //Scope > Local
    console.log(music);
    console.log(sports);
}
get();