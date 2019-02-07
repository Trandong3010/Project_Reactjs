import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './component/TopMenu/TopMenu.js';
import Header from './component/Header/Header.js';
import Content from './component/Content/Content.js';
import Footer from './component/Footer/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="_013">
        <TopMenu />
        <Header />
        <div className="container">
          <div className="row pt-5">
            <Content tieude="TIn tức số 1" anh="img/01.jpg" trichdan="Trích dấn số 1" />
            <Content tieude="Tin tức số 2" anh="img/01.jpg" trichdan="Trích dẫn số 2" />
            <Content tieude="Tin tức số 3" anh="img/01.jpg" trichdan="Trích dẫn số 2" />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
