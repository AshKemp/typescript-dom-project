"use strict";
const button = document.getElementById("btn");
const text = document.getElementById("todotext");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
const todos = readTodo();
todos.forEach((todo) => createTodo(todo));
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const todo = {
        text: text.value,
        completed: false,
    };
    createTodo(todo);
    todos.push(todo);
    saveTodo();
    text.value = "";
});
function createTodo(todo) {
    const newTodoText = todo.text;
    const newList = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;
        saveTodo();
    });
    newList.append(newTodoText);
    newList.append(checkbox);
    list.append(newList);
}
function readTodo() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
function saveTodo() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
