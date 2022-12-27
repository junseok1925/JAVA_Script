let user = {
  name: "kim",
  age: 30,
};

for(let key in user){
  console.log(key);
  console.log(user[key]); //value값을 뽑아내기
  //console.log(user.key); => 이렇게하면 user안에 key라는 value값을 찾아라 라고 인식함
}