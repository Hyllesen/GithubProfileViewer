require("./node_modules/bootstrap/dist/css/bootstrap.min.css");
import React from 'react';

export class Repo extends React.Component {

	render() {
    const {repo} = this.props;
		return (
        <li className="list-group-item">
          <a target="_blank" href={repo.html_url}>
            {repo.name}
          </a> : {repo.description}
        </li>
		);
	}
}

export default Repo
