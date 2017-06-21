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
						return <Link to={`/${makeParam(l)}`} key={i}>{l}</Link>
					})}
				</div>
			</div>
		)
	}
}

export default BreadCrumbs