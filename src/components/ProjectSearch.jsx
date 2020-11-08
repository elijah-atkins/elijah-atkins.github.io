import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

const ProjectSearch = ({ projects }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  //use expand to set hover attribute to force search bar to stay open when in use


  useEffect(() => {
    const searchWords = searchTerm.toLowerCase().split(" ").filter((el) => el.length !== 0);
    //split search term up into an array of words
    //load newResults with an array of projects to display
    //using filter-expects if boolean condition is met item will be added to new array
    const newResults = projects.filter((project) => {
      //check each project by converted all values in object into a long string
      const valuesString = Object.values(project).join(" ").toLowerCase();
      //add to project list if every search word appears in project string
      //using every-returns true if every item in the array meets the condition
      //return will be true if every word in searchWords is in the project valuesString
      return searchWords.every((word)=>valuesString.includes(word))
    });
    //load array of projects to display
    setSearchResults(newResults);
  }, [searchTerm, projects]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  if (searchResults.length === 0 && searchTerm === "") {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="project-search">
      <div
        className={
          searchResults.length === 0 ? "searchBox search-error" : "searchBox"
        }
      >
        <input
          id="search"
          className={`searchInput ${(searchTerm.length > 0) ? "expand" : null}`}
          type="text"
          name="search"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />

        <button className="searchButton">
          <svg
            className="search-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M7.008 34.984c0-15.75 12.77-28.393 28.52-28.393 15.751 0 28.52 12.643 28.52 28.393 0 15.751-12.769 28.394-28.52 28.394S7.008 50.735 7.008 34.984m-5.82.125C1.188 16.114 16.511.791 35.506.791c18.994 0 34.318 15.324 34.318 34.318 0 18.995-15.324 34.318-34.318 34.318-18.995 0-34.318-15.323-34.318-34.318z"
            />
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M58.857 57.461c3.566-3.076 5.182 2.038 13.667 8.749 22.551 17.835 32.83 19.804 24.016 29.771-8.836 9.99-15.182-2.686-30.849-23.603-6.558-8.755-10.581-11.685-6.834-14.917z"
            />
          </svg>

        </button>
      </div>
      <div className="project-grid">
        {searchResults.length === 0 ? (
          <div className="project-card">
            <div className="project-404">
              <h1>No Content found</h1>
            </div>
          </div>
        ) : (
          searchResults.map((project) => {
            return <ProjectCard project={project} key={project.id} />;
          })
        )}
      </div>
    </div>
  );
};

export default ProjectSearch;
