import React from 'react';
import MainSection from './MainSection.js';

import db from '../db.json'

class Home extends React.Component {
	constructor() {
		super();
		console.log(db)
		this.state = {
			sections : [], 
			featured_content: 0,  
			header_content: [
				{
					image:'Linkitz-build', 
					text: 'Build'
				},
				{
					image: 'Linkitz-code', 
					text: 'Code'
				}, 
				{
					image: 'Linkitz-play', 
					text: 'Play'
				} 
			]
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

		// rotate through ehader content
		this.rotate = setInterval(this.changeFeaturedContent.bind(this),8000)
	}

	componentWillUnmount() {
		clearInterval(this.rotate)
	}
	changeFeaturedContent() {
		console.log('change', this)
		let current_featured = this.state.featured_content
		let new_featured;
		current_featured >= 2 ? new_featured = 0 : new_featured = current_featured + 1
		this.setState({
			featured_content: new_featured
		})
	}

	render() {
		return(
			<div className="home">
				<header>
					<div className="circle">
						<img className="featured" id="featured" src={`./images/general/${this.state.header_content[this.state.featured_content].image}.png`}/>
						<h1><span>{this.state.header_content[this.state.featured_content].text}</span><img src="./images/general/logo-light.svg"/></h1>
						<h2>Linkitz is a wearable electronic kit for kids</h2>
						<a href="#"><span>Get Started</span><img src="./images/general/down-arrow.png"/></a>
						<div className="home--order">
							<p>Order Linkitz</p>
							<span className="order--arrow"><img src="./images/general/order-arrow.png"/></span>
							<img className="order--product" src="./images/general/linkitz-product-1.png"/>
						</div>
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