import React, {Component} from "react";

import "./style.sass";

export default class Navbar extends Component {
  constructor() {
    super();
    this.className="nav";
  }

  render() {
    return (
      <nav className={`${this.className}`}>
        <div className="columns">
          <div className="column is-3">
            <div className={`${this.className}__left`}>
              <a className="button is-brand" href="#">
                Lawyers
              </a>
            </div>
          </div>
          <div className="column is-9">
            <div className={`${this.className}__right`}>
              <a className="button is-nav active" href="#">
                Главная
              </a>
              <a className="button is-nav" href="#">
                Проекты
              </a>
              <a className="button is-nav" href="#">
                Персонал
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
