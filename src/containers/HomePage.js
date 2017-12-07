import React from "react";

import Header from "components/home/header";
import Team from "components/home/team";
import Advantages from "components/home/advantages";

const HomePage = () => {

  return (
      <div>
        <Header/>
        <Advantages/>
        <Team/>
      </div>
  );
};

export default HomePage;
