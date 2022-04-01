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

    const todoItem = document.createElement('li');
    todoItem.classList.add("todo-item");

    const todoItemText = document.createElement('span');
    todoItemText.classList.add("todo-item-text");
    todoItem.innerText = txt;
    todoItem.append(todoItemText);

    todoList.append(todoItem);

    newItemInput.value = '';
}

const myData = JSON.parse(localStorage.tasks);
myData.forEach(element => {
    todoList.innerHTML += `<li>${element.label}</li>`;
});
