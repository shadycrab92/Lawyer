import React, {Component} from "react";
import { Scrollbars } from "react-custom-scrollbars";

import "./style.sass";

export default class CustomScrollbars extends Component {
  render() {
    return (
      <Scrollbars>
        {this.props.children}
      </Scrollbars>
    );
  }
}
