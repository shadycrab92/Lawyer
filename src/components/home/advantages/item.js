import React from "react";

const AdvantagesItem = (props) => {
  const className="advantagesItem";

  return (
    <div className={`${className}`}>
      <article className="media">
        <div className="media-left">
              <span className="icon">
                <i className="fa fa-angle-right"></i>
              </span>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              {props.name}
              <br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default AdvantagesItem;