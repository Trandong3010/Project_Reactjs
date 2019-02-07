import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div className="navbar-default sidebar" role="navigation">
                <div className="sidebar-nav navbar-collapse">
                    <ul className="nav" id="side-menu">
                        <li className="sidebar-search">
                            <div className="input-group custom-search-form">
                                <input type="text" className="form-control" placeholder="Tìm kiếm..." />
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="button">
                                        <i className="fa fa-search" />
                                    </button>
                                </span>
                            </div>
                            {/* /input-group */}
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-bar-chart-o fa-fw" /> Chức năng chung<span className="fa arrow" /></a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <a href="Governance.html">Quản trị</a>
                                </li>
                                <li>
                                    <a href="Account.html">Tài khoản</a>
                                </li>
                                <li>
                                    <a href="#">Phòng ban</a>
                                </li>
                                <li>
                                    <a href="#">Chức vụ</a>
                                </li>
                            </ul>
                            {/* /.nav-second-level */}
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-bar-chart-o fa-fw" /> Quản lý hồ sơ <span className="fa arrow" /></a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <a href="HoSoNhanSu.html">Hồ sơ nhân sự</a>
                                </li>
                                <li>
                                    <a href="#">Quá trình công tác</a>
                                </li>
                                <li>
                                    <a href="#">Khen thưởng, kỉ luật</a>
                                </li>
                                <li>
                                    <a href="#">Bảo hiểm xã hội</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-bar-chart-o fa-fw" /> Chấm công <span className="fa arrow" /></a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <a href="#">Chấm công</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-bar-chart-o fa-fw" /> Theo dõi nhân sự<span className="fa arrow" /></a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <a href="#">Hợp đồng</a>
                                </li>
                                <li>
                                    <a href="#">Đi trễ, về sớm</a>
                                </li>
                            </ul>
                            {/* /.nav-second-level */}
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-bar-chart-o fa-fw" /> Tính lương<span className="fa arrow" /></a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <a href="#">Bảng lương</a>
                                </li>
                            </ul>
                            {/* /.nav-second-level */}
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-bar-chart-o fa-fw" /> Đánh giá<span className="fa arrow" /></a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <a href="#">Đánh giá</a>
                                </li>
                            </ul>
                            {/* /.nav-second-level */}
                        </li>
                    </ul>
                </div>
                {/* /.sidebar-collapse */}
            </div>
        );
    }
}

export default Sidebar;