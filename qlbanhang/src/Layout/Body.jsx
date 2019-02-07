import React, { Component } from 'react';
import Navbarheader from './Navbarheader';
import Navbartop from './Navbartop';
import Sidebar from './Sidebar';

class Body extends Component {
    render() {
        return (
            <div id="wrapper">
                <nav className="navbar navbar-default navbar-static-top" role="navigation" style={{ marginBottom: 0 }}>
                    <Navbarheader/>
                    {/* /.navbar-header */}
                    <Navbartop/>
                    {/* /.navbar-top-links */}
                    <Sidebar/>
                    {/* /.navbar-static-side */}
                </nav>
            </div>
        );
    }
}

export default Body;