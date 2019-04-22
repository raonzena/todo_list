import React from 'react';

const CompleteListEntry = (props) => (
    <div className="complete-entry">
        <input type="text" readOnly className="complete-entry-text" value={props.complete}
        onClick={props.completeTodoHandler}/>
        <button className="delete-todo-entry" onClick={(e)=>{props.deleteTodoHandler(e, props.complete)}}>DELETE</button>
    </div>
)

export default CompleteListEntry;