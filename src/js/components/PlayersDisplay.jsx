var React = require('react');
var Player = require("./Player.jsx");
var ButtonPanel = require("./ButtonPanel.jsx");
var PlayerSearch = require("./PlayerSearch.jsx");
var _            = require('lodash');

var PLAYERDATA = [
	{
		playerid:1,
		category: 'ATP - MEN’S ',
		name: 'Roger Federer',
		playerImgUrl: 'http://i.imgur.com/jeELj9f.png',
		about: 'ATP - MEN’S  rank: #2    Country: Switzerland    #Fans: 11.4 million     Prize Money Won Till Date: $65000000.'
	},
	{
		playerid:2,
		category: 'ATP - MEN’S ',
		name: 'Novak Djokovic ',
		playerImgUrl: 'http://i.imgur.com/LUr0hFx.png',
		about: ' ATP - MEN’S  rank: #1    Country: Serbia      #Fans: 9.4 million    Prize Money Won Till Date: $66000000.'
	},
	{
		playerid:3,
		category: 'ATP - MEN’S ',
		name: 'Andy Murray',
		playerImgUrl: 'http://i.imgur.com/MftENrK.png',
		about: ' ATP - MEN’S  rank: #3   Country: Great Britain      #Fans: 7.4 million    Prize Money Won Till Date: $1660000.'
	},
	{
		playerid:4,
		category: 'ATP - MEN’S ',
		name: 'Stan Wawrinka',
		playerImgUrl: 'http://i.imgur.com/zCssmXx.png',
		about: ' ATP - MEN’S  rank: #4   Country: Switzerland      #Fans: 6.4 million    Prize Money Won Till Date: $1650000.'
	},

	{
		playerid:5,
		category: 'ATP - MEN’S ',
		name: 'Kei Nishikori',
		playerImgUrl: 'http://i.imgur.com/hFWJYtL.png',
		about: ' ATP - MEN’S  rank: #5   Country: Japan      #Fans: 3.4 million    Prize Money Won Till Date: $650000.'
	},
	 {
		playerid:6,
		category: 'ATP - MEN’S ',
		name: 'Tomas Berdych',
		playerImgUrl: 'http://i.imgur.com/LgxmCao.png',
		about: ' ATP - MEN’S  rank: #6   Country: Czech-Republic      #Fans: 6.4 million    Prize Money Won Till Date: $6150000.'
	},
	{
		playerid:7,
		category: 'ATP - MEN’S ',
		name: 'JoWilfried Tsonga ',
		playerImgUrl: 'http://i.imgur.com/wYO7TBh.png',
		about: ' ATP - MEN’S  rank: #7   Country: France      #Fans: 8.4 million    Prize Money Won Till Date: $8150000.'
	},
	{
		playerid:8,
		category: 'ATP - MEN’S ',
		name: 'David Ferrer ',
		playerImgUrl: 'http://i.imgur.com/fWMWjm7.png',
		about: ' ATP - MEN’S  rank: #8  Country: Spain      #Fans: 7.4 million    Prize Money Won Till Date: $7150000.'
	},
	{
		playerid:9,
		category: 'ATP - MEN’S ',
		name: 'Rafael Nadal ',
		playerImgUrl: 'http://i.imgur.com/ePlBj5T.png',
		about: ' ATP - MEN’S  rank: #9   Country: Spain      #Fans: 8.4 million    Prize Money Won Till Date: $6150000.'
	},
	{
		playerid:10,
		category: 'ATP - MEN’S ',
		name: 'Milos Raonic',
		playerImgUrl: 'http://i.imgur.com/Lt9Zkzf.png',
		about: ' ATP - MEN’S  rank: #10   Country: Canada      #Fans: 4.4 million    Prize Money Won Till Date: $610000.'
	},
	{
		playerid:11,
		category: 'WTA - WOMEN’S ',
		name: 'Serena Williams',
		playerImgUrl:'http://i.imgur.com/e5YfXZM.png',
		about: ' WTA - WOMEN’S  rank: #1    Country: USA      #Fans: 10.4 million      Prize Money Won Till Date: $5000000.'
	},
	{
		playerid:12,
		category: 'WTA - WOMEN’S ',
		name: 'Ana Ivanovic ',
		playerImgUrl: 'http://i.imgur.com/HIP7DSc.png',
		about: ' WTA - WOMEN’S  rank: #2     Country: Serbia    #Fans: 1.4 million      Prize Money Won Till Date: $651000.'
	},
	 {
		playerid:13,
		category: 'WTA - WOMEN’S ',
		name: 'Venus Williams ',
		playerImgUrl: 'http://i.imgur.com/Xle4Mwk.png',
		about: ' WTA - WOMEN’S  rank: #3     Country: USA    #Fans: 7.4 million      Prize Money Won Till Date: $3651000.'
	},
	 {
		playerid:14,
		category: 'WTA - WOMEN’S ',
		name: 'Caroline Wozniacki',
		playerImgUrl: 'http://i.imgur.com/0VNTf4i.png',
		about: ' WTA - WOMEN’S  rank: #4     Country: Czech-republic    #Fans: 9.4 million      Prize Money Won Till Date: $551000.'
	},
	 {
		playerid:15,
		category: 'WTA - WOMEN’S ',
		name: 'Victoria Azarenka ',
		playerImgUrl: 'http://i.imgur.com/Sv4BawF.png',
		about: ' WTA - WOMEN’S  rank: #5     Country: Serbia    #Fans: 2.4 million      Prize Money Won Till Date: $451000.'
	},
	{
		playerid:16,
		category: 'WTA - WOMEN’S ',
		name: 'Agnieska Radwanska',
		playerImgUrl: 'http://i.imgur.com/ueQ3yTN.png',
		about: 'WTA - WOMEN’S  rank: #6     Country: Poland    #Fans: 1.7 million      Prize Money Won Till Date: $351000.'
	}
];




