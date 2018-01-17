import React, {Component} from "react";

import "./style.sass";

export default class Navbar extends Component {
  constructor() {
    super();
    this.className="nav";
  }

  render() {
    return (
      <nav className={`container is-fluid ${this.className}`}>
          <div className="columns">
            <div className={`column is-3 ${this.className}__left`}>
              <div className="buttons">
                <a className={`button navbar-item ${this.className}__item`} href="#">
                  Lawyers
                </a>
              </div>
            </div>
            <div className={`column is-9 ${this.className}__right`}>
              <div className="buttons">
                <a className={`button navbar-item ${this.className}__item`} href="#">
                  Главная
                </a>
                <a className={`button navbar-item ${this.className}__item active`} href="#">
                  Проекты
                </a>
                <a className={`button navbar-item ${this.className}__item`} href="#">
                  Персонал
                </a>
              </div>
            </div>
        </div>
      </nav>
    );
  }
}
