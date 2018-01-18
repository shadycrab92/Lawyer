import React from "react";

import Navbar from "components/shared/navbar/index";
import Projects from "components/personal/projects/index";
import History from "components/personal/history/index";
import Chat from "components/personal/chat/index";

const PersonalPage = () => {
  return (
    <div className="pageRoot">
      <div className="pageNav">
       <Navbar/>
      </div>
      <div className="pageFixedLeftContent">
        <Projects/>
      </div>
      <div className="pageContent pageContent--withFixedLeftContent">
        <div className="columns">
          <div className="column is-3">

          </div>
          <div className="column is-6">

          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalPage;
