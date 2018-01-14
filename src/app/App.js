/* eslint-disable import/no-named-as-default */
import React from "react";
import PropTypes from "prop-types";
import { Switch, /*NavLink,*/ Route } from "react-router-dom";
import HomePage from "containers/HomePage";
import PersonalPage from "containers/PersonalPage";
import NotFoundPage from "containers/NotFoundPage";


class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container pageBody ">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/personal" component={PersonalPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
