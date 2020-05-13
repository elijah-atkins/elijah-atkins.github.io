import React, { useState } from 'react';
import ProjectCard from './ProjectCard';


const ProjectSearch = ({ projects }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);


    const handleChange = e => {
        setSearchTerm(e.target.value);
      };

    return (
        <div className="project-search">
        <div className="searchBox">
            <input 
            id="search"
            className="searchInput" 
            type="text" 
            name="search" 
            placeholder="Search" 
            value={searchTerm}
            onChange={handleChange}
            />
            <button className="searchButton">
                <i className="material-icons">
                    search
                </i>

            </button>
        </div>
        <div className="project-grid">
        {projects.map(project => {
            return (<ProjectCard project={project} key={project.id}/>)
        })}
        </div>
        </div>
    )
}

export default ProjectSearch