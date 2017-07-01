import React from 'react';
import { Link } from 'react-router-dom';
class Nav extends React.Component {
	constructor() {
		super();
		this.state = {
			menu_active : false
		}
	}

	openMenu() {
		let menu_state = !this.state.menu_active
		this.setState({
			menu_active: menu_state
		})
	}

	render() {
		return(
			<nav>
				<div className="logo">
					<Link to="/"><img src="/images/general/logo.svg"/></Link>
				</div>
				<ul className={`nav-main ${this.state.menu_active ? 'active' : null}`} onClick={this.openMenu.bind(this)}>
					<li><Link to="/learn">Learn</Link>
						<ul>
							<li><Link to="/learn">Learn All</Link></li>
							<li><Link to="/make-it-work">Make</Link></li>
							<li><Link to="/learn-to-code">Code</Link></li>
							<li><Link to="/make-cool-stuff">Explore</Link></li>
							<li><Link to="/help">Help</Link></li>
							<li><Link to="/faq">FAQ</Link></li>
						</ul>
					</li>
					<li>
						<Link to="/mission">About Us</Link>
						<ul>
							<li><Link to="/our-mission">Our Mission</Link></li>
							<li><Link to="/linkitz-team">Linkitz Team</Link></li>
							<li><Link to="/supporters">Our Supporters</Link></li>
						</ul>
					</li>
					<li><Link to="/contact">Contact</Link></li>
				</ul>
				<a href="#" className={`hamburger ${this.state.menu_active ? 'active' : null}`} onClick={this.openMenu.bind(this)}>
					<span></span>
				</a>
			</nav>
		)
	}
}

export default Nav