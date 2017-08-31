var React = require('react');

var  TFL = React.createClass({
    render() {
        return (
            			<form>
				<header>

					<h3 id="logo"><a href="/"><img src="http://i.imgur.com/hsKcUn6.png" width="135px" height="110px"  /> Fantasy Tennis World </a></h3>


				<nav>
				<h6>  </h6>
				</nav>
					</header>

				<article>
					<h5>
					<p> Welcome to the world of fantasy tennis!!!
					<br></br>
						<br></br>
					You play by predicting a winner before
					each tournament. Each correct pick deserve
					a surprise gift from our side !! If you pick 10 consecutive correct 
					predictions, we will gift you an iPad. So howzaat?

					However, to pick winner, knowing your player well ahead, helps. We, at TFL, help you here with a few filters to know more about each player. 

					Game On! Pick and pack gifts as you pick! 
					</p> </h5>
				</article>

			</form>
            );
    }
});


module.exports = TFL


