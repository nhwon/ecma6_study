console.log(Object.assign("ABC", {one: 1}));    
console.log(Object.assign(Symbol("ABC"), {one: 1}));    

try {
    let obj = Object.assign("ABC","ONE");
} catch (e) {
    console.log("파라미터 모두 문자열 사용 불가");
}

// 출력
// String {0: "A", 1: "B", 2: "C", one: 1, length:3, [[PrimitiveValue]]: "ABC"} // 이렇게 출력된건 String이 이터러블 오브젝트이기 때문
// Symbol {one: 1, [[PrimitiveValue]]: Symbol(ABC)}
// 파라미터 모두 문자열 사용 불가