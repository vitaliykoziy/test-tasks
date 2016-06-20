import React from "react";
import ReactDOM from "react-dom";
import AppContent  from "./components/content";
import AppHeaderContent  from "./components/headerContent";
import itemsData from "./utils/itemsData";

var Root = React.createClass({
    getInitialState: function () {
        return {
            items: []
        };
    },
    componentWillMount: function () {
        this.setState({
            items: itemsData.mountDefaultItems()
        });
    },
    handleClick: function () {
        this.setState({
            items: itemsData.randomDataForItems()
        });
    },
    render: function () {
        return (
            <div>
                <AppHeaderContent
                    clickEventFunction={() => this.handleClick()}
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