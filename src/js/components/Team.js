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