import React from 'react';

import db from '../db.json';

import { buildImg } from './../lib/helpers.js';

class Team extends React.Component {
	constructor() {
		super();
		this.state = {
			members: []
		}
	}

	componentDidMount() {
		this.setState({
			members: db.team.members
		})
	}
	render() {
		return(
			<div className="team">
				<section>
					
				</section>
				<section className="team--members wrapper">
					{this.state.members.map((m, i) => {
						return(
							<div key={i}>
								<img src={`/images/general/team-${buildImg(m.name)}.jpg`}/>
								<h3>{m.name}</h3>
								<h4>{m.title}</h4>
								<p>{m.bio}</p>
							</div>
						)
					})}
				</section>
			</div>
		)
	}
}

export default Team