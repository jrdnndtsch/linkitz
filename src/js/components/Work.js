import React from 'react';
import db from '../db.json';

import VideoBlock from './VideoBlock.js';
import BreadCrumbs from './BreadCrumbs.js';

class Work extends React.Component {

	constructor() {
		super();
		this.state = {
			how_tos : []
		}
	}

	componentDidMount() {
		window.scrollTo(0, 0);
		this.setState({
			how_tos : db.how_tos.modules
		})
	}
	render() {
		return(
			<div className="work">
				<BreadCrumbs links={['Home', 'Learn', 'Make it work']}/>
				<div className="wrapper page-title">
					<h1>Make it Work</h1>
					<h2 className="sub-title">How To's</h2>
				</div>
				{this.state.how_tos.map((mod, i) => {
					if(mod.format == "video") {
						return <VideoBlock data={mod} key={i} />
					}
				})}
			</div>
		)
	}
}

export default Work