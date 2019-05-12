import React, { Component } from 'react';
import './App.css';
import Nav from './component/Nav';
import Header from './component/Header';
import Product from './component/Product';
import axios from 'axios';

// const getProductData = () => axios.get('http://localhost:5000/getdata01').then((res) => res.data)

// const getProductData = () => {
//   return axios.get('http://localhost:5000/getdata01')
//     .then(function (response) {
//       return response.data;
//     })
// }

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:5000/getdata01')
      .then(response => {
        console.log(response.data);
        this.setState({ items: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
    // if (this.state.items === null) {
    //   console.log(getProductData());
    //   getProductData().then((response) => {
    //     this.setState({
    //       items: response
    //     });
    //   })
    // }
  }

  printData = () => {
    if (this.state.items !== null) {
      return this.state.items.map((value, key) =>
        <Product
          key={key}
          product_name={value.product_name}
          product_price={value.product_price}
          images={value.images}
        />
      )
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <Header />
        <div className="container">
          <div className="row">
            {this.printData()}
          </div>
        </div>
      </div>

    );
  }
}

export default App;
