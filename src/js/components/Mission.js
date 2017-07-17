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
					<p>Linkitz was created as a solution to the lack of technology toys designed for and marketed to girls. Of the toys that are currently available for girls many do not feature development of spatial skills, problem solving and confidence with technology as central themes. This leaves many girls without products that specifically connect to their interests and social play styles.</p>
					<p>Currently, girls start losing interest in STEM as early as age 8. This is a problem as educators and developmental psychologists agree that STEM interest should be nurtured from a young age, when early experiences shape lives. Linkitz believes that by encouraging girls to play with technology today, we can inspire a future generation of women with a lifelong love of STEM.</p>
				</section>
				<section className="block-image wrapper wrapper--flex">
					<div>
						<img src="./images/general/mission.jpg" />
					</div>
					<div>
						<p>Linkitz mission is to inspire the next generation of tech titans.</p>
						<p>The Linkitz philosophy is: Encourage children when they are young, let them explore, and you’re likely to inspire a lifelong interest in STEM.</p>
					</div>
				</section>
				<section className="mission--stats wrapper wrapper--flex">
					{this.state.stats.map((stat, i) => {
						return (
							<div key={i}>
								<h3>{stat.title}</h3>
								{stat.sub_title.length > 1 ? <p>{stat.sub_title}</p> : null}
								<span>Source: <a href={stat.link} target="_blank">{stat.source}</a></span>
							</div>
						)
					})}
				</section>
			</div>
		)
	}
}

export default Mission