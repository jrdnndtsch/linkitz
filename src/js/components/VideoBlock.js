import React from 'react';

class VideoBlock extends React.Component {
	render() {
		return(
			<div>
				<div>{this.props.data.video}</div>
				<div>
					<h2>{this.props.data.title}</h2>
					<p>{this.props.data.desc}</p>
				</div>
			</div>
		)
	}
}

export default VideoBlock