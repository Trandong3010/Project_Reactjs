import React, { Component } from 'react';

class Addproduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            ma: "",
            name: "",
            category: ""
        }
    }

    onChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }



    checkForm = () => {
        if (this.props.changeForm === true) {
            return (
                <div className="col">

                    <div className="card text-center">
                        <div className="card-body">
                            <form action="">
                                <div className="form-group">
                                    <input type="text" name="ma"  onChange={(event) => this.onChange(event)} className="form-control" placeholder="Mã sản phẩm" aria-describedby="helpId" />
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
                                    <input type="reset" value="Thêm sản phẩm" className="btn btn-outline-primary" onClick={() => this.props.add(this.state.ma, this.state.name, this.state.category)} />
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            )
        }
    }


    render() {
        return (

            <div>
                {this.checkForm()}
            </div>


        );
    }
}

export default Addproduct;