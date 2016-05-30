import React,{Component} from 'react';
import Textarea from 'react-textarea-autosize';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {changeFormData} from './actions/form.actions'



class Form extends Component{
  constructor(){
    super();
    this.mazeData = '';
    this.start = '';
    this.end = '';
    this.onChangeMazeData = this.onChangeMazeData.bind(this);
    this.onChangeStart = this.onChangeStart.bind(this);
    this.onChangeEnd = this.onChangeEnd.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }
  onChangeMazeData(e){
    this.mazeData = e.target.value;
  }
  onChangeStart(){
    this.start = e.target.value;
  }
  onChangeEnd(){
    this.end = e.target.value;
  }
  onSubmit(){
    this.props.changeFormData()
  }
  render(){
    return(
      <div>
        <Textarea className="maze-json"
          placeholder="Enter maze data here"
          minRows={1}
          defaultValue={this.mazeData}
          onChange={this.onChangeMazeData}/>
        <input className="start-coordinate" type="text"
          value={this.start}
          onChange={this.onChangeStart}
          placeholder="Enter start coordinate [x,y]"/>
        <input className="end-coordinate" type="text"
          value={this.end}
          onChange={this.onChangeEnd}
          placeholder="Enter end coordinate [x,y]"/>
        <button className="form-button" onClick={this.onSubmit}>Submit</button>

      </div>
    )
  }
}

function mapStateToProps(state){
  return {};
}
function mapDispatchToProps(dispatch){
  return {
    changeFormData : bindActionCreators(changeFormData,dispatch)
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(Form);
