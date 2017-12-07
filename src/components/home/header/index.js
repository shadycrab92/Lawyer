import React, {Component} from "react";

import "./style.sass";

export default class Header extends Component {
  constructor() {
    super();
    this.className="header";
  }

  render() {
    return (
      <section className={`${this.className}`}>
        <div className={`${this.className}__top`} style={{backgroundImage: `url(${require("images/splash.png")})`}}>
          <div className={`${this.className}__topContent`}>
            <h1 className={`${this.className}__topTitle`}>Гудимова, Ионов и партнеры</h1>
            <h3 className={`${this.className}__topSubtitle`}>Юридические услуги любого уровня сложности</h3>
            <div className={`${this.className}__topNavigation`}>
              <button className="button is-primary">
              <span className="icon">
                <i className="fa fa-angle-right"></i>
              </span>
                <span>
                Оставить заявку
              </span>
              </button>
            </div>
          </div>

          <div className={`${this.className}__bottom`}>
            <span className={`${this.className}__bottomSection`}>
              <span className="icon">
                  <i className="fa fa-phone"></i>
              </span>
              +7 (985) 1234567
            </span>
            <span className={`${this.className}__bottomSection`}>
              <span className="icon">
                <i className="fa fa-envelope-o"></i>
              </span>
              test@yandex.ru
            </span>
          </div>
        </div>
      </section>
    );
  }
}
