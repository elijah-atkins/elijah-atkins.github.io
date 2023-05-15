import React from "react";
import ProjectSearch from "./ProjectSearch";

const Tools = (props) => {
  return (
    <div className={`content-wrap ${props.tools ? "on" : "off"}`}>
      <div className="close-panel" onClick={props.toggle("tools")}>
        <div className="close-panel-button"> « </div>
      </div>
      <div className="content-scroll">
        <ProjectSearch projects={props.projects} />
      </div>
    </div>
  );
};

export default Tools;
