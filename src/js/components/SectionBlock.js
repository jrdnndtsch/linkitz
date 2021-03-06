import React from 'react';
import { Link } from 'react-router-dom'; 
import { makeParam } from './../lib/helpers.js';

let base = "/"
class SectionBlock extends React.Component {
	render() {
		return(
			<article>
				<Link to={`${base}${makeParam(this.props.data.title)}`}>
					{this.props.data.show_index ? <span>{this.props.data.index}</span> : null }
					<div className="content-block" >		
						<h3>{this.props.data.title}</h3>
						<h4>{this.props.data.sub_title}</h4>
						<p>{this.props.data.desc}</p>
					</div>
				</Link>
			</article>
		)
	}
}

export default SectionBlock