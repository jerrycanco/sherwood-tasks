import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.css';
import initialData from './initial-data';
import Column from './components/column';
import AppContainer from './components/appContainer';

class App extends React.Component {
  state = initialData;

  render() {
    return (
      <AppContainer></AppContainer>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));