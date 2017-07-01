import React, { Component } from 'react';
import db from '../db.json';

import API from 'fetch-api';
import VideoBlock from './VideoBlock.js';
import BreadCrumbs from './BreadCrumbs.js';

class Contact extends Component {
	componentDidMount() {
		this.sendFormData()
	}
	sendFormData() {
		var request;
		request = $.ajax({
		  url: 'https://script.google.com/macros/s/AKfycbyL26HYDItBAAEVtEYY9FGtQ1ehwKxdlViWC6p5ls8OFGAzDZCR/exec', 
		  type: 'post', 
		  data: {
		  	name: 'Jordan'
		  }
		});

		 // Callback handler that will be called on success
		request.done(function (response, textStatus, jqXHR){
		    console.log(response)

		});

		// Callback handler that will be called on failure
		request.fail(function (jqXHR, textStatus, errorThrown){
		    // Log the error to the console
		    console.error(
		        "The following error occurred: "+
		        textStatus, errorThrown
		    );
		});
		request.always(function () {
		        // Reenable the inputs
		        // $inputs.prop("disabled", false);
		    });
		// e.preventDefault()
		// let api = new API({
		//   baseURI: 'https://script.google.com/macros/s/AKfycbyL26HYDItBAAEVtEYY9FGtQ1ehwKxdlViWC6p5ls8OFGAzDZCR/exec'
		// });
		// var data = JSON.stringify({data: 'hi'})
		// api.get({data: 'hi'})
	}
	render() {
		return(
			<div className="contact">
				<BreadCrumbs links={['Home', 'Contact']}/>
				<div className="wrapper wrapper--flex"> 
					<form action="https://script.google.com/macros/s/AKfycbyL26HYDItBAAEVtEYY9FGtQ1ehwKxdlViWC6p5ls8OFGAzDZCR/exec" method="post">
						<span>* Required fields</span>
						<input type="text" name="first_name" placeholder="*First Name" required/>
						<input type="text" name="last_name" placeholder="*Last Name" required/>
						<input type="email" name="email" placeholder="*Email Address" required/>
						<input type="email" name="email_subject" placeholder="Email Subject" required/>
						<textarea name="message" placeholder="*Message" required></textarea>
						<input type="submit" value="Send"/>
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