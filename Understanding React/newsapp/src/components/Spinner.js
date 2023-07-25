import React, { Component } from 'react'
import loader from './loader.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='container d-flex my-5' style={{justifyContent:'center',alignItems:'center'}}>
        <img src={loader} className="text-center" height={this.props.height} weight={this.props.weight} alt="loading" />
      </div>
    )
  }
}

export default Spinner
