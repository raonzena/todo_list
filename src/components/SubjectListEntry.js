import React from 'react';

const SubjectListEntry = (props) => (
        <input type="text" readOnly className="subject-entry" value={props.data.subject}
        onClick={() => {props.onClickSubjectHandler(props.data)}} onContextMenu={props.contextMenuHandler}/>
)

export default SubjectListEntry;