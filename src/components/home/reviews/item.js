import React from "react";

const ReviewsItem = (props) => {
  const className="reviewsItem";

  return (
    <div className={`${className}`}>
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure className={`image is-64x64 ${className}__image`} >
              <img src={props.image} alt="Image"/>
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{props.name}</strong>
                <br/>
                {props.text}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ReviewsItem