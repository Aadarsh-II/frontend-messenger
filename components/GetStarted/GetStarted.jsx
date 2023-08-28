import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login/Login.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './GetStarted.css';

class GetStarted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
    };
  }

  handleLogin = () => {
    this.setState({
      isLogged: true,
    });
  };

  render() {
    const { isLogged } = this.state;

    return (
      <div className="get_started container mt-5 py-5 text-center">
        <div className="card container">
          <div className="card-body mt-1 py-5 text-center">
            <h1 className="text-center mt-2 pt-2">
              <b>Get started</b>
            </h1>
            <hr />
            <button
              className="button btn btn-primary mr-5 custom-button"
              onClick={this.handleLogin}
            >Login
            </button>
            {isLogged && <Login />}
            <button className="btn btn-primary ml-5 custom-button">
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default GetStarted;
