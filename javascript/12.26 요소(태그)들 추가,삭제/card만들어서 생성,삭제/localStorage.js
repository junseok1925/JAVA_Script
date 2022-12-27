// localStorage.setItem('name', 'kang');
// localStorage.setItem('age', '26');
// localStorage.setItem('name', 'kim');
// //기존의 kang은 덮어씌어짐

// localStorage.removesetItem('age');
// //삭제

// console.log(localStorage.getItem('name'));
// //불러오기

let arr=[1,2,3,4,5];

let arrjson = JSON.stringify(arr);

localStorage.setItem('arr',arr);
//문자로 밖에 저장이 안댐 1,2,3,4,5문자가 저장
//따라사 json으로 처리
//json 키,값,배열,object -> 사람이 읽을 수 있는 텍스트로 사용하는 표준포멧

localStorage.setItem('arr',arrjson);

let getarr = localStorage.getItem('arr');
console.log(getarr[0]);
//아직 json형태(문자열)
//arr은 문자열형이므로 [0]이 배열0방이 아닌 "[" 이 출력

getarr = JSON.parse(getarr);
//json을 다시 배열로 만들어줌
console.log(getarr[0]);