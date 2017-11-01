import { h, Component } from 'preact';
import style from './style.less';


var apis = [{"apiType":"GET","apiUrl":"/product","inputData":"{id:100}","outputData":"{id:100}","health":"Good","responseCheck":"200 OK"},{"apiType":"POST","apiUrl":"/createOffer","inputData":"{\"adid\":32342323, \"amount\":32323}","outputData":"{orderId:?}","health":"Bad","responseCheck":"404 Action not found"},{"apiType":"GET","apiUrl":"/getAdById","inputData":"{id:100323232}","outputData":"{id:32323242}","health":"Test Failed","responseCheck":"200 OK"},{"apiType":"DELETE","apiUrl":"/product","inputData":"{id:100}","outputData":"{\"SUCCESS\"}","health":"Good","responseCheck":"200 OK"}];


export default class ApplicationView extends Component {
	state = { appName: '', appIp: '', appPort: '' };

		// gets called when this route is navigated to

	toggle = e => {
		this.setState({ open: !this.state.open });
		return false;
	};

	task = e => {
		
		var text = "";
		
		text += "<h3>QuikrX : 192.168.123.55 : 8204</h3> <table><tr> <th>API Type</th> <th>API URL</th> <th>Input Data</th> <th>Input Expected Output</th> <th>Health</th> <th>Response Check</th> </tr>";
		var i;
		for (i = 0; i < apis.length; i++) {
			text += "<tr>"
				text += "<th>"
				text += apis[i]["apiType"]
				text += "</th>"

				text += "<th>"
				text += apis[i]["apiUrl"]
				text += "</th>"

				text += "<th>"
				text += apis[i]["inputData"]
				text += "</th>"

				text += "<th>"
				text += apis[i]["outputData"]
				text += "</th>"

				text += "<th>"
				text += apis[i]["health"]
				text += "</th>"

				text += "<th>"
				text += apis[i]["responseCheck"]
				text += "</th>"

				// text += "<th>"
		  //   	text += "<img src=\"https://cdn.pixabay.com/photo/2013/07/18/10/56/smiley-163510_960_720.jpg\" alt=\"Mountain View\" style=\"width:120px;height:70px;\">"
		  //   	text += "</th>"

		    text += "</tr>"
		}

		text += " <tr>  <th></th> <th></th> <th></th> <th></th> <th></th> <th><a href=\"/addapi\" >Add New API </a></th> </tr> </table>"
		document.getElementById("listApis").innerHTML = text;
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	// Note: `user` comes from the URL, courtesy of our router
	render({ user }, { time, count }) {
		return (
			<div class={style.appview} id="listApis" onLoad={this.task} onClick={this.task}>
			
			</div>
		);
	}
}
