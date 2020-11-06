import React from "react";
import "./scss/index.scss";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Splash from "./components/Splash";
import Social from "./components/Social";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import Gallery from "./components/Gallery";
import projects from "./components/projects";

class App extends React.Component {
  state = {
    open: false,
    social: false,
    gallery: false,
    about: false,
    contact: false,
  };
  //function to toggle nav menu
  clear = (async) => {
    this.setState({
      gallery: false,
      about: false,
      contact: false,
    });
  };
  toggle = (name) => (e) => {
    this.setState((prev) => ({
      [name]: !prev[name],
    }));
  };
  toggleNav = (name) => (e) => {
    this.setState((prev) => ({
      gallery: false,
      about: false,
      contact: false,
      [name]: !prev[name],
    }));
  };
  render() {
    return (
      <div className="App">
        <Header />

        <Nav
          toggle={this.toggle}
          toggleNav={this.toggleNav}
          clear={this.clear}
          open={this.state.open}
          social={this.state.social}
          gallery={this.state.gallery}
          about={this.state.about}
          contact={this.state.contact}
        />
        <About toggle={this.toggle} about={this.state.about} />
        <Gallery projects={projects} toggle={this.toggle} gallery={this.state.gallery} />
        <Contact toggle={this.toggle} contact={this.state.contact}/>
        <Social toggle={this.toggle} social={this.state.social} />
        <Splash />
        <Footer toggle={this.toggle} social={this.state.social} />
      </div>
    );
  }
}

export default App;
