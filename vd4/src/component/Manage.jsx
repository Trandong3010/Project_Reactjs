import React, { Component } from 'react';
import Table from './Table';
import Addproduct from './Addproduct';
import Search from './Search';
import DataProduct from './Data.json';
const uuidv1 = require('uuid/v1');
class Manage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changeForm: false,
            data: DataProduct,
            editProductStatus: false
        }
    }

    changeStatus = () => {
        this.setState({
            changeForm: !this.state.changeForm
        });
    }

    changeEditProductStatus = () => {
        this.setState({
            editProductStatus: !this.state.editProductStatus
        });
    }

    getNewUserData = (ma, name, category) => {
        var item = {};
        item.id = uuidv1();
        item.ma = ma;
        item.name = name;
        item.category = category;
        var items = this.state.data;
        items.push(item);
        this.setState({
            data: items
        });
        console.log(this.state.data);
    }

    editData = (datax) => {
        console.log("Thành công kết nối :v");
        console.log(datax);
    }


    render() {
        return (
            <div className="container my-5">
                <h1 className="my-5">QUẢN LÝ SẢN PHẨM</h1>
                <div className="row">
                    <Search
                        connect={() => this.changeStatus()}
                        changeForm={this.state.changeForm}
                        editProductStatus={this.state.editProductStatus}
                        changeEditProductStatus={() => this.changeEditProductStatus()}
                    />
                    <Table
                        changeEditProductStatus={() => this.changeEditProductStatus()}
                        editFun={(datax) => this.editData(datax)} 
                        dataTable={this.state.data}
                    />

                    <Addproduct add={(ma, name, category) => this.getNewUserData(ma, name, category)} changeForm={this.state.changeForm} />
                </div>
            </div>
        );
    }
}

export default Manage;