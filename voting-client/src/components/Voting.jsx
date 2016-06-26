import React from 'react'
import Winner from './Winner'
import Vote from './Vote'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default class Voting extends React.Component {
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