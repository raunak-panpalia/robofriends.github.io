import React , {Component} from 'react'

class RoboCard extends Component {
	render() {
		return (
			<div className = "bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
				<img src={`https://robohash.org/${this.props.id}?size=200x200`} alt = "Robot"/>
				<h3>{this.props.name}</h3>
				<p>{this.props.email}</p>
			</div>
		);
	};
};


export default RoboCard;