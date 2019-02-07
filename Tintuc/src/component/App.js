import React, { Component } from 'react';
import './../css/App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from './../component/Nav/Nav.js';
import Header from './../component/Header/Header.js';
import Footer from './../component/Footer/Footer.js';
import Contact from './../component/Contact/Contact.js';
import Tintuc from './../component/Tintuc/Tintuc.js';
import Chitiettin from './../component/Chitiettin/Chitiettin.js';
import DieuHuongURL from '../router/DieuHuongURL';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Header />
          <DieuHuongURL />
          {/* <Chitiettin/> */}
          {/* <Tintuc/> */}
          {/* <Contact/> */}
          <Footer />

        </div>
      </Router>

    );
  }
}

export default App;
