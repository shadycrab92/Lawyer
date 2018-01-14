import React from "react";
import Projects from "components/personal/projects/index";
import History from "components/personal/history/index";
import Chat from "components/personal/chat/index";

const PersonalPage = () => {
  return (
      <div className="columns">
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
  );
};

export default PersonalPage;
