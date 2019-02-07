import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangthai: 0
        }

    }

    thongbao = () => { alert('cach xu ly tuong tac trong react js'); }
    thongbao2 = () => {
        alert('Thông báo số 2');
    }
    thongbao3 = (x) => {
        alert(x);

    }

    renderButton = () => (
        <div className="row">
            <div className="btn btn-group">
                <div className="btn btn-info" onClick = {() => this.editClick()} >Edit</div>
                <div className="btn btn-warning" >Remove</div>
            </div>
        </div>
    )

    renderForm = () => (
        <div className="row">
            <div className="form-group">
                <input ref = {(dulieunhap) => {this.trunggian = dulieunhap}} defaultValue = {this.props.tieude} type="text" name="ten" className="form-control" />
                <div className="my-2 btn btn-success" onClick = {() => this.saveClick()}>Save</div>
            </div>
        </div>
    )
    displayCheck = () => {
        if (this.state.trangthai === 0) {
            return this.renderButton();
        }
        else {
            return this.renderForm();
        }
    }
    
    editClick = () =>
    {
        this.setState({trangthai : 1});
    }

    saveClick = () => {
        this.setState({trangthai : 0});
        this.tieude = this.trunggian.value;
    }

    
    

    render() {
        return (
            <div className="col-lg-4">
                <div className="row">
                    <div className={"col-lg-5 " + this.props.vitri1}>
                        <div className="p-1">
                            <img className="img-fluid rounded-circle" src={this.props.anh} alt />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="p-1">
                            <h2 className="display-6">{this.props.tieude}</h2>
                            <p>{this.props.trichdan}</p>

                            {this.displayCheck()}

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;