import React from 'react';
import BreadCrumbs from './BreadCrumbs.js';

class Privacy extends React.Component {
	render() {
		return(
			<div className="privacy">
				<BreadCrumbs links={['Home', 'Privacy Policy']}/>
				<div className="block wrapper">
					<h2>Privacy Policy</h2>
					<p>Linkitz Systems Inc. (“LSI”) will treat your personal information with care and respect.</p>
					<p className="question">What personal information is being collected?</p>
					<p>If you contact us, register your LSI product, sign up for our newsletter, submit material for publication on our web site,  or purchase products from this site or a third-party site, we may collect and keep information about you. This information may include your name, email address, postal address, telephone number, and product information. We do not collect payment information.</p>
					<p>We may automatically collect certain usage, viewing and technical data when you visit our site, use our applications, or open emails we send. This information may include the type of computer operating system, your device identifier or IP address, the web browser, the pages visited, and the length of time spent on various parts of our sites or applications.</p>
					<p className="question">How will your information be used?</p>
					<p>We may use your contact information to:</p>
					<ul>
						<li>Provide you with the products and services you request.</li>
						<li>Communicate with you about your LSI products, your use of our sites and applications, or your transactions with us.</li>
						<li>Notify you of changes to our policies.</li>
						<li>Send you information about features on our sites and applications.</li>
						<li>Send you offers and promotions for our products.</li>
						<li>You may choose to unsubscribe to marketing and promotional emails.</li>
					</ul>
					<p>Usage, viewing and technical data is used for internal purposes to:</p>
					<ul>
						<li>Customize content.</li>
						<li>mprove the content and performance of our sites and applications.</li>
						<li>Generate anonymous reporting for use by LSI.</li>
					</ul>
					<p className="question">How long will your personal information be kept by the company?</p>
					<p>We may keep your information for as long as we have a business reason to keep it.</p>
					<p>We will delete your information upon request (see below for instructions), if we are not legally required to maintain it, for example, for the purpose of issuing product recalls.</p>
					<p className="question">Will your personal information be shared with others?</p>
					<p>We will not rent or sell your personal information to anyone else without your permission.</p>
					<h2>Children's Privacy Policy</h2>
					<p>LSI is committed to protecting the privacy of children under the age of 13 (“child” or “children”) who use our toys, our sites, or our applications ("Products"), in accordance with the U.S. Children’s Online Privacy Protection Act (“COPPA”).</p>
					<p>LSI does not collect personally identifiable information (PII) from children. In the event we discover we have inadvertently collected PII from a child, we will either delete the information or immediately seek the parent’s consent for that collection.</p>
					<h2>Contact Us</h2>
					<p>Please contact us at the mailing address or email below with questions about our privacy policies or to correct or request removal of your data:</p>
					<div className="address">
						<span>Linkitz Systems Inc.</span>
						<span>600 Third Avenue, 2nd Floor</span>
						<span>New York, NY</span>
						<span>10022 USA</span>
						<a href="mailto:support@linkitz.com">support@linkitz.com</a>
					</div>
				</div>
			</div>
		)
	}
}

export default Privacy