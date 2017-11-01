import { h, Component } from 'preact';
import style from './style.less';

export default class Register extends Component {
	
  state = { apps : [], name: '', ip : '', port : ''};

  setName = e => {
      this.setState({ name: e.target.value });
  };

  setIp = e => {
      this.setState({ ip: e.target.value });
  };

  setPort = e => {
      this.setState({ port: e.target.value });
  };

  task = () => {
    let { apps : [], name, ip, port} = this.state;

    apps = [{"name": name,"ip" : ip, "port": port}];
    this.setState({apps , name, ip, port});
  }

  render ({},{ apps : [], name, ip, port }) {
    return (
      <div class={style.register} id="registerApp" >
			<form onSubmit={this.task} id="appForm" >
			 	<input type="text" name="appName" placeholder="Application Name " onInput={this.setName}></input><br></br>
				<input type="text" name="appIp" placeholder="Server IP " onInput={this.setIp}></input><br></br>
				<input type="text" name="appPort" placeholder="Server Port " onInput={this.setPort}></input><br></br>
				<button type="submit">Register Application</button>

			</form>
		</div>
    );
  }

}
