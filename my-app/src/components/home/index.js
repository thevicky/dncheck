import { h, Component } from 'preact';
import style from './style.less';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<h1>Home</h1>
				<li>APIs Health Check</li>
				<li>APIs Test Framework</li>
				<li>Easy to write UT for APIs</li>
				<li>No need to test existing APIs after deployment</li>
			</div>
		);
	}
}
