import React from "react";

const HistoryItem = (props) => {
  const className = "historyItem";

  return (
    <div className={`${className}`}>
      <div className={`${className}__head`}>
        <p>
          {props.name}
          <span className={`icon is-small ${className}__edit`}>
            <i className="fas fa-edit"></i>
          </span>
        </p>
        <p className={`${className}__date`}>
          {props.date}
        </p>

        <span className={`icon is-small ${className}__point`}>
          <i className="fas fa-dot-circle"></i>
        </span>

      </div>
      <div className={`${className}__notices`}>
        <p className={`${className}__noticesItem`}>
           Примечание 1
        </p>
        <p className={`${className}__noticesItem`}>
          Примечание 2
        </p>
        <p className={`${className}__noticesItem`}>
          Примечание 3
        </p>
      </div>
    </div>
  );
};

export default HistoryItem;