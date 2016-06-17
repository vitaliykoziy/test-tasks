import React from "react";
import ItemTemplate from "./itemTemplate";
export default React.createClass({
    getDefaultProps: function() {
        return {
            lineStyle: ''
        };
    },
    render: function () {
        return (
            <section className="content-width">
                {
                    [1, 2, 3, 4].map(function (row, parentIndex) {
                        return [1, 2, 3, 4].map(function (column, childrenIndex) {
                            return <ItemTemplate bgClass={(row-1)*4+column} column={column} row={row} key={(parentIndex-1)*4+childrenIndex} />;
                        })
                    })
                }
            </section>
        );
    }
});