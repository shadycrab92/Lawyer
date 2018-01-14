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
      <p>{props.name}</p>
      <p className={`${className}__status`}>
        {props.status}
        <span className="icon">
          <i className={`fas ${props.icon}`}></i>
        </span>
      </p>
      <p className={`${className}__text`}>{props.text}</p>
      {
        props.isActive &&
        <span className={`icon ${className}__activeIcon`}>
              <i className="fas fa-chevron-right"></i>
        </span>
      }
    </div>
  );
};

export default ProjectsItem;