var React = require('react');

/*
 Create new filter panel component.
*/



var Player =  React.createClass({

	render: function(){
		return (
				<div className="player-container" data-category={this.props.category}>

				<h6> <p>{this.props.name} <br></br>{this.props.about} </p> </h6>
					<img src={this.props.playerImgUrl}  /></div>
			   );
	}
});

module.exports = Player;


