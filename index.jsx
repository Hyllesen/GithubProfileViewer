require("./node_modules/bootstrap/dist/css/bootstrap.min.css");
import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile'
import Search from './Search'

export class App extends React.Component {
	constructor(props) {
			super(props);
			this.state = {
				username: "Hyllesen",
				userData: [],
				userRepos: [],
				perPage: 10
			};
	}

	getUserDataFromGithub(){
		$.ajax({
			url: 'https://api.github.com/users/' + this.state.username + '?client_id' + this.props.clientId + '&client_secret=' + this.props.clientSecret,
			dataType: 'json',
			cache: false,
			success: function(data) {
				console.log(data);
				this.setState({userData: data});
			}.bind(this),
			error: function(xhr, status, error) {
				this.setState({userName: null});
				alert(error);
			}.bind(this)
		});
	}

	getUserRepos(){
		$.ajax({
			url: 'https://api.github.com/users/' + this.state.username + '/repos?per_page='+
			this.state.perPage+'&client_id' + this.props.clientId +
			'&client_secret=' + this.props.clientSecret+'&sort=created',
			dataType: 'json',
			cache: false,
			success: function(data) {
				console.log(data);
				this.setState({userRepos: data});
			}.bind(this),
			error: function(xhr, status, error) {
				this.setState({userName: null});
				alert(error);
			}.bind(this)
		});
	}

	handleFormSubmit(username) {
		this.setState({username: username}, function() {
			this.getUserDataFromGithub();
			this.getUserRepos();
		});
	}

	componentDidMount() {
		this.getUserDataFromGithub();
		this.getUserRepos();
	}

	render() {
		return (
			<div>
				<Search onFormSubmit = {this.handleFormSubmit.bind(this)} />
				<Profile {...this.state} />
			</div>
		);
	}
}

App.propTypes = {
	clientId: React.PropTypes.string,
	clientSecret: React.PropTypes.string
};

App.defaultProps = {
	clientId: '701c768b3f371ce2621a',
	clientSecret: '7e1475efdb921b3c41f49871c5e67b7a1c73ba4f'
}

ReactDOM.render(<App/>, document.querySelector("#app"));
