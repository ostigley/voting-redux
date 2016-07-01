import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import App from './components/App'
import {VotingContainer} from './components/Voting'
import {ResultsContainer} from './components/Results'
import {createStore} from 'redux'
import reducer from './reducer.js'
import Provider from 'react-redux'
import io from 'socket.io-client'

const store = createStore(reducer)

const socket = io(`${location.protocol}//${location.hostname}:8090`)
socket.on('state', state => 
	store.dispatch({type: 'SET_STATE', type})
)

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
