/*
    오브젝트에 요청 프로퍼티가 작성되어 있는지 체크
    -> 작성되어 있으면 get 속성 존재 여부 체크
    -> 존재시 속성 값인 함수 실행
 */
// ES5
var obj = {};
Object.defineProperty(obj, "book", {
   get : function(){
       return "책";
   }
});
console.log(obj.book);  // 책