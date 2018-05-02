/*
    (param) => { 코드 };
    param => { 코드 };
    () => { 코드 };
    (param1, param2,,, paramN) => { 코드 };
    param => ({key:value});
    (param1, param2, ...rest) => { 코드 };
    (param1, param2 = 123,,, paramN) => { 코드 };
    ([one, two]=[1, 2]) => { 코드 };
    ({key:sum}={key:10+20}) => { 코드 };
 */
let es6 = (one, two) => {
    return one + two;
};
let sum = es6(1, 2);
console.log(sum);   //3