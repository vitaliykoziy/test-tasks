require(['./components/items'], function (Items) {
	console.log(Items);
	
	
    var App = React.createClass({
        render(){
            return (
                <Items />
            )
        }
    });

    var AppHeader = React.createClass({
        render(){
            return (
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
});



