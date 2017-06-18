import React from 'react';
import db from '../db.json';

class Mission extends React.Component {
	constructor() {
		super(); 
		this.state = {
			stats: []
		}
	}

	componentDidMount() {
		this.setState({
			stats : db.mission.stats
		})
	}
	render() {
		return(
			<div className="mission">
				<div className="wrapper">
					<h1>Our Mission</h1>
				</div>
				<section className="block wrapper">
					<h2>Linkitz Vision</h2>
					<p>Linkitz was created as a solution to the lack of technology toys...</p>
				</section>
				<section>
					<div>
						
					</div>
				</section>
				<section className="mission--stats wrapper wrapper--flex">
					{this.state.stats.map((stat, i) => {
						return (
							<div key={i}>
								<h3>{stat.title}</h3>
								{stat.sub_title.length > 1 ? <p>{stat.sub_title}</p> : null}
								<span>Source: {stat.source}</span>
							</div>
						)
					})}
				</section>
			</div>
		)
	}
}

export default Mission