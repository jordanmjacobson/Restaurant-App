
import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Redirect} from "react-router-dom";
import Homepage from './Components/Homepage'
import Menu from './Components/Menu'
import Order from './Components/Order'
import Reservations from './Components/Reservations';
import store from './Store/index'
import { Provider } from 'react-redux';
import reducer from './Reducers/index';

export default class App extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    console.log(typeof(reducer))
  }
  render(){
    return(
      <Provider store={store}>
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
      </Provider>
    );
  }
}
