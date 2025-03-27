import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../input/SearchSection.css"; 
import Cards from "../card/Cards"; 

const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState(""); 

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); 
  };

  return (
    <section>
      <div className="search-container">
        <input
          type="text"
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={handleSearchChange} 
        />
        <FaSearch className="search-icon" />
      </div>

      {searchTerm.length > 0 && (
        <div className="search-results">
          <Cards filtro={null} searchTerm={searchTerm} className="search-card" /> 
        </div>
      )}
    </section>
  );
};

export default SearchSection;
