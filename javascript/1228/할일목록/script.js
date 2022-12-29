const todos = document.querySelector('#todos');
const todoList = document.querySelector('#todo-list');
const todoInput = todos.querySelector('input');

let arr = [];

todos.addEventListener("submit", onSubmit);

function saveTodo() {
  localStorage.setItem('todos', JSON.stringify(arr));
}

function onSubmit(e) {
  e.preventDefault();
  let newTodo = todoInput.value;

  let Obj = {
    key: Date.now(), // 임의의 값 (내용을 구분해주는 시리얼넘버)
    text: newTodo,
  };

  arr.push(Obj);
  saveTodo();
  todoInput.value = "";
  printTodo(Obj);
}

function printTodo(newTodo) {
  const li = document.createElement('li'); // <li> </li>
  const span = document.createElement('span'); // <span> </span>
  li.append(span); // <li>  <span>   </span>  </li>
  span.innerHTML = newTodo.text;
  li.id = newTodo.key;
  const btn = document.createElement('button');
  btn.innerHTML = 'X';
  li.append(btn);
  todoList.append(li);
  
  btn.addEventListener('click', deleteTodo);
}

function deleteTodo(e){
  // console.log(e.target.parentElement);
  let pn = e.target.parentElement;
  // filter 조건에 만족하는 값만 리턴
  arr = arr.filter((todo) => todo.key !== parseInt(pn.id));
  
  saveTodo();
  pn.remove();
}

let getTodo = localStorage.getItem('todos');

if(getTodo !== null) {
  let parseTodo = JSON.parse(getTodo);
  arr = parseTodo;
  // console.log(parseTodo);
  parseTodo.forEach((data) => {
    printTodo(data);
  });

}

