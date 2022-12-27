// //로그인하세요~ 라는 모달창 띄우기
// document.querySelector('.play-btn').addEventListener('click',function(){
//     document.querySelector('.black-bg').classList.add('show');
// });

// //모달창에 닫기 버튼을 누르면 모달창 닫기
// document.querySelector('.close-btn').addEventListener('click',function(){
//     document.querySelector('.black-bg').classList.remove('show');
// });


// =============jQury===============

$('.play-btn').on('click', function() {
    $('.black-bg').addClass('show');
});

$('.close-btn').on('click', function() {
    $('.black-bg').removeClass('show')
});

//======== jQury로 창이 서서히 뜨게 애니매이션효과 추가 하기 (fadeIn, fadeOut)========

// $('.play-btn').on('click', function() {
//     $('.black-bg').fadeIn('show');
// });

// $('.close-btn').on('click', function() {
//     $('.black-bg').fadeOut('show')
// });

