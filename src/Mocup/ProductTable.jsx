import React from "react";
import './ProductTable.css';
import ProductCategoryRow from "./ProductCategoryRow";

const ProductTable = ({ Fruits, Vegetables }) => {

    return (
        <>
            <div className="js-name-price-box">
                <div>
                    <h3>Name</h3>
                </div>
                <div>
                    <h3>Price</h3>
                </div>
            </div>
            <div className="js-heading">
                <h4>Fruits</h4>
            </div>
            <ProductCategoryRow Fruits={Fruits} />
            <div className="js-heading">
                <h4>Vegetables</h4>
            </div>
            <ProductCategoryRow Vegetables={Vegetables} />
        </>
    );
};

export default ProductTable;
