import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Repository } from '../../store/ducks/repositories/types';
import * as actions from '../../store/ducks/repositories/actions';
import { ApplicationState } from '../../store';

interface StateProps {
  repositories: Repository[]
}

interface DispatchProps{
  loadRequest(): void
}


type Props = StateProps & DispatchProps
class RepositoryList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest();
  }

  render() {
    const { repositories } = this.props;
    return (
      <ul>
        {repositories.map((repository) => <li>{repository.name}</li>)}
      </ul>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
