require("./node_modules/bootstrap/dist/css/bootstrap.min.css");
import React from 'react';
import Repo from './Repo.jsx';

export class RepoList extends React.Component {

	render() {
		return (
      <div>
        <ul className="list-group">
          {
            this.props.userRepos.map(repo => {
              return <Repo
                repo={repo}
                key={repo.id}
                {...this.props} />
            })
          }
        </ul>
      </div>
		);
	}
}

export default RepoList
