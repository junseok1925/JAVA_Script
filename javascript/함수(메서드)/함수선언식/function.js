
// function showMessage(){
//   alert('hi~');
// }
// showMessage();


// //같은 의미
// function showMessage(){
// let m = 'hi~'  //지역변수 (해당 함수안에서만 사용가능)
// alert(m);
// }
// showMessage();


// //let a ='hello';   //전역변수

// function showMessage() {
//   let m = 'ㅎㅇ' //지역변수

//   alert(m+a);
// }

// showMessage();


// //매개변수 2개 설정
// function showMessage(start,end){
//   alert(start+" "+end);
// }
// //설정된 매개변수 순서에 맞게 값이 들어감
// showMessage('hi','hello');


// //리턴하기
// function sum(num1,num2){
//   return num1+num2;
// }
// let a = sum(10,20);
// alert(a);



// // 위의 function에 설정된 age와 다른변수
// let age=prompt('나이입력');

// if(check(age)){
//   alert('성인');
// }else{
//   alert('미성년자');
// }

// function check(a){
//   if(a>=20){
//     //if()안 check함수로 값이 리턴
//     return true;
//   }else{
//     return false;
//   }
// }


//a와b는 prompt로 입력
// a와b중 작은걸 리턴시켜주는 min함수를 생성 결과를 alert로 출력

// Number=숫자로 형변환
let a=Number(prompt('a값을 입력하시오'));
let b=Number(prompt('b값을 입력하시오'));
function min(a,b){
  if(a>b){
    //함수로(min) 값이 리턴
    return b;
  }else{
    return a;
  }
}
alert(min(a,b));
