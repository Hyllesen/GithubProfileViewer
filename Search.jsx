require("./node_modules/bootstrap/dist/css/bootstrap.min.css");
import React from 'react';

export class Search extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    console.log('Submitted');
    let username = this.refs.username.value.trim();
    if(!username) {
      alert("Please enter a username");
      return;
    }
    this.props.onFormSubmit(username);
    this.refs.username.value = '';
  }

	render() {
    const {repo} = this.props;
		return (
        <div>
          <form onSubmit={this.onSubmit.bind(this)}>
            <label>Search Github User</label>
            <input type="text" ref="username" className="form-control" />
          </form>
        </div>
		);
	}
}

export default Search
