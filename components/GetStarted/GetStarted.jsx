import React, { Component } from "react";
import './GetStarted.css';
import Login from "../Login/Login.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from 'react-router-dom';

class GetStarted extends Component {
    constructor(props) {
        super(props);
        this.state = {
          login: "",
          register: "",
        };
    }
    render() {
        return (
            <div className="get_started container mt-5 py-5 text-center">
                <div className="card container">
                    <div className="card-body mt-1 py-5 text-center">
                    <h1 className="text-center mt-2 pt-2">
                        <b>
                        Get started
                        </b>
                    </h1>
                    <hr />
                    <button className="button btn btn-primary mr-5 custom-button" >
                       Login
                    </button>
                    <button className="btn btn-primary ml-5  custom-button">
                        Register
                    </button>

                    </div>
                </div>
            </div>
        );
    }
}

export default GetStarted;
