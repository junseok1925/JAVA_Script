
// 짝수 입력하면 짝수입니다 홀수입력하면 홀수입니다 출력

let a = Number (prompt('숫자입력'));

console.log(typeof(a));
console.log(typeof(a%2));

switch(a%2) {
  case 1:
    alert('홀수입니다');
    break;
  case 0:
    alert('짝수입니다.');
    break;
  default:
    alert('문제가 생김');
}