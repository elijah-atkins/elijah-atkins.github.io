import React from "react";
import ProjectSearch from './ProjectSearch';

const Gallery = (props) => {
  return(


  <div className={`gallery-wrap ${(props.gallery)?"on":"off"}`}>
       <div className="close-panel" onClick={props.toggle("gallery")}>
    <div className="close-panel-button" >{" "}>{" "}</div>
      </div> 
<div className="gallery-content">
    <ProjectSearch projects={props.projects} /></div>
  </div>

  )
};

export default Gallery;
