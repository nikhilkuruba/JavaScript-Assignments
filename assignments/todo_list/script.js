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