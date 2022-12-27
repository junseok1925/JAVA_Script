// let user = {
//   name: "kim",
//   age: 30,
//   msg() {
//     console.log(this.name) // 자기자신오브젝트를 칭함(this)
//   },
// };
// let a = user;
// user=null;
// //user가 비워졌어도 this특성으로 msg매서드가 칭하는 것이 user가 아닌 a가 되버리기때문에 출력됨
// a.msg();

// ============================================================================================

let a = {
  name : 'kim',
};
let b = {
  name : 'pack',
};
function msg() {
  console.log(this.name);
}
a.func = msg;
b.func = msg;
a.msg();
b.msg();