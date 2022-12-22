// object객체 - Map(key:value)
// key 와 value로 구성

// let user = {    //user = key
//   name:'Kang',  //key = value
//   age:20 ,      //key = value
//   'ip add': '12312313'
// };
// let key = prompt('무엇이 궁금한가요');
// console.log(user.name);

// ----------------------------------------------------------------------

// let fruit = prompt('좋아하는 과일을 입력해~');

// let cart = {
//   [fruit]: 20,
//   price: 3000
// };
// alert(cart.apple);

// ----------------------------------------------------------------------

function user(name,age){
  return{
    name,   //name: name,(key와 value이름이 같으면 생략가능)
    age,    //age: age,(key와 value이름이 같으면 생략가능)
    grade:1
  };
}
let p1 = user('kang',26);
let p2 = user('Teemo',7);

console.log(p1.name);
console.log(p1['age']);
