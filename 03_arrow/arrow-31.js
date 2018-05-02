//let sports = () => ({});  //()안에 {}를 넣을 경우 {}를 로그에 출력함. type : object
/*
    {}를 함수 블록으로 인식
    => return문을 작성하지 않은 것으로 인식
 */
let sports = () => {};  //type : undefined
let result = sports();
console.log(result);    //undefined