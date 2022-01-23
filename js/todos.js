const toDoForm = document.getElementsByClassName("todo-form")[0];
const toDoInput = document.querySelector(".todo-form input");
const toDoList = document.getElementsByClassName("todo-list")[0];



let toDosValue = [];
const TODOS_KEY = "todos";



function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDosValue));

}


function deleteToDo(event) {
    const deleteList = event.target.parentElement;
    deleteList.remove();
    toDosValue = toDosValue.filter((puck) => puck.id !== parseInt(deleteList.id));// 최초의배열을 새로운배열에 할당

    saveToDos();
}


function paintToDo(aaa) {
    const addList = document.createElement("li");
    addList.id = aaa.id;
    const addSpan = document.createElement("span");
    addSpan.innerText = aaa.text;

    const addButton = document.createElement("button");
    addButton.innerText = "Done";
    addButton.addEventListener("click", deleteToDo);

    addList.appendChild(addSpan);
    addList.appendChild(addButton);
    toDoList.appendChild(addList);
}


function onTodoSubmit(event) {
    event.preventDefault();
    const todoValue = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: todoValue, id: Date.now(),
    };
    toDosValue.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}


toDoForm.addEventListener("submit", onTodoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDosValue = parsedToDos
    parsedToDos.forEach(paintToDo);
}




