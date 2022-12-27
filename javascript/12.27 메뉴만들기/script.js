document.querySelector('.navbar-toggler').addEventListener('click',function(){

    document.querySelector('.list-group').classList.toggle('show');
    // list-group에 css의 'show' 클래스 추가 .toggle은 누를때마다 추가됬다 지웠다 반복
    //.classList.add() 와 .classList.remove();를 합친것이 .classList.toggle()
});

// ===============jQury==================

$('.navbar-toggler').on('click',function(){

    $('.list-group').addClass // 추가 = .classList.add()
    $('.list-group').removeClass  //삭제 = .classList.remove();
    $('.list-group').toggleClass('show'); //토글
});