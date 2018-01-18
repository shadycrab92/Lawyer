import React from "react";
import classNames from "classnames";


const ProjectsItem = (props) => {
  const className = "projectsItem";
  const itemClassName = classNames(className,
    {
      [`${className}--active`]: props.isActive
    }
  );

  return (
    <div className={`${itemClassName}`}>
      <p className={`${className}__title`}>
        {props.name}
      </p>
      <p className={`${className}__status`}>
        {props.status}
        <span className="icon">
          <i className={`fas ${props.icon}`}/>
        </span>
      </p>
      <p className={`${className}__text`}>
        {props.text}
      </p>

      <span  className={`${className}__chevron`}>
        <span className="icon">
          <i className="fas fa-chevron-right"/>
        </span>
      </span>
    </div>
  );
};

export default ProjectsItem;