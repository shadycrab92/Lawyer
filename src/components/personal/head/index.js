import React from "react";
import Scrollbars from "components/shared/ui/scrollBars";

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
        <Scrollbars>
          <button className="is-blue">Чат</button>
          <button className="is-hidden-desktop">История</button>
          <button>Файлы</button>
          <button>События</button>
        </Scrollbars>
      </div>

      <div className={`${className}__stats`}>
        Участников: 2
      </div>
    </div>
  );
};

export default PersonalHead;