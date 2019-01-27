import React, { Component } from "react";
import axios from "axios";

class signup extends Component {
  state = {
    username: " ",
    password: " ",
    userexists: false
  };
  handleChange = event => {
    let value = event.target.value;
    let name = event.target.name;
    this.setState({
      [name]: value
    });

    console.log(this.state.username, this.state.password);
  };
  handleSubmit = event => {
    event.preventDefault();
    // axios
    //   .post("http://localhost:8000/signup", {
    //     username: this.state.username,
    //     password: this.state.password
    //   })
    //   .then(() => {
    //     console.log("Here");
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    // console.log("Submit");

    fetch("http://localhost:8000/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(res => {
        console.log(res);
        console.log("HERE");
        return res.json();
      })
      .then(json => {
        console.log(JSON.stringify(json));
        console.log(json);
        if (json.message == "User Created") {
          this.props.history.push("/signin");
        } else {
          console.log("kuch sochna padega");
          //   this.state.userexists = true;
          this.setState({
            userexists: true
          });
        }
      });
  };
  UserExists = () => {
    console.log(this.state.userexists);
    if (this.state.userexists) return <p>User Exists</p>;
  };
  render() {
    return (
      <div>
        <form>
          <input
            id="username"
            name="username"
            type="text"
            // value={this.state.username}
            placeholder="Username"
            onChange={this.handleChange}
          />
          <input
            id="password"
            name="password"
            type="text"
            placeholder="Password"
            // value={this.state.password}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
        {/* {this.state.userexists && <h2>UserExists</h2>}
         */}{" "}
        {/*Method 1 for conditional rendering*/}
        {this.UserExists()} {/*Method 2 for conditional rendering*/}
      </div>
    );
  }
}

export default signup;
