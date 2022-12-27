function msg(){
alert('js에 작성된 실행되는 함수');
}

btn.onclick = function(){
  alert('js에 onclick했을때 함수를 걸음');
}

function msg2(){
  alert('이미 만들어진 함수를 실행기켜주기');
  }
  
btn.onclick = msg2; // 이미만들어진 함수를 실행시키기 ()-괄호안씀.

btn.addEventListener('click',msg)
// btn.addEventListener(이벤트,함수)
// 만들어진 함수실행후 지정된 함수또 실행
btn.addEventListener('click',() => alert('3번째 추가'));

btn.removeEventListener('click',msg);
//삭제

btnremoveEventListener('click',() => alert('3번째 추가'));


//js
document.querySelector('#btn').addEventListener('click',function(){
  document.querySelector('#text').style.display='none';
});

//jQuery
$('#btn').on('click',function(){
  $('#text').css('display','none');
});
