// // 함수 선언문
// function showMsg(){
//   alert('hi');
// }

// // 함수 표현식

// // showMsg(); //함수 선언문과 다르게 함수식 위에 호출문 작성시 작동안됨
// let showMsg = function(){
//   alert('hello');
// }
//   showMsg();


/*---------------------------------------------------*/

/*선언식으로 작성*/

//"use strict"
// let age = prompt('나이 입력');
// if(age>=20){
//   function showMsg(){
//     alert('안녕하세요');
//   }
// }else{
//   function showMsg(){
//     alert('안녕');
//   }
// }
// showMsg();


/*---------------------------------------------------*/

/*표현식으로 작성*/

// let age = prompt('나이 입력');
// let showMsg;
// if(age>=20){
//   showMsg=function(){
//     alert('안녕하세요');
//   }
// }else{
//   showMsg=function(){
//     alert('안녕');
//   }
// }
// showMsg();

/*---------------------------------------------------*/

//콜백함수
// prompt창에서 확인,취소 선택시 작동

// function ask(q,yes,no){
//   if(confirm(q)){
//     yes();
//   }else{
//     no();
//   }
// }
// function showOk(){
//   alert('확인되었습니다');
// }
// function showCancel(){
//   alert('취소되었습니다');
// }
// ask('확인하시겠습니까? 취소하시겠습니까?',showOk,showCancel);

/*---------------------------------------------------*/

// 설정된 시간이 지난후 실행
function showMsg(){
  console.log('ㅎㅇ');
}
// 3초 뒤에 실행되라
// setTimeout(showMsg,3000);

// 3초마다 계속 실행되라
setInterval(showMsg,500);

// 3초 뒤에 실행되라
// setTimeout(function() {
//   console.log('위의 식과 같음');
// },3000);


