import React from 'react'

import Icon from 'assets/icons/search.js'

const Search = ({ value, onChange }) => (
    <div className="search">
        <Icon />
        <input placeholder="Search..." value={value} onChange={onChange} />
    </div>
)

export default Search
