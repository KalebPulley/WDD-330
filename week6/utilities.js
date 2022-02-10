function activeFilter(todos){
    return todos.filter(todo => {
        return !todo.completed
    })
}
function allFilter(todos){
    return todos;
}
function completed(todos){
    return todos.filter(todo => {
        return todo.completed
    })
}
export default {
    activeFilter,
    allFilter,
    completed
}