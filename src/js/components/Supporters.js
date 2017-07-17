import React from 'react';
import { buildImg } from './../lib/helpers.js';

import db from '../db.json';

class Supporters extends React.Component {
	constructor() {
		super();
		this.state = {
			stemspiration: [], 
			wall: []
		}
	}
	buildName(name) {
		let initial = name.split(' ')[1].split('')[0]
		let first = name.split(' ')[0]
		let full_name = first + ' ' + initial + '.'
		return full_name

	}

	componentDidMount() {
		let stem = db.supporters.stemspiration.map((p) => {
		 return {full_name: this.buildName(p), image: buildImg(p)}
		})
		this.setState({
			stemspiration: stem
		})
	}
	render() {
		return(
			<div className="supporters">
				<div className="wrapper page-title">
					<h1>Our Supporters</h1>
				</div>
				<section className="supporters--map wrapper wrapper--flex">
					<div>
						<img src="/images/general/supporters-map.png"/>
						<div className="supporters--map_callout">
							<span>			
								<strong>680</strong>
								Supporters from around the world
							</span>
						</div>
					</div>
					<div>
						<h2>You Made It Happen</h2>
						<p>With the help of our 680 backers, Linkitz raised over $100,000 on Kickstarter between May and June 2015.</p>
						<p>Thank you to all the supporters who helped make Linkitz happen!</p>
					</div>
				</section>
				<section className="stem wrapper">
					<h2 className="sub-title">Stem-Spiration</h2>
					<div className="block wrapper--flex">
						{this.state.stemspiration.map((p, i) => {
							return (
								<div key={i}>	
									<img src={`/images/stemspiration/${p.image}.jpg`} />
									<p>{p.full_name}</p>
								</div>
							)
						})}
					</div>
				</section>
			</div>
		)
	}
}

export default Supporters