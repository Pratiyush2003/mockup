import React from "react";
import "./SearchBar.css";

const SearchBar = ({ input, setInput, search, setSearch }) => {

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    };

    const handleCheckboxChange = (e) => {
        setInput(e.target.checked);
    };

    return (
        <form className="search-bar">
            <input
                type="text"
                placeholder="Search products..."
                className="search-input"
                value={search}
                onChange={handleInputChange}
            />
            <div className="search-options">
                <label className="checkbox-container">
                    <input
                        type="checkbox"
                        checked={input}
                        onChange={handleCheckboxChange}
                    />
                    <span>Only show products in stock</span>
                </label>
            </div>
        </form>
    );
};

export default SearchBar;
