var React = require('react');

var ButtonPanel = React.createClass({
	render: function() {
		return (
		<a onClick={this.props.onClick}>{this.props.category}</a>
		)
	}

});


module.exports = ButtonPanel;


