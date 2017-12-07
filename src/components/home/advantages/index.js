import React, {Component} from "react";

import Item from "./item";
import "./style.sass";

export default class Advantages extends Component {
  constructor() {
    super();
    this.className="advantages";
  }

  render() {
    const items = [
      {
        name: "Оперативность",
        icon: "fa-clock-o",
        text: "Высокая скорость принятия решений и совершения действий по вашим вопросам."
      },
      {
        name: "Высокий уровень квалификации",
        icon: "fa-level-up",
        text: "Будьте уверены, работать над вашей задачей будет высококвалифицированный профессионал-практик."
      },
      {
        name: "Экономичность",
        icon: "fa-rub",
        text: "Качественное и быстро решение ваших проблем помогает сэкономить вам время, силы и средства."
      }
    ];


    return (
      <section className={`${this.className}`}>
        <div className={`columns ${this.className}__items`}>
            {
              items.map((el, i) =>{
                return  (
                  <div key={i} className="column is-4">
                    <Item  name={el.name} icon={el.icon} text={el.text}/>
                  </div>
                );
              })
            }
        </div>
      </section>
    );
  }
}
