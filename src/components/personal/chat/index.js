import React, {Component} from "react";
import { Scrollbars } from "react-custom-scrollbars";

import Item from "./item";
import Head from "./head";
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
        <Head/>
        <hr className={`${this.className}__hr`}/>
        <div className={`${this.className}__itemsWrap`}>
          <Scrollbars>
            <div className={`${this.className}__items`}>
            {
              items.map((el, i) =>{
                return <Item key={i} name={el.name}  text={el.text} date={el.date} isRight={el.isRight} />;
              })
            }
           </div>
          </Scrollbars>
        </div>
        <div className={`${this.className}__form`}>
          <textarea className="textarea" placeholder="Explain how we can help you"></textarea>
          <button className="button is-blue is-fullwidth">
            Отправить
          </button>
        </div>
      </section>
    );
  }
}
