import React from "react";
import Navbar from "../../Recipes/components/Navbar.jsx";

export default class Sessions extends React.Component {
  constructor(){
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    // checks that required fields have some input to enable the save button
    const isEnabled = this.state.email && this.state.password.length > 2;

    return (

      <div className="container">
        <Navbar current_user={this.props.current_user} />
        <div className="session-box">
          <h1>Log In</h1>
          <form method="post" action="/login">
            <div className="form-group required">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
            </div>
            <div className="form-group required">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
            </div>
            <div className="required">
              <label>Required fields</label>
              <a href="/signup" className="btn btn-primary">Sign Up</a>
              <button type="submit" className="btn btn-primary" disabled={!isEnabled}>Log In</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}