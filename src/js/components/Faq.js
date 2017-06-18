import React from 'react';

import { paramToString } from './../lib/helpers.js';

import db from '../db.json';

class Faq extends React.Component {
	constructor() {
		super();
		this.state = {
			sections: []
		}
	}

	componentDidMount() {
		this.setState({
			sections: db.faq.sections
		})
	}

	render() {
		return(
			<div className="faq">
				<div className="wrapper">
					<h1>FAQ</h1>
					<h2>Frequently Asked Questions</h2>
				</div>
				<div className="wrapper">
					{this.state.sections.map((sec, i) =>{
						return(
							<section key={i} className="block">
								<h2>{paramToString(sec.title)}</h2>
								{console.log(sec)}
								{sec.questions.map((q, i) => {
									return(
										<div key={i}>
											<p className="question">{q.question}</p>
											{q.answer.map((a, i) => {return <p key={i}>{a}</p>})}
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