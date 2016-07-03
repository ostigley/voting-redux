export const setState = (state) => {
	return {
		type: 'SET_STATE',
		state: state
	}
}

export const vote = (entry) => {
	return {
		meta: {remote: true},
		type: 'VOTE',
		entry: entry
	}
}

export const next = () => {
	return {
		meta: {remote: true},
		type: 'NEXT'
	}
}
