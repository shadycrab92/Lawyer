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
      <p>
        {props.name}
        <span className={`icon is-small ${className}__edit`}>
            <i className="fas fa-edit"></i>
          </span>
      </p>
      <p className={`${className}__status`}>
        {props.status}
        <span className="icon">
          <i className={`fas ${props.icon}`}></i>
        </span>
      </p>
      <p className={`${className}__text`}>{props.text}</p>
    </div>
  );
};

export default ProjectsItem;