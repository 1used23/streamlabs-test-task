import React from "react";

import "./Subproduct.scss";

const Subproduct = ({ subproductData }) => {
  return (
    <div className="subproduct">
      {subproductData.length
        ? subproductData?.map(subproduct => {
            return (
              <div className="subproduct__data" key={subproduct.ProductID}>
                <div className="subproduct__data_name">{subproduct.Name}</div>
                <div className="subproduct__data_type">{subproduct.Type}</div>
                <div className="subproduct__data_desc">
                  {subproduct.descriptionen}
                </div>
                <hr />
              </div>
            );
          })
        : "Под-продуктов нет"}
    </div>
  );
};

export default Subproduct;
