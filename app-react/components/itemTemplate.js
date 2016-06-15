define([], function () {
    return React.createClass({
        render(){
            return (
                <div className={"item bg-"+this.props.bgClass}>
                    <div className="context">
                        Hello test {this.props.iItem}.{this.props.jItem}
                    </div>
                </div>
            )
        }
    });
});