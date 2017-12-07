import React, {Component} from "react";

import Item from "./item";
import "./style.sass";

export default class Team extends Component {
  constructor() {
    super();
    this.className="team";
  }

  render() {
    const items = [
      {
        name: "John Smith",
        phone: "+7 (985) 1234567",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
      },
      {
        name: "John Smith",
        phone: "+7 (985) 1234567",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
      },
      {
        name: "John Smith",
        phone: "+7 (985) 1234567",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
      }
    ];


    return (
      <section className={`${this.className}`}>
        <div className="columns">
          <div className="column is-12">
            <h1 className={`${this.className}__topTitle`}>Lorem Ipsum</h1>
          </div>

        </div>
        <div className={`columns ${this.className}__items`}>
            {
              items.map((el, i) =>{
                return  (
                  <div key={i} className="column is-4">
                    <Item  name={el.name} phone={el.phone} text={el.text}/>
                  </div>
                );
              })
            }
        </div>
      </section>
    );
  }
}
