// function show() {
//   document.getElementById('ab').style.display='block';
//   // html에서 ad라는 id를 가진 것의 속성 바꾸기
//   //css에서 none으로 되있던 display 속성이 block으로 바뀌며 적용
// }

// function hide(){
//   document.getElementById('ab').style.display='none';
// }

function showHide(dp) {
  document.getElementById('ab').style.display = dp;
  // document.getElementsByClassName('alert-box').style.display = dp;
  // document.querySelectorAll('.alert-box')[0].style.display=dp;
}

function showCh(text){
  // document.getElementById('ab').innerHTML=text;
  // document.getElementById('ab').style.display='block';

  // document.querySelectorAll('.alert-box')[0].innerHTML=text;
  // document.querySelectorAll('.alert-box')[0].style.display='block'

  $('.alert-box').html(text);
  $('.alert-box').css('display','block');

}  

