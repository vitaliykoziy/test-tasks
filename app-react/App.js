import React from "react";
import ReactDOM from "react-dom";
import AppContent  from "./components/content";
import AppHeaderContent  from "./components/headerContent";

var Root = React.createClass({
    getInitialState: function () {
        return {
            items: []
        };
    },
    componentWillMount: function () {
        this.setState({
            items: AppContent.mountDefaultItems()
        });
    },
    handleClick: function (event) {
        this.setState({
            items: AppContent.randomData()
        });
    },
    render: function () {
        return (
            <div>
                <AppHeaderContent
                    clickEventFunction={() => {return  this.handleClick();}}
                />
                <AppContent
                    items={this.state.items}
                />
            </div>
        )
    }
});


ReactDOM.render(
    <Root />,
    document.getElementById('root')
);




