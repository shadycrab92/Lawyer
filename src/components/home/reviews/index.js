import React, {Component} from "react";

import Item from "./item";
import "./style.sass";

export default class Reviews extends Component {
  constructor() {
    super();
    this.className="reviews";
  }

  render() {
    const items = [
      {
        name: "John Smith",
        phone: "+7 (985) 1234567",
        image: "https://placeimg.com/540/360/arch?t=1512637075637",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
      },
      {
        name: "John Smith",
        phone: "+7 (985) 1234567",
        image: "https://placeimg.com/540/360/arch?t=1512636995258",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
      },
      {
        name: "John Smith",
        phone: "+7 (985) 1234567",
        image: "https://placeimg.com/540/360/arch?t=1512637084736",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
      }
    ];


    return (
      <section className={`${this.className}`}>
        <div className="columns">
          <div className="column is-12">
            <h1 className={`${this.className}__title`}>Отзывы</h1>
          </div>

        </div>
        <div className={`${this.className}__items`}>
            {
              items.map((el, i) =>{
                return  (
                  <Item key={i} name={el.name}  image={el.image} text={el.text}/>
                );
              })
            }
        </div>
      </section>
    );
  }
}
