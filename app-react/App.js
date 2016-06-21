import React, {Component} from "react";
import ReactDOM from "react-dom";
import AppContent  from "./components/content";
import AppHeaderContent  from "./components/headerContent";
import itemsData from "./utils/itemsData";

class Root extends Component {

    constructor() {
        super();
        this.state = {
            items: itemsData.mountDefaultItems()
        }
    }

    handleClick() {
        this.setState({
            items: itemsData.randomDataForItems()
        });
    }

    render() {
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
}

ReactDOM.render(
    <Root />,
    document.getElementById('root')
);