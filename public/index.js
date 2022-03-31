const newItemInput = document.querySelector(".add-item-text"); // Variable created, which selects the element by class name (identifies form controls)
const newItemBtn = document.querySelector(".add-item-btn"); // Variable created, which selects the element by class name
const todoList = document.querySelector(".todo-list"); // Variable created, which selects the element by class name
const allTodoItems = JSON.parse(localStorage.getItem('tasks')) ?? []; // ?? returns the right-side expression when the left side expression is either null or undefined

newItemBtn.addEventListener("click", createListItem);

function createListItem() {
    const txt = newItemInput.value;
    if (txt === '') {
        alert("Please type something!")
        return;
    }
    allTodoItems.push({
        label: txt
    });
    console.log(allTodoItems);
    localStorage.setItem('tasks', JSON.stringify(allTodoItems))
    // Write a function that adds each individual item to the local storage
    // Normally there is an updatelocalstorage function
    // Now i have all todo items in localstorage, I can run a fucntion to take all of those items and put it into that list. I could create the HTML of the list of those items, so that every time I refresh the page i have the list again 

    const todoItem = document.createElement('li');
    todoItem.classList.add("todo-item");

    const todoItemText = document.createElement('span');
    todoItemText.classList.add("todo-item-text");
    todoItem.innerText = txt;
    todoItem.append(todoItemText);

    // const todoItemDeleteBtn = document.createElement('button');
    // todoItemDeleteBtn.classList.add("todo-item-delete");
    // todoItemDeleteBtn.innerHTML = "&#128498";
    // todoItemDeleteBtn.addEventListener('click', () => {
    //     todoList.removeChild(todoItem);
    // })
    // todoItem.append(todoItemDeleteBtn)

    todoList.append(todoItem);

    newItemInput.value = '';

}
const myData = JSON.parse(localStorage.tasks);
myData.forEach(element => {
    todoList.innerHTML += `<li>${element.label}</li>`;
});


// Create a box on the page that shows I've stored local data

// find a way to not only persist the data, load it back 
