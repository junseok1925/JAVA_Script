// let div = document.createElement('div');

// div.className = 'alert';

// div.innerHTML = '<b> hi </b>';

// document.body.append(div);
// //태그.append : 해당 태그 끝에 추가
// //태그.prepend : 해당 맨 앞에 추가
// //태그.before : 해당 태그 이전에 삽입
// //태그.after : 해당 태그 이후에 삽입

// ol.before('이전');
// ol.after('이후');

// let a =document.createElement('li');
// //li태그생성
// a.innerHTML='앞에';
// //생성된 li태그 안에 입력 
// ol.prepend(a);
// //해당태그 맨앞에 위치
// let b =document.createElement('li');
// //li태그생성
// b.innerHTML='뒤에';
// //생성된 li태그 안에 입력 
// ol.append(b,'<li>hi</li>');

//===============================================

// div.insertADjacentHTML('beforebegin','<b> hi </b>');
//div.insertADjacentHTML('위치','내용');
// beforebegin : 앞에 추가 (=before)
// afterend : 뒤에 추가 (=after)
// afterbegin : 안쪽 앞에 추가 (=prepend)
//beforeend : 안쪽 뒤에 추가 (=append)

// ol.insertADjacentHTML('afterbegin',"<li class = 'a'>앞에 추가함</li>");


//=====================태그 삭제 =======================


// let div = document.createElement('div');
// div.className = 'alert';
// div.innerHTML = '<b>3초뒤 사라짐</b>';
// document.body.append(div);

// setTimeout(()=>div.remove(),3000);
//3초뒤에 해당 태그 삭제 

//====================태그 옮기기========================

second.after(first);

//====================태그 복사==========================

// let div2 = div.cloneNode(true);

// div2.querySelector('b').innerHTML = 'ㅂㅇ'

// div.after(div2);

let a = document.createElement('p');
a.innerHTML = 'p태그 추가';
div.appendChild(a);

setTimeout(()=>document.write('<b>아주옛날</b>'),3000);




