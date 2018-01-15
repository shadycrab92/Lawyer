import React from "react";
import classNames from "classnames";

const ChatItem = (props) => {
  const className = "chatItem";

  const headClass = classNames(`${className}__head`, {
    [`${className}__head--right`]: props.isRight
  });

  return (
    <div className={className}>
      <article className="media">
        <div className="media-content">
          <div className="content">
            <p>
              <span className={headClass}>
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