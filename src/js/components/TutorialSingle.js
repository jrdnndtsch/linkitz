import React from 'react';
import { makeParam } from './../lib/helpers.js';

import BreadCrumbs from './BreadCrumbs.js';

import db from '../db.json';


class TutorialSingle extends React.Component {
	constructor() {
		super();

		this.state = {
			lesson: {}, 
			modules: [], 
			title: '', 
			videoOpen: false
		}
	}

	getTutContent(param_title) {
		let content = db.tutorials.filter((tut) => {
			return makeParam(tut.title) === param_title
		})
		this.setState({
			lesson: content[0],
			modules: content[0].modules, 
			title: content[0].title
		})
	}

	lessonTitle() {
		return this.state.lesson.title
	}

	openVideo() {
		this.setState({
			videoOpen: true
		})
		this.refs.video.play()
	}

	componentDidMount() {
		this.getTutContent(this.props.match.params.title)
	}

	render() {
		return(
			<main className="tutorial">
				<BreadCrumbs links={['Home', 'Learn', 'Learn to Code', {link: 'tutorial', title: this.state.title}]}/>
				{this.state.modules.map((mod, i) => {
						return (
							<div key={i} className="wrapper wrapper--flex tutorial--video">
								<div className={`tutorial--video_container ${!this.state.videoOpen ? 'closed' : 'open'}`} onClick={this.openVideo.bind(this)}>
									<video src={`/videos/tutorials/${mod.video}`} ref="video" controls ></video>
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