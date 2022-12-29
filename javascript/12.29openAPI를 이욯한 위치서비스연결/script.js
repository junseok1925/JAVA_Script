// const API_KEY = '93222063c13048e2ee959a1231e3217e';
// let name = document.querySelector('#name');
// let main = document.querySelector('#main');
// let temp = document.querySelector('#temp');

// function connect(position) {
//   const lat = position.coords.latitude;
//   const lon = position.coords.longitude;
//   const lang = 'kr';
//   console.log(`위도:${lat} 경도:${lon}`);
//   const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=${lang}`;
//   fetch(URL).then((response) => response.json())
//             .then((data) => {
//               console.log(data.name); // 지역이름
//               console.log(data.weather[0].main); // 날씨
//               console.log(data.main.temp); // 온도
              
//               name.innerHTML = data.name;
//               main.innerHTML = data.weather[0].main;
//               temp.innerHTML = data.main.temp + '℃'; // ㄹ 한자

//             });

// }
// function errorConn() {
//   alert('위치연결 실패');
// }

// navigator.geolocation.getCurrentPosition(connect, errorConn);

const API_KEY = '93222063c13048e2ee959a1231e3217e';
let name = document.querySelector('#name');
let main = document.querySelector('#main');
let temp = document.querySelector('#temp');

function connect(position){
  const lat = position.coords.latitude;
  //현재위치 위도 변수로 저장
  const ion = position.coords.longitude;
  //현재위치 경도 변수로 저장
  const lang = 'kr';
  //언어설정 변수
  console.log(`위도:${lat} 경도${ion}`);
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${ion}&appid=${API_KEY}&units=metric&lang=ko`;
  fetch(URL).then((response) => response.json())
            .then((data) => {
              console.log(data.name); //위치 지역 이름 뽑아내기
              console.log(data.weather[0].main); //날씨뽑아내기
              //배열을 쓴이유 : 개발자창에 저장된 weather배열에 날씨데이터가 들어있어서
              console.log(data.main.temp); //온도 뽑아내기

              name.innerHTML = data.name;
              main.innerHTML = data.weather[0].main;
              temp.innerHTML = data.main.temp + '℃'; // ㄹ 누르고 한자키
            });
}
function errorConn(event){
  alert('위치연결 실패')
}

navigator.geolocation.getCurrentPosition(connect,errorConn);
//내장된 함수코드
