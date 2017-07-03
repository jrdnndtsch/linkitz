import React from 'react';
import { Link } from 'react-router-dom';
let base = "/"
class Nav extends React.Component {

	render() {
		return(
			<nav>
				<div className="logo">
					<Link to={base}><img src="/images/general/logo.svg"/></Link>
				</div>
				<ul className={`nav-main ${this.props.menu_active ? 'active' : null}`} onClick={this.props.close_menu.bind(this)}>
					<li><Link to={`${base}learn`}>Learn</Link>
						<ul>
							<li><Link to={`${base}learn`}>Learn All</Link></li>
							<li><Link to={`${base}make-it-work`}>Make</Link></li>
							<li><Link to={`${base}learn-to-code`}>Code</Link></li>
							<li><Link to={`${base}make-cool-stuff`}>Explore</Link></li>
							<li><Link to={`${base}help`}>Help</Link></li>
							<li><Link to={`${base}faq`}>FAQ</Link></li>
						</ul>
					</li>
					<li>
						<Link to={`${base}our-mission`}>About Us</Link>
						<ul>
							<li><Link to={`${base}our-mission`}>Our Mission</Link></li>
							<li><Link to={`${base}linkitz-team`}>Linkitz Team</Link></li>
							<li><Link to={`${base}supporters`}>Our Supporters</Link></li>
						</ul>
					</li>
					<li><Link to={`${base}contact`}>Contact</Link></li>
				</ul>
				<a href="#" className={`hamburger ${this.props.menu_active ? 'active' : null}`} onClick={this.props.open_menu.bind(this)}>
					<span></span>
				</a>
			</nav>
		)
	}
}

export default Nav