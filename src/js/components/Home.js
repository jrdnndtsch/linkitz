import React from 'react';
import MainSection from './MainSection.js';

import db from '../db.json'

class Home extends React.Component {
	constructor() {
		super();
		console.log(db)
		this.state = {
			sections : []
		}
	}

	componentDidMount() {
		let sections = db.main_sections.filter((section) => {
			return section.show_index
		})
		// change the order of sections to adhere to style on front page
		let removed = sections.splice(1, 1)
		sections.push(removed[0])
		this.setState({
			sections : sections
		})
	}

	render() {
		return(
			<div className="home">
				<header>
					<div className="circle">
						<h1>Linkitz</h1>
						<h2>Linkitz is a wearable electronic kit for kids</h2>
						<a href="#">Get Started</a>
					</div>
				</header>
				<main className="home--content">
					<section className="home--actions home--wrapper">
						{this.state.sections.map((section, i) => {
							return <MainSection data={section} key={i}/> 
						})}
						<img src="/images/general/linkitz-product-1.png"/>
					</section>
				</main>
			</div>
		)
	}
}

export default Home