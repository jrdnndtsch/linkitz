import React from 'react';

class VideoBlock extends React.Component {
	render() {
		return(
			<div className="wrapper wrapper--flex tutorial--video">
				<div className="tutorial--video_container">
					<video src={`/videos/${this.props.data.video}`} controls></video>
				</div>
				<aside>
					<h2>{this.props.data.title}</h2>
					<p>{this.props.data.desc}</p>
				</aside>
			</div>
		)
	}
}

export default VideoBlock