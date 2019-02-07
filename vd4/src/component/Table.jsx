import React, { Component } from 'react';
import TableRow from './TableRow';

class table extends Component {

    mappingDataTable = () => this.props.dataTable.map((value, key) => (
        <TableRow
            changeEditProductStatus={() => this.props.changeEditProductStatus()}
            editFunClick={(datax) => this.props.editFun(value)}
            key={key} stt={key}
            ma={value.ma}
            name={value.name}
            category={value.category}
        />
    ))



    render() {
        return (
            <div className="col">
                <div className="card text-center">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Stt</th>
                                        <th>mã sản phẩm</th>
                                        <th>Tên sản phẩm</th>
                                        <th>Loại</th>
                                        <th>Hoạt động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.mappingDataTable()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default table;