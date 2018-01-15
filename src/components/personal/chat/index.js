import React, {Component} from "react";

import Item from "./item";
import "./style.sass";

export default class Chat extends Component {
  constructor() {
    super();
    this.className="chat";
  }

  render() {
    const items = [
      {
        name: "Client",
        text: "Lorem ipsum dolor sit amet.",
        date: "18.04.2017 в 22:00"
      },
      {
        name: "John Smith",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
        date: "18.04.2017 в 22:00",
        isRight: true
      },
      {
        name: "John Smith",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
        date: "18.04.2017 в 22:00",
        isRight: true
      }
    ];


    return (
      <section className={`${this.className}`}>
        <div className={`${this.className}__items`}>
            {
              items.map((el, i) =>{
                return <Item key={i} name={el.name}  text={el.text} date={el.date} isRight={el.isRight} />;
              })
            }
        </div>
        <div className={`${this.className}__form`}>
          <div className="field has-addons">
            <div className="control is-expanded">
              <input className="input" type="text" placeholder="Сообщение..."/>
            </div>
            <div className="control">
              <button type="submit" className="button is-primary">Отправить</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
