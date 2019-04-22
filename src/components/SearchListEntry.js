import React from 'react';

const SearchListEntry = (props) => (
    <div className="subject-list">
        <input type="text" readOnly className="subject-entry" value={props.data.subject}
        onClick={() => {props.onClickSubjectHandler(props.data)}} onContextMenu={props.contextMenuHandler}/>
    </div>
);

export default SearchListEntry;