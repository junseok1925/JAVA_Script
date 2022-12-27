let a = {
  name: "kim",
};
let b = a;

a.name="kang";

 console.log(b.name); //a의 값을 바꿔도 b의 값이 바뀜
 //let b = a; 이렇게 선언시
 //a의 값이 어느 한 주소값에 들어가게되고 b는 그 주소값을 가져온다
 //따라서 a의 값을 바꾸면 b의 값이 바뀜(같은 주소값을 공유하기때문)

 let c = {
  name: "kim",
 };
 let d = {
  name: "kim",
 };
 console.log(c===d);
 //값은 같아 보이지만 저장된 주소값이 달라 false로 출력

 //============독립적 객체로 만들기====================

 let aaa = {
  name: "kim",
  age: 40,
 };

//  let bbb = {};
//  for(let key in aaa){
//   bbb[key] = aaa[key] //독립적인 개체로 bbb에 aaa키,벨류값을 넣음
//  }

let bbb = Object.assign({score:30,math:40},a); // 위의 식과 같은 의미

 a.name="kang" //따라서 이 경우엔 바뀌지않음 하지만 위에 bbb를 독립적객체로 만들었기때문에 바뀜
 console.log(bbb);

