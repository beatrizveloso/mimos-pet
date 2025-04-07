import React, { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import "../produtos/FilterCate.css";

const categorias = [
  {
    header: "1. Produtos para Cães",
    categorias: [
      {
        nome: "Rações para Cães",
        subcategorias: ["Seca", "Úmida", "Natural", "Medicamentosa"]
      },
      {
        nome: "Higiene",
        subcategorias: ["Shampoo e Condicionador", "Perfumes", "Escova de dentes", "Tapetes higiênicos"]
      },
      {
        nome: "Cinto, coleiras e guias",
        subcategorias: ["Coleiras comuns", "Peitorais", "Guias retráteis", "Cintos de segurança"]
      }
    ]
  },
  {
    header: "2. Produtos para Gatos",
    categorias: [
      {
        nome: "Rações para Gatos",
        subcategorias: ["Seca", "Úmida", "Filhotes", "Sênior"]
      },
      {
        nome: "Caixas de areia",
        subcategorias: ["Com tampa", "Sem tampa", "Autolimpantes"]
      },
      {
        nome: "Higiene",
        subcategorias: ["Areia Higiênica", "Shampoo seco", "Escovas e pente"]
      },
      {
        nome: "Arranhadores",
        subcategorias: ["Pequenos", "Médios", "Estilo torre", "Interativos"]
      }
    ]
  },
  {
    header: "3. Produtos para Cães e Gatos",
    categorias: [
      {
        nome: "Brinquedos",
        subcategorias: ["Bolas", "Mordedores", "De pelúcia"]
      },
      {
        nome: "Camas",
        subcategorias: ["Espuma", "Casinha", "Túnel"]
      },
      {
        nome: "Fantasias",
        subcategorias: ["Temáticas"]
      },
      {
        nome: "Roupas e acessórios",
        subcategorias: ["Pijamas", "Coleiras decoradas", "Gravatinhas"]
      },
      {
        nome: "Transporte",
        subcategorias: ["Bolsas", "Caixas de transporte", "Carrinhos"]
      },
      {
        nome: "Cuidados",
        subcategorias: ["Cortadores de unha", "Escovas", "Lenços umedecidos"]
      }
    ]
  },
  {
    header: "4. Produtos para Roedores",
    categorias: [
      {
        nome: "Rações para Roedores",
        subcategorias: ["Para hamsters", "Para porquinhos-da-índia", "Para coelhos"]
      },
      {
        nome: "Gaiolas",
        subcategorias: ["Com túnel", "Multiplano"]
      },
      {
        nome: "Brinquedos",
        subcategorias: ["Rodinhas", "Escadinhas"]
      },
      {
        nome: "Cuidado com a saúde",
        subcategorias: ["Vitaminas", "Itens para dentes"]
      }
    ]
  },
  {
    header: "5. Produtos para Aves",
    categorias: [
      {
        nome: "Rações para Aves",
        subcategorias: ["Para calopsitas", "Para canários", "Para papagaios"]
      },
      {
        nome: "Gaiolas",
        subcategorias: ["Pequenas", "Grandes"]
      },
      {
        nome: "Brinquedos",
        subcategorias: ["Balancinhos", "Espelhos"]
      },
      {
        nome: "Acessórios",
        subcategorias: ["Poleiros", "Comedouros", "Bebedouros"]
      }
    ]
  },
  {
    header: "6. Produtos para Peixes",
    categorias: [
      {
        nome: "Rações para Peixes",
        subcategorias: ["Para peixes ornamentais", "Para peixes de fundo", "Em flocos / granulada"]
      },
      {
        nome: "Aquários",
        subcategorias: ["Pequenos", "Médios", "Com LED"]
      },
      {
        nome: "Filtros e acessórios",
        subcategorias: ["Filtros internos", "Termostatos", "Pedras difusoras"]
      },
      {
        nome: "Produtos para manutenção",
        subcategorias: ["Limpeza de aquário", "Testes de água", "Condicionadores"]
      }
    ]
  },
  {
    header: "7. Saúde e Bem-estar",
    categorias: [
      {
        nome: "Vitaminas",
        subcategorias: ["Para cães", "Para gatos", "Multivitamínicos"]
      },
      {
        nome: "Suplementos",
        subcategorias: ["Articulares", "Para pelagem"]
      },
      {
        nome: "Antipulgas",
        subcategorias: ["Tópicos", "Comprimidos", "Coleiras"]
      },
      {
        nome: "Vermífugos",
        subcategorias: ["Líquido", "Comprimido", "Específico por animal"]
      }
    ]
  }
];


const FilterCate = ({ setFiltro, setSubcategoria }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Todas as categorias");
  const [hoveredCategoria, setHoveredCategoria] = useState(null);

  const handleFilterSelection = (option) => {
    setFiltro(option === "Todas as categorias" ? null : option);
    setSubcategoria(null); 
    setSelectedFilter(option);
    setIsOpen(false);
  };

  const handleSubcategoriaClick = (sub, categoria) => {
    setFiltro(categoria);
    setSubcategoria(sub); 
    setSelectedFilter(sub);
    setIsOpen(false);
  };


  return (
    <div className="align-filter">
      <div className="filter-text">
        <h1>Categorias</h1>
      </div>

      <div className="products-button">
        <button className="filter-button" onClick={() => setIsOpen(!isOpen)}>
          <p>Filtre por: {selectedFilter}</p>
          {isOpen ? <FiChevronDown className="arrow-icon" /> : <FiChevronRight className="arrow-icon" />}
        </button>

        {isOpen && (
          <div className="dropdown-menu">
            <button
              className="dropdown-item"
              onClick={() => handleFilterSelection("Todas as categorias")}
            >
              Todas as categorias
            </button>

            {categorias.map((categoria, index) => (
              <div
                key={index}
                className="dropdown-header"
                onMouseEnter={() => setHoveredCategoria(index)}
                onMouseLeave={() => setHoveredCategoria(null)}
                style={{ position: "relative" }}
              >
                {categoria.header}

                {hoveredCategoria === index && (
                  <div className="subcategorias-dropdown">
                    {categoria.categorias.map((cat, idx) => (
                      <div key={idx} className="subcategoria-group">
                        <strong>{cat.nome}</strong>
                        {cat.subcategorias.map((sub, subIdx) => (
                          <button
                            key={subIdx}
                            className="subcategoria-item"
                            onClick={() => handleSubcategoriaClick(sub, cat.nome)}
                          >
                            {sub}
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterCate;

