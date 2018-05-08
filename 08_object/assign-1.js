/*
    assign(any1[, any2])
    두 번째 파라미터의 오브젝트 프로퍼티를
    첫 번째 파라미터의 오브젝트 끝에 복사하고
    첫 번째 파라미터를 반환
    반환된 값은 오브젝트의 [[PrimitiveValue]]에 설정됨
    
    any1, 2는 열거가능한 오브젝트
    any1에 undefined 또는 null 지정시 TypeError 발생
    [[PrimitiveValue]] 값은 valueOf(), Symbol.toPrimitive로 가져올 수 있음
 */

try {
    let obj = Object.assign(null, {x: 1});  // TypeError
} catch (e) {
    console.log("null 지정 불가");
}
console.log(Object.assign(123));    // 값 타입의 오브젝트 생성. 123은 숫자라 Number 오브젝트가 생성됨.
                                     // 파라미터 값을 생성한 오브젝트의 [[PrimitiveValue]]에 설정
console.log(Object.assign(456, 70));// 70은 열거가능한 오브젝트가 아님. 그래서 첫번째
// 출력
// null 지정 불가
// Number {123} => [[PrimitiveValue]]: 123
// Number {123} => [[PrimitiveValue]]: 456

//valueOf 테스트해봄
let testObj = Object.assign(123);
console.log(testObj.valueOf()); // 123
