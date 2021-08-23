import './App.css';
import React from 'react';
import QuoteBox from './QuoteBox';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
        <QuoteBox />  
        <p className="Cred">
            by francof28
        </p>
        </header>
      </div>
    );
  }
}

export default App;
