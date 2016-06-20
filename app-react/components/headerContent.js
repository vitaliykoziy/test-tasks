import React from "react";

export default React.createClass({
    propTypes: {
        clickEventFunction: React.PropTypes.func.isRequired
    },
    render: function () {
        return (
            <header>
                <nav className="content-width">
                    <div className="logo-section">
                    </div>
                    <ul>
                        <li>
                            <a href="#" onClick={this.props.clickEventFunction} title="click me">Random</a>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
});