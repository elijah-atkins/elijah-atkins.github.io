import React from "react";
import CharacterSearch from "./CharacterSearch";

const Rigs = (props) => {
  return (
    <div className={`content-wrap ${props.rigs ? "on" : "off"}`}>
      <div className="close-panel" onClick={props.toggle("rigs")}>
        <div className="close-panel-button"> « </div>
      </div>
      <div className="content-scroll">
        <CharacterSearch projects={props.projects} />
        
      </div>
    </div>
  );
};



export default Rigs;
