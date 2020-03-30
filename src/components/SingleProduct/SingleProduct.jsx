import React, { useState } from "react";
import { Subproduct } from "../../components";

import "./SingleProduct.scss";

const SingleProduct = ({ productData, subproductsData }) => {
  const { Name, descriptionen } = productData;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="product">
      <div className="product__data">
        <div className="product__data_name">{Name}</div>
        <div className="product__data_desc">{descriptionen}</div>
        <div className="product__data_more" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Свернуть" : "Развернуть"}
        </div>
      </div>
      {isOpen && (
        <div className="product__subproducts">
          <Subproduct subproductData={subproductsData} />
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
