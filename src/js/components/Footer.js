import React from 'react';
import { Link } from 'react-router-dom';
class Footer extends React.Component {
	render() {
		return(
			<footer>
				<div className="wrapper wrapper--flex">
					<section>
						<h2>Linkitz</h2>
						<div className="footer--lists wrapper--flex">
							<ul>
								<li><Link to="/">Home</Link></li>
								<li><Link to="/make-it-work">Make</Link></li>
								<li><Link to="/learn-to-code">Code</Link></li>
								<li><Link to="/make-cool-stuff">Explore</Link></li>
								<li><Link to="/faq">FAQ</Link></li>
							</ul>
							<ul>
								<li><Link to="/our-mission">Our Story</Link></li>
								<li><Link to="/supporters">Our Supporters</Link></li>
								<li><Link to="/contact">Contact Us</Link></li>
							</ul>
							<ul>
								<li><Link to="/privacy-policy">Privacy</Link></li>
								<li><a href="https://www.facebook.com/Linkitz" target="_blank">Facebook</a></li>
							</ul>
						</div>
					</section>
					<section>
						<p>Copyright © 2017, Linkitz. All rights reserved.</p>
						<p><a href="https://designedux.com/" target="_blank">Made with ♥ by DesignedUX</a></p>
					</section>
				</div>
			</footer>
		)
	}
}

export default Footer