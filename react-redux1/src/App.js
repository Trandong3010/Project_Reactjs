import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import New from './New';
import {connect} from 'react-redux';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="a1">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {this.props.dulieu}
        <New/>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    dulieu: state.num
  }
}

export default connect(mapStateToProps)(App);
