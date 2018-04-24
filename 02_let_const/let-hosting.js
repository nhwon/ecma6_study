/*
    호이스팅(Hosting) ? 
    let 변수는 호이스팅 되지 않음.
 */
console.log(sports);    //undefined
var sports = "스포츠";

console.log(music);     //Uncaught ReferenceError
let music = "음악";