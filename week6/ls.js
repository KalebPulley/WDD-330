const TODO_LIST = "todoList0";

function getTodoList() {
let todoListString = localStorage.getItem(TODO_LIST);

let todoList = [];

if (todoListString){
    todoList = JSON.parse(todoListString);

}

return todoList;
}

function saveTodo(todo) {
//get curant list
let todoList = getTodoList();

//add new item
todoList.push(todo);

//save item
localStorage.setItem(TODO_LIST, JSON.stringify(todoList));
//debug msg
console.log(`saved $todo`);
}

function deleteTodo(id) {
//get curant list
let todoList = getTodoList();

//find item
let newList = todoList.filter(todo => todo.id != id);

//save to storage
localStorage.setItem(TODO_LIST, JSON.stringify(newList));

//debug msg
console.log(`deleted $todo`);
}

function togleTodo(id) {
     //get curant list
    let todoList = getTodoList();
    
    //find item
    let newList = [];
    todoList.forEach(todo => {if ( todo.id == id){
        if (todo.completed == true){
            todo.completed = false;
            newList.push(todo);
        }else{
            todo.completed = true;
            newList.push(todo);
        }
    }else {newList.push(todo);}});
    
    //save to storage
    localStorage.setItem(TODO_LIST, JSON.stringify(newList));
    
    /*/debug msg
    console.log(`deleted $todo`);
    } */}
function deleteAll() {
    let todoList = [];

    localStorage.setItem(TODO_LIST, JSON.stringify(todoList));
}

export default {
    saveTodo,
    deleteTodo,
    getTodoList,
    deleteAll,
    togleTodo
}