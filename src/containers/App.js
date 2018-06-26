import React , {Component} from 'react'
import RoboList from '../components/RoboList.js'
import SearchBox from '../components/SearchBox.js'
import './App.css'
import Footer from '../components/Footer.js'

class App extends Component {
	constructor(){
		super();
		this.state={
			robots : [],
			searchInput : ''
		}
	}

	componentDidMount(){
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(response => response.json())
		.then(users=> this.setState({robots : users}));
	}

	onSearchChange = (event) => {
		// console.log(event.target.value);
		this.setState({searchInput : event.target.value});
		// console.log(this.state.searchInput);
		// const filteredRobots = this.state.robots.filter(robot => {
		//  	return robot.name.toLowerCase().includes(this.state.searchInput.toLowerCase());
		// });
		// this.setState({robots : filteredRobots});
	}



	render(){
		const {robots , searchInput} = this.state
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchInput.toLowerCase());
		})
		return(
			<div className="tc">
				<h1 className = "f1 lh-title">RobotFriends</h1>
				<SearchBox searchChange = {this.onSearchChange}/>
				{
					filteredRobots.length ? (
						<RoboList robots = {filteredRobots}/>
					) : (
						<h3 className = "pt3 pb3 white">Sorry, no matching results</h3>
					)
				}
				<Footer />
			</div>
		);
	}
}

export default App