import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.styl';
import * as actions from '../../actions';
import FetchData from '../../components/FetchData'

class App extends Component {
	constructor(props) {
	  super(props)
	}

	render() {
		const { data, error, ...actions } = this.props;
		return(
			<div>
				<FetchData data={data} error={error} onFetchAsync={actions.fetchData} />
			</div>
		)
	}
}

function mapStateToProps(state, ownProps) {
	return {
		data: state.default.data,
		error: state.default.error,
	}
}

export default connect(mapStateToProps,{
	fetchData: actions.fetchData,
})(App);