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

	// buildImg(name) {
	// 	let img_ref = name.toLowerCase().split(' ').join('_')
	// 	return img_ref

	// }
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
				<section className="stem wrapper">
					<h2>Stem-Spiration</h2>
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