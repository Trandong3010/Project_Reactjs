import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";


class NewsItem extends Component {
    constructor(props) {
        super(props);

    }

    chuyenDoiURL = (str) => {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();

        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');

        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');

        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');

        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');

        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');

        // return
        return str;
    }

    render() {
        return (
            <div className="col-md-3 mb-3 mb-md-0">
                <div className="card py-4 h-100">
                    <div className="card-body">
                        <i className="text-primary mb-2" />
                        <img src={this.props.hinhanh} alt className="img-fluid m-3" />
                        <Link to={"/chi-tiet-tin/" + this.chuyenDoiURL( this.props.tieude) + "." + this.props.tinId + ".html"}><h4 className="text-uppercase m-0">{this.props.tieude}</h4></Link>
                        <br className="my-4" />
                        <div className="small text-black-50">{this.props.trichdan}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;