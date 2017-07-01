import React from 'react';
import { makeParam } from './../lib/helpers.js';

import BreadCrumbs from './BreadCrumbs.js';

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

	lessonTitle() {
		return this.state.lesson.title
	}

	componentDidMount() {
		this.getTutContent(this.props.match.params.title)
	}

	render() {
		return(
			<main className="tutorial">
				<BreadCrumbs links={['Home', 'Learn', 'Learn to Code']}/>
				{this.state.modules.map((mod, i) => {
						return (
							<div key={i} className="wrapper wrapper--flex tutorial--video">
								<div className="tutorial--video_container">
									<video src={`/videos/tutorials/${mod.video}`} controls ></video>
								</div>
								
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