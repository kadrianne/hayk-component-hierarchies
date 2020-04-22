import React, { Component } from 'react'
import data from './data'
import Header from './components/Header'
import Main from './components/Main'

import "./App.css"

export default class App extends Component {
    state = data
    render(){
        return (
             <div className="App">
               <Header />
               <Main data={this.state}/>
            </div>           
        )
    }
}
