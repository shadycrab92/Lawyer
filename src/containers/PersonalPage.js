import React from "react";

import Navbar from "components/shared/navbar/index";
import Projects from "components/personal/projects/index";
import History from "components/personal/history/index";
import Chat from "components/personal/chat/index";

const PersonalPage = () => {
  return (
    <div className="pageContentWrapper">
      <div className="columns">
        <div className="column is-12">
          <Navbar/>
        </div>
      </div>
      <div className="columns pageContent">
        <div className="column is-3">
          <Projects/>
        </div>
        <div className="column is-3">
          <History/>
        </div>
        <div className="column is-6">
          <Chat/>
        </div>
      </div>
    </div>
  );
};

export default PersonalPage;
