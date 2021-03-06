import React from 'react';
import TutorialBlock from './TutorialBlock.js';
import BreadCrumbs from './BreadCrumbs.js';
import { Link } from 'react-router-dom'; 

import db from '../db.json';

import { makeParam } from './../lib/helpers.js';

let base = "/"

class Code extends React.Component {
	constructor() {
		super();
		this.state = {
			tutorials : []
		}
	}

	componentDidMount() {
		window.scrollTo(0, 0)
		this.setState({
			tutorials : db.tutorials
		})
	}

	render() {
		return(
			<div className="code">
				<BreadCrumbs links={['Home', 'Learn', 'Learn to code']}/>
				<div className="wrapper page-title">
					<h1>Learn to Code</h1>
				</div>
				<section className="code--intro wrapper wrapper--flex">
					<div className="block">
						<span>1</span>
						<h2>Download</h2>
						<p>Download app from the Chrome store.</p>
						<a href="https://chrome.google.com/webstore/detail/chhfgofbepmalddgpgmkaleflehbfamh" className="button button--download">Download App <span className="arrow"></span></a>
					</div>
					<div className="block">
						<div>
							<span>2</span>
							<h2>Install</h2>
							<p>From the Chrome app menu in the upper left corner of the chrome browser.</p>
							<img src="/images/general/code-install-1.jpg"/>
						</div>
						<div className="block--instruction_second">
							<h2>Alternative Install</h2>
							<p>Return to the Chrome Store and clicking on "Launch App" (once you download it, the "Download" button changes to "Launch App").</p>
							<img src="/images/general/code-install-2.jpg"/>
						</div>
					</div>
				</section>
				<section className="wrapper">
					<h2 className="sub-title">Coding Tutorials</h2>
					<div className="wrapper--flex">
						{this.state.tutorials.map((tut, i) => {
							if(tut.modules.length >= 1) {
								return (
									<Link to={`${base}tutorial/${makeParam(tut.title)}`} key={i} className="grid--quarter">
										<TutorialBlock data={tut} url="tutorials" ext="png"/> 
									</Link>
								)
							} else {
								return (
									<div className="grid--quarter" key={i}>
										<TutorialBlock data={tut} url="tutorials" ext="png" coming_soon={true} /> 
									</div>
								)
							}
						})}
					</div>
				</section>
			</div>
		)
	}
}

export default Code