import React, { useState, useEffect } from "react";
import { SingleProduct } from "../../components";

import "./Products.scss";

const Products = () => {
  const [productsData, setProductsData] = useState(null);
  const [filteredProductsData, setFilteredProductsData] = useState(null);

  const getProductsData = () => {
    const api = "https://support.stream-labs.com/api/products";

    fetch(api)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setProductsData(data);
        setFilteredProductsData(filterByProduct(data));
      });
  };

  const filterByProduct = arr =>
    arr.reduce((acc, product) => {
      if (product.ParentID === null && product.isDeleted === false) {
        acc.push(product);
      }
      return acc;
    }, []);

  const filterBySubproducts = (arr, productID) =>
    arr.filter(({ ParentID }) => ParentID === productID);

  useEffect(getProductsData, []);

  return (
    <div className="products">
      {filteredProductsData?.map(productData => {
        return (
          <SingleProduct
            productData={productData}
            subproductsData={filterBySubproducts(
              productsData,
              productData.ProductID
            )}
            key={productData.ProductID}
          />
        );
      })}
    </div>
  );
};

export default Products;
