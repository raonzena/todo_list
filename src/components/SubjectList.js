import React from 'react';
import SubjectListEntry from './SubjectListEntry.js'

const SubjectList = (props) => (
    <div className="subject-list">
        {props.subjects.map((data, index) => <SubjectListEntry data={data} key={index}
        onClickSubjectHandler={props.onClickSubjectHandler} contextMenuHandler={props.contextMenuHandler}/> )}
    </div>
);

export default SubjectList;