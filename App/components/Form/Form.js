import React, {Component} from 'react';
import Textarea from 'react-textarea-autosize';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {changeFormData} from './actions/form.actions';
import {changePath} from './actions/path.action';
import {changeMessage} from './actions/message.action';

import {validateMazeData, validateCell} from './Algorithms/validator';
import {findShortestPath} from './Algorithms/shortestPath';

class Form extends Component {
  constructor() {
    super();
    this.mazeData = '';
    this.start = '';
    this.end = '';
    this.onChangeMazeData = this.onChangeMazeData.bind(this);
    this.onChangeStart = this.onChangeStart.bind(this);
    this.onChangeEnd = this.onChangeEnd.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }
  onChangeMazeData(e) {
    this.mazeData = e.target.value;
  }
  onChangeStart(e) {
    this.start = e.target.value;
  }
  onChangeEnd(e) {
    this.end = e.target.value;
  }
  onSubmit() {
    let mazeData = validateMazeData(this.mazeData);
    let start= false;
    let end = false;
    if (mazeData && mazeData.length && mazeData[0].length) {
      start = validateCell(this.start, mazeData[0].length, mazeData.length);
      end = validateCell(this.end, mazeData[0].length, mazeData.length);
    }
    if (mazeData && start && end) {
      this.props.changeFormData({mazeData, start, end});

      let shortestPath = findShortestPath({mazeData, start, end});
      if (shortestPath) {
        this.props.changePath(shortestPath);
        this.props.changeMessage({messageType: 'success', text: 'Yay!!  Found the shortest path'});
      } else {
        this.props.changePath([]);
        this.props.changeMessage({messageType: 'nopath', text: 'oops! there is no direct path from blue to orange'});
      }

    } else {
      this.props.changeFormData({mazeData: [], start: [], end: []});
      this.props.changePath([]);
      this.props.changeMessage({messageType: 'error', text: 'There was some thing wrong with the data'})
    }
  }
  render() {
    return (
      <div className="form-container">
        <Textarea className="maze-data" placeholder="Enter maze data here" minRows={3} defaultValue={this.mazeData} onChange={this.onChangeMazeData}/>
        <input className="start-data" type="text" onChange={this.onChangeStart} placeholder="Enter start coordinate [x,y]"/>
        <input className="end-data" type="text" onChange={this.onChangeEnd} placeholder="Enter end coordinate [x,y]"/>
        <button className="form-button" onClick={this.onSubmit}>Submit</button>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {
    changeFormData: bindActionCreators(changeFormData, dispatch),
    changePath: bindActionCreators(changePath, dispatch),
    changeMessage: bindActionCreators(changeMessage, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Form);
