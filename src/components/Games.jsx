import React from "react";
import ProjectSearch from "./ProjectSearch";

const Games = (props) => {
  return (
    <div className={`content-wrap ${props.games ? "on" : "off"}`}>
      <div className="close-panel" onClick={props.toggle("games")}>
        <div className="close-panel-button"> « </div>
      </div>
      <div className="content-scroll">
        <ProjectSearch projects={props.projects} />
      </div>
    </div>
  );
};

export default Games;
