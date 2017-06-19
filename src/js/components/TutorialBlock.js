import React from 'react';
import { Link } from 'react-router-dom'; 
import { makeParam } from './../lib/helpers.js';


class TutorialBlock extends React.Component {
	render() {
		return(
			<article>	
					<img src={`/images/tutorials/${makeParam(this.props.data.title)}.png`}/>
					<div className="block--content">	
						<h3>{this.props.data.title}</h3>
					</div>
			</article>
		)
	}
}

export default TutorialBlock