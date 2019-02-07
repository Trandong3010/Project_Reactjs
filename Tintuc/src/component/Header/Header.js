import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                {/* About Section */}
                <section className="about-section text-center">
                    <div className="container">
                        <img src="img/ipad.png" className="img-fluid" alt />
                    </div>
                </section>
            </div>
        );
    }
}

export default Header;