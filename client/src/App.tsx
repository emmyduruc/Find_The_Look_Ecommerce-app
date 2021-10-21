import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/header/Nav';
import Home from './components/home/Home';
import LoginPage from './components/Login/LoginPage';


function App() {
  return (
    <div>
      <Home/>
      {/* <LoginPage/> */}
    </div>
  );
}

export default App;
