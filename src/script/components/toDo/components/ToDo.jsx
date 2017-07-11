
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import  DashBoard from './dashBoard.jsx'
import reducer  from '../reducers/index' 


const store = createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default class ToDo extends Component {
  render(){
   return (

      <Provider store={store}>
         <DashBoard />
      </Provider>
   )
 }
}
