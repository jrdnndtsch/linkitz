import React from 'react';
import MainSection from './MainSection.js';

import db from '../db.json'

let Scroll = require('react-scroll');
let Link = Scroll.Link;
let Element = Scroll.Element;

let base = "/linkitz-dev/"

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
		window.scrollTo(0, 0)
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
						<img className="featured" id="featured" src={`/images/general/${this.state.header_content[this.state.featured_content].image}.png`}/>
						<h1><span>{this.state.header_content[this.state.featured_content].text}</span><img src="/images/general/logo-light.svg"/></h1>
						<h2>Linkitz is a wearable electronic kit for kids</h2>
						<Link to="home-links" smooth={true}><span>Get Started</span><img src="/images/general/down-arrow.png"/></Link>
						<a href="https://linkitz.backerkit.com/hosted_preorders" className="home--order">
							<p>Order Linkitz</p>
							<span className="order--arrow"><img src="/images/general/order-arrow.png"/></span>
							<img className="order--product" src="/images/general/linkitz-product-1.png"/>
						</a>
					</div>
				</header>
				<Element className="home--content" name="home-links">
					<section className="home--actions home--wrapper">
						{this.state.sections.map((section, i) => {
							return <MainSection data={section} key={i}/> 
						})}
						<img src="/images/general/linkitz-product-1.png"/>
					</section>
				</Element>
			</div>
		)
	}
}

export default Home