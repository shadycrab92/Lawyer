import React from "react";

const ChatHead = (props) => {
  const className = "chatHead";

  return (
    <div className={className}>
      <div className={`${className}__buttons`}>
        <span className="button is-primary">Чат</span>
        <span className="button">Файлы</span>
        <span className="button">Календарь</span>
        <span className="button">Описание</span>
      </div>

      <div className={`${className}__stats`}>
        Участников: 2
      </div>
    </div>
  );
};

export default ChatHead;