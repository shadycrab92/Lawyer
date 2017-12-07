import React from "react";

const AdvantagesItem = (props) => {
  const className="advantagesItem";

  return (
    <div className={`${className}`}>
      <article className="media">
        <div className="media-left">
              <span className="icon">
                <i className={`fa ${props.icon}`}></i>
              </span>
        </div>
        <div className="media-content">
          <div className="content">
            <p className={`${className}__title`}>
              {props.name}
            </p>
            <p className={`${className}__text`}>
              {props.text}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default AdvantagesItem;