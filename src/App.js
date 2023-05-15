import React from "react";
import "./scss/index.scss";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Splash from "./components/Splash";
import Social from "./components/Social";
import Footer from "./components/Footer";
import About from "./components/About";
import Gallery from "./components/Gallery";
import games from "./components/games"

class App extends React.Component {
  state = {
    open: false,
    social: false,
    gallery: false,
    about: false,
    success: false,
  };
  //function to toggle nav menu
  clear = (async) => {
    this.setState({
      gallery: false,
      about: false,
      social: false,
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
      social: false,
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
        />
        <About toggle={this.toggle} about={this.state.about} />
        <Gallery projects={games} toggle={this.toggle} gallery={this.state.gallery} />
        <Social toggle={this.toggle} social={this.state.social} />
        <Splash />
        <Footer toggle={this.toggle} social={this.state.social} />
      </div>
    );
  }
}

export default App;
