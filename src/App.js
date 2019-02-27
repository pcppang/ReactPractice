import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class User {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

class App extends Component {
  render() {
    const helloWorld = '리액트에 오신 여러분을 환영합니다.';
    const user = new User("Park", "ChiHyun");

    return (
      <div className="App">
        <h2>{helloWorld}</h2>
        <h3>{user.firstname} {user.lastname}님</h3>
      </div>
    );
  }
}

export default App;
