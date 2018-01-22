import React from "react";

import "./style.sass";

const PersonalHead = (props) => {
  const className = "personalHead";

  return (
    <div className={className}>
      <div className={`${className}__selectProject`}>
        Проект 1
        <span className={`${className}__selectProjectText`}>
          изменить
           <span className="icon">
             <i className="fas fa-chevron-right"></i>
           </span>
        </span>
      </div>

      <div className={`${className}__buttons`}>
        <button className="is-blue">Чат</button>
        <button>История</button>
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

export default PersonalHead;