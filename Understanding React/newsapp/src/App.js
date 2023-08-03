import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
//For forced remounting-->unique key must be given
export default class App extends Component {
  pageSize=8;
  state={
    progress:0,
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='red'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
          <Route path="/" element={<News setProgress={this.setProgress}    key='general' pageSize={this.pageSize} country="in" category="general"/>}></Route>
          <Route path="/Business" element={ <News setProgress={this.setProgress}   key='business'  pageSize={this.pageSize} country="in" category="business"/>}></Route>
          <Route path="/Entertainment" element={<News setProgress={this.setProgress}   key='entertainment'  pageSize={this.pageSize} country="in" category="entertainment"/>}></Route>
          <Route path="/General" element={ <News setProgress={this.setProgress}   key='general'  pageSize={this.pageSize} country="in" category="general"/>}></Route>
          <Route path="/Health" element={ <News setProgress={this.setProgress}   key='health'  pageSize={this.pageSize} country="in" category="health"/>}></Route>
          <Route path="/Science" element={ <News setProgress={this.setProgress}   key='science'  pageSize={this.pageSize} country="in" category="science"/>}></Route>
          <Route path="/Sports" element={ <News setProgress={this.setProgress}   key='sports'  pageSize={this.pageSize} country="in" category="sports"/>}></Route>
          <Route path="/Technology" element={ <News setProgress={this.setProgress}    key='technology}>' pageSize={this.pageSize} country="in" category="technology"/>}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}
