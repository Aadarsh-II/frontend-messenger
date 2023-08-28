import React, { Component } from "react";
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault(); //ye dekh lena
  }

  setUsername(username) {
    this.setState({ username });
  }

  setPassword(password) {
    this.setState({ password });
  }

  render() {
    return (
      <div>
        <h2 className="text-center pt-3"><b>Login</b></h2>
        <section>
          <div className="container pt-4 m-6">
            <div className="row">
              <div className="col-12 col-sm-8 col-md-6 m-auto">
                <div className="card border-0">
                  <div className="card-body">
                    <div className="text-center py-2 mt-2">
                    <i className="bi bi-person" style={{ fontSize: '3rem' }}>
                    </i>
                    </div>
                    
                    <input
                      type="text"
                      className="form-control text-center my-4 py-2"
                      placeholder="Username"
                    />
                    <input
                      type="password"
                      className="form-control text-center my-3 py-2"
                      placeholder="Password"
                    />
                    <div className="text-center">
                      <button className="btn btn-primary">
                        Login
                      </button>
                      <hr />
                      <button
                        type="submit"
                        className="google btn btn-success py-2 mt-2 col-12"
                        data-provider="google"
                        data-action-button-secondary="true"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-google"
                          viewBox="0 0 16 16"
                        >
                          {'http://www.w3.org/2000/svg'}
                        </svg>
                        <span>Continue with Google</span>
                      </button>
                      <a href="#" className="nav-link my-2">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
