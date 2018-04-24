/*
    const 키워드는 변수에 할당된 값을 변경할 수 없다
    const 변수에 할당된 값은 상수
 */
const SPORTS = "축구";
try {
    SPORTS = "농구";
} catch(e) {
    console.log("const 재할당 불가");
}

//const 재할당 불가