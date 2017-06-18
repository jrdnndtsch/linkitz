import React from 'react';
import { BrowserRouter as Router, 
    Route, Link } from 'react-router-dom';  
import { makeParam } from './../lib/helpers.js';

class MainSection extends React.Component {
	componentDidMount() {

	}

	render() {
		return(
			<div>
				<h2>{this.props.data.title}</h2>
				<p>{this.props.data.desc}</p>
				<Link to={makeParam(this.props.data.title)}>-></Link>
			</div>
		)
	}
}

export default MainSection