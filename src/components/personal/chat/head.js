import React from "react";

const ChatHead = (props) => {
  const className = "chatHead";

  return (
    <div className={className}>
      <div className={`${className}__buttons`}>
        <button className="is-blue">Чат</button>
        <button>Файлы</button>
        <button>Календарь</button>
        <button>Описание</button>
      </div>

      <div className={`${className}__stats`}>
        Участников: 2
      </div>
    </div>
  );
};

export default ChatHead;