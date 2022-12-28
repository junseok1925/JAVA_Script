const todos = document.querySelector('#todos');
const todoList = document.querySelector('#todo-list');
const todoInput = todos.querySelector('input');

let arr = [];

todos.addEventListener('submit', onSubmit);

function saveTodo() {
  localStorage.setItem('todos', JSON.stringify(arr));
}

function onSubmit(e) { 
  e.preventDefault();
  let newTodo = todoInput.value;
  arr.push(newTodo);
  saveTodo();
  // console.log(newTodo); 확인용 코드였음
  todoInput.value="";
  printTodo(newTodo);
}

function printTodo(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  li.append(span); // li->span
  span.innerHTML = newTodo;
  const btn= document.createElement('button');
  btn.innerHTML='X'
  li.append(btn); 
  todoList.append(li);
  btn.addEventListener('click', deleteTodo);
  //console.log(li); // 확인용 코드
 
  // const data = `<li>
  //                 <span>
  //                   ${newTodo}
  //                 </span>
  //                  <button>X</button>
  //               </li>`  
  
  // todoList.insertAdjacentHTML('beforeend', data);

  // document.querySelector('button').addEventListener('click', deleteTodo);
}

function deleteTodo(e) {
  // console.log(e.target.parentElement); 확인용 코드
  let pn = e.target.parentElement;
  pn.remove();
}



