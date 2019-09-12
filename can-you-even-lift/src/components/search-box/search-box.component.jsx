import React from 'react';

import'./search-box.styles.css';

export const SearchBox = ({placeholder, handleChange, changingValue}) => (
    <div>
        <input
            className='SearchBox'
            type = 'number'
            onChange = {handleChange}
            placeholder = {placeholder}
            value = {changingValue}
            min="45"
            max="1000"
            step ="5"

        />

    </div>


);
