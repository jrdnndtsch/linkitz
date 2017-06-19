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
				<div className="main-section">
					<h2>{this.props.data.title}</h2>
					<p>{this.props.data.desc}</p>
					<Link to={makeParam(this.props.data.title)}><span className="arrow"></span></Link>
				</div>
			</div>
		)
	}
}

export default MainSection