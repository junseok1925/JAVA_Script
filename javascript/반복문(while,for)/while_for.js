//  반복문 while.for

//  for(초기값;조건식;증감식){
//  }

//   while(조건식){
//  }  

// for(let i=1; i<=10; i++){
  // i를 출력해라
  // document.write(i+"<br>");
  // 둘이 같은 의미
  // document.write(`<h1>${i}<h1>`);
// }

// let i=0;
// while(i<=10){
//   document.write(`<h1>${i}<h1>`);
//   i++;
// }


// <1~25를 출력>

// let i, j, cnt=0;

// for(i=0; i<5; i++){
//   for(j=0; j<5; j++){
//     cnt++;
//     document.write(`${cnt}<br>`);
//   }
// }

// <구구단 2단~9단 출력>

// let i, j;

// for(i=2;i<=9; i++)  {
  
//   for(j=1;j<=9; j++){

//     document.write(`${i} * ${j} = ${i*j}<br>`);

//   }
// }


// let i, j;

//outer이라는 이름을 붙임
// outer:
// for(i=1;i<=5; i++)  {
  
//   for(j=1;j<=10; j++){

//   if(j%5===0){
//     //outer이라는 식을 탈출
//     break outer;
//     }
//   document.write(j+" ");
//   }
//   document.write("<br>");
// }


// 1부터 10까지 짝수를 출력, 그 짝수들의 합 출력

let i,sum=0;

for(i=1;i<=10;i++){
  if(i%2===0){
    sum+=i;
    document.write(`${i} <br>`);
  }
}
document.write(`총합 : ${sum}`);