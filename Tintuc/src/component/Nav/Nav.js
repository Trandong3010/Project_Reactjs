import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand js-scroll-trigger" href="#">24H KẾT NỐI</a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
              <i className="fas fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink activeStyle={{fontWeight: "bold", color: "red"}} className="nav-link js-scroll-trigger" to="/tin">Tin tức</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeStyle={{fontWeight: "bold", color: "red"}} className="nav-link js-scroll-trigger" to="/chi-tiet-tin">Tin tức chi tiết</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeStyle={{ fontWeight: "bold", color: "red"}} className="nav-link js-scroll-trigger" to="/lien-he">Kết nối</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;