import React from 'react';

import db from '../db.json';

import BreadCrumbs from './BreadCrumbs.js';

import { buildImg } from './../lib/helpers.js';

class Team extends React.Component {
	constructor() {
		super();
		this.state = {
			members: [], 
			philosophy: []
		}
	}

	componentDidMount() {
		this.setState({
			members: db.team.members, 
			philosophy: db.team.philosophy
		})
	}
	render() {
		return(
			<div className="team">
				<BreadCrumbs links={['Home', 'Linkitz Team']}/>
				<div className="wrapper page-title">
					<h1>Linkitz Team</h1>
				</div>
				<section className="block block--text wrapper">
					<h2>Philosophy</h2>
					{this.state.philosophy.map((p, i) => {
						return <p key={i}>{p}</p>
					})}
				</section>
				<section className="team--members wrapper">
					{this.state.members.map((m, i) => {
						return(
							<div key={i} className="wrapper--flex">
								<div>
									<img src={`/images/general/team-${buildImg(m.name)}.jpg`}/>
								</div>
								<div>
									<h3>{m.name}</h3>
									<h4>{m.title}</h4>
									<p>{m.bio}</p>
								</div>
							</div>
						)
					})}
				</section>
			</div>
		)
	}
}

export default Team