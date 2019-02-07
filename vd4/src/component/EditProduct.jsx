import React, { Component } from 'react';

class EditProduct extends Component {
    render() {
        return (
            <div className="col-12">

                <div className="card text-center">
                    <div class="card-header">
                        Cập nhật thông tin sản phẩm
                    </div>
                    <div className="card-body">
                        <form action="">
                            <div className="form-group">
                                <input type="text" name="ma" onChange={(event) => this.onChange(event)} className="form-control" placeholder="Mã sản phẩm" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <input type="text" name="name" onChange={(event) => this.onChange(event)} className="form-control" placeholder="Tên sản phẩm" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <select className="form-control" onChange={(event) => this.onChange(event)} name="category" required>
                                    <option value>------</option>
                                    <option value={1}>SAMSUNG</option>
                                    <option value={2}>OPPO</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="reset" value="Lưu" className="btn btn-outline-primary" onClick = {() => this.props.changeEditProductStatus()} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditProduct;