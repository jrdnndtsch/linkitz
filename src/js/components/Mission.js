import React from 'react';
import db from '../db.json';
import BreadCrumbs from './BreadCrumbs.js';

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
				<BreadCrumbs links={['Home', 'Our Mission']}/>
				<div className="wrapper page-title">
					<h1>Our Mission</h1>
				</div>
				<section className="block block--text wrapper">
					<h2>Linkitz Vision</h2>
					<p>Linkitz was created as a solution to the lack of technology toys...</p>
				</section>
				<section className="block-image wrapper wrapper--flex">
					<div>
						<img src="./images/general/mission.jpg" />
					</div>
					<div>
						<p>Linkitz mission is to inspire the next generation of tech titans.</p>
						<p>We aim to disrupt both the gender inequity of eletronic toy offerings and the almost exclusively male leadership of toy tech industries.</p>
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