import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';



const ProjectSearch = ({ projects }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    

    useEffect(() => {
        // map transforms [].length => a new type of data at the same length
        // find reads an expression and then returns the first value that that expression is true
        // filter reads an expression and then returns an [] with values where expression was true
        // reduce
        const newResults = projects.filter(project => {
          return project.tag.toString().toLowerCase().includes(searchTerm.toLowerCase().trim().split(' ')) || project.description.toLowerCase().includes(searchTerm.toLowerCase().trim());

        });
    
        setSearchResults(newResults);
      }, [searchTerm, projects]);


    const handleChange = e => {
        setSearchTerm(e.target.value);
      };

    return (
        <div className="project-search">
        <div className={searchResults.length === 0 ? "searchBox search-error" : "searchBox"}>
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
        {searchResults.length === 0 ? <div className="project-card"><div className="project-item"><h1>No Content found</h1> <p> Please try searching for something else!</p></div></div> : searchResults.map(project => {
            return (<ProjectCard project={project} key={project.id}/>)
        }) }
        </div>
        </div>
    )
}

export default ProjectSearch