
// 간단한 로그인 창 만들기
// prompt로 사용자가 Admin을 입력하면 비밀번호를 물어보는 promp+창이 나타남
// 사용자가 Admin이 아니면 •누군지 모르겠음' alert
// 입력하지 않거나 취소를 누르면 취소함'이라는 alert 생성
// 비밀번호 : 1234
// 올바른 비밀번호를 입력하면 '관리자님 어서오셈' alert
// 비밀번호 틀리면 '비번 틀림• alert
// 입력하지 않거나 취소를 누르면 취소함'이라는 alert 생성

let id = prompt('사용자 입력');

if(id=='Admin'){
  // Admin입력시 새로운 prompt창 실행
  let pw = prompt('비밀번호 입력');
  
  if(pw==1234){
    alert('관리자님 어서오셈');
  }else if(pw===''||pw===null){
    alert('취소');
  }else{
    alert('비밀번호 틀림');
  }

}else if(id===''||id===null){
  alert('취소');
}else{
  alert('관리자님이 아닙니다.');
}