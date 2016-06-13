import {List, Map} from 'immutable'


export const setEntries = (state, entries) => state.set('entries', List(entries))

export const next = (state) => {
	const entries = state.get('entries').concat(getWinners(state.get('vote')))
	if (entries.size === 1) {
		return state.remove('vote')
								.remove('entries')
								.set('winner', entries.first())
	} else {
		return state.merge({
			vote: Map({pair: entries.take(2)}), //takes first x amount from iterable. 
			entries: entries.skip(2)  // same as .pop().pop() // entries except first 2 elements
		})
		
	}
}

export const vote = (voteState, entry) => voteState.updateIn(['tally', entry], 0, tally => tally+1)

const getWinners = (vote) => {
	if (!vote) return []
	const [a, b] = vote.get('pair')
	const aVotes = vote.getIn(['tally', a], 0) 
	const bVotes = vote.getIn(['tally', b], 0)
	if 			(aVotes > bVotes) return [a]
	else if (aVotes < bVotes)	return [b]
	else 											return [a,b]
}

export const INITIAL_STATE = Map()