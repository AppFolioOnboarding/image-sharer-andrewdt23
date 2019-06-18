import React from 'react';
import { render } from 'react-dom';
import ImageForm from "./ImageForm";

class App extends React.Component {
  render() {
    return (
      <ImageForm />
    );
  }
}

render(
  <App />,
  document.getElementById('App')
);

export default App;