var PlayersDisplay = React.createClass(
{
   
		getInitialState: function() {
			return {
			  playersToDisplay: PLAYERDATA,
				active: false,
				queryText:'',
				myItems: [],
                isSearchCalledFirst: false,
                isToggleButtonSelected: false
			};
		},
		toggleActive: function() {
            
		  this.setState(
		   {
			   active: !this.state.active
		   }
		  );  
		},

		 handleSearch: function(e) {
		
				this.props.onSearch(e.target.value);
		 },

		searchNow: function(q) {
            console.log("searchNow is called");
            console.log("value of isToggleButtonSelected" +this.state.isToggleButtonSelected);
             console.log("value of isSearchCalledFirst" +this.state.isSearchCalledFirst);
             var queryTex = q.toLowerCase();
            var filteredCategories = [];
            if(this.state.isToggleButtonSelected) {
               
                 filteredCategories = this.state.playersToDisplay.filter(function(el) {

                    var searchVal = el.name.toLowerCase();
                    return searchVal.indexOf(queryTex) !== -1;
			     });
            }
                
           
            
            
            if(!this.state.isToggleButtonSelected && !this.state.isSearchCalledFirst) {
                filteredCategories = PLAYERDATA.filter(function(el) {

                    var searchVal = el.name.toLowerCase();
                    return searchVal.indexOf(queryTex) !== -1;
			     });
                
                
                this.state.isSearchCalledFirst = true;
                
            }
            
             if(!this.state.isToggleButtonSelected) {
                filteredCategories = PLAYERDATA.filter(function(el) {

                    var searchVal = el.name.toLowerCase();
                    return searchVal.indexOf(queryTex) !== -1;
			     });
                
                
                this.state.isSearchCalledFirst = false;
                
            }
            
            
			this.setState({
				queryText:q,
                playersToDisplay: filteredCategories
			});
                
             
            
		},

		onSearch: function(q) {
            console.log("onSearch is called");
			this.setState({
				queryText:q
			});
		},
    
        /* TRying this*/
    
        filterNow: function(elem, isSearchCalled) {
    
        },
    
    
		selectCategory: function(elem){
            var catName = elem.toLowerCase();
            console.log("selectCategory is called for category:" + catName);
           console.log("value of isToggleButtonSelected" +this.state.isToggleButtonSelected);
             console.log("value of isSearchCalledFirst" +this.state.isSearchCalledFirst);
            
            
            var filteredCategories = [];
            /* if search text is already present */
            if(!this.state.isSearchCalledFirst) {
                 
			     filteredCategories = PLAYERDATA.filter(function(el) {

                        var searchVal = el.category.toLowerCase();
                        return searchVal.indexOf(catName) !== -1;
			     });

            }
            
            if(this.state.isSearchCalledFirst){
                filteredCategories = this.state.playersToDisplay.filter(function(el) {

				var searchVal = el.name.toLowerCase();
				return searchVal.indexOf(catName) !== -1;
			});
            }
			
            this.state.isToggleButtonSelected = true;
            
			this.setState({
				playersToDisplay: filteredCategories
			});
		},

		reset: function(elem) {
            this.state.isSearchCalledFirst = false;
            this.state.isToggleButtonSelected = false;
		  this.setState({
			playersToDisplay: PLAYERDATA ,
            queryText:''
		  });
		},

		render: function() {
			var queryText = this.state.queryText;
			var myItems = this.state.myItems;
			var displayPlayers =[];
            var playerDetails = [];

			myItems.forEach(function(item) {
			if(
				(item.name.toLowerCase().indexOf(queryText) != -1) 
				) {
					playerDetails.push(item);
				}
			});

    

        var buttonClass = this.state.active ? 'active' : '';
		var categoryToSelect = this.selectCategory;


		PLAYERDATA.forEach(function(el){
			if(displayPlayers.indexOf(el.category) === -1 ) displayPlayers.push(el.category);
		})

		return (
			<div className='Display-Players'>
				
				<div className='panel'>
                    <h5>
		          <p>
			     
			     <br></br>
			         *ATP is the Men's Tennis association. Click on ATP - MEN’S  to know about men's players.
		          <br></br>
			         *WTA is the Women's Tennis association. Click on WTA - WOMEN’S  to know about women's players.
			     <br></br>
		          </p> </h5> 
                </div>
                
                <div className='panel'>
					{
						displayPlayers.map(function(el,i){
							var bound = categoryToSelect.bind(null,el);
							return <ButtonPanel onClick={bound} category={el} key ={i} />
					})
						}
                    {/* <a className="resetBtn" onClick={this.reset}> Clear All Filters </a> */ }
                       
				</div>
                
                <div className='panel'>
                <div className='PlayerSearch'>
                    <h5><p> Now you can even search by the player names. ex: roger, serena etc</p></h5>
                    <PlayerSearch onSearch = {this.searchNow} onReset = {this.reset}/> 
				</div>
                </div>
                
				<div className="MainDisplay">
					{

						this.state.playersToDisplay.map(function(el){
									return <Player key={el.playerid} 
										  name={el.name}    
                                          about={el.about}
										  playerImgUrl={el.playerImgUrl}   
										  category={el.category} />
								})

					}
				</div>
			</div>
		);
	}

});



module.exports = PlayersDisplay;



