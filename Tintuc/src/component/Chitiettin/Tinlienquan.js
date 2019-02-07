import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

class Tinlienquan extends Component {
    render() {
        return (
            <div className="col-md-3 mb-3 mb-md-0">
                <div className="card py-4 h-100">
                    <div className="card-body">
                        <i className="text-primary mb-2" />
                        <img src={this.props.anh} alt className="img-fluid m-3" />
                        <Link to={"/chi-tiet-tin/" + this.chuyenDoiURL( this.props.tieude) + "." + this.props.tinId + ".html"}><h4 className="text-uppercase m-0">{this.props.tieude}</h4></Link>
                        <br className="my-4" />
                        <div className="small text-black-50">{this.props.trichdan}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tinlienquan;