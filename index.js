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




// gathering the value of the todo items by their id
let todoItems = document.getElementById("todoitems");

// the function that is supposed to be able to effectively add a todo item that I want to add to my todo list page
function addTodo() {

    // gathering the value of what is typed into the text area that has the todo item
    let text = document.getElementById("addTodo").value
    
    // creating an element of a todo item using the li
    let todoItem = document.createElement("li");

    // creating an element of the todo item text using the p tag
    let todoItemText = document.createElement("p");

    // creating a check todo by using the input tag
    let checkTodo = document.createElement("input");

    // setting the content of the todo item text to the value of text area
    todoItem.textContent = text;

    // adding a class name called todoitem to the todo item from the classList property that is being accessed
    todoItem.classList.add("todo-item");

    // setting attribute to the check todo to 'type = checkbox'
   checkTodo.setAttribute('type', 'checkbox');

    // appending the todoItemText(p) to the todoItem(li)
    todoItem.appendChild(todoItemText)

    // appending the checkTodo(checkbox) to the todoItem(li)
    todoItem.appendChild(checkTodo)

    // appending the todoItem(li) to the todoItems(ul)
    todoItems.appendChild(todoItem)

    // gathering the element of addTodo by it's id to then pass a value of an empty string at the end in order to clear out the text area for adding any todo item in the todo list
    document.getElementById("addTodo").value = '';
}

// the function that is supposed to be able to remove any todo item in particular that I'd want to check off and delete/remove
function removeTodo() {
    // gathering any checkboxes for any todo item that are marked
    const markedCheckbox = document.querySelectorAll(input = ['checkbox:checked']);

    // loop through all the marked checkboxes
    for (checkbox of markedCheckbox) {
        // a case if the checkbox for any todo item is marked
        if (checkbox === markedCheckbox) {
            // a disabled-todo class will be applied to any todo item that is marked from it's checkbox being marked to show that it is deleted right after the delete button is clicked
            document.parentElement.classList.add("disabled-todo")
        // an alternative case if any checkbox for any todo item is unmarked
        } else {
            // the disabled-todo class will be reverted from being applied to any todo item that has its checkbox marked before of right after its checkbox is unmarked right after the delete button is clicked
            document.parentElement.classList.remove("disabled-todo")
        }
    }
}
