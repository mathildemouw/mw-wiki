import React from 'react';
import {RouteHandler} from 'react-router';
export default class App extends React.Component {
	state = {
		user: USER
	}

	render () {
		return <div>
			<div className='row'>
				<div className='three columns'>
					<h1> MW Wiki </h1>
					Login
					Pagelist
				</div>
				<div className='nine columns'>
					<RouteHandler user={this.state.user} />
				</div>
			</div>
		</div>;
	}
}
