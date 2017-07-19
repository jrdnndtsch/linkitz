import React from 'react';
import { buildImg } from './../lib/helpers.js';

import db from '../db.json';

class Supporters extends React.Component {
	constructor() {
		super();
		this.state = {
			stemspiration: [], 
			wall: [], 
			letters: []
		}
	}
	// buildName(name) {
	// 	let initial = name.split(' ')[1].split('')[0]
	// 	let first = name.split(' ')[0]
	// 	let full_name = first + ' ' + initial + '.'
	// 	return full_name

	// }

	makeWallList(l) {
		console.log(this, l)
		return(
			<div>test</div>
		)
	}

	componentDidMount() {
		window.scrollTo(0, 0)
		let stem = db.supporters.stemspiration.map((p) => {
			let clean_p = p.replace(/[^a-zA-Z ]/g, "")
		 return {full_name: p, image: buildImg(clean_p)}
		})
		let wall = {}
		db.supporters.wall_of_fame.forEach((p) => {
			let first = p.substring(0,1).toUpperCase()
			!wall[first] ? wall[first] = [] : null
			wall[first].push(p)
		})
		this.setState({
			stemspiration: stem, 
			wall: wall, 
			letters: Object.keys(wall)
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
									{p.image ? <img src={`/images/stemspiration/${p.image}.jpg`} /> : null}
									<p>{p.full_name}</p>
								</div>
							)
						})}
					</div>
				</section>
				<section className="wall wrapper">
					<h2 className="sub-title">Wall of Fame</h2>
					<div className="block">
						{this.state.letters.map((l, i) => {
							return (
								<div key={i}>
									<h3>{l}</h3>
									<div className="wrapper--flex">
										{this.state.wall[l].map((p, i) => {
													return <p key={i}>{p}</p>
										})}
									</div>
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