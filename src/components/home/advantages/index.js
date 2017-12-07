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
        name: "Преимущество 1",
        phone: "+7 (985) 1234567",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
      },
      {
        name: "Преимущество 2",
        phone: "+7 (985) 1234567",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
      },
      {
        name: "Преимущество 3",
        phone: "+7 (985) 1234567",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
      }
    ];


    return (
      <section className={`${this.className}`}>
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
