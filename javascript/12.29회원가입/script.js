// 정규식 조건
const regexId = /^\w{8,20}$/;
//알파벳, _ (언더라인),숫자 포함 8~20글자내로 입력하시오.
const regexPw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
// 대문자,소문자 영문어와 특수문자,숫자(한글자이상씩은 사용)를 사용해 8~20글자내로 입력하시오.
const regexMail = /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;
const regexTel = /^\d{2,3}-\d{3,4}-\d{4}$/;

// 올바르게 입력했는지를 저장해주는 변수들
let isId = false;
let isPw = false;
let isEm = false;
let isPh = false;


//버튼들
const idBtn = document.querySelector('#id_confirm');
const pwBtn = document.querySelector('#pw_confirm');
const emBtn = document.querySelector('#email_confirm');
const phBtn = document.querySelector('#phone_confirm');


// 유효성 검사 후 결과를 표시해주는 p태그들
let idCheck = document.querySelector('.id_input_check');
let pwCheck = document.querySelector('.pw_input_check');
let emCheck = document.querySelector('.email_input_check');
let phCheck = document.querySelector('.phone_input_check');


// =======================아이디=======================

// idBtn.addEventListener('click', function(event) {

//   //기본동작 막기
//   event.preventDefault();
//   let val = document.querySelector('#id_txt').value;
//   // console.log(document.querySelector('#id_txt').value);

//   // console.log(regexId.test(val));

//   if(regexId.test(val)) {
//     isId = true;
//     idCheck.innerHTML = "사용 가능한 아이디입니다.";
//     idCheck.style.color = "green";
//   } else if (!regexId.test(val)) {
//     isId = false;
//     idCheck.innerHTML = "사용 불가능한 아이디입니다.";
//     idCheck.style.color = "tomato";
//   }
//   isOk();
// })


// // =======================비밀번호=======================

// pwBtn.addEventListener('click', function(event) {

//   //기본동작 막기
//   event.preventDefault();
//   let val = document.querySelector('#pw_txt').value;

//   if(regexPw.test(val)) {
//     isPw = true;
//     pwCheck.innerHTML = "사용 가능한 비밀번호입니다.";
//     pwCheck.style.color = "green";
//   } else if (!regexPw.test(val)) {
//     isPw = false;
//     pwCheck.innerHTML = "사용 불가능한 비밀번호입니다.";
//     pwCheck.style.color = "tomato";
//   }
//   isOk();
// })


// // =======================이메일=======================

// emBtn.addEventListener('click', function(event) {
  
//   //기본동작 막기
//   event.preventDefault();
//   let val = document.querySelector('#email_txt').value;

//   if(regexMail.test(val)) {
//     isEm = true;
//     emCheck.innerHTML = "사용 가능한 이메일입니다.";
//     emCheck.style.color = "green";
//   } else if (!regexMail.test(val)) {
//     isEm = false;
//     emCheck.innerHTML = "사용 불가능한 이메일입니다.";
//     emCheck.style.color = "tomato";
//   }
//   isOk();
// })


// // =======================전화번호=======================

// phBtn.addEventListener('click', function(event) {

//   //기본동작 막기
//   event.preventDefault();
//   let val = document.querySelector('#phone_txt').value;

//   isPh = regexTel.test(val);
//   showMsg(isPh,phCheck);


//   if(regexTel.test(val)) {
//     isPh = true;
//     phCheck.innerHTML = "사용 가능한 전화번호입니다.";
//     phCheck.style.color = "green";
//   } else if (!regexTel.test(val)) {
//     isPh = false;
//     phCheck.innerHTML = "사용 불가능한 전화번호입니다.";
//     phCheck.style.color = "tomato";
//   }
//   isOk();
// })


// // =======================가입요청 버튼 함수화=======================
// // 가입요청 버튼 함수를 각각이벤트함수(아이디,비번,이메일,번호)에 위치시키기
// function isOk(){
//   if(isId && isPw && isEm && isPh){
//     document.querySelector('.reg_req_btn').style.background = 'blue';
//     }
//   }




// ***********************리팩토링***********************



//중복된 사용가능/불가능알림,isOK기능을 포함한 함수 생성
function showMsg(isX,XCheck){
  if(isX){
    XCheck.innerHTML = "사용가능";
    XCheck.style.color = 'green';
  }else{
    XCheck.innerHTML = "사용불가능";
    XCheck.style.color = 'red';
    }
    isOk();
  }

// =======================아이디=======================

idBtn.addEventListener('click', function(event) {

  //기본동작 막기
  event.preventDefault();
  let val = document.querySelector('#id_txt').value;

  isId = regexId.test(val);
  showMsg(isId,idCheck);

});


// =======================비밀번호=======================

pwBtn.addEventListener('click', function(event) {

  //기본동작 막기
  event.preventDefault();
  let val = document.querySelector('#pw_txt').value;

  isPw = regexPw.test(val);
  showMsg(isPw,pwCheck);
  
});


// =======================이메일=======================

emailBtn.addEventListener('click', function(event) {

  let val = document.querySelector('#email_txt').value;
  event.preventDefault();


  isEmail = regexMail.test(val);
  showMsg(isEmail, emailCheck);
});



// =======================전화번호=======================

phoneBtn.addEventListener('click', function(event) {

  let val = document.querySelector('#phone_txt').value;
  event.preventDefault();


  isPhone = regexTel.test(val);
  showMsg(isPhone, phoneCheck);
});


