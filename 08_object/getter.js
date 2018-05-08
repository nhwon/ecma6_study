/*
    get 함수명(){ 코드 }
    함수명 앞에 get을 명시적으로 작성
 */
// ES6
let obj = {
    value:123,
    get getValue(){
        return this.value;
    }
};
console.log(obj.getValue);  // 123