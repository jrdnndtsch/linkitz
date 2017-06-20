import React from 'react';
import { Link } from 'react-router-dom'; 

import TutorialBlock from './TutorialBlock.js';

import db from '../db.json';

import { makeParam } from './../lib/helpers.js';

class Make extends React.Component {
	constructor() {
		super();
		this.state = {
			projects: []
		}
	}

	componentDidMount() {
		this.setState({
			projects: db.projects
		})
	}
	render() {
		return(
			<div className="make">
				<div className="wrapper wrapper--flex">
					{this.state.projects.map((p, i) => {
						return(
							<Link to={`projects/${makeParam(p.title)}`} key={i} className="grid--quarter">
								<TutorialBlock data={p} url="projects" ext="png"/>
							</Link>	
						)
					})}
				</div>
			</div>
		)
	}
}

export default Make