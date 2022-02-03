var input = document.querySelector('input');
var button = document.querySelector('button');
var todoList = document.querySelector('.todos');
let count = 0;
button.addEventListener('click',function(){
    console.log(input.value);
    if(input.value){
        var newTodo = document.createElement('p');
        newTodo.innerHTML = input.value;
        newTodo.setAttribute('key',count++);
        todoList.appendChild(newTodo);
        input.value = "";
        newTodo.addEventListener('click',function(){
            todoList.removeChild(newTodo)
        })
        
    }
})

let selector = document.getElementById('dropDown')
selector.addEventListener("change",getTodoApi);
function getTodoApi(){
  fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) =>{
    if(selector.value == "completed"){
      todoList.innerText = ""
    data.forEach(item => {
      if(item.completed == true){
        var para = document.createElement('p');
        para.innerText=item.title;
        todoList.appendChild(para);
      }}); 
    }
    else if(selector.value == "pending"){
      todoList.innerText = ""
    data.forEach(item => {
      if(item.completed == false){
        var para = document.createElement('p');
        para.innerText=item.title;
        todoList.appendChild(para);
      }}); 
    }

  })
}