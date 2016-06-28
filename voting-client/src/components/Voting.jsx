import React from 'react'
import Winner from './Winner'
import Vote from './Vote'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'

export class Voting extends React.Component {
	constructor () {
		super()
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	render () {
		return <div className='voting'>
      {this.props.winner ? 
      	<Winner winner={this.props.winner} ref='winner'/>:
      	<Vote {...this.props}/>
      }
    </div>
	}
}

const mapStateToProps = (state) => {
	return {
		pair:state.getIn(['vote','pair']),
		winner: state.get('winner')
	}
}

export const VotingContainer = connect(mapStateToProps)(Voting)