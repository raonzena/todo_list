import React from 'react';

const InsertSubject = (props) => (
    <div className="insert-subject">
        <button className="insert-subject-button" onClick={props.insert}>+ ADD LIST</button>
    </div>
)

export default InsertSubject;