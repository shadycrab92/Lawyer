import React, {Component} from "react";
import { Scrollbars } from "react-custom-scrollbars";

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
        <Scrollbars>
        <div className={`${this.className}__search`}>
          <div className="inputWrap">
            <input className="input is-transparent" type="text" placeholder="Поиск"/>
          </div>
          <span className={`${this.className}__add`}>
            <button className="button is-icon is-transparent is-clear">
              <span className="icon">
                <i className="fas fa-plus"></i>
              </span>
            </button>
          </span>
        </div>

        <div className={`${this.className}__items`}>
            {
              items.map((el, i) =>{
                return <Item key={i} name={el.name} icon={el.icon} text={el.text} status={el.status} isActive={el.isActive}/>;
              })
            }
        </div>
        </Scrollbars>
      </section>
    );
  }
}
