import React, {Component} from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import Header from './Components/Header';

export default class App extends Component {

  render() {
    return (
      <div className = "App">
        <Header/>
      </div>
    );
  }

};
