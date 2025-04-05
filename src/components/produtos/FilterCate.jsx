import React, { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import "../produtos/FilterCate.css";

const FilterCate = ({ setFiltro }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Todas as categorias");

  const options = [
    "Todas as categorias",
    "Alimentação",
    "Higiene",
    "Transporte",
    "Brinquedo",
    "Transporte",
    "Fantasias"
  ];

  const handleFilterSelection = (option) => {
    setSelectedFilter(option);
    setIsOpen(false);
    setFiltro(option === "Todas as categorias" ? null : option);
  };

  return (
    <div className="align-filter">
      <div className="filter-text">
        <h1>Categorias</h1>
        <p>40 produtos</p>
      </div>

      <div className="products-button">
        <button className="filter-button" onClick={() => setIsOpen(!isOpen)}>
          <p>Filtre por: {selectedFilter}</p> 
          {isOpen ? <FiChevronDown className="arrow-icon" /> : <FiChevronRight className="arrow-icon" />}
        </button>

        {isOpen && (
          <div className="dropdown-menu">
            {options.map((option, index) => (
              <button
                key={index}
                className="dropdown-item"
                onClick={() => handleFilterSelection(option)}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterCate;