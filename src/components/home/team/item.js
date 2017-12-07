import React from "react";

const TeamItem = (props) => {
  const className="teamItem";

  return (
    <div className={`${className}`}>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={props.image} alt="Placeholder image"/>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className={`${className}__title`}>{props.name}</p>
              <p className={`${className}__subtitle`}>{props.phone}</p>
            </div>
          </div>

          <div className={`${className}__text`}>
            {props.text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamItem;