import React from 'react';
import SearchListEntry from './SearchListEntry.js';

const SearchList = (props) => (
    <div>
        <div className="subject">
            <span className="subject-title">{props.todos.subject}</span>
        </div>
        <div className="todo-list">
            {props.todos.completelist.map((complete, index) => <SearchListEntry complete={complete} key={index}
            deleteTodoHandler={props.deleteTodoHandler} />)}
        </div>
    </div>
)

export default SearchList;