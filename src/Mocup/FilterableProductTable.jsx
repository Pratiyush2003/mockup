import React, { useEffect, useState } from 'react';
import './FilterableProductTable.css';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import api from '../assets/api';

const FilterableProductTable = () => {
  const [input, setInput] = useState(false);
  const [search, setSearch] = useState("");
  const [allproducts, setAllproducts] = useState(api);

  useEffect(() => {
    const filteredProducts = api.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
      const matchesStock = !input || product.stocked; 
      return matchesSearch && matchesStock;
    });
    setAllproducts(filteredProducts);
  }, [search, input]); 

  const Fruits = allproducts.filter((item) => item.category === "Fruits");
  const Vegetables = allproducts.filter((item) => item.category === "Vegetables");

  return (
    <div className='container'>
      <SearchBar input={input} setInput={setInput} search={search} setSearch={setSearch} />
      <ProductTable Fruits={Fruits} Vegetables={Vegetables} />
    </div>
  );
}

export default FilterableProductTable;
