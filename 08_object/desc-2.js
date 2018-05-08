/*
    오브젝트에 요청 프로퍼티가 작성되어 있는지 체크
    -> 작성되어 있으면 set 속성 존재 여부 체크
    -> 존재시 속성 값인 함수 실행
 */
// ES5
var obj = {};
Object.defineProperty(obj, "item", {
    set: function(param) {
        this.sports = param;
    }
});
obj.item = "야구";
console.log(obj.sports);    // 야구
//get속성을 정의하지 않았는데 값을 가져오는 이유는?
//디폴트 getter가 호출되었기 때문