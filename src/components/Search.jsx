import React from "react";
import { useState, useEffect } from "react";

function Search(props) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <form className="search-form" onSubmit={(e) => props.setSearch(searchTerm)}>
      <input
        type="text"
        placeholder="Enter a search term here"
        onChange={(e) => {
          setSearchTerm(e.target.value);
          console.log(searchTerm);
        }}
      />
      <input type="submit" value="Search" />
    </form>
  );
}

export default Search;