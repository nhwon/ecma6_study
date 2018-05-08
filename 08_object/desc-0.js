var obj = {};
Object.defineProperty(obj,"book",{
    value : 123,
    writable : true,
    enumerable : true,
    configurable : true
});

obj.book = 456; //writable 이 false 면 book의 값은 123
delete obj["book"]; //configurable이 true면 obj가 {}, obj.book이 undefined로 출력됨.
console.log(obj);
console.log(obj.book);

for(var prop in obj){   //enumerable이 false면 prop에 undefined값이 들어감. for문 수행하지 않음.
    console.log(prop);
}
