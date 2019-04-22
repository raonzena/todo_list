import React from 'react';
import TodoListEntry from './TodoListEntry.js';
import CompleteListEntry from './CompleteListEntry.js';
import InsertTodo from './InsertTodo.js';

const TodoList = (props) => (
    <div>
        <div className="subject">
            <span className="subject-title">{props.todos.subject}</span>
            <InsertTodo todoFocusHandler={props.todoFocusHandler} />
        </div>
        <div className="todo-list">
            <div className="todo-entry">
                <input type="text" className="todo-entry-text" onBlur={props.insertTodoHandler} 
                onKeyPress={props.insertTodoEnterHandler}/>
            </div>
            {props.todos.todolist.map((todo, index) => <TodoListEntry todo={todo} key={index}
            contextMenuHandler={props.contextMenuHandler} deleteTodoHandler={props.deleteTodoHandler}
            completeTodoHandler={props.completeTodoHandler}/>)}
            {props.todos.completelist.map((complete, index) => <CompleteListEntry complete={complete} key={index}
            deleteTodoHandler={props.deleteTodoHandler} />)}
        </div>
    </div>
)

export default TodoList;