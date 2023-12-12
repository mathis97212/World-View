import React, { useState } from "react";

const SearchInput = ({ onDataReceived }) => {
  const [searchText, setSearchText] = useState("");

  async function searchCountry() {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${searchText}`);
      const resAll = await fetch(`https://restcountries.com/v3.1/all`);
      const jsonData = await res.json();
      const jsonAllData = await resAll.json();
      searchText ? onDataReceived(jsonData) : onDataReceived(jsonAllData)

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function handleSearchCountry(e) {
    e.preventDefault();
    searchCountry();
  }

  return (
    <form onSubmit={handleSearchCountry} className="">
      <input
        type="search"
        placeholder="Search a country..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
};

export default SearchInput;
