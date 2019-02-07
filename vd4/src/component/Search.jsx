import React, { Component } from 'react';
import EditProduct from './EditProduct';
class Search extends Component {



    changeButton = () => {
        if (this.props.changeForm === true) {
            return <button className="btn btn-outline-primary mr-sm-2" onClick={() => this.props.connect()} >Đóng</button>;
        }
        else {
            return <button className="btn btn-outline-primary" onClick={() => this.props.connect()} >Thêm sản phẩm</button>;
        }
    }

    isShowEdit = () => {
        if(this.props.editProductStatus === true)
        {
            return <EditProduct changeEditProductStatus = {() => this.props.changeEditProductStatus()} />;
        }
    } 
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.isShowEdit()}
                    <div className="col my-2">
                        <div className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </div>
                    </div>
                    <div className="col my-2">
                        <div className="form-group">
                            {this.changeButton()}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Search;