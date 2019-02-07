import React, { Component } from 'react';

class TableRow extends Component {
    categoryShow = () => {
        if (this.props.category === "1") { return "SAMSUNG"; }
        else if (this.props.category === "2") { return "OPPO"; }
    }

    editClick = () => {
        this.props.editFunClick();
        this.props.changeEditProductStatus();
    }



    render() {
        return (
            <tr>
                <td>{this.props.stt + 1}</td>
                <td>{this.props.ma}</td>
                <td>{this.props.name}</td>
                <td>{this.categoryShow()}</td>
                <td>
                    <button className="btn btn-outline-primary mr-sm-2" onClick={() => this.editClick()}> <i className="fa fa-edit"></i> Sửa</button>
                    <button className="btn btn-outline-primary">Xóa</button>
                </td>

            </tr>
        );
    }
}

export default TableRow;