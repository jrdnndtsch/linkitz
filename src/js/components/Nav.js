import React from 'react';
import { Link } from 'react-router-dom';
class Nav extends React.Component {
	render() {
		return(
			<nav>
				<div className="logo">
					<Link to="/">Linkitz</Link>
				</div>
				<ul>
					<li><Link to="/learn">Learn</Link>
						<ul>
							<li><Link to="/learn">Learn All</Link></li>
							<li><Link to="/make-it-work">Make</Link></li>
							<li><Link to="/learn-to-code">Code</Link></li>
							<li><Link to="/learn-to-code">Explore (change)</Link></li>
							<li><Link to="/help">Help</Link></li>
							<li><Link to="/faq">FAQ</Link></li>
						</ul>
					</li>
					<li>
						About Us
						<ul>
							<li><Link to="/mission">Mission</Link></li>
							<li><Link to="/team">Team</Link></li>
						</ul>
					</li>
				</ul>
			</nav>
		)
	}
}

export default Nav