import React from 'react';

import { paramToString } from './../lib/helpers.js';

import db from '../db.json';

import BreadCrumbs from './BreadCrumbs.js';

class Faq extends React.Component {
	constructor() {
		super();
		this.state = {
			sections: []
		}
	}

	componentDidMount() {
		window.scrollTo(0, 0)
		this.setState({
			sections: db.faq.sections
		})
	}

	render() {
		return(
			<div className="faq">
				<BreadCrumbs links={['Home', 'Learn', 'FAQ']}/>
				<div className="wrapper page-title">
					<h1>FAQ</h1>
					<h2 className="sub-title">Frequently Asked Questions</h2>
				</div>
				<div className="wrapper">
					{this.state.sections.map((sec, i) =>{
						return(
							<section key={i} className="block">
								<h2>{paramToString(sec.title)}</h2>
								{sec.questions.map((q, i) => {
									return(
										<div key={i}>
											<p className="question">{q.question}</p>
											{q.answer.map((a, i) => {return <p key={i} dangerouslySetInnerHTML={{__html: a}}></p>})}
										</div>
									)
								})}
							</section>
						)
					})}
				</div>
			</div>
		)
	}
}

export default Faq