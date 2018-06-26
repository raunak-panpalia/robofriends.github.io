import React , {Component} from 'react'
import RoboCard from './RoboCard.js';

class RoboList extends Component {
	render(){
		return(
			<div className = "ma3">
				{
					this.props.robots.map((robot,i) => {
						return(
							<RoboCard key={i} 
							id = {robot.id} 
							name = {robot.name} 
							email = {robot.email}/>
						);
					})
				}
			</div>
		);
	}
}

export default RoboList