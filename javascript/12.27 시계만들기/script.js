let clock = document.querySelector('.clock');

function showClock(){
const date = new Date();
// ${여기안에 넣으면 문자열이 아닌 계산식으로 인식시킨다}

let hour = String(date.getHours()).padStart(2,0);
let min = String(date.getMinutes()).padStart(2,0);
let sec = String(date.getSeconds()).padStart(2,0);
//1시 1분1 초를 01시01분01초처럼 1의 자리수일때 앞에 0을 붙이기 위해사용
//.padStart(최대자릿수,빈자리매꾸는값)
//String을 쓴이유 : .padStart는 문자열만 인식가능해서

clock.innerHTML=`${hour} : ${min} : ${sec}`;
//html class명 clock에 함수를 넣는다
}
showClock();
//setInterval(showClock,1000);로 인해 새로고침시 1초뒤에 표시되는걸 바로 먼저 나오게 하게
setInterval(showClock,1000);
//showClock함수 1초마다 실행(현재시간이 1초마다 갱신)

