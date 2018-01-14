import React from "react";
import classNames from "classnames";


const ChatItem = (props) => {
  const className = "chatItem";

  return (
    <div className={className}>
      <article className="media">
        <div className="media-left">
          <figure  className={`image is-32x32 ${className}__image`}>
            <img src="https://bulma.io/images/placeholders/32x32.png" alt="Image"/>
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <span className={`${className}__head`}>
                <strong>
                  {props.name}
                </strong>
                <span className={`${className}__date`}>
                  {props.date}
                </span>
              </span>

              <br/>
              <span className={`${className}__text`}>
                {props.text}
              </span>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ChatItem;