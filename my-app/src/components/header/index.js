import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style.less';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1>DN-Check</h1>
				<nav>
					<Link href="/register">Register Your App</Link>
					<Link href="/applications">Applications</Link>
				</nav>
			</header>
		);
	}
}
