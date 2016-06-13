import {List, Map} from 'immutable'


export const setEntries = (state, entries) => state.set('entries', List(entries))

export const next = (state) => {
	const entries = state.get('entries')
	return state.merge({
		vote: Map({pair: entries.take(2)}), //takes first x amount from iterable. 
		entries: entries.skip(2)  // same as .pop().pop() // entries except first 2 elements
	})
}

export const vote = (state, entry) => state.updateIn(['vote', 'tally', entry], 0, tally => tally+1)