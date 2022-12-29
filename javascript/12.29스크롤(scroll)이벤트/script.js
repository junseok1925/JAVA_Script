let box = document.querySelector('.box');
let boxHeight = box.scrollHeight-box.clientHeight-5;
let isDisable = true;
console.log(box.scrollHeight);
//스크롤박스의 크기

box.addEventListener('scroll',function(){

  // console.log(box.scrollTop);
  //위에서 부터 얼마나 스크롤을 내렸는지알려줌

  //스크롤을 다 내렸을때
  //총높이 - box창의 높이 == 이동거리

  if(isDisable && (box.scrollTop >= boxHeight)){
    document.querySelector('#chk').disabled = false;
    isDisable = false;
  }
});

