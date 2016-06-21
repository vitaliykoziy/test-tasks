import React, {Component} from "react";
import ItemTemplate  from "./itemTemplate";

export default class AppContent extends Component {

    render() {
        return (
            <div className="content">
                <section className="content-width">
                    {
                        this.props.items.map(function (item, index) {
                            return (
                                <ItemTemplate
                                    backgroundColor={item.color}
                                    order={item.order}
                                    column={item.column}
                                    row={item.row}
                                    key={index}
                                />
                            )
                        })
                    }
                </section>
            </div>
        )
    }
}

AppContent.propTypes = {
    items: React.PropTypes.array.isRequired
};