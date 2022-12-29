// console.log(window.innerHeight);
//현재 브라우저 전체 크기 (브라우저를 줄이면 바뀜)

// console.log(document.querySelector('body').clientHeight);
//css에서 설정된 전체 크기 5000px

// 저장용변수 = 전체 높이 - 브라우저 창의 높이
let hei = document.querySelector('body').clientHeight - window.innerHeight;

window.addEventListener('scroll',function(){

  // console.log(window.scrollY/hei*100);
  //막대 너비를 스크롤한만큼 늘어나야 함 (처음은 너비가 0),%단위로 설정하는게 나음
  //전체창에 대한 위에서 부터 얼마나 스크롤을 내렸는지알려줌(스크롤한 만큼의 높이)
  //=> 전체에서 스크롤을 얼마나 내린지 % 로 계산할 수 있음
  // 스크롤 한만큼의 높이 / (전체 높이 - 브라우저 창의 높이) *100

  let a = window.scrollY/hei*100;

  this.document.querySelector('.status-bar').style.width = '${a}%'

});



// 브라우저 창 높이 확인 
// console.log(window.innerHeight);

// 브라우저 <body>태그 영역 총 높이 확인
// console.log(document.querySelector('body').clientHeight);

// 저장용변수 = 전체 높이 - 브라우저 창의 높이
let brScrHei = document.querySelector('body').clientHeight - window.innerHeight;


//윈도우에 관련된 이벤트
window.addEventListener('scroll', function() {

  //스크롤 한만큼 높이
  // console.log(window.scrollY);

  // 스크롤 한만큼의 높이 / (전체 높이 - 브라우저 창의 높이) * 100
  // console.log(window.scrollY / brScrHei * 100);

  let tolHei = window.scrollY / brScrHei * 100;

  //잦망 코드 수정 필요 ㅋㅋ
 document.querySelector('.status-bar').style.width = `${tolHei}%`;


});