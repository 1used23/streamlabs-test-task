import React from "react";

import "./Subproduct.scss";

const Subproduct = ({ subProductData }) => {
  return (
    <div className="subproduct">
      {subProductData.length
        ? subProductData?.map(({ Name, Type, descriptionen, ProductID }) => {
            return (
              <div className="subproduct__data" key={ProductID}>
                <div className="subproduct__data_name">{Name}</div>
                <div className="subproduct__data_type">{Type}</div>
                <div className="subproduct__data_desc">{descriptionen}</div>
                <hr />
              </div>
            );
          })
        : "Данных нет"}
    </div>
  );
};

export default Subproduct;
