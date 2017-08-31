var React = require('react');


var PlayerSearch = React.createClass( { 
    
    getInitialState: function() {
			return {
			  value: ''
			};
		},
    
	handleSearch: function(e) {
        console.log("e =" +e.target.value);
        this.setState({
            value: e.target.value
            
        });
		this.props.onSearch(e.target.value);
        
	},
    
    
    clearFilters: function(e) {
            console.log("clearFilters called");
		  this.setState({
			value: ''
		  });
        
         this.props.onReset(e);
		},
    
   

  render() {
	return (
		<div>
	  <form>
		<input type="text" 
            name="bar"
            value={this.state.value}
            className="SearchInput" 
            onChange={this.handleSearch}
			placeholder="Search By player name" 
			 /> 
    
     <br></br>
         <br></br> 
          
          <a className="resetBtn" onClick={this.clearFilters}> Clear All Filters </a>
          
			
	  </form>
		</div>
	);
  }
});  

module.exports = PlayerSearch;