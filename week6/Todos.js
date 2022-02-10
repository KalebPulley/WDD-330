import utils from './utilities.js';
import ls from './ls.js';

document.querySelector("#addBtn").onclick = addNewTodo;
//get comments
const comment = document.querySelector('#comment');
//add new on enter
 comment.addEventListener('keypress', e => {
    if (e.keyCode == '13') addNewTodo();
}) 

document.querySelector("#clear").onclick = clearList;
document.querySelector("#listActive").onclick = applyFillter;
document.querySelector("#listAll").onclick = applyFillter
document.querySelector("#completed").onclick = applyFillter;

loadTodos();

function addNewTodo(e){
    const todo = {id: Date.now(), comment: comment.value, completed: false};
    
    const todoItem = createTodoItem(todo);

    //restet input so it wont have duplicates.
    comment.value = '';


    //save to locale
    ls.saveTodo(todo);

    loadTodos();
} 

function createTodoItem(todo) {
    const todoLi = document.createElement('li');
    todoLi.classList.add('todo');
    
    //finished buton
    const finished = document.createElement('button');
    finished.setAttribute('data-id', todo.id);
    finished.classList.add('finished');
    finished.onclick = togleTodo;

    //comments
    const comments = document.createElement('div');
    comments.innerHTML = todo.comment;
    comments.classList.add('todoComment');

    //check for finnished
    if (todo.completed == true){
        finished.innerHTML = 'X';
        comments.classList.add('checked');
    }else{
        comments.classList.remove('checked');
        finished.innerHTML = ' ';
    }

    //delete buton
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('data-id', todo.id);
    deleteBtn.classList.add('todoDeleteBtn');
    deleteBtn.innerHTML = "X";
    deleteBtn.onclick = deleteTodo;

    todoLi.appendChild(finished);
    todoLi.appendChild(comments);
    todoLi.appendChild(deleteBtn);

    return todoLi;
}

function loadTodos() {
    document.querySelector(".list").innerHTML = "";
    const todoList = ls.getTodoList();

    todoList.forEach(todo => {
        const el = createTodoItem(todo)
        addTodoList(el);
    });
}

function addTodoList(todoLi){
    const list = document.querySelector(".list");

    list.appendChild(todoLi);
}

function deleteTodo(e){
    //get id
    const btn = e.currentTarget;

    ls.deleteTodo(btn.getAttribute("data-id"));
    if (btn.classList.value = "finished"){
        btn.classList = "";
    }else {
        btn.classList = "finished";
    }

    document.querySelector(".list").innerHTML = "";

    loadTodos();

}

function togleTodo(e) {
    const btn = e.currentTarget;

    ls.togleTodo(btn.getAttribute("data-id"));

    document.querySelector(".list").innerHTML = "";

    loadTodos();
}

function clearList() {
    ls.deleteAll();

    document.querySelector(".list").innerHTML = "";

    loadTodos();
}

function applyFillter(e){

    document.querySelector(".list").innerHTML = "";

    let filteredTodos = [];
    const allTodos = ls.getTodoList();

    if(e.currentTarget.id == "listActive"){
        filteredTodos = utils.activeFilter(allTodos);
    }else if(e.currentTarget.id == "listAll"){
        filteredTodos = utils.allFilter(allTodos);
    }else if(e.currentTarget.id == "completed"){
        filteredTodos = utils.completed(allTodos);
    }
    filteredTodos.forEach( todo => {
        const el = createTodoItem(todo)
        addTodoList(el);
    })

}
