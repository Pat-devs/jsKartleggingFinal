

// en liten CRUD webapp
// C - Create
// R - Read
// U - Update
// D - Delete

// Gjøremålliste (eller Todolist)

// array (en liste med gjøremål)
let todolist = []

// creates a todoitem and adds it to the todolist array
function createTodo(todoitem) {
    todolist.push(todoitem)
}

// create a todo item
createTodo("write some code") // 0

createTodo("comment the written code") // 1 

createTodo("break some code") // 2

createTodo("fix some code") // 3



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

// deletes a todolist item
function deleteTodo() {

}





// get the todolist item tag from the webpage and store it in a variable
let todolistContainer = document.querySelector("#todolist-items")


// writes the todolist to the page
function renderTodolist() {
    todolistContainer.innerHTML = `
    <ul>`


    todolistContainer.innerHTML += `<li>${todolist[0]}</li>`
    todolistContainer.innerHTML += `<li>${todolist[1]}</li>`
    todolistContainer.innerHTML += `<li>${todolist[2]}</li>`

        // <li>${readTodo(0)}</li>
    //     <li>${todolist[1]}</li>
    //     <li>${todolist[2]}</li>
    //     <li>${todolist[3]}</li>
    //     <li>${todolist[4]}</li>
    //     <li>${todolist[5]}</li>
    // </ul>
}

renderTodolist()


// en for loop, trenger 3 ting:
// 1. en iterator (eller en teller), som også er ofte kalt bare i eller index
// 2. en condition, altså hvor lenge skal loopen kjøre
// 3. en increment
for (let counter = 0; counter < 5; counter = counter + 2) {
    console.log("counter is now " + counter)
    
    if (counter > 10) break
}