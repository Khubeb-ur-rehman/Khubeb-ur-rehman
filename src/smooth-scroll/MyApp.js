import React, { Component } from 'react'
import Header from './Header';
import './MyApp.css'

export default class MyApp extends Component {
    render() {
        return (
            <div className="app">
      <Header/>
        <div className="section1">
          <h1>Section 1</h1>
        </div>
        <div className="section2">
          <h1>Section 2</h1>
        </div>
        <div className="section3">
          <h1>Section 3</h1>
        </div>
        <div className="section4">
          <h1>Section 4</h1>
        </div>
      </div>
        )
    }
}
