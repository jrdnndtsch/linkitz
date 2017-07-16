import React from 'react';

class VideoBlock extends React.Component {

	constructor() {
		super();

		this.state = {
			videoOpen: false
		}
	}

	openVideo() {
		this.setState({
			videoOpen: true
		})
		this.refs.video.play()
	}

	render() {
		return(
			<div className="wrapper wrapper--flex tutorial--video">
				<div className={`tutorial--video_container ${!this.state.videoOpen ? 'closed' : 'open'}`} onClick={this.openVideo.bind(this)}>
					<video src={`/videos/${this.props.data.video}`} ref="video" controls></video>
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