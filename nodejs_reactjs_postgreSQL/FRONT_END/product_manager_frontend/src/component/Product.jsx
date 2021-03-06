import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div className="col-lg-4">
                <div className="card text-left">
                    <img className="card-img-top" src={this.props.images} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.product_name}</h5>
                        <p className="card-text">{this.props.product_price}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;