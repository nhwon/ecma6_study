//현재 스코프는 글로벌 오브젝트. this가 글로벌 오브젝트를 참조
var music = "음악";
console.log(this.music);    //음악

//this가 window 오브젝트를 참조. but let 변수는 window 오브젝트에 설정되지 않음.
let sports = "축구";
console.log(this.sports);   //undefined