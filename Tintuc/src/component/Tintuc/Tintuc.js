import React, { Component } from 'react';

import dl from './../dulieu/dulieu.json';
import NewsItem from './NewsItem.js';
class Tintuc extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <section className="contact-section bg-black">
                <div className="container">
                    <div className="row">
                        {
                            dl.map((value, key) => 
                            (
                                <NewsItem key={key} tinId = {value.id} hinhanh={value.anh} tieude={value.tieuDe} trichdan={value.trichDan} />
                            )
                            )
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default Tintuc;