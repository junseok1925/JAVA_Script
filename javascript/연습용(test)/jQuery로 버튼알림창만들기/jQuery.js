
// function show1(){
//   document.getElementById('ab1').style.display='block';
  
// }  
// function show2(){
//   document.getElementById('ab2').style.display='block';
// }  
// function show3(){
//   document.getElementById('ab3').style.display='block';
// }  

// =============리팩토링===========

// function show(id){
//   document.getElementById(id).style.display='block';
  
// }  

// =============query로 해보기===========

function show(id){
  document.querySelectorAll('#'+id)[0].style.display='block';
}  

// =============JQuery로 해보기===========
// function show(id){
//   $('#${id}').css('display','block');
// }  

// =============창 닫는 버튼 작동===========

// function hide1(){
//   document.querySelectorAll('#ab1')[0].style.display = 'none'
// }
// function hide2(){
//   document.querySelectorAll('#ab2')[0].style.display = 'none'
// }
// function hide3(){
//   document.querySelectorAll('#ab3')[0].style.display = 'none'
// }

//===============함수 하나로 만들기============
// 세번째박스 <button onclick="hide('ab3')">x</button> 매개변수 설정해야함

// function hide(id){
//   document.querySelectorAll('#'+id)[0].style.display = 'none'
// }

// // =============JQuery로 해보기===========

// $('#'+id).eq(0).css('display','none');

// =============JQuery로 두 기능을 한번에===========

function showHide(id,dp){
  document.querySelectorAll(`#${id}`)[0].style.display = dp;
  $((`#${id}`)).css('display',dp);
  // `#${id}` : html에 설정된 id를 모두 지정
}  

//=============on/off 버튼하나로 보였다 안보였다 만들기==============

let cnt=0; //버튼을 클릭한 횟수를 저장하는 변수
//함수밖에 해야 함수가 작동될때마다 0으로 초기화된느것을 막음
function onOff() {
  //let cnt=0; //함수 안에 만들면 함수가 작동될때마다 0으로 초기화됨
  cnt++;
  if(cnt%2===1){
    document.querySelectorAll('.box')[0].style.display='none';
    document.querySelectorAll('.btn')[0].innerHTML='표시';

  }else{
    document.querySelectorAll('.box')[0].style.display='block';
    document.querySelectorAll('.btn')[0].innerHTML='숨김';
  }

}

//=============const로 변수를 만들어 간단히==============

// const box = document.querySelectorAll('.box')[0];
// const btn =  document.querySelectorAll('.btn')[0];
// bnt.innerHTML = '표시';

// let cnt=0; //버튼을 클릭한 횟수를 저장하는 변수
// //함수밖에 해야 함수가 작동될때마다 0으로 초기화된느것을 막음
// function onOff() {
//   //let cnt=0; //함수 안에 만들면 함수가 작동될때마다 0으로 초기화됨
//   cnt++;
//   if(cnt%2===1){
//     box.style.display='none';
//     //$('.box').css('display','none'); //jQurey로
//     bnt.innerHTML='표시';
//     //$('.btn').html('표시'); //jQurey로
//   }else{
//     box.style.display='block';
//     bnt.innerHTML='숨김';
//   }

// }

//======버튼으로 보였다안보였다 설정 쉼게======

// function sh(){
//   $('.box2').hide();
// }

// function sh(){
//   $('.box2').show();
// }

function sh(){
  $('.box2').toggle();
}