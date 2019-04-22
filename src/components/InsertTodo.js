import React from 'react';

const InsertTodo = (props) => (
    <button className="insert-todo-button" onClick={props.todoFocusHandler}>+ ADD TODO</button>
)

export default InsertTodo;