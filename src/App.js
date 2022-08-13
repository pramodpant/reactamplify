import logo from './logo.svg';
import './App.css';
import React from 'react';
import { render } from '@testing-library/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

class App extends React.Component {
  render() {
      return (
        <div className="App">
             <Header/>
             <Main/>
            <Footer/>
        </div>
      );
  }
}

export default App;
