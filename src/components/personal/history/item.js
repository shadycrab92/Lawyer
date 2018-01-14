import React from "react";

const HistoryItem = (props) => {
  const className = "historyItem";

  return (
    <div className={`${className}`}>
      <div className={`${className}__head`}>
        <p>{props.name}</p>
        <p className={`${className}__date`}>
          {props.date}
        </p>
      </div>
      <div className={`${className}__notices`}>
        <p className={`${className}__noticesItem`}>
           <span className="icon is-small">
              <i className="fas fa-dot-circle"></i>
           </span>
           Примечание 1
        </p>
        <p className={`${className}__noticesItem`}>
           <span className="icon is-small">
              <i className="fas fa-dot-circle"></i>
           </span>
          Примечание 2
        </p>
        <p className={`${className}__noticesItem`}>
           <span className="icon is-small">
              <i className="fas fa-dot-circle"></i>
           </span>
          Примечание 3
        </p>
      </div>
    </div>
  );
};

export default HistoryItem;