import React from "react";

const ProductCategoryRow = ({ Vegetables = [], Fruits = [] }) => {


    return (
        <>
            <table>

                <tbody>
                    {Vegetables.map((veg, index) => (
                        <tr key={index}>
                            <td>{veg.name}</td>
                            <td>{veg.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>


            <table>

                <tbody>
                    {Fruits.map((fruit, index) => (
                        <tr key={index}>
                            <td>{fruit.name}</td>
                            <td>{fruit.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default ProductCategoryRow;
