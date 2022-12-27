// let cnt = 0; //클릭횟수를 저장하는 변수

// document.querySelector('#mode').addEventListener('click', function(){
//     cnt++;

//     //버튼 글씨 라이트 모드와 다크 모드 on/off  
//     if(cnt % 2 == 1) {
//         // document.querySelector('#mode').setAttribute('value', '라이트모드');
//         document.querySelector('#mode').value='라이트모드';
//         //버튼 글씨 다크모드일때 배경색 검정 글꼴 흰색
//         document.body.style.backgroundColor='black';
//         document.body.style.color='white';
//     } else {
//         document.querySelector('#mode').value='다크모드';
//         //버튼 글씨 라이트모드일때 배경 흰색 글꼴 검정
//         document.body.style.backgroundColor='white';
//         document.body.style.color='black';
//     }

// });
// =================jQuery로 만들기=====================
let cnt = 0;
$('#mode').on('click',function(){
    cnt++;
    if(cnt%2===0){
        $('#mode').attr('value','라이트모드');
        // $('#mode').value('라이트모드'); 위에 코드와 같은의미
        $('body').css('backgroundColor','black');
        $('body').css('color','white');

    }else{
        $('#mode').attr('value','다크모드');
        // $('#mode').value('라이트모드'); 위에 코드와 같은의미
        $('body').css('backgroundColor','white');
        $('body').css('color','black');
    }
});