import React, { useState } from 'react'


const SearchBar = (props) => {
    const [inputText, setInputText] = useState(" ");
    return (
        <>
            <input type="text"
                onChange={(e) => props.onChange(e.target.value)} />

            {/* <button type="button" */}
                {/* onClick={""}>Searchhh</button > */}
        </>
    );
}

export default SearchBar