
let arr = [1,2,3,4,5];

//빈배열 만들기
let arr2 = [];

arr[0] =10;
//배열 5번방에 값이 없어도 그냥 5번방에 10이라는 값을 넣음
arr[5] =10;
//문자도 그냥 넣어줌
arr[10]='abc';
//빈 배열방에 값넣기
arr2[0]=1;


for(let i=0;i<arr.length;i++){
  document.write(arr[i]+"<br>");
}