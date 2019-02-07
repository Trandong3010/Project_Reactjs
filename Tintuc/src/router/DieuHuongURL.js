import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Tintuc from '../component/Tintuc/Tintuc';
import Chitiettin from '../component/Chitiettin/Chitiettin';
import Contact from '../component/Contact/Contact';

class DieuHuongURL extends Component {
    render() {
        return (
            <div>
                <Route exact path="/tin" component={Tintuc} />
                <Route exact path="/chi-tiet-tin/:slug.:id.html" component={Chitiettin} />
                <Route exact path="/lien-he" component={Contact} />
            </div>

        );
    }
}

export default DieuHuongURL;