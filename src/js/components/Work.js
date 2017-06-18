import React from 'react';
import db from '../db.json';

import VideoBlock from './VideoBlock.js';
import SlideShowBlock from './SlideShowBlock.js';

class Work extends React.Component {

	constructor() {
		super();
		this.state = {
			how_tos : []
		}
	}

	componentDidMount() {
		this.setState({
			how_tos : db.how_tos.modules
		})
	}
	render() {
		return(
			<div>
				<h2>Make it Work</h2>
				<h3>How To's</h3>
				{this.state.how_tos.map((mod, i) => {
					if(mod.format == "video") {
						return <VideoBlock data={mod} key={i} />
					}else if(mod.format == "slide") {
						return <SlideShowBlock data={mod} key={i} />
					}
				})}
			</div>
		)
	}
}

export default Work