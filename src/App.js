import React from 'react'
import Main from "./Main";
import Header from "./Header";
import "./App.css";

class App extends React.Component { 
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;