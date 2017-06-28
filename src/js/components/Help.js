import React from 'react';
import SectionBlock from './SectionBlock.js';
import BreadCrumbs from './BreadCrumbs.js';

import db from '../db.json';

class Help extends React.Component {
	constructor() {
		super();
		this.state = {
			questions: [], 
			active_question: '', 
			solution: []
		}
	}

	componentDidMount() {
		this.setState({
			questions: db.help, 
			active_question: db.help[0].question, 
			solution: db.help[0].solution
		})
	}

	getActiveContent(a) {
		
		let active = this.state.questions.filter((q) => {
			return q.question == a
		})
		this.setState({
			active_question: active[0].question, 
			solution: active[0].solution
		})
	}
	render() {
		return(
			<div className="help">
				<BreadCrumbs links={['Home', 'Learn', 'Help']}/>
				<div className="wrapper page-title">
					<h1>Help</h1>
					<h2 className="sub-title">Troubleshooting & Tips</h2>
				</div>
				<div className="help--content wrapper wrapper--flex">
					<aside>
					<h2>Topics</h2>
						<ul>
							{this.state.questions.map((q, i) => {
								return (
									<li key={i} onClick={this.getActiveContent.bind(this, q.question)}>{q.question}</li>
								)
							})}
						</ul>
					</aside>
					<main className="block">
						<h2>{this.state.active_question}</h2>
						{this.state.solution.map((p, i) => {
							return <p key={i}>{p}</p>
						})}
					</main>
				</div>
			</div>
		)
	}
}

export default Help