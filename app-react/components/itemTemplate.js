import React from "react";
export default
React.createClass({
    render: function () {
        return (
            <div className={"item bg-"+this.props.bgClass} style={this.props.lineStyle}>
                <div className="context">
                    Hello test {this.props.row}.{this.props.column}
                </div>
            </div>
        )
    }
});