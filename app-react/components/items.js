define(['./items'], function () {
	var a = require(['./itemTemplate'], function (itemTemplate) {
			return React.createClass({
				render: function () {
					return (
						<section className="content-width">
							{
								[1, 2, 3, 4].map(function (i) {
									return [1, 2, 3, 4].map(function (j) {
										return <ItemTemplate bgClass={(i-1)*4+j} iItem={i} jItem={j}/>;
									})
								})
							}
						</section>
					);
				}
			});
	});	
	return a;
});


