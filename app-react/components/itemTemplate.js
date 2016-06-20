import React from "react";
export default
React.createClass({
    render: function () {
        var lineStyles = {
            backgroundColor: this.props.backgroundColor,
            order: this.props.order
        };
        return (
            <div className={"item"}
                 style={lineStyles}>
                <div className="context">
                    Hello test {this.props.row}.{this.props.column}
                </div>
            </div>
        )
    }
});