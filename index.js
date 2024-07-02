console.log("Hello World");



function addTodo(){
    let text=document.getElementById('addTodo').value;
    let todoitem = document.createElement('li');
    let todoItemText = document.createElement('p')
    let todoitems=document.getElementById('todoitems');
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