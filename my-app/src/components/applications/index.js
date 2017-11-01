import { h, Component } from 'preact';
import style from './style.less';

var apps = [{"name":"QuikrX","ip":"192.168.123.55","port":"8204"},{"name":"QuikrX","ip":"192.168.123.55","port":"8200"},{"name":"QuikrX","ip":"192.168.123.55","port":"8989"},{"name":"QuikrX","ip":"192.168.123.55","port":"8989"},{"name":"ESCROW","ip":"192.168.123.55","port":"7878"},{"name":"TMS","ip":"192.168.123.55","port":"9009"}];

export default class Applications extends Component {
	state = { appName: '', appIp: '', appPort: '' };

		// gets called when this route is navigated to
	
	task = e => {
		var text = "";
		text += "<table> <tr><th>Application Name</th><th>Application Ip</th><th>Application Port</th></tr>";
		var i;
		<th><a href="/applicationview/1" >QuikrX </a></th>
		for (i = 0; i < apps.length; i++) {
			text += "<tr>"
				text += "<th> <a href=\"/applicationview/"
				text += (i+1) + "\" >" 
				text += apps[i]["name"]
				text += "</a>"
				text += "</th>"

				text += "<th>"
				text += apps[i]["ip"]
				text += "</th>"

				text += "<th>"
				text += apps[i]["port"]
				text += "</th>"
		    
		    text += "</tr>"

		}
		text += "</table>"
		document.getElementById("listApp").innerHTML = text;
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	// Note: `user` comes from the URL, courtesy of our router
	render({ user }, { time, count }) {
		return (
			<div class={style.applications} id="listApp" onLoad={this.task} onClick={this.task} ></div>
		);
	}
}
