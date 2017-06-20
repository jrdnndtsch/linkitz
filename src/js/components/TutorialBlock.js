import React from 'react';
import { Link } from 'react-router-dom'; 
import { makeParam } from './../lib/helpers.js';


class TutorialBlock extends React.Component {
	componentDidMount() {
		console.log(this.props)
	}

	makeImageUrl(folder, name, ext) {
		return `/images/${folder}/${name}.${ext}`
	}
	render() {
		return(
			<article>	
					<img src={this.makeImageUrl(this.props.url, makeParam(this.props.data.title), this.props.ext)}/>
					<div className="block--content">	
						<h3>{this.props.data.title}</h3>
						{this.props.data.level ? <span>Level: <strong className={this.props.data.level.toLowerCase()}>{this.props.data.level}</strong></span> : null}
					</div>
			</article>
		)
	}
}

export default TutorialBlock