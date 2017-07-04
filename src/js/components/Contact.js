import React, { Component } from 'react';
import db from '../db.json';

import API from 'fetch-api';
import VideoBlock from './VideoBlock.js';
import BreadCrumbs from './BreadCrumbs.js';


class Contact extends Component {
	componentDidMount() {
		// this.sendFormData()
	}
	sendFormData(e) {
		e.preventDefault()
		let $form = $(e.target)[0]
		let serializedData = $(e.target).serialize()
		let request;
		request = $.ajax({
		  url: 'https://script.google.com/macros/s/AKfycbz8w9JG4wDNVBSemfoT_d7Gzd66PC2LrLwRw_o1frDhhlW3YzVG/exec', 
		  type: 'post', 
		  data: serializedData
		});

		 // Callback handler that will be called on success
		request.done(function (response, textStatus, jqXHR){
		    $form.reset()
		});

		// Callback handler that will be called on failure
		request.fail(function (jqXHR, textStatus, errorThrown){
		    // Log the error to the console
		    console.error(
		        "The following error occurred: "+
		        textStatus, errorThrown
		    );
		});

	}

	render() {
		return(
			<div className="contact">
				<BreadCrumbs links={['Home', 'Contact']}/>
				<div className="wrapper page-title">
					<h1>Have a question or comment?</h1>
					<h2 className="sub-title">We'd Love To Hear From You!</h2>
				</div>
				<div className="wrapper wrapper--flex"> 
					<form onSubmit={this.sendFormData}>
						<span>* Required fields</span>
						<input type="text" name="first_name" placeholder="*First Name" required />
						<input type="text" name="last_name" placeholder="*Last Name" required />
						<input type="email" name="email" placeholder="*Email Address" required />
						<input type="text" name="email_subject" placeholder="Email Subject" />
						<textarea name="message" placeholder="*Message" required ></textarea>
						<input type="submit" defaultValue="Send" className="button"/>
					</form>
					<div className="image">
						<img src="/images/general/Linkitz-product-3.png"/>
					</div>
				</div>
			</div>
		)
	}
}

export default Contact