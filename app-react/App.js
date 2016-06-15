var ItemTemplate = React.createClass({
	render(){
		return(
			<div className={"item bg-"+this.props.bgClass}>
                    <div className="context">
                        Hello test {this.props.iItem}.{this.props.jItem}
                    </div>
            </div>
		)
	}
});

var Items = React.createClass({
  render: function() {
    return (
		<section className="content-width">
			{
				[1,2,3,4].map(function(i) {
					return [1,2,3,4].map(function(j) {
						return <ItemTemplate bgClass={(i-1)*4+j} iItem = {i} jItem={j}/>;
					})
				})
			}
		</section>
      );
  }
});

var App = React.createClass({
    render(){
        return(
				<Items />
        )
    }
});

var AppHeader = React.createClass({
    render(){
        return(
               <nav className="content-width">
					<div className="logo-section">
					</div>
					<ul>
						<li>
							<a href="#" title="click me">Random</a>
						</li>
					</ul>
				</nav>
        )
    }
})

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

ReactDOM.render(
  <AppHeader />,
  document.getElementById('header')
);


