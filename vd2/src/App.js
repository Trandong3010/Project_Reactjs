import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const a1 = "Đông";

class App1 extends Component {
  render() {
    return (
      <div>
        <h3>Tên tôi là: {a1}</h3>
      </div>
    );
  }
}

// ví dụ về hàm map
const so = [1,2,3,4,5,6];
const so2 = so.map((x) => x*2);
class App2 extends Component {
  render() {
    return (
      <div>
        {so2}
      </div>
    );
  }
}

const so3 = so.map((x) =>(
  <div>
    <li>Số : {x}</li>
  </div>
)
);

class App3 extends Component {
  render() {
    return (
      <div>
        {so3}
      </div>
    );
  }
}




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <App1/>
          <App2/>
          <App3/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
