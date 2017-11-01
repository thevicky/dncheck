import { h, Component } from 'preact';
import style from './style.less';

export default class AddApi extends Component {
	
  state = {apiType: '', apiUrl : '', inputData : '', outputData :''};

  setApiType = e => {
      this.setState({ apiType: e.target.value });
  };

  setApiUrl = e => {
      this.setState({ apiUrl: e.target.value });
  };

  setInputData = e => {
      this.setState({ inputData: e.target.value });
  };

  setOutputData = e => {
      this.setState({ outputData: e.target.value });
  };

  task = () => {
    let { apiType , apiUrl, inputData, outputData } = this.state;

    apps = [{"name": name,"ip" : ip, "port": port}];
    this.setState({apps , name, ip, port});
  }

  render ({},{ apps : [], name, ip, port }) {
    return (
      <div class={style.addapi} id="addapi" >
			<form onSubmit={this.task} id="appForm" >
			 	<input type="text" name="apiType" placeholder="API Type " onInput={this.setApiType}></input><br></br>
				<input type="text" name="apiUrl" placeholder="API Url " onInput={this.setApiUrl}></input><br></br>
				<input type="text" name="inputData" placeholder="Input Data " onInput={this.setInputData}></input><br></br>
        <input type="text" name="outputData" placeholder="Output Data " onInput={this.setOutputData}></input><br></br>
				<button type="submit">Add API</button>
			</form>
		</div>
    );
  }

}
