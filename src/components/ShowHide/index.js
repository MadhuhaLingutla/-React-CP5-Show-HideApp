// Write your code here

import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstname: false, lastname: false}

  firstnamedecider = () => {
    this.setState(currentState => ({firstname: !currentState.firstname}))
  }

  lastnamedecider = () => {
    this.setState(currentState => ({lastname: !currentState.lastname}))
  }

  render() {
    const {firstname, lastname} = this.state

    const hiddenfirstname = firstname ? <p className="button2">Joe</p> : null
    const hiddenlastname = lastname ? <p className="button2">Jonas</p> : null
    const ButtonClassFirstname = firstname ? 'dark-border-button' : 'button1'
    const ButtonClassLastname = lastname ? 'dark-border-button' : 'button1'

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="buttons-container">
          <div className="firstname-container">
            <button
              onClick={this.firstnamedecider}
              className={ButtonClassFirstname}
            >
              Show/Hide Firstname
            </button>
            {hiddenfirstname}
          </div>
          <div className="lastname-container">
            <button
              onClick={this.lastnamedecider}
              className={ButtonClassLastname}
            >
              Show/Hide Lastname
            </button>
            {hiddenlastname}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
