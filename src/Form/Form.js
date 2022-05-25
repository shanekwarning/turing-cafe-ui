import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state= {
      value: ''
    }
  }

    render() {
      return (
        <form>
          <label>
           <input type="text" name="Name" placeHolder='Name' />
          </label>
          <label>
           <input type="text" name="Date" placeHolder='Date (mm/dd)' />
          </label>
          <label>
           <input type="text" name="Time" placeHolder='Time' />
          </label>
          <label>
           <input type="text" name="Guest-number" placeHolder='Number of Guests' />
          </label>
          <input type="submit" value="Make Reservation" />
        </form>
    )
    }

  }

export default Form
