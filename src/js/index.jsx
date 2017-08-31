var React                   = require('react');
var ReactDOM                = require('react-dom');
var ColorComponent 		 	= require("./components/ColorComponent.jsx");
var TFL                     = require("./components/TFL.jsx");
var FooterComponent         = require("./components/FooterComponent.jsx");
var PlayerSearch            = require("./components/PlayerSearch.jsx");
var ButtonPanel             = require("./components/ButtonPanel.jsx");
var Player                  = require("./components/Player.jsx");
var PlayersDisplay          = require("./components/PlayersDisplay.jsx");

class MainContent extends React.Component {    
  render() {
	return (
	  <div>
            <TFL />
            <PlayersDisplay onSearch= {this.searchNow}/>
            <FooterComponent />
	  </div>
	);
  }
}


ReactDOM.render(
  <MainContent onSearch= {this.searchNow}/>,
  document.getElementById('container')

); 

