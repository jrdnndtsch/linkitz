import React from 'react';
import { Link } from 'react-router-dom'; 

import TutorialBlock from './TutorialBlock.js';

import db from '../db.json';

import { makeParam } from './../lib/helpers.js';

class Make extends React.Component {
	constructor() {
		super();
		this.state = {
			projects: [],
			filters: ['All', 'Easy', 'Medium', 'Advanced'], 
			active_filter: 'All'
		}
	}

	componentDidMount() {
		this.setState({
			projects: db.projects
		})
	}

	filterProjects(filter) {
		console.log(filter)
		let proj = []
		if(filter != 'All') {	
			proj = db.projects.filter((p) => {
				return p.level === filter
			})
		} else {
			proj = db.projects
		}
		this.setState({
			projects: proj, 
			active_filter: filter
		})
	}
	render() {
		return(
			<div className="make">
				<section>
					<div className="wrapper page-title">
						<h1>Make Cool Stuff</h1>
						<h2 className="sub-title">Project & Experiments</h2>
						<div className="make--filters">
							<ul>
								<li>Sort:</li>
								{this.state.filters.map((f, i) => {
									return <li key={i} onClick={this.filterProjects.bind(this, f)} className={this.state.active_filter === f ? 'active' : 'off'}  >{f}</li>
								})}
							</ul>
						</div>
					</div>
				</section>
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