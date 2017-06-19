import React from 'react';
import SectionBlock from './SectionBlock.js';

import db from '../db.json';

class Learn extends React.Component {
	constructor() {
		super();
		this.state = {
			sections: db.main_sections
		}
	}
	render() {
		return(
			<div className="learn">
				<div className="wrapper">
					<h2>Learn with us</h2>
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