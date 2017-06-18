import React from 'react';
import { Link } from 'react-router-dom'; 
import { makeParam } from './../lib/helpers.js';


class TutorialBlock extends React.Component {
	render() {
		return(
			<article>	
					<img src="http://www.fillmurray.com/300/300"/>
					<div className="block--content">	
						<h3>{this.props.data.title}</h3>
					</div>
			</article>
		)
	}
}

export default TutorialBlock