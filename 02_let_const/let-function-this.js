"use strict";
var sports = "축구";  //Scope > Global
let music = "재즈";   //Scope > Script

function get(){
    var sports = "농구";  //Scope > Local
    let music = "클래식"; //Scope > Local
    console.log("1:", sports);
    console.log("2:", this.sports);
    console.log("3:", music);
};
window.get();   //1:농구 2:축구 3:클래식
get();  //1:농구 undefined
