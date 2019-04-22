import React from 'react';

const Search = (props) => (
    <div className="search-div">
        <input className="search-input" type="text" placeholder="search" onChange={props.searchSubjectHandler}/>
    </div>
)

export default Search;