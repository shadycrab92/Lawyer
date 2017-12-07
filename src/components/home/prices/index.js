import React, {Component} from "react";

import Item from "./item";
import "./style.sass";

export default class Prices extends Component {
  constructor() {
    super();
    this.className="prices";
  }

  render() {
    const physicItems = [
      {
        name: "Услуга 1",
        price: 100
      },
      {
        name: "Услуга 2",
        price: 200
      },
      {
        name: "Услуга 3",
        price: 300
      },
      {
        name: "Услуга 4",
        price: 400
      },
      {
        name: "Услуга 5",
        price: 500
      },
    ];


    const legalItems = [
      {
        name: "Услуга 6",
        price: 600
      },
      {
        name: "Услуга 7",
        price: 700
      },
      {
        name: "Услуга 8",
        price: 800
      },
      {
        name: "Услуга 9",
        price: 900
      },
      {
        name: "Услуга 10",
        price: 1000
      },
    ];

    return (
      <section className={`${this.className}`}>
        <h1 className={`${this.className}__title`}>Услуги и цены</h1>
        <div className="columns">
          <div className="column is-6">
            <h3 className={`${this.className}__subtitle`}>Физическим лицам</h3>
            <div className={`${this.className}__items`}>
              {
                physicItems.map((el, i) =>{
                  return  (
                    <Item key={i} name={el.name} price={el.price}/>
                  );
                })
              }
            </div>
          </div>
          <div className="column is-6">
            <h3 className={`${this.className}__subtitle`}>Юридическим лицам</h3>
            <div className={`${this.className}__items`}>
              {
                legalItems.map((el, i) =>{
                  return  (
                    <Item key={i} name={el.name} price={el.price}/>
                  );
                })
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}
