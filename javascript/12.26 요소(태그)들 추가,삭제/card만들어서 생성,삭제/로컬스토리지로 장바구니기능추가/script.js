// let fruits = [
// {name: 'apple', memo: '사과입니다'},
// {name: 'mango', memo: '망고입니다'},
// {name: 'melon', memo: '멜론입니다'},
// ];

// console.log(fruits[1].name);
// for(let i = 0; i<3; i++){
//   console.log(fruits[i].name);
// } //for문을 이용해서 다 불러오기

// fruits.forEach((data,i)=>{
// //fruits의 데이터를 저장하는 변수 생성
// console.log(data,i);
// });

//=======만약 card를 추가하고싶을때 html로 추가 안하고 js로 추가하기=======

//첫번째 방법
// let first = document.createElement('div');
// first.className = 'col'
// first.innerHTML=` <div class="card" style="width: 18rem;">
//                   <img src="이미지" class="card-img-top">
//                   <div class="card-body">
//                     <h5 class="card-title">제목</h5>
//                     <p class="card-text">내용</p>
//                     <button class="btn btn-primary">담기</button>
//                   </div>
//                   </div>`;
// document.querySelector('.row').append(first);

// 두번째 방법
// let second = `<div class="col">
//               <div class="card" style="width: 18rem;">
//                 <img src="이미지" class="card-img-top">
//                 <div class="card-body">
//                   <h5 class="card-title">${fruits[i].name}</h5>
//                   <p class="card-text">${fruits[i].memo}</p>
//                   <button class="btn btn-primary">담기</button>
//                 </div>
//               </div>
//               </div>`;
// document.querySelector('.row').insertAdjacentHTML('beforeend',second);
// //document.querySelector('.row').insertAdjacentHTML(문자가아닌 코드로 인식시키키)('위치',내용);
//  // 바로위에 코드를 jQuery로 작성(card 하나 더 생김)

// 두번째 방법으로 총 3개의 card만들기(for문 사용)
// html에 추가 card를 쓰지않아도 위에 fruits에 내용을 추가시 자동으로 card가 생성됨
// for(let i =0; i<=fruits.length;i++){
//   let second = `<div class="col">
//               <div class="card" style="width: 18rem;">
//                 <img src="img/${fruits[i].name}.jpg" class="card-img-top">
//                 <div class="card-body">
//                   <h5 class="card-title">${fruits[i].name}</h5>
//                   <p class="card-text">${fruits[i].memo}</p>
//                   <button class="btn btn-primary cart">담기</button>
//                 </div>
//               </div>
//               </div>`;
//               $('.row').append(second);
// };

// 두번째 방법으로 총 3개의 card만들기(forEach문 사용)
// html에 추가 card를 쓰지않아도 위에 fruits에 내용을 추가시 자동으로 card가 생성됨
// fruits.forEach((data) =>{
//   let second = `<div class="col">
//                 <div class="card" style="width: 18rem;">
//                   <img src="img/${data.name}" class="card-img-top">
//                   <div class="card-body">
//                     <h5 class="card-title">${data.name}</h5>
//                     <p class="card-text">${data.memo}</p>
//                     <button class="btn btn-primary">담기</button>
//                   </div>
//                 </div>
//                 </div>`;
//   $('.row').eq(0).append(second);
//   });


//===== html에서 말고 js 로 card안에 내용 입력=====

// document.querySelectorAll('.card-body .card-title')[0].innerHTML = fruits[0].name;
// //card-title 내용 입력
// document.querySelectorAll('.card-body .card-text')[0].innerHTML = fruits[0].memo;
// //card-text 내용 입력
// document.querySelectorAll('.card-img-top')[0].setAttribute('src',`img/${fruits[0].name}.jpg`);
// //~~.setAttribute('src','img/'+fruits[0].name+'.jpg'); 이런식으로 써두됨

//jQuery로 만들기
// $('.card-body .card-title').eq(0).html(fruits[0].name);
// $('.card-text').eq(0).html(fruits[0].memo);
// $('card-img-top').eq(0).attr('src',`img/${fruits[0].name}.jpg`);

//card 3개를 적용 시키기 (for문과 js)
// for(let i=0;i<fruits.length;i++){
//   document.querySelectorAll('.card-body .card-title')[i].innerHTML = fruits[i].name;
//   document.querySelectorAll('.card-body .card-text')[i].innerHTML = fruits[i].memo;
//   document.querySelectorAll('.card-img-top')[i].setAttribute('src',`img/${fruits[i].name}.jpg`);
// }

//card 3개를 적용 시키기 (forEach와 jQurey사용)
// fruits.forEach((data, i) => {
//   $('.card-body .card-title').eq(i).html(data.name);
//   $('.card-text').eq(i).html(data.memo);
//   $('.card-img-top').eq(i).attr('src', `img/${data.name}.jpg`);
// });


//=============배열로 만들어 장바구니 활성화==========

//배열로 관리

let fruits = [
  {name : 'apple', memo : '빨개요'},
  {name : 'mango', memo : '달달함'},
  {name : 'melon', memo : '맛있음'},
]




fruits.forEach((div, i) => {

  let second = `<div class="col">
<div class="card" style="width: 18rem;">
  <img src=" ../img/${fruits[i].name}.jpg " class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">${fruits[i].name}</h5>
    <p class="card-text">${fruits[i].memo}</p>
    <button class="btn btn-primary cart">담기</button>
  </div>
</div>
</div>`;

$('.row').append(second);

});

//.previousElementSibling 자기자신 전에있는 형제요소 찾아줌
//.siblings 찾고 싶은 요소 다이렉트로 찾아줌
//상황에 맞게끔 활용하면 된다.
$('.cart').on('click', function(e){
  //클릭한 담기에 해당되는 과일 이름이 필요함
  /* JS
  let name = e.target.previousElementSibling.previousElementSibling.innerHTML;
  */

  /* jQuery */
  let name = $(e.target).siblings('h5').html();

  if(localStorage.getItem('name') != null){
  //로컬스토리지에 있는 name을 빼와서 다시 배열형태로 변환
  let temp = JSON.parse(localStorage.name);
  // 거기서 클릭한 과일 이름을 배열에 추가
 temp.push(name); 
  console.log(temp);
  //다시 json으로 변환후 스토리지에 저장
  localStorage.setItem('name',JSON.stringify(temp));
  }else{
  localStorage.setItem('items', JSON.stringify(['name':name,'cnt': 1]));
}
});

let list = localStorage.getItem('name');

list = JSON.parse(list);

list.forEach((data=>{

  $('.list').append(`<div>${data}</div>`);

}))
