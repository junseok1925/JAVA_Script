
// 아래식을 화살표함수로 표현
// let sum=(a,b) => a+b;
// // let sum=function(a,b){
// //   return a+b;
// // }
// alert(sum(2,3));

// -------매개변수가 1개일시--------
let sum=(a) => a+5;
alert(sum(1));

// -------매개변수가 없을시----------
let msg = () => alert('hi');
msg();

// ---------------예시--------------
let add=(a,b)=>{
  let c = a-b;
  return c;
}
alert(add(10,5));