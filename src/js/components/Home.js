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
		this.setState({
			sections : sections
		})
	}

	render() {
		return(
			<div>
				<header>
					<h1>Linkitz</h1>
					<h2>Linkitz is a wearable electronic kit for kids</h2>
					<a href="#">Get Started</a>
				</header>
				{this.state.sections.map((section, i) => {
					return <MainSection data={section} key={i}/> 
				})}
			</div>
		)
	}
}

export default Home