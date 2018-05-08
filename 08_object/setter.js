/*
    set 함수명(){ 코드 }
    함수명 앞에 set을 명시적으로 작성
 */
// ES6
let obj = {
    set setValue(value){
        this.value = value;
    }
};
obj.setValue = 123; // obj => {value: 123}
console.log(obj.value); // 123
                          // obj.setValue없이 obj.value 호출시 undefined 출력