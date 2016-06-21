import React, {Component} from "react";

export default class AppHeaderContent extends Component {
    
    render() {
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
}

AppHeaderContent.propTypes = {
    clickEventFunction: React.PropTypes.func.isRequired
};