import React from "react";

import Header from "components/home/header/index";
import Team from "components/home/team/index";
import Advantages from "components/home/advantages/index";
import Prices from "components/home/prices/index";
import Reviews from "components/home/reviews/index";

const HomePage = () => {
  return (
      <div>
        <Header/>
        <Advantages/>
        <Prices/>
        <Team/>
        <Reviews/>
      </div>
  );
};

export default HomePage;
