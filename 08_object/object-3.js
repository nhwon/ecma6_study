/*
//ES5에서의 오브젝트에 함수 작성
let obj = {
    getTotal : function(param){
        return param + 123;
    }
}
*/
//ES6
let obj = {
    getTotal(param){
        return param +123;
    }
};
console.log(obj.getTotal(400)); // 523