import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
//For forced remounting-->unique key must be given
export default class App extends Component {
  pageSize=8;
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={< News  key='general' pageSize={this.pageSize} country="in" category="general"/>}></Route>
          <Route path="/Business" element={ <News key='business'  pageSize={this.pageSize} country="in" category="business"/>}></Route>
          <Route path="/Entertainment" element={<News key='entertainment'  pageSize={this.pageSize} country="in" category="entertainment"/>}></Route>
          <Route path="/General" element={ <News key='general'  pageSize={this.pageSize} country="in" category="general"/>}></Route>
          <Route path="/Health" element={ <News key='health'  pageSize={this.pageSize} country="in" category="health"/>}></Route>
          <Route path="/Science" element={ <News key='science'  pageSize={this.pageSize} country="in" category="science"/>}></Route>
          <Route path="/Sports" element={ <News key='sports'  pageSize={this.pageSize} country="in" category="sports"/>}></Route>
          <Route path="/Technology" element={ <News  key='technology}>' pageSize={this.pageSize} country="in" category="technology"/>}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}
