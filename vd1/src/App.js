import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function One() {
  return (
    <div>
      <h1>Số 1</h1>
      <h5>Số 5</h5>
    </div>
  );
}

var Two = function () {
  return (
    <div>
      <h1>đây là cách n mũ</h1>
    </div>
  );
}

var Three = () => (
  <div>
    <h1>Cách số 4</h1>
  </div>
);

class Four extends Component {
  render() {
    return (
      <div>
        <button>React js</button>
      </div>
    );
  }
}

// Sử dụng Props cách 1
function NumberOne(props) {
  return (
    <div>
      <div className="col-lg-6">
        <div className="card text-left">
          <img className="card-img-top" src={props.linkhinh} alt="" />
          <div className="card-body">
            <h4 className="card-title">{props.tieude}</h4>
            <p className="card-text">Body</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Sử dụng Class cách 2
class NumberTwo extends Component {
  render() {
    return (
      <div className="col-lg-4">
        <div className="card text-left">
          <img className="card-img-top" src={this.props.linkhinh} alt="" />
          <div className="card-body">
            <h4 className="card-title">{this.props.tieude}</h4>
            <p className="card-text">Đây là nội dung</p>
          </div>
        </div>
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
        </header>
        <div className="container">
          <div className="row">
            <NumberOne tieude="Sản phẩm 1" linkhinh="https://danongonline.com.vn/wp-content/uploads/2018/01/girl-xinh-hvnh-9.jpg"  />
            <NumberOne tieude="Sản phẩm 2" linkhinh="http://a9.vietbao.vn/images/vn999/150/2017/12/20171222-them-mot-hot-girl-xinh-dep-cua-dh-hoa-sen-xuat-hien-2.jpg" />
            <NumberTwo tieude="Sản phẩm 3" linkhinh="https://we25.vn/media/files/co-gai-xinh-dep-2.jpg" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
