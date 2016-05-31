import React, {Component} from 'react';
import {connect} from 'react-redux';

class Canvas extends Component {
  constructor() {
    super();
    this.drawboard = this.drawboard.bind(this);
    this.drawPath = this.drawPath.bind(this);
    // this.width = 500;
    // this.height = 500;
  }
  componentDidMount() {
    this.context = this.refs.myCanvas.getContext("2d");
    if(this.props.mazeData.length && this.props.start.length &&this.props.end.length ){
      this.drawboard();
    }
    if(this.props.shortestPath){
      this.drawPath();
    }
  }
  componentDidUpdate(){
    this.context = this.refs.myCanvas.getContext("2d");
    if(this.props.mazeData.length && this.props.start.length &&this.props.end.length ){
      this.drawboard();
    }
    if(this.props.shortestPath){
      this.drawPath();
    }
  }
  componentWillUpdate(){
    this.context.clearRect(0, 0, this.refs.myCanvas.width, this.refs.myCanvas.height);
  }
  drawPath(){
    this.props.shortestPath.forEach((cell)=> {
      this.context.fillStyle = "rgba(100,200,0,.2)";
      this.context.fillRect(50 + (cell[1] * this.width), 50 + (cell[0] * this.height), this.width, this.height);
    })
  }

  drawboard() {

    this.height = 400 / this.props.mazeData.length;
    this.width = 400 / this.props.mazeData[0].length;
    for (let i = 0; i < this.props.mazeData.length; i++) {
      for (let j = 0; j < this.props.mazeData[i].length; j++) {
        this.context.moveTo(50 + (j * this.width), 50 + (i * this.height));
        if (this.props.mazeData[i][j][0]) {
          this.context.lineTo(50 + (j * this.width) + this.width, 50 + (i * this.height))
        } else {
          this.context.moveTo(50 + (j * this.width) + this.width, 50 + (i * this.height))
        }
        if (this.props.mazeData[i][j][1]) {
          this.context.lineTo(50 + (j * this.width) + this.width, 50 + (i * this.height) + this.height)
        } else {
          this.context.moveTo(50 + (j * this.width) + this.width, 50 + (i * this.height) + this.height)
        }
        if (this.props.mazeData[i][j][2]) {
          this.context.lineTo(50 + (j * this.width), 50 + (i * this.height) + this.height)
        } else {
          this.context.moveTo(50 + (j * this.width), 50 + (i * this.height) + this.height)
        }
        if (this.props.mazeData[i][j][3]) {
          this.context.lineTo(50 + (j * this.width), 50 + (i * this.height))
        } else {
          this.context.moveTo(50 + (j * this.width), 50 + (i * this.height))
        }
      }
    }
    this.context.strokeStyle = "black";
    this.context.stroke();

    this.context.fillStyle = "rgba(0,100,220,.3)";
    this.context.fillRect(50 + (this.props.start[1] * this.width), 50 + (this.props.start[0] * this.height), this.width, this.height);
    this.context.fillStyle = "rgba(200,100,0,.3)";
    this.context.fillRect(50 + (this.props.end[1] * this.width), 50 + (this.props.end[0] * this.height), this.width, this.height);
  }
  render() {
    return (
      <div className="canvas-container">
        <canvas ref="myCanvas" width="500" height="500" ></canvas>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    mazeData : state.mazeData,
    start : state.start,
    end : state.end,
    shortestPath : state.shortestPath
  }
}
export default connect(mapStateToProps)(Canvas);
