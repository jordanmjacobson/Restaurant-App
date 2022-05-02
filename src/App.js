
import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Redirect} from "react-router-dom";
import Homepage from './Components/Homepage'
import Menu from './Components/Menu'
import Order from './Components/Order'
import Reservations from './Components/Reservations';

export default class App extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <Router>
          <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/menu" element={<Menu/>}/>
          <Route exact path="/order" element={<Order/>}/>
          <Route exact path='/reservations' element = {<Reservations/>}/>
          </Routes>
        </Router>
      </div>
    );
  }
}
