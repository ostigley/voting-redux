export const setState = (state) => {
	return {
		type: 'SET_STATE',
		state: state
	}
}

export const vote = (entry) => {
	return {
		type: 'VOTE',
		entry: entry
	}
}
