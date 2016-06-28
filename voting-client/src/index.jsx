import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import App from './components/App'
import {VotingContainer} from './components/Voting'
import {ResultsContainer} from './components/Results'
import {createStore} from 'redux'
import reducer from './reducer.js'
import Provider from 'react-redux'

const store = createStore(reducer)
store.dispatch({
	type: 'SET_STATE',
	state: {
		vote: {
			pair: ['Sunshine', '28 Days Later'],
			tally: {
				Sunshine: 2
			}
		}
	}
})

const pair = ['Trainspotting', '28 Days Later']

const routes = <Route component={App}>
	<Route path="/results" component={ResultsContainer} />
	<Route path="/" component={VotingContainer} />
</Route>

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>{routes}</Router>
	</Provider>,
	document.getElementById('app')
)
