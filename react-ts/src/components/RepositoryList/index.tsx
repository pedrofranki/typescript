import React, { Component } from 'react';

interface Repository{
    name: string,
    id: number
}

interface Props{
    repositories: Repository[]
}

class RepositoryList extends Component<Props> {
  componentDidMount() {

  }

  render() {
    const { repositories } = this.props;
    return (
      <ul>
        {repositories.map((repo) => <li>{repo.name}</li>)}

      </ul>
    );
  }
}

export default RepositoryList;
