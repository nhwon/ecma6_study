/*
    1. if문의 블록 {}이 스코프
    2. 블록 {} 밖에 같은 이름의 변수가 있어도 스코프가 다르므로 변수 각각에 값을 설정할 수 있으며 변수 값이 유지됨.
 */

let sports = "축구";
if(sports){
    let sports = "농구";
    console.log("블록:", sports);  //블록: 농구
}
console.log("글로벌:", sports);    //글로벌: 축구