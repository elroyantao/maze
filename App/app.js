import React, {Component} from 'react';
import Form from './components/Form/Form';
import Canvas from './components/Canvas/Canvas';

class App extends Component {
  render() {
    return (
      <div>
        <Form></Form>
        <Canvas></Canvas>
      </div>
    );
  }
}

export default App;
