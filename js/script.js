

// en liten CRUD webapp
// C - Create (an entry)
// R - Read (an entry)
// U - Update (an entry)
// D - Delete (an entry)

// Gjøremålliste (eller Todolist)

// array (en liste med gjøremål)
let todolist = []

// creates a todoitem and adds it to the todolist array
function createTodo(todoitem) {
    todolist.push(todoitem)
}




// reads one or more todolist items
// if called with number as argument, read the todoitem at the given number index from the array
// in all other cases, print the entire todolist array
function readTodo(index) {

    // check if index is a number greater or equal to 0
    if (index >= 0) {
        return todolist[index]
    }
    else { // in all other cases, print out the entire todolist array
        return todolist
    }

}

// deletes a todolist item at specific index
function deleteTodo(index) {
    todolist.splice(index,1)
}

// deletes all todolist items
function deleteAllTodos() {
    todolist = []
}

// get the todolist item tag from the webpage and store it in a variable
let todolistContainer = document.querySelector("#todolist-items")

// delele todo-item event handler
function handleDeleteTodo(eventInfo) {
    // delete the todoitem from the array (call to the "backend function")
    
    let myString = eventInfo.target.id

    // to extract the index number from the id (todo-item-x), we need first find the last - and then use the substring method, to get it.
    let startOfNumber = myString.lastIndexOf("-") + 1 // index of first character in the string matching the condition

    let index = myString.substring(startOfNumber)

    deleteTodo(index)
    // delete the todoitem from the web page
    eventInfo.target.remove()
}

// writes the todolist to the page
function renderTodolist() {
    // empty the todoListContainer
    todolistContainer.innerHTML = ""
    for (let index = 0; index < todolist.length; index = index + 1) {
        //console.log(todolist[index])
        // we use array index value as id for todo items
        todolistContainer.innerHTML += `<li id="todo-item-${index}">${todolist[index]}</li>`

        // get the li item, and store it in a variable
        let todoItemLiElement = document.querySelector(`#todo-item-${index}`)
        // add click handler event listener
        // todoItemLiElement.addEventListener("click", handleDeleteTodo)
    }

    // add the event listener on the "parent element"
    todolistContainer.addEventListener("click", handleDeleteTodo)
}

renderTodolist()

// add todo input field, and button
/* 
<input type="text" name="" id="input-todo-text" placeholder="Enter your todo">
<button id="button-add-todo">Add todo</button>
*/

let inputTodoText = document.querySelector("#input-todo-text")

let buttonAddTodo = document.querySelector("#button-add-todo")

let buttonClearTodolist = document.querySelector("#button-clear-todolist")

// add todo event handler function will do a few things
// #1 read text from the input-todo-text input
function handleAddTodoClick() {
    // add the todo
    createTodo(inputTodoText.value)
    // clear the input field
    inputTodoText.value = ""
    renderTodolist()
}

buttonAddTodo.addEventListener("click", handleAddTodoClick)


function handleClearTodolistClick() {
    // remove all todos from the array
    deleteAllTodos()
    // render the todolist again
    renderTodolist()
}

buttonClearTodolist.addEventListener("click", handleClearTodolistClick)


