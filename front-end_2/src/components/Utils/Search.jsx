import React from 'react'

const Search = ({ value, onChange }) => (
    <div className="search">
        <i className="material-icons">search</i>
        <input placeholder="Search..." value={value} onChange={onChange} />
    </div>
)

export default Search
