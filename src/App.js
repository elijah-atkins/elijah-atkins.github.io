import React from "react";
import { Route, Switch } from "react-router-dom";
import "./scss/index.scss";
import "./components/data/projects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import projects from "./components/data/projects";
import About from "./components/About";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/projects">
          <Projects projects={projects}/>
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
