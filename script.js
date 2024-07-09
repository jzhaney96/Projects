function createTodo () {
    const listItem = document.createElement('li');
    const todoContainerElement = document.getElementById('todos-container');
    todoContainerElement.appendChild(listItem);
    const userInput = document.getElementById('note').value;
    listItem.innerHTML = userInput;
    listItem.setAttribute("onclick", "todoCheck(event, this)");
    listItem.setAttribute("ontouchstart", "todoCheck(event, this)");
    listItem.setAttribute("ontouchend", "todoCheck(event, this)");
    listItem.setAttribute("ontouchcancel", "todoCheck(event, this)");
    document.getElementById('note').value = '';
}

function deleteTodo () {
    document.getElementById('todos-container').innerHTML = '';
}

function todoCheck(e,todo) {
    if (todo.style.textDecoration === '') {
        todo.style.textDecoration = 'line-through';}
        else {
            todo.style.textDecoration = '';
        }
}
