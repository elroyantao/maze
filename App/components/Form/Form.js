import React,{Component} from 'react';
import Textarea from 'react-textarea-autosize';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {changeFormData} from './actions/form.actions';
import {changePath} from './actions/path.action';
import {validateMazeData,validateCell} from './Algorithms/validator';
import {findShortestPath} from './Algorithms/shortestPath';



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
  onChangeStart(e){
    this.start = e.target.value;
  }
  onChangeEnd(e){
    this.end = e.target.value;
  }
  onSubmit(){
    let mazeData = validateMazeData(this.mazeData);
    let start = validateCell(this.start,mazeData[0].length,mazeData.length);
    let end = validateCell(this.end,mazeData[0].length,mazeData.length);
    if(mazeData && start && end){
      this.props.changeFormData({
        mazeData,
        start,
        end
      });

      let shortestPath = findShortestPath({mazeData,start,end});
      if(shortestPath){
        this.props.changePath(shortestPath);
      }else {
        this.props.changePath([]);

      }


    };
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
          onChange={this.onChangeStart}
          placeholder="Enter start coordinate [x,y]"/>
        <input className="end-coordinate" type="text"
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
    changeFormData : bindActionCreators(changeFormData,dispatch),
    changePath : bindActionCreators(changePath,dispatch)
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(Form);
