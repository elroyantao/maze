import React, {Component} from 'react';
import Form from './components/Form/Form';
import Canvas from './components/Canvas/Canvas';
import MessageBox from './components/MessageBox/MessageBox';

class App extends Component {
  render() {
    return (
      <div>
        <div className="app">
          <Form className="form"> </Form>
          <Canvas></Canvas>
        </div>
        <MessageBox></MessageBox>
      </div>
    );
  }
}

export default App;
