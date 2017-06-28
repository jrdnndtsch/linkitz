import React from 'react';
import { makeParam } from './../lib/helpers.js';

import BreadCrumbs from './BreadCrumbs.js';

import db from '../db.json';


class ProjectSingle extends React.Component {
	constructor() {
		super();

		this.state = {
			title: '',
			sub_title: '',
			level: '', 
			parts: [], 
			x_parts: [], 
			instructions: [], 
			explore: []

		}
	}

	getProjContent(param_title) {
		let content = db.projects.filter((tut) => {
			return makeParam(tut.title) === param_title
		})
		content = content[0]
		this.setState({
			title: content.title,
			sub_title: content.sub_title, 
			level: content.level,
			parts: content.parts, 
			x_parts: content.extra_parts, 
			instructions: content.instructions
		})
		if (content.explore) {
			this.setState({
				explore: content.explore
			})
		}
	}

	lessonTitle() {
		return this.state.lesson.title
	}

	createSubText(instruction) {
		if (instruction.sub_text && instruction.sub_text.length >= 1) {
			return (
				<ul>
					<li>Yeah</li>
				</ul>
			)
		}
	}

	componentDidMount() {
		this.getProjContent(this.props.match.params.title)
	}

	render() {
		return(
			<main className="project">
				<BreadCrumbs links={['Home', 'Learn', 'Make Cool Stuff', this.state.title]}/>
				<div className="wrapper block">
					<section className="wrapper--flex">
						<div>
							<img src={`/images/projects/${makeParam(this.state.title)}.svg`}/>
						</div>
						<div>
							<h1>{this.state.title}</h1>
							<h2>{this.state.sub_title}</h2>
							<div className="wrapper--flex">
								<div className="project--parts">
									<h3>Parts Required</h3>
									<ul>	
										{this.state.parts.map((part, i) => {
											return (
												<li key={i}>
													<img src={`/images/general/${part.toLowerCase()}-logo.svg`} />
													<span>{part}</span>
												</li>
											)
										})}
									</ul>
								</div>
								<div>
									<h3>Level of difficulty</h3>
									<span className={`project--level ${this.state.level.toLowerCase()}`}>{this.state.level}</span>
								</div>
							</div>
						</div>
					</section>
					<section className="project--instructions">
						<h3>Instruction</h3>
						<ol>
							{this.state.instructions.map((inst, i) => {
								return (
									<li key={i}>
										{inst.text}
										{this.createSubText(inst)}
									</li>
								)
							})}
						</ol>
					</section>
					<section className="project--instructions">
						<h3>Explore</h3>
						<ol>
							{this.state.explore.map((ex, i) => {
								return (
									<li key={i}>
										{ex.text}
										{this.createSubText(ex)}
									</li>
								)
							})}
						</ol>
					</section>
				</div>
					
			</main>
		)
	}
}

export default ProjectSingle