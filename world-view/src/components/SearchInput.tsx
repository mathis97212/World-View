import React from "react";
import { useState } from "react";

const SearchInput = ({onSearch}) => {

  const [input, SetInput] = useState('')

  const handleSubmit = ()=>{
    e.preventDefault()

    onSearch(input)
  }

    return(
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search a country..." value={input} onChange={(e)=> SetInput(e.target.value)}/>
      </form>

    );
};

export default SearchInput;