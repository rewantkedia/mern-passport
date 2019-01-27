import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  handleEvent = () => {
    this.props.history.push("/signup");
  };
  render() {
    return (
      <div className="App">
        <h1>Mern-Passport App</h1>
        <button onClick={this.handleEvent}>SignUp</button>
        <button>SignIn</button>
      </div>
    );
  }
}

export default App;
