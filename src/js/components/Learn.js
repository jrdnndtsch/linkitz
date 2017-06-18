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
			<div>
				<h2>Learn with us</h2>
				<section>
					{this.state.sections.map((section, i) => {
						return <SectionBlock data={section} key={i} />
					})}
				</section>
			</div>
		)
	}
}

export default Learn