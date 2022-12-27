
// let elem = document.getElementById('elem') //문서안의 지정된 id를 가진 것을 찾아 변수 a에 저장
// elem.style.background='red'; //'elem'이라는 id를 가진 것을 elem(변수명임)에 저장 후 css속성을 변경
// elem.style.color='white';

// document.getElementById('elem').style.background='red'; 
// document.getElementById('elem').style.color='red'; 
// //위의 식과 동일한 방식 (변수에 보관하지 않고 바로 적용)
// //공통적인 부분을 다시 다 써야하므로 
// //나중에 수정이나 내용이 많아지면 불편하므로 위의 식으로 하는것이 보편적

//==================querySelector=======================

let a = document.querySelector('ul>li'); //id,class 상관없이 다 찾아준다('ul'),(.class명)(#id명)등등으로 
//원하는 것만 딱 찾아주지 않는다 하나만 찾아줌
console.log(a); //1-1 하나만 잡아줌

let b = document.querySelectorAll('ul>li');
//요소들을 싹다 다 잡아준다
for(let i of b){
  console.log(i.innerHTML); //html안의 모든것을 검색
}

b[1].innerHTML = "1번리스트배열방 값 변경";
//b변수의 1번방의 값을 변경
document.querySelectorAll('ul')[0].style.background='red';
//ul의 0번 배열의 속성변경
