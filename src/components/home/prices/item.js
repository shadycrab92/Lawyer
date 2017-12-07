import React from "react";

const PricesItem = (props) => {
  const className="pricesItem";

  return (
    <div className={`${className}`}>
      <div className="columns is-mobile">
        <div className={`column is-half ${className}__left`}>
          <span className="icon">
            <i className="fa fa-circle"/>
          </span>
          <span>
            {props.name}
          </span>
        </div>
        <div className={`column is-half ${className}__right`}>
          {props.price}
          <span className="icon">
            <i className="fa fa-rub"/>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PricesItem;