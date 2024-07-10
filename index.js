// d

// type in todo item that the user wants to add in his/her todo list app
// the todo item gets added to todo list box
// clicking on the Add button will add todo item to todo item box

// gathering the value of the name of todo item by its id
// creating the todo item (li) in particular that we're adding
// creating the name of the todo item (p) being displayed in todo box
// creating the checkbox next to the name of the todo item in todo item box
// style elements using classList
// set attribute to the input (type = checkbox)
// append child, append the p tag into the li
// append child, append the input into the li
// append child, append the li into the ul





var todoItems=document.getElementById('todoitems');

function addTodo() {
    // var a = document.querySelector(".container")

    // var todoItem = document.getElementById("li").value = "";
    var text = document.getElementById("addTodo").value;
    
    var todoItem = document.createElement("li")
    var todoItemText = document.createElement("p")
    var checkTodo = document.createElement("input")

    todoItemText.textContent = text

    // a.classList.add("li", "p", "input")
    // a.classList.remove("input")
    todoItem.classList.add("todoitem")

    // a.setAttribute("type", "checkbox")
    checkTodo.setAttribute("type", "checkbox")

    todoItem.appendChild(todoItemText)
    todoItem.appendChild(checkTodo)
    todoItems.appendChild(todoItem)
    document.getElementById("addTodo").value = "";
}

function removeTodo(todoItem) {
    var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
    console.log(markedCheckbox);
    // loop through all the marked checkboxes
    for (var checkbox of markedCheckbox) {
        // how to get element's parent
        // remove parent element
    }
}

// click on checkbox next to todo item I want to delete/remove
// select list item
// remove item from dom
// click delete button
// todo item that I want to delete/remove will go away

// how to get inputs that are checked in javascript


let a = document.querySelector(".container")

a.classList.add("todoitem1", "checkbox1", "todoitembox1")

a.classList.remove("todoitembox1", "todoitem1")

a.setAttribute("phone", "device")

console.log(a)


