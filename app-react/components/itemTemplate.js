import React, {Component} from "react";

export default class ItemTemplate extends Component {
    
    render() {
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
}