import React from 'react';
import TodoList from './TodoList.js';
import SubjectList from './SubjectList.js';

const TodoListSide = (props) => (
    if(props.search) {
        return (
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
    } else {
        return (
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
    }
)

export default TodoList;