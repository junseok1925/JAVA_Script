const regex = /AbC/ig;
let result;
let text = '검사할문자 abc 가나다 Abc 123';

//정규식관련 메서드(함수)

//test메서드 : 정규식에 매칭되는 문자열인지 테스트
result = regex.test(text);
console.log(result)
//test함수의 값 중 abc가 정규식에 매칭되므로 ture 리턴

//match메서드 : 문자열에서 정규식에 매칭되는 값을 배열로 리턴
result = text.match(regex)
console.log(result);
//매칭되는 첫번째 문자열 출력


//repalce 매서드 : 문자열에서 정규식이 매칭되는 값을 2번째 인수로 바꿈
result = text.replace(regex,'xyz');
console.log(result);
//매칭되는 abc를 xyz로 바껴서 리턴