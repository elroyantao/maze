import React, {Component} from 'react';
import {connect} from 'react-redux';
import className from 'classnames';

class MessageBox extends Component {
  constructor() {
    super();
  }
  render(){
    let messageClass = className({
      'message-box' : true,
      'error' : this.props.messageType == 'error',
      'nopath' : this.props.messageType == 'nopath',
      'success' : this.props.messageType == 'success',
      'noaction' : this.props.messageType == 'noaction'

    })
    return (
      <div className={messageClass}>{this.props.message}</div>
    )
  }
}

function mapStateToProps(state){
  return {
    message : state.message.text,
    messageType : state.message.type
  };
}

export default connect(mapStateToProps)(MessageBox);
