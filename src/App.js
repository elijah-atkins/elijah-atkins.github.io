import React from "react";
import "./scss/index.scss";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Splash from "./components/Splash";
import Social from "./components/Social";
import Footer from "./components/Footer";
import About from "./components/About";
import Games from "./components/Games";
import Rigs from "./components/Rigs";
import Tools from "./components/Tools";
import gamesList from "./components/gamesList";
import toolsList from "./components/toolsList";
import characters from "./components/characters";

class App extends React.Component {
  state = {
    open: false,
    social: false,
    tools: false,
    games: false,
    about: false,
    rigs: false,
    success: false,
  };
  //function to toggle nav menu
  clear = (async) => {
    this.setState({
      tools: false,
      games: false,
      about: false,
      rigs: false,
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
      tools: false,
      games: false,
      about: false,
      rigs: false,
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
          tools={this.state.tools}
          games={this.state.games}
          about={this.state.about}
          rigs={this.state.rigs}
        />
        <About toggle={this.toggle} about={this.state.about} />
        <Tools projects={toolsList} toggle={this.toggle} tools={this.state.tools} />
        <Games projects={gamesList} toggle={this.toggle} games={this.state.games} />
        <Rigs projects={characters} toggle={this.toggle} rigs={this.state.rigs} />
        <Social toggle={this.toggle} social={this.state.social} />
        <Splash />
        <Footer toggle={this.toggle} social={this.state.social} />
      </div>
    );
  }
}

export default App;
