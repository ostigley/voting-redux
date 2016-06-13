import {List} from 'immutable'

export const setEntries = (state, entries) => state.set('entries', List(entries))