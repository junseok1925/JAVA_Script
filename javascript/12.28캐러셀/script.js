
 //다음버튼
 let no = 1;
 //이미지박스위치를 알려주는 변수생성

 $('.next').on('click',function(){
  //이미지 박스가 몇번인지 알아야함 박스가 1번이면 1100vw이동 2번이면 -200vw이동
  if(no===1){
  $('.carousel').css('transform','translateX(-100vw)');
  no++;
  }else if(no===2){
  $('.carousel').css('transform','translateX(-200vw)');
  no++;
  }
  no===0;
 });

  //이전버튼
  $('.revers').on('click',function(){
    if(no>1){
   $('.carousel').css('transform',`translateX(-${no-2}00vw)`);
   no--;
    }
  });
 
//1번 버튼 js
document.querySelector('.btn1').addEventListener('click',function(){
  document.querySelector('.carousel').style.transform = 'translateX(0)';
  no=1;
 });

//2번 버튼 jQury
 $('.btn2').on('click',function(){
  $('.carousel').css('transform','translateX(-100vw)');
  no=2;
 });

 //3번 버튼
 $('.btn3').on('click',function(){
  $('.carousel').css('transform','translateX(-200vw)');
  no=3;
 });




//================리팩토링================


// let no = 1;
// //이미지박스위치를 알려주는 변수생성
// const carousel = $('.carousel');
// //중복된코드 변수 설정(상대적으로 처리속도가 좀 더 빨라짐)
//  //다음버튼
//  $('.next').on('click',function(){
//   if(no<3){
//     carousel.css('transform',`translateX(-${no}00vw)`);
//   no++;
//   }
//  });
 
// //1번 버튼 js
// document.querySelector('.btn1').addEventListener('click',function(){
//   document.querySelector('.carousel').style.transform = 'translateX(0)';
//   no=1;
//  });

// //2번 버튼 jQury
//  $('.btn2').on('click',function(){
//   $('.carousel').css('transform','translateX(-100vw)');
//   no=2;
//  });

//  //3번 버튼 jQury
//  $('.btn3').on('click',function(){
//   $('.carousel').css('transform','translateX(-200vw)');
//   no=3;
//  });
