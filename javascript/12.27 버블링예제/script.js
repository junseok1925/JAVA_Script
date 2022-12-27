form.onclick = function(event){

    event.target.style.backgroundColor = 'yellow';

    console.log(event.target.tagName);
    //클릭한 주체(대상)가 출력
    console.log(this.tagName);
    // 코드 자체인 form을 출력

};

document.querySelector('p').addEventListener('click',function(e){
//뭔가 작동될거 해주기
alert('asdasdasd');
e.stopPropagation();
});