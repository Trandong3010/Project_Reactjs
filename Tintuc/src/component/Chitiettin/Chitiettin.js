import React, { Component } from 'react';
import dl from './../dulieu/dulieu.json';
import Tinlienquan from './Tinlienquan.js';
class Chitiettin extends Component {
    render() {
        return (
            <div>
                <section className="contact-section">
                    <div className="container">
                        {
                            dl.map((value, key) => {
                                if (value.id == this.props.match.params.id) {
                                    return (
                                        <div className="col-12" key={key}>
                                            <div className="card">
                                                <div className="card-body">
                                                    <h5 className="card-title">{value.tieuDe}</h5>
                                                    <p className="card-text">{value.trichDan}</p>
                                                    <img src={value.anh} alt className="img-fluid" />
                                                    <p className="card-text">{value.noiDung}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })


                        }
                        <div className="row">
                            <div className="col-12 text-center my-4">
                                <h5 className="card-title">Tin liên quan</h5>
                            </div>

                            {
                                dl.map((value, key) => {
                                    if (key <= 3) {
                                        return (
                                            <Tinlienquan key={key} tinId={value.id} anh={value.anh} tieude={value.tieuDe} trichdan={value.trichDan} />
                                        )
                                    }

                                }
                                )
                            }

                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Chitiettin;