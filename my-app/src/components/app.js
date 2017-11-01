import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from './home';
import Applications from './applications';
import Register from './register';
import ApplicationView from './appview';
import AddApi from './addapi';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Register path="/register/" />
					<Applications path="/applications/"/>
					<ApplicationView path="/applicationview/1"/>
					<AddApi path="/addapi/"/>
				</Router>
			</div>
		);
	}
}