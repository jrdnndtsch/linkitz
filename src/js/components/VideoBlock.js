import React from 'react';

class VideoBlock extends React.Component {
	render() {
		return(
			<div className="wrapper wrapper--flex tutorial--video">
				<video src={`/videos/${this.props.data.video}`} controls width="782px" height="600px"></video>
				<aside>
					<h2>{this.props.data.title}</h2>
					<p>{this.props.data.desc}</p>
				</aside>
			</div>
		)
	}
}

export default VideoBlock