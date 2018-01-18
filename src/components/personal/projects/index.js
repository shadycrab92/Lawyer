import React, {Component} from "react";

import Item from "./item";
import "./style.sass";

export default class Projects extends Component {
  constructor() {
    super();
    this.className="projects";
  }

  render() {
    const items = [
      {
        name: "Проект 1",
        icon: "fa-check-circle",
        status: "Завершен",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
        isActive: true
      },
      {
        name: "Проект 2",
        icon: "fa-clock",
        status: "Ожидает ответа от клиента",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
      },
      {
        name: "Проект 3",
        icon: "fa-pause",
        status: "Приостановлен",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
      },
    ];

    return (
      <section className={`${this.className}`}>
        <div className={`${this.className}__add`}>
          <button className="button is-icon is-transparent">
              <span className="icon">
                <i className="fas fa-plus"></i>
              </span>
          </button>
        </div>
        <div className={`${this.className}__items`}>
            {
              items.map((el, i) =>{
                return <Item key={i} name={el.name} icon={el.icon} text={el.text} status={el.status} isActive={el.isActive}/>;
              })
            }
        </div>
      </section>
    );
  }
}
