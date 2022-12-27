
//================js=================


// document.querySelectorAll('.tab-btn')[0].addEventListener('click',function(){
//     document.querySelectorAll('.tab-btn')[0].classList.add('select');
//     document.querySelectorAll('.tab-content')[0].classList.add('show');
// });

// document.querySelectorAll('.tab-btn')[1].addEventListener('click',function(){
//     document.querySelectorAll('.tab-btn')[1].classList.add('select');
//     document.querySelectorAll('.tab-content')[1].classList.add('show');
// });

// document.querySelectorAll('.tab-btn')[2].addEventListener('click',function(){
//     document.querySelectorAll('.tab-btn')[2].classList.add('select');
//     document.querySelectorAll('.tab-content')[2].classList.add('show');
// });

// ========================================================================
// 1번탭을 선택하고 2번탭을 선택하면 'show'와 'select'가 안지워져서 중복됨
// js로 일일이 다 지우는 함수를 쓰면 귀찮음 
// 그래서 jQury로 간단하게 가능
// =========================================================================


//==============jQury================


// $('.tab-btn').eq(0).on('click',function(){

//     $('.tab-btn').removeClass('select');
//     $('.tab-btn').eq(0).addClass('select');

//     $('.tab-content').eq(0).removeClass('show');
//     $('.tab-content').eq(0).addClass('show');
// });


// $('.tab-btn').eq(1).on('click', function() {

//     $('.tab-btn').removeClass('select');
//     $('.tab-btn').eq(1).addClass('select');

//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(1).addClass('show');

// });

// $('.tab-btn').eq(2).on('click', function() {

//     $('.tab-btn').removeClass('select');
//     $('.tab-btn').eq(2).addClass('select');

//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(2).addClass('show');

// });


// ===========jQury 반복문으로 돌리고 리팩토링============

//중복된선택자 변수로 지정
// let btn = $('.tab-btn');
// let content = $('.tab-content');

// for(let i = 0; i<'.tab-btn'.length; i++){

//     btn.eq(i).on('click', function() {

//         btn.removeClass('select');
//         btn.eq(i).addClass('select');
    
//         content.removeClass('show');
//         content.eq(i).addClass('show');
    
//     });
// }

//==============버블링 활용 =====================

let btn = $('.tab-btn');
let content = $('.tab-content');

    $('.list').on('click',function(e){
        console.log(e.target);
        //어디를 클릭했는지 알려줌

        //e.target과 tab-btn과 같은지
        if(e.target===document.querySelectorAll('.tab-btn')[0]){
            showTab(0);
        }else if(e.target===document.querySelectorAll('.tab-btn')[1]) {
            showTab(1);
        }else if(e.target===document.querySelectorAll('.tab-btn')[2]){
            showTab(2);
        }
       

    });

    function showTab(i){
      btn.removeClass('select');
      btn.eq(i).addClass('select');

      content.removeClass('show');
      content.eq(i).addClass('show');
}