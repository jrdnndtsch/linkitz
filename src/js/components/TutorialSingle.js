import React from 'react';
import { makeParam } from './../lib/helpers.js';

import db from '../db.json';


class TutorialSingle extends React.Component {
	constructor() {
		super();

		this.state = {
			lesson: {}, 
			modules: []
		}
	}

	getTutContent(param_title) {
		let content = db.tutorials.filter((tut) => {
			return makeParam(tut.title) === param_title
		})
		this.setState({
			lesson: content[0],
			modules: content[0].modules
		})
	}

	componentDidMount() {
		this.getTutContent(this.props.match.params.title)
	}

	render() {
		return(
			<main>
				<h2>{this.state.lesson.title}</h2>
				{this.state.modules.map((mod, i) => {
						return (
							<div key={i}>
								<video src={`/videos/${mod.video}`}></video>
								<aside>
									<h3>{mod.title}</h3>
									<p>{mod.desc}</p>
								</aside>
							</div>
						)
				})}
					
			</main>
		)
	}
}

export default TutorialSingle