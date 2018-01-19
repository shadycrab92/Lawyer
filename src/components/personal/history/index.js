import React, {Component} from "react";
import { Scrollbars } from "react-custom-scrollbars";

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
        <Scrollbars>
          <div className={`${this.className}__items`}>
              <div className={`${this.className}__add`}>
                <button className="button is-green is-icon">
                <span className="icon">
                  <i className="fas fa-plus"></i>
                </span>
                </button>
              </div>

              {
                items.map((el, i) =>{
                  return <Item key={i} name={el.name} date={el.date}/>;
                })
              }
          </div>
        </Scrollbars>
      </section>
    );
  }
}
