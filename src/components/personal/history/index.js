import React, {Component} from "react";

import Item from "./item";
import "./style.sass";

export default class History extends Component {
  constructor() {
    super();
    this.className="history";
  }

  render() {
    const items = [
      {
        name: "Принят",
        date: "18.04.2018",
      },
      {
        name: "В рассмотрении",
        date: "18.04.2019",
      },
      {
        name: "Завершен",
        date: "18.04.2020",
      },
    ];


    return (
      <section className={`${this.className}`}>
        <div className={`${this.className}__items`}>
            {
              items.map((el, i) =>{
                return <Item key={i} name={el.name} date={el.date}/>;
              })
            }
        </div>
      </section>
    );
  }
}
