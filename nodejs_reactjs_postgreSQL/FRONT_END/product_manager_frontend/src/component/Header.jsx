import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="container my-3">
                <h1 className="display-3">Hiển thị sản phẩm</h1>
                <p className="lead">Sử dụng react js lấy dữ liệu từ node js</p>
                <hr className="my-2" />
            </div>
        );
    }
}

export default Header;