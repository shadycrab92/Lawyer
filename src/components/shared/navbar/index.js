import React, {Component} from "react";
import Scrollbars from "components/shared/ui/scrollBars";

import "./style.sass";

export default class Navbar extends Component {
  constructor() {
    super();
    this.className="nav";
  }

  render() {
    return (
      <nav className={`${this.className}`}>
        <div className={`${this.className}__left`}>
          <a className="button is-brand" href="#">
            Lawyers
          </a>
        </div>

        <div className={`${this.className}__right`}>
          <Scrollbars>
            <a className="button is-nav" href="#">
              Главная
            </a>
            <a className="button is-nav active" href="#">
              Проекты
            </a>
            <a className="button is-nav" href="#">
              Персонал
            </a>
          </Scrollbars>
        </div>
      </nav>
    );
  }
}
