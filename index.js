console.log("Hello World");
const todoList = []
const saveTodo = window.localStorage.getItem('todoitem')
todoList.join(JSON.parse(saveTodo))
console.log(saveTodo)
let todoitems=document.getElementById('todoitems');

for (let i = 0; i < JSON.parse(saveTodo).length; i++) {
    let saveTodoItem = document.createElement('li');
    let saveTodoItemText = document.createElement('p')
    let saveCheckTodo = document.createElement('input')
    saveTodoItemText.textContent = JSON.parse(saveTodo)[i]
    saveTodoItem.classList.add('todoitem')
    saveCheckTodo.setAttribute('type', 'checkbox')
    saveTodoItem.appendChild(saveTodoItemText)
    saveTodoItem.appendChild(saveCheckTodo)
    console.log(todoitems)
    todoitems.appendChild(saveTodoItem)
}

function addTodo(){
    let text=document.getElementById('addTodo').value;
    todoList.push(text)
    window.localStorage.setItem('todoitem', JSON.stringify(todoList))
    
    console.log(todoList)

    let todoitem = document.createElement('li');
    let todoItemText = document.createElement('p')
    
    let checkTodo = document.createElement('input')

    todoItemText.textContent = text
    todoitem.classList.add('todoitem')
    checkTodo.setAttribute('type', 'checkbox')
    

    todoitem.appendChild(todoItemText)
    todoitem.appendChild(checkTodo)
    todoitems.appendChild(todoitem)
    document.getElementById("addTodo").value = "";
}

//  create new function

//  create variable that saves whatever value that is inside of this function

//  log this function

function deleteTodo(){
    let text=document.getElementById('deleteTodo').value;
    console.log(text);
}