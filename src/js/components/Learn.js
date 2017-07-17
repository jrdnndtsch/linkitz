import React from 'react';
import SectionBlock from './SectionBlock.js';
import BreadCrumbs from './BreadCrumbs.js';

import db from '../db.json';

class Learn extends React.Component {
	constructor() {
		super();
		this.state = {
			sections: db.main_sections
		}
	}

	componentDidMount() {
		window.scrollTo(0, 0)
	}
	render() {
		return(
			<div className="learn">
				<BreadCrumbs links={['Home', 'Learn']}/>
				<div className="wrapper page-title">
					<h1>Learn with us</h1>
				</div>
				<section className="wrapper wrapper--flex">
					{this.state.sections.map((section, i) => {
						return <SectionBlock data={section} key={i} />
					})}
				</section>
			</div>
		)
	}
}

export default Learn