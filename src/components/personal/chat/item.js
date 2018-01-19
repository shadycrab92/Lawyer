import React from "react";
import classNames from "classnames";

const ChatItem = (props) => {

  const className = "chatItem";
  const itemClassName = classNames(className, {
    [`${className}--right`]: props.isRight
  });

  return (
    <div className={itemClassName}>
      <article className="media">
        <div className="media-content">
          <div className="content">
            <div className={`${className}__body`}>
              <div className={`${className}__head`}>
                <span className={`${className}__name`}>
                  {props.name}
                </span>
                <span className={`${className}__date`}>
                  {props.date}
                </span>
              </div>

              <div className={`${className}__text`}>
                {props.text}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ChatItem;