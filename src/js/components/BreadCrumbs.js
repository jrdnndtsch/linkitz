import React from 'react';

import { makeParam } from './../lib/helpers.js';
import { Link } from 'react-router-dom';

import db from '../db.json';

class BreadCrumbs extends React.Component {
	

	render() {

		return(
			<div className="bread-crumbs">
				<div className="wrapper">
					{this.props.links.map((l, i) => {
						if (typeof l === 'object') {
							return <Link to={`/${l.link}/${makeParam(l.title)}`} key={i}>{l.title}</Link>
						}else {
							return <Link to={`/${makeParam(l)}`} key={i}>{l}</Link>
						}
					})}
				</div>
			</div>
		)
	}
}

export default BreadCrumbs